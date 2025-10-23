'use client';

import ThemeToggle from "@/components/themeToggle";
import { Cal_Sans , Host_Grotesk } from "next/font/google"


export const grotesk = Host_Grotesk({
  weight : ['400','500','800']
})



export default function page() {
   return (
      <div className="w-full h-screen flex flex-col py-4 bg-pattern ">
          
            <nav className="max-w-4xl border bg-background h-14 border-border w-full rounded-2xl  mx-auto flex items-center justify-end px-4">
              <ThemeToggle/>
            </nav>  

                <div className="mt-28 w-full  flex flex-col items-center justify-center px-4 gap-4">
                    <h1 className={` max-w-3xl text-6xl font-black mx-auto w-full text-center whitespace-[10px] tracking-tight`}>
                    Beautiful Svg Backgrounds, Ready for Your Website.
                    </h1>
                    <p className={``}>An open source collection of ready to use svg, pattern backgrounds</p>
                </div>

            </div>
     
   )

}
