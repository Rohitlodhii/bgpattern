import React, { useState } from 'react'
import { usePatternStore } from '@/lib/zustandState'
import ColorPicker from '@/components/input/colorpicker'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'

const RightSidebar = () => {
  const {
    key,
    id,
    title,
    width,
    height,
    patternUnits,
    fill,
    fillOpacity,
    background,
    bgOpacity,
    path,
    setWidth,
    setHeight,
    setPatternUnits,
    setFill,
    setFillOpacity,
    setBackground,
    setBgOpacity,
    setPath
  } = usePatternStore()


  const [isPathDisable , setPathDisable] = useState(true);

  console.log(isPathDisable)

  return (
    <div className="w-full md:w-80 h-[40%] md:h-full bg-sidebar rounded-lg p-4 overflow-y-auto scrollbar-hidden">
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-foreground">Pattern Settings</h3>

       

        {/* Dimensions */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-foreground">Dimensions</h4>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-muted-foreground">Width</label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-muted-foreground">Height</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

         

        {/* Colors */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-foreground">Colors</h4>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-muted-foreground">Fill Color</label>
            <ColorPicker color={fill} setColor={setFill} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-muted-foreground">Background Color</label>
            <ColorPicker color={background} setColor={setBackground} />
          </div>


          <div className="space-y-4">
          <h4 className="text-md font-medium text-foreground">Opacity</h4>

          <div className="flex flex-col gap-2">
           
            <Slider
              label="Opacity"
              value={[fillOpacity]}
              min={0}
              max={1}
              step={0.01}
              onValueChange={(value) => setFillOpacity(value[0])}
              valueSubtext={fillOpacity.toFixed(2)}
            />
          </div>
          <div className="flex flex-col gap-2">
           
            <Slider
              label="Bg Opacity"
              value={[bgOpacity]}
              min={0}
              max={1}
              step={0.01}
              onValueChange={(value) => setBgOpacity(value[0])}
              valueSubtext={bgOpacity.toFixed(2)}
            />
          </div>
        </div>
        </div>

        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-muted-foreground">Pattern Units</label>
            <select
              value={patternUnits}
              onChange={(e) => setPatternUnits(e.target.value as "userSpaceOnUse" | "objectBoundingBox")}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="userSpaceOnUse">User Space On Use</option>
              <option value="objectBoundingBox">Object Bounding Box</option>
            </select>
          </div>
        </div>

        {/* Path */}
        <div className="space-y-4">

          <div className='w-full flex items-center justify-between'>
          <h4 className="text-md font-medium text-foreground">Path</h4>
          <div className='flex gap-1 items-center'>
          <Switch
    id="path"
    checked={!isPathDisable}
    onCheckedChange={(checked) => setPathDisable(!checked)}
  />
          <label htmlFor='path' className='text-sm text-muted-foreground'>Edit Path</label>
          </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-muted-foreground">SVG Path</label>
            <textarea
              disabled={isPathDisable}
              value={path}
              onChange={(e) => setPath(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground 
             focus:outline-none focus:ring-2 focus:ring-ring resize-none
             disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-muted"
              rows={3}
              placeholder="Enter SVG path data..."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
