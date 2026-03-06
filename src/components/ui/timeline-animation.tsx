"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/src/lib/utils";

interface TimelineContentProps {
  children?: React.ReactNode;
  className?: string;
  animationNum?: number;
  customVariants?: Variants;
  timelineRef?: React.RefObject<HTMLElement | null>;
  as?: React.ElementType;
  style?: React.CSSProperties;
  href?: string;
}

export function TimelineContent({
  children,
  className,
  animationNum = 0,
  customVariants,
  timelineRef,
  as: Component = "div",
  style,
  href,
}: TimelineContentProps) {
  const localRef = useRef(null);
  const isInView = useInView(timelineRef || localRef, { once: true, margin: "-100px" });

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: animationNum * 0.1,
      },
    },
  };

  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      ref={localRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariants || defaultVariants}
      custom={animationNum}
      className={cn(className)}
      style={style}
      {...(href ? { href } : {})}
    >
      {children}
    </MotionComponent>
  );
}
