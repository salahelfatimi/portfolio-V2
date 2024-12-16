"use client"
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from 'embla-carousel-auto-scroll'

import Image from "next/image";

export default function WhatIKnow(){
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ stopOnInteraction:false ,speed: 0.6  })
      ])
    const coding=['','Html','CSS','Rest Api','NoSql','Javascript','React','Next.js','SQL','MongoDB','Prisma','Tailwind Css','Figma','laravel','WordPress',,'Php','Shopify','SEA / SEO','Adobe Illustrator']
    return(
        <div id="wath-i-know" className="bg-[#fe3c01] flex flex-col gap-10  " >
            <h2 className=" text-black  font-bold text-2xl md:text-5xl flex items-center justify-center gap-4 text-center uppercase">What <span className=" text-5xl md:text-6xl text-white">I Know</span></h2>
            <div className=" relative overflow-hidden  py-2  select-none  active:cursor-grabbing cursor-grab " ref={emblaRef}>
                <div className="flex flex-row gap-10  items-center  ">
                    {
                        coding.map((ele,index)=>(
                            <h2 className="text-6xl capitalize even:text-white odd:text-8xl text-black whitespace-nowrap"  key={index}>{ele}</h2>
                        ))
                    }
                </div>
            </div>
        </div>
       
    )
}