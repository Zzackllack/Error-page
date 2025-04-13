import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create background animation with canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    containerRef.current.appendChild(canvas);
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.opacity = '0.4';
    canvas.style.zIndex = '-1';
    
    let width = containerRef.current.offsetWidth;
    let height = containerRef.current.offsetHeight;
    
    const setCanvasSize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.offsetWidth;
      height = containerRef.current.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    
    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();
    
    // Particles settings
    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; hue: number; }[] = [];
    const maxParticles = 50;
    
    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        hue: Math.random() * 30 + 0, // Red hues (0-30)
      });
    }
    
    const drawParticles = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((particle, i) => {
        const { x, y, size, hue } = particle;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 90%, 60%, 0.8)`;
        ctx.fill();
        
        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i === j) return;
          const dx = x - otherParticle.x;
          const dy = y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `hsla(${hue}, 90%, 60%, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > height) particle.speedY *= -1;
      });
      
      requestAnimationFrame(drawParticles);
    };
    
    drawParticles();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (containerRef.current?.contains(canvas)) {
        containerRef.current.removeChild(canvas);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-gray-950 to-error-dark"
    >
      {/* Animated gradient circle */}
      <motion.div
        className="absolute top-1/3 -left-64 w-[30rem] h-[30rem] rounded-full opacity-30 bg-gradient-to-tr from-error-medium/50 to-error-accent/50 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Second animated gradient circle */}
      <motion.div
        className="absolute bottom-0 right-0 w-[25rem] h-[25rem] rounded-full opacity-30 bg-gradient-to-tr from-error-light/50 to-red-700/50 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;