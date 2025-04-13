import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface QuestionCardProps {
  question: string;
  answer: string;
  href: string;
  errorCode: number;
  delay?: number;
  onClick?: () => void;
}

const QuestionCard = ({ 
  question, 
  answer, 
  href, 
  errorCode, 
  delay = 0,
  onClick
}: QuestionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="block w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-error-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium text-white group-hover:text-error-light transition-colors">
            {question}
          </h3>
          <motion.div 
            animate={{ x: isHovered ? 5 : 0 }} 
            className="text-gray-400 group-hover:text-error-light transition-colors"
          >
            <ChevronRight />
          </motion.div>
        </div>
        
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm text-gray-400">{answer}</p>
          <span className="px-2 py-1 bg-error-dark/50 rounded-md text-xs font-medium text-error-light">
            Error {errorCode}
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export default QuestionCard;
