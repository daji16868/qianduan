// src/utils/animations.js
import { AnimatePresence, motion } from 'framer-motion';

// Page transition variants
export const pageVariants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

// Fade in variants
export const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Stagger children variants
export const staggerContainerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Scale up variants
export const scaleUpVariants = {
  initial: {
    scale: 0.95,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

// Hover animation for cards
export const cardHoverVariants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};

// Slide in from right variants
export const slideInRightVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: 'easeIn',
    },
  },
};

// Custom ease transitions
export const transitions = {
  ease: [0.6, 0.01, -0.05, 0.95],
  easeIn: [0.6, 0.01, 1, 0.95],
  easeOut: [0.01, 0.6, 0.95, 1],
};