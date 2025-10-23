import { FilePen, LockOpen } from 'lucide-react'
import React from 'react'

interface ThumbnailPreviewerCardProps {
  id: string;
  width: number;
  height: number;
  patternUnits: "userSpaceOnUse" | "objectBoundingBox";
  fill: string;
  fillOpacity: number;
  background: string;
  path: string;
  title: string;
}

const ThumbnailPreviewerCard = ({ 
  id, 
  width, 
  height, 
  patternUnits, 
  fill, 
  fillOpacity, 
  background, 
  path, 
  title 
}: ThumbnailPreviewerCardProps) => {
  return (
    <div className='w-full relative cursor-pointer h-40 rounded-xl bg-sidebar border border-border flex flex-col overflow-hidden'>
        <svg
          className="w-full h-full"
          style={{ backgroundColor: background }}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id={id}
              width={width}
              height={height}
              patternUnits={patternUnits}
            >
              <g fill={fill} fillOpacity={fillOpacity} fillRule="evenodd">
                <path d={path}/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id})`} />
        </svg>
        <div className='h-8 absolute bottom-1 left-1 right-1 rounded-lg bg-secondary border border-border flex items-center justify-between px-2 text-sm'>
          <span>{title}</span>
          <span className=''><FilePen className='size-4'/></span>
        </div>
    </div>
  )
}

export default ThumbnailPreviewerCard
