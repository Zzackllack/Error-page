import { motion } from 'framer-motion';
import { AlertTriangle, Ban, Lock, FileQuestion, AlertCircle, RefreshCw, WifiOff } from 'lucide-react';

interface ErrorMessageProps {
  statusCode: number;
}

const errorMessages: Record<number, { title: string; description: string; icon: any }> = {
  400: {
    title: "Bad Request",
    description: "The request was malformed or contains invalid parameters.",
    icon: AlertCircle
  },
  401: {
    title: "Unauthorized",
    description: "Authentication is required to access this resource.",
    icon: Lock
  },
  403: {
    title: "Forbidden",
    description: "You don't have permission to access this resource.",
    icon: Ban
  },
  404: {
    title: "Not Found",
    description: "The page or resource you're looking for doesn't exist.",
    icon: FileQuestion
  },
  500: {
    title: "Internal Server Error",
    description: "Something went wrong on our servers. We're working on fixing it.",
    icon: AlertTriangle
  },
  502: {
    title: "Bad Gateway",
    description: "The server received an invalid response from an upstream server.",
    icon: AlertCircle
  },
  503: {
    title: "Service Unavailable",
    description: "Our service is temporarily unavailable. Please try again later.",
    icon: RefreshCw
  },
  504: {
    title: "Gateway Timeout",
    description: "The server didn't receive a timely response from an upstream server.",
    icon: WifiOff
  }
};

const getDefaultErrorMessage = (statusCode: number) => {
  return {
    title: `Error ${statusCode}`,
    description: "An unexpected error occurred. Please try again later.",
    icon: AlertCircle
  };
};

const ErrorMessage = ({ statusCode }: ErrorMessageProps) => {
  const message = errorMessages[statusCode] || getDefaultErrorMessage(statusCode);
  const IconComponent = message.icon;

  const codeVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={codeVariants}
        className="mb-6"
      >
        <div className="flex flex-col items-center">
          <motion.div 
            animate={{ 
              rotate: statusCode === 503 ? [0, 360] : 0, 
              scale: [1, 1.1, 1] 
            }}
            transition={{ 
              rotate: { repeat: Infinity, duration: 3, ease: "linear" },
              scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
            }}
            className="text-error-light mb-4"
          >
            <IconComponent size={64} strokeWidth={1.5} />
          </motion.div>
          <h1 className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-error-light to-error-accent leading-none">
            {statusCode}
          </h1>
        </div>
      </motion.div>
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">{message.title}</h2>
        <p className="text-gray-300 text-lg max-w-lg mx-auto">{message.description}</p>
      </motion.div>
    </div>
  );
};

export default ErrorMessage;