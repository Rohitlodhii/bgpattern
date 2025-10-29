'use client';

import BentoGrid from "@/components/core/bentogrid";
import ThemeToggle from "@/components/themeToggle";
import { InspectionPanel } from "lucide-react";
import { Cal_Sans , Host_Grotesk } from "next/font/google"
import { useState } from "react";


export const grotesk = Host_Grotesk({
  weight : ['400','500','800']
})



export default function page() {

  const backgrounds = ["bg-pattern" , "bg-diamond"]
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

   return (
      <div className={` w-full h-full flex flex-col py-4 ${backgrounds[index]} `}>
          
            <nav className="max-w-4xl border   bg-sidebar 
              py-2.5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.01)] dark:shadow-[1px_1px_10px_1px_#262626]
            border-border w-full rounded-2xl  mx-auto flex items-center justify-end gap-2 px-4">
               <button
             onClick={handleNext}
             className="px-2 bottom-4 right-4 cursor-pointer py-2 bg-secondary rounded-xl "
            > 
            <InspectionPanel className="size-4"/>
            </button>
              <ThemeToggle/>
            </nav>  

                <div className="pt-28 w-full  flex flex-col items-center justify-center px-4 gap-4">
                    <h1 className={` max-w-3xl text-6xl font-black mx-auto w-full text-center whitespace-[10px] tracking-tight`}>
                    Beautiful Svg Backgrounds, Ready for Your Website.
                    </h1>
                    <p className={``}>An open source collection of ready to use svg, pattern backgrounds</p>
                </div>

                <BentoGrid/>


                

            </div>
     
   )

}
