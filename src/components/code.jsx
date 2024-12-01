"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";

export default function EmblaCarouselCode() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ stopOnInteraction:false,stopOnMouseEnter:true ,speed: 0.7  })
      ])
  const coding=['Html','CSS','Rest Api','NoSql','Javascript','React','Next.js','SQL','MongoDB','Prisma','Tailwind Css','Figma','laravel','WordPress',,'Php','Shopify','SEA / SEO','Adobe Illustrator','']
  return (
    <div className="overflow-hidden select-none bg-[#D2BFB7] py-4" ref={emblaRef}>
      <div className="flex  gap-10 text-center items-center cursor-grab active:cursor-grabbing ">
        {coding.map((ele, index) => (
          <h2
            className="bg-[#193141] text-[#D2BFB7] last:invisible py-2 px-5 rounded-full text-2xl  lg:text-4xl font-bold flex-shrink-0 whitespace-nowrap"
            key={index}
          >
            {ele}
          </h2>
        ))}
      </div>
    </div>
  );
}