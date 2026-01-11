import React, { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
  lat: number;
  lng: number;
}

interface Connection {
  start: Point3D;
  end: Point3D;
  progress: number;
  speed: number;
  color: string;
}

const GlobeAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const rotationRef = useRef({ x: 0.0003, y: 0.001 });
  const angleRef = useRef({ x: 0.3, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0, isOver: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const width = () => window.innerWidth;
    const height = () => window.innerHeight;
    const centerX = () => width() / 2;
    const centerY = () => height() / 2;
    const radius = () => Math.min(width(), height()) * 0.28;

    // City locations (lat, lng)
    const cities = [
      { lat: 40.7128, lng: -74.006, name: 'New York' },
      { lat: 51.5074, lng: -0.1278, name: 'London' },
      { lat: 35.6762, lng: 139.6503, name: 'Tokyo' },
      { lat: 22.3193, lng: 114.1694, name: 'Hong Kong' },
      { lat: -33.8688, lng: 151.2093, name: 'Sydney' },
      { lat: 48.8566, lng: 2.3522, name: 'Paris' },
      { lat: 55.7558, lng: 37.6173, name: 'Moscow' },
      { lat: 1.3521, lng: 103.8198, name: 'Singapore' },
      { lat: 19.076, lng: 72.8777, name: 'Mumbai' },
      { lat: -23.5505, lng: -46.6333, name: 'São Paulo' },
      { lat: 37.7749, lng: -122.4194, name: 'San Francisco' },
      { lat: 52.52, lng: 13.405, name: 'Berlin' },
      { lat: 25.2048, lng: 55.2708, name: 'Dubai' },
      { lat: 31.2304, lng: 121.4737, name: 'Shanghai' },
      { lat: -26.2041, lng: 28.0473, name: 'Johannesburg' },
    ];

    // Convert lat/lng to 3D coordinates
    const latLngTo3D = (lat: number, lng: number, r: number): Point3D => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      return {
        x: -r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.cos(phi),
        z: r * Math.sin(phi) * Math.sin(theta),
        lat,
        lng,
      };
    };

    // Rotate point around axes
    const rotatePoint = (point: Point3D, angleX: number, angleY: number): Point3D => {
      // Rotate around Y axis
      let x = point.x * Math.cos(angleY) - point.z * Math.sin(angleY);
      let z = point.x * Math.sin(angleY) + point.z * Math.cos(angleY);
      let y = point.y;

      // Rotate around X axis
      const y2 = y * Math.cos(angleX) - z * Math.sin(angleX);
      const z2 = y * Math.sin(angleX) + z * Math.cos(angleX);

      return { x, y: y2, z: z2, lat: point.lat, lng: point.lng };
    };

    // Create connections between random cities
    const connections: Connection[] = [];
    const colors = [
      'rgba(112, 33, 238, 0.8)',
      'rgba(139, 92, 246, 0.8)',
      'rgba(168, 85, 247, 0.8)',
      'rgba(192, 132, 252, 0.8)',
    ];

    const createConnection = () => {
      const startCity = cities[Math.floor(Math.random() * cities.length)];
      let endCity = cities[Math.floor(Math.random() * cities.length)];
      while (endCity === startCity) {
        endCity = cities[Math.floor(Math.random() * cities.length)];
      }

      connections.push({
        start: latLngTo3D(startCity.lat, startCity.lng, radius()),
        end: latLngTo3D(endCity.lat, endCity.lng, radius()),
        progress: 0,
        speed: 0.005 + Math.random() * 0.01,
        color: colors[Math.floor(Math.random() * colors.length)],
      });

      if (connections.length > 8) {
        connections.shift();
      }
    };

    // Create initial connections
    for (let i = 0; i < 5; i++) {
      createConnection();
    }

    // Add new connections periodically
    const connectionInterval = setInterval(createConnection, 2000);

    // Draw arc between two points on the globe
    const drawArc = (
      start: Point3D,
      end: Point3D,
      progress: number,
      color: string,
      angleX: number,
      angleY: number
    ) => {
      const steps = 50;
      const arcHeight = 0.4;

      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;

      const endStep = Math.floor(steps * progress);

      for (let i = 0; i <= endStep; i++) {
        const t = i / steps;

        // Interpolate between start and end
        const lat = start.lat + (end.lat - start.lat) * t;
        const lng = start.lng + (end.lng - start.lng) * t;

        // Add arc height
        const arcFactor = Math.sin(t * Math.PI);
        const r = radius() * (1 + arcHeight * arcFactor);

        const point3D = latLngTo3D(lat, lng, r);
        const rotated = rotatePoint(point3D, angleX, angleY);

        // Only draw if point is on the front of the globe
        if (rotated.z > -radius() * 0.3) {
          const x = centerX() + rotated.x;
          const y = centerY() + rotated.y;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
      }

      ctx.stroke();

      // Draw traveling dot
      if (progress < 1) {
        const t = progress;
        const lat = start.lat + (end.lat - start.lat) * t;
        const lng = start.lng + (end.lng - start.lng) * t;
        const arcFactor = Math.sin(t * Math.PI);
        const r = radius() * (1 + arcHeight * arcFactor);
        const point3D = latLngTo3D(lat, lng, r);
        const rotated = rotatePoint(point3D, angleX, angleY);

        if (rotated.z > -radius() * 0.3) {
          ctx.beginPath();
          ctx.arc(centerX() + rotated.x, centerY() + rotated.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();

          // Glow effect
          const gradient = ctx.createRadialGradient(
            centerX() + rotated.x,
            centerY() + rotated.y,
            0,
            centerX() + rotated.x,
            centerY() + rotated.y,
            12
          );
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
          gradient.addColorStop(1, 'rgba(112, 33, 238, 0)');
          ctx.beginPath();
          ctx.arc(centerX() + rotated.x, centerY() + rotated.y, 12, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }
    };

    // Draw globe grid
    const drawGlobe = (angleX: number, angleY: number) => {
      const r = radius();

      // Draw globe glow
      const glowGradient = ctx.createRadialGradient(
        centerX(),
        centerY(),
        r * 0.8,
        centerX(),
        centerY(),
        r * 1.5
      );
      glowGradient.addColorStop(0, 'rgba(112, 33, 238, 0.15)');
      glowGradient.addColorStop(0.5, 'rgba(112, 33, 238, 0.05)');
      glowGradient.addColorStop(1, 'rgba(112, 33, 238, 0)');
      ctx.beginPath();
      ctx.arc(centerX(), centerY(), r * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();

      // Draw globe outline
      ctx.beginPath();
      ctx.arc(centerX(), centerY(), r, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(112, 33, 238, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw latitude lines
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(112, 33, 238, 0.15)';
        ctx.lineWidth = 1;

        for (let lng = 0; lng <= 360; lng += 5) {
          const point = latLngTo3D(lat, lng, r);
          const rotated = rotatePoint(point, angleX, angleY);

          if (rotated.z > 0) {
            const x = centerX() + rotated.x;
            const y = centerY() + rotated.y;

            if (lng === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          } else {
            ctx.moveTo(centerX() + rotated.x, centerY() + rotated.y);
          }
        }
        ctx.stroke();
      }

      // Draw longitude lines
      for (let lng = 0; lng < 360; lng += 30) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(112, 33, 238, 0.15)';
        ctx.lineWidth = 1;

        for (let lat = -90; lat <= 90; lat += 5) {
          const point = latLngTo3D(lat, lng, r);
          const rotated = rotatePoint(point, angleX, angleY);

          if (rotated.z > 0) {
            const x = centerX() + rotated.x;
            const y = centerY() + rotated.y;

            if (lat === -90) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          } else {
            ctx.moveTo(centerX() + rotated.x, centerY() + rotated.y);
          }
        }
        ctx.stroke();
      }

      // Draw city points
      cities.forEach((city) => {
        const point = latLngTo3D(city.lat, city.lng, r);
        const rotated = rotatePoint(point, angleX, angleY);

        if (rotated.z > 0) {
          const x = centerX() + rotated.x;
          const y = centerY() + rotated.y;
          const opacity = 0.5 + (rotated.z / r) * 0.5;

          // Outer glow
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
          gradient.addColorStop(0, `rgba(139, 92, 246, ${opacity})`);
          gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Inner dot
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fill();
        }
      });
    };

    // Mouse handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseEnter = () => {
      mouseRef.current.isOver = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isOver = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width(), height());

      // Update rotation based on mouse
      if (mouseRef.current.isOver) {
        const dx = (mouseRef.current.x - centerX()) / width();
        rotationRef.current.y = 0.001 + dx * 0.003;
        const dy = (mouseRef.current.y - centerY()) / height();
        rotationRef.current.x = 0.0003 + dy * 0.001;
      } else {
        rotationRef.current.y = 0.001;
        rotationRef.current.x = 0.0003;
      }

      angleRef.current.y += rotationRef.current.y;
      angleRef.current.x += rotationRef.current.x;

      // Keep angles in bounds
      angleRef.current.x = Math.max(-0.5, Math.min(0.5, angleRef.current.x));

      drawGlobe(angleRef.current.x, angleRef.current.y);

      // Update and draw connections
      connections.forEach((conn) => {
        conn.progress += conn.speed;
        if (conn.progress > 1.2) {
          conn.progress = 1.2; // Keep completed
        }

        // Recalculate start and end points with current radius
        conn.start = latLngTo3D(conn.start.lat, conn.start.lng, radius());
        conn.end = latLngTo3D(conn.end.lat, conn.end.lng, radius());

        drawArc(
          conn.start,
          conn.end,
          Math.min(conn.progress, 1),
          conn.color,
          angleRef.current.x,
          angleRef.current.y
        );
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(connectionInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

export default GlobeAnimation;
