"use client"

import { useEffect, useState } from "react";

export default function WhatIKnow(){
    const whatIDo = [ "Building Websites", "Optimizing SEO", "Creating UI/UX", "Developing Full-Stack Apps", "Scaling Web Applications", "Enhancing User Experience", "Boosting Performance", "Managing Databases", "Implementing APIs", "E-Commerce Solutions", "SEO & Marketing Strategies", "Automation & AI Integration" ];
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        const id = setInterval(() => {
            setCount((prev) => (prev + 1) % whatIDo.length);
        }, 4500);
        return () => clearInterval(id);
    }, []);
    const codingSkills=['Html','CSS','Rest Api','NoSql','Javascript','React','Next.js','SQL','MongoDB','Prisma','Tailwind Css','Figma','laravel','WordPress',,'Php','Shopify','SEA / SEO','Adobe Illustrator']
    return(
        <div className="bg-[url('/patterns/noisy.webp')] object-cover">
        <div id="wath-i-know" className=" container  relative min-h-screen flex flex-col justify-center items-center " >
            <div className="absolute animate-pulse top-0 left-1/2 transform -translate-x-1/2 translate-y-0 w-[400px] lg:w-[200px] h-[300px] bg-primary opacity-40 rounded-full blur-3xl z-0"></div>
            <div className="absolute animate-pulse bottom-0 left-1/2 transform -translate-x-1/2 translate-y-0 w-[400px] lg:w-[1000px] h-[300px] bg-[#fe3c01]/50 opacity-70 rounded-full blur-3xl z-0"></div>

            <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/grid.webp')] bg-right-top bg-no-repeat"></div>
            <h2 className="z-50 relative text-primary  font-bold text-6xl gap-4 text-center uppercase">what I Do  </h2>
            <div className=" z-50 flex flex-col items-center justify-center w-full relative overflow-hidden h-[100px] max-md:h-[90px] ">
                {whatIDo.map((text, index) => (
                    <span key={index} className={`bg-clip-text text-transparent bg-white md:text-6xl text-2xl font-bold absolute h-[100px] duration-500 ${index === count ? "top-0 opacity-100" : "top-full opacity-0"}`}>
                        {text}
                    </span>
                ))}
            </div>
            <div className="flex relative z-50  flex-wrap columns-6 justify-center gap-4 mt-6">
                {codingSkills.map((skill, i) => (
                    <span key={i} className={` ${ i < codingSkills.length / 2 ? 'shadow-[0_0_40px_rgba(147,235,255,0.5)] border-primary text-primary' : 'border-[#fe3c01] shadow-[0_0_40px_rgba(254,60,1,0.5)] text-[#fe3c01] '}  px-8 py-4 text-4xl rounded-3xl border-4 bg-transparent `}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
        </div>
    )
}