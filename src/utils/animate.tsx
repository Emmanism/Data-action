"use client";

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

const _animate = {
  opacity: 1,
  y: 0,
};
const _initial = {
  opacity: 0,
  y: 30,
};

interface AnimateProps extends MotionProps {
  animate?: Record<string, any>;
  exit?: Record<string, any>;
  initial?: Record<string, any>;
  transition?: Record<string, any>;
  once?: boolean;
  children: ReactNode;
}

export default function Animate({
  animate,
  exit,
  initial,
  transition,
  once,
  children,
  ...props
}: AnimateProps) {
  return (
    <motion.div
      {...props}
      whileInView={_animate}
      initial={initial ?? _initial}
      exit={exit ?? _initial}
      transition={transition ?? { duration: 1.0 }}
    >
      {children}
    </motion.div>
  );
}