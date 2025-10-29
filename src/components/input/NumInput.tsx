import React from 'react'

const NumInput = ({value , setValue} : { value : number , setValue : (value:number)=>void}) => {
  return (
    <div className='flex border border-foreground/30 h-8 items-center px-4 rounded-lg '>
        <input 
            type='number'
            value={value}
            onChange={(e)=>setValue(Number(e.target.value))}
            className='outline-none w-full h-full '
        ></input>
       
    </div>
  )
}

export default NumInput
