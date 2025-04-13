import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

const AnimatedButton = ({ 
  children, 
  href, 
  onClick,
  className = '',
  icon,
  variant = 'primary'
}: AnimatedButtonProps) => {
  const getButtonClasses = () => {
    const baseClasses = "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium rounded-lg group transition-all duration-300";
    
    switch(variant) {
      case 'primary':
        return `${baseClasses} bg-gradient-to-br from-error-light to-error-medium text-white shadow-lg hover:shadow-error-light/20`;
      case 'secondary':
        return `${baseClasses} bg-gradient-to-br from-gray-700/90 to-gray-800/90 text-white shadow-lg hover:shadow-gray-700/20`;
      case 'outline':
        return `${baseClasses} border border-error-light/50 text-error-light bg-transparent hover:bg-error-light/10`;
      default:
        return `${baseClasses} bg-gradient-to-br from-error-light/90 to-error-medium/90 text-white shadow-lg hover:shadow-error-light/20`;
    }
  };

  const innerContent = (
    <>
      <span className="absolute right-0 w-8 h-32 -mt-12 rotate-12 translate-x-12 bg-white opacity-10"></span>
      <span className="relative flex items-center">
        {children}
        {icon && <span className="ml-2">{icon}</span>}
        {!icon && variant === 'primary' && (
          <motion.span 
            className="ml-2" 
            initial={{ x: 0 }}
            animate={{ x: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, repeatType: "loop" }}
          >
            <ArrowRight size={16} />
          </motion.span>
        )}
      </span>
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 10 }
  };

  if (href) {
    return (
      <motion.a 
        href={href} 
        className={`${getButtonClasses()} ${className}`}
        {...motionProps}
      >
        {innerContent}
      </motion.a>
    );
  }

  return (
    <motion.button 
      onClick={onClick} 
      className={`${getButtonClasses()} ${className}`}
      {...motionProps}
    >
      {innerContent}
    </motion.button>
  );
};

export default AnimatedButton;