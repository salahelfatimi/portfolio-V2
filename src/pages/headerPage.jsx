"use client"
import EmblaCarousel from "@/components/infiniteHorizontalScroll";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { Dot, File, Instagram, Linkedin, LinkIcon, Mail, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeaderPage(){
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ stopOnInteraction:false,stopOnMouseEnter:true ,speed: 0.7  })
      ])
    const coding=['Html','CSS','Rest Api','NoSql','Javascript','React','Next.js','SQL','MongoDB','Prisma','Tailwind Css','Figma','laravel','WordPress',,'Php','Shopify','SEA / SEO','Adobe Illustrator']
 
    return(
    <div id="me" className="bg-black relative  ">
            <div className="rounded-full-css bg-[#fe3c01] w-full h-16 bottom-0 absolute z-10 rotate-180 "></div>
            <EmblaCarousel/>
            <div className=" flex flex-col items-center justify-center h-[100vh] container gap-2 ">
                <span className="text-[#fe3c01]  duration-500 text-2xl md:text-4xl">Hello, I&apos;m </span>
                <div className=" relative">
                    <Image className="  absolute -top-20 right-0 z-0 animate-bounce "  src={'/king.png'} width={100} height={100}/>
                    <h1 className=" relative z-10 text-3xl md:text-6xl  font-semibold text-white uppercase">Salaheddine Elfatimi</h1>

                </div>
                <div className=" relative ">
                    <Image className=" rounded-full border-4  border-[#fe3c01] bg-[url('/bg.png')]  "  src={'/me.png'} width={250} height={250}/>
                    <span className="text-white py-1 px-2 rounded-full  border-black border-8 absolute top-0 -right-12 bg-[#fe3c01] -rotate-12 font-medium  text-xs  duration-500 flex items-center  capitalize"><Dot className=" stroke-2" />ready to work</span>
                </div>
                <p className="  p-2"><span className="text-[#fe3c01]  text-2xl md:text-4xl font-medium">Full Stack Developer & Web Marketer</span></p>
                <div>
                  
                    <div className=" flex gap-4">
                        <Link className="border-[#fff] group   rounded-3xl  border-4   hover:border-[#fe3c01]   duration-500 p-2 flex items-center justify-center" href={'/resume.pdf'} target="_blank"><File  className="stroke-[#fff] group-hover:stroke-[#fe3c01]" size={25}/></Link>
                        <Link className="border-[#fff] group   rounded-3xl  border-4   hover:border-[#fe3c01]   duration-500 p-2 flex items-center justify-center" href={'mailto:job.elfatimi@gmail.com'} target="_blank"><Mail  className="stroke-[#fff] group-hover:stroke-[#fe3c01]" size={25}/></Link>
                        <Link className="border-[#fff] group   rounded-3xl  border-4   hover:border-[#fe3c01]   duration-500 p-2 flex items-center justify-center" href={'https://wa.me/+212602314804'} target="_blank"><MessageSquare  className="stroke-[#fff] group-hover:stroke-[#fe3c01]" size={25}/></Link>
                        <Link className="border-[#fff] group   rounded-3xl  border-4   hover:border-[#fe3c01]   duration-500 p-2 flex items-center justify-center" href={'https://www.linkedin.com/in/salaheddine-elfatimi-b160ab252/'} target="_blank"><Linkedin  className="stroke-[#fff] group-hover:stroke-[#fe3c01]" size={25}/></Link>    
                        <Link className="border-[#fff] group   rounded-3xl  border-4   hover:border-[#fe3c01]   duration-500 p-2 flex items-center justify-center" href={'https://www.instagram.com/salaheddine_elfatimi/'} target="_blank"><Instagram  className="stroke-[#fff] group-hover:stroke-[#fe3c01]" size={25} /></Link>
                    </div>
                </div>
               
        </div>
        
                
   
    </div>
    )
}