"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

// Animación de fade-in desde abajo
export const FadeInUp = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animación de fade-in desde la izquierda
export const FadeInLeft = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animación de fade-in desde la derecha
export const FadeInRight = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animación de zoom-in
export const ZoomIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animación de stagger para listas
export const StaggerContainer = ({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = "",
  once = true,
}: {
  children: ReactNode
  delay?: number
  staggerDelay?: number
  className?: string
  once?: boolean
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Elemento hijo para usar con StaggerContainer
export const StaggerItem = ({
  children,
  duration = 0.5,
  className = "",
}: {
  children: ReactNode
  duration?: number
  className?: string
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: "easeOut" },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animación para botones y elementos interactivos
export const PulseButton = ({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={className}>
      {children}
    </motion.div>
  )
}

