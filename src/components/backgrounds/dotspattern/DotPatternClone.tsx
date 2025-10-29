"use client"

import React, { useEffect, useId, useRef, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { useDotPatternStore } from "./dotpattern"

export function DotPatternClone() {
  const id = useId()
  const containerRef = useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // ✅ Get all values + setters from Zustand
  const { spacing, radius, dotOpacity, glow, showGradient } = useDotPatternStore()

  // Container resize tracking
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Generate dot positions
  const dots = Array.from(
    {
      length:
        Math.ceil(dimensions.width / spacing) *
        Math.ceil(dimensions.height / spacing),
    },
    (_, i) => {
      const col = i % Math.ceil(dimensions.width / spacing)
      const row = Math.floor(i / Math.ceil(dimensions.width / spacing))
      return {
        x: col * spacing + 1,
        y: row * spacing + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      }
    }
  )

  return (
    <div className="bg-background relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <svg
        ref={containerRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full text-neutral-400/80",
           `${showGradient && "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"}`
        )}
      >
        
          <defs>
            <radialGradient id={`${id}-gradient`}>
              <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
          </defs>
     

        {dots.map((dot) => (
          <motion.circle
            key={`${dot.x}-${dot.y}`}
            cx={dot.x}
            cy={dot.y}
            r={radius}
            fill={
              showGradient && glow ? `url(#${id}-gradient)` : "currentColor"
            }
            initial={glow ? { opacity: dotOpacity, scale: 1 } : { opacity: dotOpacity }}
            animate={
              glow
                ? {
                    opacity: [dotOpacity * 0.6, dotOpacity, dotOpacity * 0.6],
                    scale: [1, 1.5, 1],
                  }
                : {}
            }
            transition={
              glow
                ? {
                    duration: dot.duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: dot.delay,
                    ease: "easeInOut",
                  }
                : {}
            }
          />
        ))}
      </svg>
    </div>
  )
}
