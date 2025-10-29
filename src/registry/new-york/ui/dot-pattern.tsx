
"use client"
import React, { useId } from "react"
import { motion } from "motion/react"


/* 
    Props : 
    - Every Prop is optional, defaults to a effective value 

    - Spacing : Controls the spacing between two dots : generally(12 - 20 )

    - Radius : Controls the Radius of the Dot : 
     -- keep 1 for minimal dots with 0.6 opacity 
     -- keep 4 for visible solid dots with glowanimation 
    

    - Dot opacity : Controls each dot opacity 
    - Glow : ( True/false) : To show glow animation or not 
    - showgradient : ( True/ False ) : To hide show the blackish gradient around 

*/

interface DotPatternProps {
    spacing : number,
    radius : number,
    dotOpacity : number ,
    glow:boolean,
    showGradient:boolean,
}

export const DotPattern = ({
    spacing = 12,
    radius = 1 ,
    dotOpacity = 0.8,
    glow=false,
    showGradient=true

} :  DotPatternProps) => {
  const id = useId()




  const width = 800
  const height = 600

  const dots = Array.from(
    { length: Math.ceil(width / spacing) * Math.ceil(height / spacing) },
    (_, i) => {
      const col = i % Math.ceil(width / spacing)
      const row = Math.floor(i / Math.ceil(width / spacing))
      return {
        x: col * spacing + 1,
        y: row * spacing + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      }
    }
  )

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
      <svg
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full text-neutral-400/80 ${showGradient ? "mask-[radial-gradient(300px_circle_at_center,white,transparent)]" : ""}`}
      >
        <defs>
          <radialGradient id={id + "-gradient"}>
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
            fill={showGradient && glow ? `url(#${id}-gradient)` : "currentColor"}
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


/*
    DotPattern - by Bgpattern
    inspired / Credits  : Magic ui background component 
*/