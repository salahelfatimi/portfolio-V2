"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export default function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
      AutoScroll({ stopOnInteraction:false ,speed: 0.7  })
    ])
    const keywords=["","Full Stack Developer", "Web Marketer", "Frontend Development", "Backend Development", "Web Development", "Digital Marketing", "SEO Specialist", "React Developer", "Next.js Developer", "Tailwind CSS", "JavaScript", "Node.js", "Freelance Developer", "Remote Developer", "Website Optimization", "Custom Web Solutions", "Responsive Design", "API Integration", "E-commerce Development", "Web Marketing Strategies", "Content Creation", "UI/UX Design", "Google Ads", "Facebook Ads"]
  return (
    <div className="relative z-50 overflow-hidden  py-4  select-none  active:cursor-grabbing cursor-grab bg-[#fe3c01] pr-10" ref={emblaRef}>
          <div className="flex flex-row gap-10  items-center   ">
            {keywords.map((ele, index) => (
          <h2 className=" text-bg text-4xl whitespace-nowrap break-keep font-black  " key={index}><span>{ele}</span></h2>
      ))}
      </div>
    </div>
  );
}