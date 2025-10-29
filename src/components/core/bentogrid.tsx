import React from 'react'
import RawSVGPreview from './rawSvgPrevier'
import { LinearPatterns } from '@/patterns/linear'
import { FullBackgrounds, rawSvgList } from '@/patterns/fullbackground'
import SVGPreview from '@/app/editor/components/Preview'
import LinearSvgThumbNail from './previewer/linearPreviewer'


const Squarebox = () => {
    return (
        <div className='bg-secondary shadow-[inset_1px_1px_400px_1px_#f1f1f1] border border-primary/10 dark:shadow-[inset_1px_1px_100px_1px_#171717] row-span-4 col-span-2 rounded-2xl p-2 pb-0'>
        <div className='w-full h-[80%] bg-background rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
            <LinearSvgThumbNail keyData={1} />
        </div>
        <div className='h-[20%] py-1 flex px-1 text-muted-foreground items-center '>
                Patterns
        </div>
    </div>
    )
}
const VerticalRect = () => {
    return (
        <div className='bg-secondary shadow-[inset_1px_1px_400px_1px_#f1f1f1] border border-primary/10 dark:shadow-[inset_1px_1px_100px_1px_#171717]  row-span-4 col-span-4  rounded-2xl p-2'>
             <div className='w-full h-[80%] bg-background rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                <RawSVGPreview svg={rawSvgList[0].svg}/>
             </div>
        </div>
    )
}
const HorizontalRect = () => {
    return (
        <div className='bg-secondary shadow-[inset_1px_1px_400px_1px_#f1f1f1] border border-primary/10 dark:shadow-[inset_1px_1px_100px_1px_#171717]  row-span-8 col-span-2 p-2 rounded-2xl'>
             <div className='w-full  h-[90%] bg-background rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'></div>
        </div>
    )
}

const BentoGrid = () => {
  return (
    <div className='pt-44 h-screen w-full flex items-center'>
       <div className='h-screen w-full grid grid-cols-8 grid-rows-12 gap-4 max-w-5xl mx-auto'>
            <Squarebox/>
            <VerticalRect/>
            <HorizontalRect/>
            <VerticalRect/>
            <Squarebox/>
           
           
       </div>
    </div>
  )
}

export default BentoGrid
