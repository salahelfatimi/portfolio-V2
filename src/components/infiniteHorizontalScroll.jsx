"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    const keywords=["Full Stack Developer", "Web Marketer", "Frontend Development", "Backend Development", "Web Development", "Digital Marketing", "SEO Specialist", "React Developer", "Next.js Developer", "Tailwind CSS", "JavaScript", "Node.js", "Freelance Developer", "Remote Developer", "Website Optimization", "Custom Web Solutions", "Responsive Design", "API Integration", "E-commerce Development", "Web Marketing Strategies", "Content Creation", "UI/UX Design", "Google Ads", "Facebook Ads"]
  return (
    <div className=" overflow-hidden select-none bg-[#193141] border-y-4 border-[#D2BFB7]" ref={emblaRef}>
      <div className="grid grid-flow-col gap-10  text-center items-center   cursor-grab active:cursor-grabbing	 ">
      {keywords.map((ele, index) => (
      
          <h2 className="  text-[#D2BFB7] h-24  w-64 text-xl break-keep font-semibold flex justify-center items-center " key={index}><span>{ele}</span></h2>
        
      ))}
      </div>
    </div>
  );
}