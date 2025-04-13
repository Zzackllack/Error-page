import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollPrompt = () => {
  return (
    <motion.div 
      className="absolute bottom-8 left-0 right-0 flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <motion.div 
        className="bg-white/5 backdrop-blur-sm rounded-full p-3 border border-white/10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown className="text-error-light" size={24} />
      </motion.div>
    </motion.div>
  );
};

export default ScrollPrompt;
