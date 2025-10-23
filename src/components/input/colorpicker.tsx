"use client"
import { useEffect, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { HexColorInput, HexColorPicker } from 'react-colorful';

interface colorTypes {
    color : string,
    setColor : ( color : string )=>void ;
}

const ColorPicker = ({ color , setColor } : colorTypes ) => {

    
    
    useEffect(()=>{
        console.log(color);
    }, [color])
   
  return (
    <div className='border border-border w-44 h-10 p-1 rounded-lg flex items-center overflow-hidden '>
        <Popover>
            <PopoverTrigger>
                <div className='h-8 aspect-square rounded-md border border-border cursor-pointer ' style={{ background : color }}>
                    
                </div>
            </PopoverTrigger>
            <PopoverContent>
                    <HexColorPicker
                        color={color}
                        onChange={(color)=>setColor(color)}
                    />
            </PopoverContent>
        </Popover>
        <HexColorInput prefixed={true} color={color} className='px-2 outline-none' onChange={(color)=>setColor(color)}/>
    </div>
  )
}

export default ColorPicker
