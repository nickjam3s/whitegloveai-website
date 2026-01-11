import React, { useEffect, useRef } from 'react';

const AuroraGradientAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Aurora wave parameters
    const waves = [
      { amplitude: 80, frequency: 0.002, speed: 0.0008, yOffset: 0.3, color: { h: 271, s: 91, l: 65 } }, // Purple
      { amplitude: 100, frequency: 0.0015, speed: 0.0006, yOffset: 0.4, color: { h: 280, s: 85, l: 55 } }, // Violet
      { amplitude: 60, frequency: 0.003, speed: 0.001, yOffset: 0.5, color: { h: 260, s: 80, l: 60 } }, // Indigo
      { amplitude: 90, frequency: 0.0018, speed: 0.0007, yOffset: 0.35, color: { h: 300, s: 70, l: 50 } }, // Magenta
      { amplitude: 70, frequency: 0.0025, speed: 0.0009, yOffset: 0.45, color: { h: 250, s: 75, l: 55 } }, // Blue-violet
    ];

    const drawAurora = () => {
      ctx.fillStyle = 'rgba(10, 10, 20, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      waves.forEach((wave, waveIndex) => {
        ctx.beginPath();
        
        const baseY = canvas.height * wave.yOffset;
        
        // Create wave path
        for (let x = 0; x <= canvas.width; x += 2) {
          const y = baseY + 
            Math.sin(x * wave.frequency + time * wave.speed * 1000) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 500 + waveIndex) * (wave.amplitude * 0.5) +
            Math.cos(x * wave.frequency * 0.3 + time * wave.speed * 300) * (wave.amplitude * 0.3);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Complete the path to fill
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        // Create gradient for each wave
        const gradient = ctx.createLinearGradient(0, baseY - wave.amplitude * 2, 0, canvas.height);
        const alpha = 0.15 + Math.sin(time * 0.001 + waveIndex) * 0.05;
        gradient.addColorStop(0, `hsla(${wave.color.h}, ${wave.color.s}%, ${wave.color.l}%, 0)`);
        gradient.addColorStop(0.3, `hsla(${wave.color.h}, ${wave.color.s}%, ${wave.color.l}%, ${alpha})`);
        gradient.addColorStop(0.6, `hsla(${wave.color.h}, ${wave.color.s}%, ${wave.color.l}%, ${alpha * 0.7})`);
        gradient.addColorStop(1, `hsla(${wave.color.h}, ${wave.color.s}%, ${wave.color.l}%, 0)`);

        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Add subtle glow spots
      const glowSpots = 5;
      for (let i = 0; i < glowSpots; i++) {
        const x = (canvas.width / glowSpots) * i + Math.sin(time * 0.0003 + i) * 100;
        const y = canvas.height * 0.4 + Math.cos(time * 0.0004 + i * 2) * 80;
        const radius = 150 + Math.sin(time * 0.0005 + i * 3) * 50;
        
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        const hue = 271 + Math.sin(time * 0.0002 + i) * 30;
        glowGradient.addColorStop(0, `hsla(${hue}, 80%, 60%, 0.1)`);
        glowGradient.addColorStop(0.5, `hsla(${hue}, 80%, 50%, 0.05)`);
        glowGradient.addColorStop(1, `hsla(${hue}, 80%, 40%, 0)`);
        
        ctx.fillStyle = glowGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      time += 16;
      animationFrameId = requestAnimationFrame(drawAurora);
    };

    // Initial clear
    ctx.fillStyle = 'rgba(10, 10, 20, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawAurora();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        zIndex: 0,
        background: 'linear-gradient(to bottom, hsl(240, 30%, 8%), hsl(260, 25%, 5%))'
      }}
    />
  );
};

export default AuroraGradientAnimation;
