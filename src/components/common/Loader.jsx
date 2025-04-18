// src/components/common/Loader.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ size = 'medium', color = 'blue' }) => {
  const sizeClasses = {
    small: 'w-5 h-5',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };

  const colorClasses = {
    blue: 'border-blue-600',
    gray: 'border-gray-600',
    white: 'border-white',
  };

  const spinTransition = {
    repeat: Infinity,
    duration: 1,
    ease: "linear"
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} border-4 border-t-transparent rounded-full ${colorClasses[color]}`}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
      <motion.div
        className="absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="sr-only">加载中...</span>
      </motion.div>
    </div>
  );
};

// Full page loader with overlay
export const FullPageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50"
    >
      <div className="text-center">
        <Loader size="large" color="blue" />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 font-medium"
        >
          加载中...
        </motion.p>
      </div>
    </motion.div>
  );
};

// Inline loader for components
export const InlineLoader = ({ text = '加载中' }) => {
  return (
    <div className="flex items-center space-x-2">
      <Loader size="small" color="gray" />
      <span className="text-sm text-gray-600">{text}</span>
    </div>
  );
};

export default Loader;