import React, { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulsePhase: number;
}

const NeuralNetworkAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const animationRef = useRef<number>();
  const dimensionsRef = useRef({ width: 0, height: 0 });

  const initParticles = useCallback((width: number, height: number) => {
    const particleCount = Math.floor((width * height) / 15000); // Density based on screen size
    const particles: Particle[] = [];
    
    for (let i = 0; i < Math.min(particleCount, 80); i++) {
      const baseRadius = Math.random() * 2 + 1.5;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: baseRadius,
        baseRadius,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }
    
    particlesRef.current = particles;
  }, []);

  const drawNetwork = useCallback((ctx: CanvasRenderingContext2D, time: number) => {
    const { width, height } = dimensionsRef.current;
    const particles = particlesRef.current;
    const mouse = mouseRef.current;
    
    ctx.clearRect(0, 0, width, height);
    
    const connectionDistance = Math.min(width, height) * 0.15;
    const mouseInfluenceRadius = 150;
    
    // Update and draw connections
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      
      // Update position
      p1.x += p1.vx;
      p1.y += p1.vy;
      
      // Bounce off edges with padding
      if (p1.x < 0 || p1.x > width) p1.vx *= -1;
      if (p1.y < 0 || p1.y > height) p1.vy *= -1;
      
      // Keep in bounds
      p1.x = Math.max(0, Math.min(width, p1.x));
      p1.y = Math.max(0, Math.min(height, p1.y));
      
      // Mouse interaction - attract particles slightly
      if (mouse.active) {
        const dx = mouse.x - p1.x;
        const dy = mouse.y - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < mouseInfluenceRadius && dist > 0) {
          const force = (mouseInfluenceRadius - dist) / mouseInfluenceRadius * 0.02;
          p1.vx += (dx / dist) * force;
          p1.vy += (dy / dist) * force;
        }
      }
      
      // Limit velocity
      const maxVel = 0.8;
      const vel = Math.sqrt(p1.vx * p1.vx + p1.vy * p1.vy);
      if (vel > maxVel) {
        p1.vx = (p1.vx / vel) * maxVel;
        p1.vy = (p1.vy / vel) * maxVel;
      }
      
      // Pulse effect
      p1.pulsePhase += 0.02;
      p1.radius = p1.baseRadius + Math.sin(p1.pulsePhase) * 0.5;
      
      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < connectionDistance) {
          const opacity = (1 - dist / connectionDistance) * 0.4;
          
          // Create gradient for connection line
          const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
          gradient.addColorStop(0, `hsla(270, 86%, 50%, ${opacity})`);
          gradient.addColorStop(0.5, `hsla(270, 86%, 60%, ${opacity * 1.2})`);
          gradient.addColorStop(1, `hsla(270, 86%, 50%, ${opacity})`);
          
          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
      
      // Mouse connections
      if (mouse.active) {
        const dx = mouse.x - p1.x;
        const dy = mouse.y - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < mouseInfluenceRadius) {
          const opacity = (1 - dist / mouseInfluenceRadius) * 0.6;
          ctx.beginPath();
          ctx.strokeStyle = `hsla(270, 86%, 65%, ${opacity})`;
          ctx.lineWidth = 1.5;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }
    
    // Draw particles (nodes)
    for (const p of particles) {
      // Outer glow
      const glowGradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
      glowGradient.addColorStop(0, 'hsla(270, 86%, 50%, 0.3)');
      glowGradient.addColorStop(1, 'hsla(270, 86%, 50%, 0)');
      
      ctx.beginPath();
      ctx.fillStyle = glowGradient;
      ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
      ctx.fill();
      
      // Core node
      const coreGradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
      coreGradient.addColorStop(0, 'hsla(270, 86%, 80%, 1)');
      coreGradient.addColorStop(0.5, 'hsla(270, 86%, 60%, 0.9)');
      coreGradient.addColorStop(1, 'hsla(270, 86%, 50%, 0.7)');
      
      ctx.beginPath();
      ctx.fillStyle = coreGradient;
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Draw mouse cursor node if active
    if (mouse.active) {
      const cursorGradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 20);
      cursorGradient.addColorStop(0, 'hsla(270, 86%, 70%, 0.4)');
      cursorGradient.addColorStop(1, 'hsla(270, 86%, 50%, 0)');
      
      ctx.beginPath();
      ctx.fillStyle = cursorGradient;
      ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2);
      ctx.fill();
    }
  }, []);

  const animate = useCallback((time: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (ctx) {
      drawNetwork(ctx, time);
    }
    
    animationRef.current = requestAnimationFrame(animate);
  }, [drawNetwork]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const handleResize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
        dimensionsRef.current = { width: rect.width, height: rect.height };
        initParticles(rect.width, rect.height);
      }
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };
    
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  );
};

export default NeuralNetworkAnimation;
