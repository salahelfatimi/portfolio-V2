"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";

export default function ProjectScrool() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ stopOnInteraction:false,stopOnMouseEnter:true ,speed: 0.7  })
      ])
    const website=[
        {image:'/project/dayafandco.png', url:'https://www.dayafandco.com/',title:'dayaf & co',code:['restApi','NextJs','tailwindcss','Wordpress']},
        {image:'/project/traficgenius.png', url:'https://www.traficgenius.com',title:'trafic genius',code:['restApi','NextJs','tailwindcss','Wordpress']},
        {image:'/project/explorem.png', url:'https://www.explorem.net',title:'explorem sarl',code:['NextJs','tailwindcss','mongoDB','Prisma']},
        {image:'/project/ecotechdepannage.png', url:'https://www.ecotechdepannage.com',title:'ecotech depannage',code:['NextJs','tailwindcss']},
       
    ] 
 return (
    <div className=" overflow-hidden select-none bg-[#D2BFB7] " ref={emblaRef}>
      <div className="flex flex-row gap-6 pl-6	 ">
      {website.map((ele, index) => (
      <Image className=" rounded-3xl w-1/4   " src={ele.image} width={'1200'} height={'675'}/>        
      ))}
      </div>
    </div>
  );
}