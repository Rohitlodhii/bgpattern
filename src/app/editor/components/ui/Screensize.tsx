import { useScreenStore } from '@/store/screen.store'
import React from 'react'

const Screensize = () => {

    const {screenType , setScreenType } = useScreenStore();

  return (
    <div className='flex items-center justify-center h-10 w-36 bg-secondary shadow-sm absolute bottom-4 right-4 rounded-lg border border-border z-10'>
        <select
        value={screenType}
        onChange={(e) => setScreenType(e.target.value as "lg" | "md" | "sm")}
        className="border border-gray-300 rounded-md outline-none h-full w-full px-2 bg-white text-gray-800"
      >
        <option value="lg">Desktop (lg)</option>
        <option value="md">Tablet (md)</option>
        <option value="sm">Mobile (sm)</option>
      </select>
    </div>
  )
}

export default Screensize
