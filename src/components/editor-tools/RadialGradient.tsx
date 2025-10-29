"use client"

import { useRef } from "react"
import ColorPicker from "react-best-gradient-color-picker"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "../ui/drawer"

interface GradientPickerProps {
  color: string
  setColor: (value: string) => void
}

const GradientPicker = ({ color, setColor }: GradientPickerProps) => {
  const colorRef = useRef(color)

  const handleChange = (newColor: string) => {
    if (newColor !== colorRef.current) {
      colorRef.current = newColor
      setColor(newColor)
    }
  }

  return (
    <div>
      {/* Desktop / large screen */}
      <Popover>
        <PopoverTrigger className="hidden md:flex h-8 cursor-pointer rounded-lg bg-secondary border border-foreground/30 py-1.5 px-2 w-full gap-4 items-center justify-start">
          <span
            className="h-6 aspect-square rounded-lg overflow-hidden border border-border"
            style={{ background: color }}
          />
          Gradient
        </PopoverTrigger>
        <PopoverContent>
          <ColorPicker value={color} onChange={handleChange} className="" />
        </PopoverContent>
      </Popover>

      {/* Mobile / small screen */}
      <Drawer>
        <DrawerTrigger className="md:hidden h-8 rounded-lg bg-secondary border border-foreground/30 py-1.5 px-2 w-full flex gap-4 items-center justify-start">
          Gradient
          <span
            className="h-6 aspect-square rounded-lg overflow-hidden border border-border"
            style={{ background: color }}
          />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerTitle />
          <div className="overflow-hidden h-[70%] w-full flex items-center justify-center">
            <ColorPicker value={color} onChange={handleChange} className="scale-75" />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default GradientPicker
