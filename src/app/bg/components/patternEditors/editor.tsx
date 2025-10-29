
import DotpatternEditor from '@/components/backgrounds/dotspattern/DotpatternEditor'
import GradientPicker from '@/components/editor-tools/RadialGradient'

import React from 'react'

const Editor = () => {
  return (
    <div className="w-full md:w-80 h-[40%] md:h-full bg-secondary rounded-lg p-4 overflow-y-auto scrollbar-hidden">
        {/* <CenterSoftGlowEditor/> */}
       <DotpatternEditor/>
     
       
    </div>
  )
}

export default Editor
