import React from 'react'
import { usePatternStore } from '@/lib/zustandState'
import ColorPicker from '@/components/input/colorpicker'

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
    path,
    setWidth,
    setHeight,
    setPatternUnits,
    setFill,
    setFillOpacity,
    setBackground,
    setPath
  } = usePatternStore()

  return (
    <div className="w-full md:w-80 h-[40%] md:h-full bg-secondary rounded-lg p-4 overflow-y-auto">
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-foreground">Pattern Settings</h3>
        
        {/* Pattern Info */}
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-muted-foreground">Pattern ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => {/* No setter for id in store */}}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              disabled
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-muted-foreground">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => {/* No setter for title in store */}}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              disabled
            />
          </div>
        </div>

        {/* Dimensions */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-foreground">Dimensions</h4>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-muted-foreground">Width</label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-muted-foreground">Height</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
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
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-muted-foreground">Fill Opacity</label>
            <input
              type="number"
              min="0"
              max="1"
              step="0.1"
              value={fillOpacity}
              onChange={(e) => setFillOpacity(Number(e.target.value))}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {/* Path */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-foreground">Path</h4>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-muted-foreground">SVG Path</label>
            <textarea
              value={path}
              onChange={(e) => setPath(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
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
