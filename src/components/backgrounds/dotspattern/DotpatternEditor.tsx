"use client"

import React from "react"
import GradientPicker from "@/components/editor-tools/RadialGradient"
import { useDotPatternStore } from "./dotpattern"
import NumInput from "@/components/input/NumInput"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Droplet } from "lucide-react"

const DotpatternEditor = () => {
  const { 
    spacing,
    radius,
   
    dotOpacity,
    glow,
    showGradient,
    setShowGradient,
    setGlow,
    setDotOpacity,
    setSpacing,
    setRadius,

  } = useDotPatternStore()

  return (
    <div className="space-y-4">
 
      <div className="flex flex-col gap-2">
      <span className="text-sm text-muted-foreground">Spacing</span>
      <NumInput value={spacing} setValue={setSpacing} />
      </div>
      <div className="flex flex-col gap-2">
      <span className="text-sm text-muted-foreground">Radius</span>
      <NumInput value={radius} setValue={setRadius} />
      </div>
      <div className="flex flex-col gap-2">
      <span className="text-sm text-muted-foreground">Dots Opacity</span>
      <Slider
            className="w-full"
            Icon={Droplet}
         
            valueSubtext={dotOpacity}
            value={[dotOpacity]}
            onValueChange={(val) => setDotOpacity(val[0])}
            max={1}
            step={0.01}
          />
      </div>
      <div className="flex items-center justify-between py-2">
      <span className="text-sm text-muted-foreground">Glow Animation</span>
     <Switch checked={glow} onCheckedChange={()=>setGlow(!glow)}/>
      </div>
      <div className="flex items-center justify-between py-2">
      <span className="text-sm text-muted-foreground">Show Gradient?</span>
     <Switch checked={showGradient} onCheckedChange={()=>setShowGradient(!showGradient)}/>
      </div>
    </div>
  )
}

export default DotpatternEditor
