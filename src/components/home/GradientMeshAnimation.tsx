import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

const GradientMeshAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const gradientOffsetRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 25000); // Sparse particles
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.3 + 0.1,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01
        });
      }
    };

    const drawGradientMesh = () => {
      const time = gradientOffsetRef.current;
      
      // Create subtle, slow-moving gradient blobs
      const gradient1 = ctx.createRadialGradient(
        canvas.width * (0.3 + Math.sin(time * 0.0003) * 0.1),
        canvas.height * (0.4 + Math.cos(time * 0.0004) * 0.1),
        0,
        canvas.width * 0.3,
        canvas.height * 0.4,
        canvas.width * 0.5
      );
      gradient1.addColorStop(0, 'hsla(270, 70%, 40%, 0.15)');
      gradient1.addColorStop(0.5, 'hsla(280, 60%, 30%, 0.08)');
      gradient1.addColorStop(1, 'transparent');

      const gradient2 = ctx.createRadialGradient(
        canvas.width * (0.7 + Math.cos(time * 0.0002) * 0.1),
        canvas.height * (0.6 + Math.sin(time * 0.0003) * 0.1),
        0,
        canvas.width * 0.7,
        canvas.height * 0.6,
        canvas.width * 0.4
      );
      gradient2.addColorStop(0, 'hsla(260, 65%, 35%, 0.12)');
      gradient2.addColorStop(0.5, 'hsla(250, 50%, 25%, 0.06)');
      gradient2.addColorStop(1, 'transparent');

      const gradient3 = ctx.createRadialGradient(
        canvas.width * (0.5 + Math.sin(time * 0.00025) * 0.15),
        canvas.height * (0.3 + Math.cos(time * 0.00035) * 0.1),
        0,
        canvas.width * 0.5,
        canvas.height * 0.3,
        canvas.width * 0.35
      );
      gradient3.addColorStop(0, 'hsla(275, 55%, 45%, 0.1)');
      gradient3.addColorStop(0.6, 'hsla(265, 45%, 30%, 0.05)');
      gradient3.addColorStop(1, 'transparent');

      // Draw gradients
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawParticles = () => {
      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.pulse += particle.pulseSpeed;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Calculate pulsing opacity
        const pulseOpacity = particle.opacity * (0.7 + Math.sin(particle.pulse) * 0.3);

        // Draw particle with soft glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, `hsla(270, 60%, 70%, ${pulseOpacity})`);
        gradient.addColorStop(0.5, `hsla(265, 50%, 60%, ${pulseOpacity * 0.5})`);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
    };

    const animate = () => {
      // Clear with dark background
      ctx.fillStyle = 'hsl(240, 10%, 4%)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      gradientOffsetRef.current += 16;

      drawGradientMesh();
      drawParticles();

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
};

export default GradientMeshAnimation;
