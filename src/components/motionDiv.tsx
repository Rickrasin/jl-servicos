"use client";
import { motion } from "framer-motion";
import cn from "@/lib/utils";

interface MotionDivProps
  extends React.ComponentPropsWithoutRef<typeof motion.div> {
  children: React.ReactNode;
  className?: string;
}

export default function MotionDiv({ children, className }: MotionDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
