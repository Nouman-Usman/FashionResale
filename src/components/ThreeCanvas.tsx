import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    let width = containerRef.current.clientWidth || 800;
    let height = containerRef.current.clientHeight || 600;

    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);
    camera.position.z = 12;

    // Create renderer with alpha support for blending in backgrounds
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      containerRef.current.appendChild(renderer.domElement);
    } catch (e) {
      console.error("WebGL failed to load", e);
      setErrorStatus("WebGL not supported in this frame context. Displaying interactive design grid.");
      return;
    }

    // Create geometry - Infinite Circular Particle Path symbolizing Sustainable Circular Fashion Loop
    const particlesCount = 2800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    // Color palettes: Amber/Gold, Emerald/Teal to match sustainable luxury feel
    const colorGold = new THREE.Color('#d97706'); // amber-600
    const colorTeal = new THREE.Color('#0f766e'); // teal-700
    const colorEmerald = new THREE.Color('#10b981'); // emerald-500
    const colorHighlight = new THREE.Color('#f59e0b'); // amber-500

    for (let i = 0; i < particlesCount; i++) {
      // Create a double helix / intertwined torus knot representing clothes lifecycles
      const t = (i / particlesCount) * Math.PI * 2 * 12; // 12 loops
      const rOuter = 4.5 + Math.sin(t * 0.1) * 0.8;
      
      // Calculate coordinates
      const x = Math.cos(t) * rOuter;
      const y = Math.sin(t) * rOuter + Math.sin(t * 3) * 0.5;
      const z = Math.cos(t * 3) * 1.8 + (Math.random() - 0.5) * 0.3;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color interpolation representing the continuous fashion lifecycle flow
      const mixRatio = Math.sin(t * 0.5) * 0.5 + 0.5;
      let mixedColor = new THREE.Color();
      if (i % 3 === 0) {
        mixedColor.copy(colorGold).lerp(colorTeal, mixRatio);
      } else if (i % 3 === 1) {
        mixedColor.copy(colorTeal).lerp(colorEmerald, mixRatio);
      } else {
        mixedColor.copy(colorEmerald).lerp(colorHighlight, Math.random());
      }

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Canvas Textured Glow Particle
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(245, 158, 11, 0.8)');
        gradient.addColorStop(0.6, 'rgba(15, 118, 110, 0.2)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const material = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      map: createParticleTexture(),
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Add secondary subtle starfield
    const starsCount = 600;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 35;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 35;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
      depthWrite: false
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xd97706, 2, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0f766e, 2, 50);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Mouse interactive coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      // Normalized device coordinates (-1 to 1)
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      targetX = (x / rect.width) * 2 - 1;
      targetY = -(y / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll reactive rotation speed
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Base rotation
      particleSystem.rotation.y = elapsedTime * 0.12;
      particleSystem.rotation.x = elapsedTime * 0.05;

      // Mouse interactive tilting
      particleSystem.rotation.y += mouseX * 0.6;
      particleSystem.rotation.x -= mouseY * 0.6;

      // Scroll speed up
      const scrollFactor = scrollY * 0.0008;
      particleSystem.rotation.z = elapsedTime * 0.02 + scrollFactor;
      
      // Twinkle pulse effect
      material.size = 0.12 + Math.sin(elapsedTime * 2.5) * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(containerRef.current);

    // Unmount cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (renderer) {
        renderer.dispose();
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[450px] lg:min-h-[550px] overflow-hidden flex items-center justify-center">
      {errorStatus ? (
        <div id="three-webgl-error" className="absolute p-6 text-center max-w-md bg-stone-900/60 border border-stone-800 rounded-2xl backdrop-blur-md">
          <p className="text-amber-500 font-mono text-sm leading-relaxed">{errorStatus}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-stone-950/80 rounded-full border border-stone-800 text-xs text-stone-400">Adaptive CSS Canvas Active</span>
            <span className="px-3 py-1 bg-stone-950/80 rounded-full border border-stone-800 text-xs text-teal-400">Interactive Design Loop</span>
          </div>
        </div>
      ) : null}

      {/* Actual 3D Canvas Dom anchor */}
      <div 
        ref={containerRef} 
        id="3d-canvas-container" 
        className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsInteractive(true)}
        onMouseLeave={() => setIsInteractive(false)}
      />

      {/* Floating Ambient Info Node on high 3D density */}
      <div className="absolute bottom-6 right-6 pointer-events-none flex flex-col items-end gap-1.5 font-mono text-right">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="text-[10px] text-stone-400 font-medium tracking-widest uppercase">3D Lifecycle Simulator</span>
        </div>
        <p className="text-[9px] text-stone-500 max-w-[200px] leading-normal uppercase">
          {isInteractive ? 'Pointer interaction locked / Speed multiplier active' : 'Move cursor across helix to apply torque'}
        </p>
      </div>

      {/* Visual background accents underneath 3D render */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-stone-950/40 to-stone-950 pointer-events-none" />
    </div>
  );
}
