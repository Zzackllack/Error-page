import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const GlassCard = ({ children, className = '', delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`
        relative overflow-hidden rounded-2xl border border-white/10
        bg-white/5 backdrop-blur-xl shadow-xl
        ${className}
      `}
    >
      {/* Glass highlight effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Subtle glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-error-light/20 to-error-medium/20 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000" style={{ zIndex: -1 }} />
    </motion.div>
  );
};

export default GlassCard;