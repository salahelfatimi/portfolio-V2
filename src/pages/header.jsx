"use client";
import { File, Instagram, Linkedin, Mail, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const texts = ["An Innovative", "A Passionate ", "A Skilled"];
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCount((prev) => (prev + 1) % texts.length);
        }, 4500);
        return () => clearInterval(id);
    }, []);
    
    return (
        <div id="me" className="bg-bg min-h-screen flex flex-col justify-center items-center py-10 bg-[url('/patterns/noisy.webp')] object-cover ">
            <div className="absolute animate-pulse bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[200px] lg:w-[200px] h-[400px] bg-primary opacity-90 rounded-full blur-3xl z-0"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/grid.webp')] bg-center bg-no-repeat"></div>
            <div className="absolute animate-pulse -bottom-32 left-1/2 transform -translate-x-1/2 translate-y-0 w-[200px] lg:w-[500px] h-[500px] bg-primary opacity-30 rounded-full blur-3xl z-0"></div>
            <div className="flex flex-col items-center justify-center w-full relative overflow-hidden h-[100px] max-md:h-[90px] ">
                {texts.map((text, index) => (
                    <span key={index} className={`bg-clip-text text-transparent bg-white md:text-7xl text-5xl font-bold absolute h-[100px] duration-500 ${index === count ? "top-0 opacity-100" : "top-full opacity-0"}`}>
                        {text}
                    </span>
                ))}
            </div>
            <h1 className="relative lg:text-6xl text-4xl text-center font-bold -mt-4 bg-gradient-to-r from-[#fe3c01]  via-primary to-white text-transparent bg-clip-text">
                Full Stack Developer & Web Marketer
            </h1>
            <div className="  bg-primary rounded-full mt-6 border-8 border-primary relative w-[250px] lg:w-[250px]  flex items-center justify-center">
                <Image src={'/me.png'} className="rounded-full " width={300} height={300}/>
            </div>
            
            <p className="relative text-lg text-[#dfe5ec] mt-6 max-w-[600px] mx-auto text-center">
                Hi there! <span className="inline-block animate-bounce">👋</span> I&apos;m Salaheddine Elfatimi, a Full Stack Developer & Web Marketer based in Marrakech,  
                specializing in building scalable, efficient, and user-friendly web applications while crafting impactful digital marketing strategies.  
                I turn ideas into high-performance digital experiences.
            </p>
            
            <div className="relative flex gap-4 mt-6 ">
                <Link className="  hover:shadow-[0_0_40px_rgba(147,235,255,3.9)]  transition-all border-[#fff] hover:border-primary group   rounded-full  border-4  duration-500 p-2 flex items-center justify-center" href={'/resume.pdf'} target="_blank"><File  className="stroke-[#fff] group-hover:stroke-primary " size={30}/></Link>
                <Link className="  hover:shadow-[0_0_40px_rgba(147,235,255,3.9)] transition-all border-[#fff] hover:border-primary group   rounded-full  border-4  duration-500 p-2 flex items-center justify-center" href={'mailto:job.elfatimi@gmail.com'} target="_blank"><Mail  className="stroke-[#fff] group-hover:stroke-primary" size={30}/></Link>
                <Link className="  hover:shadow-[0_0_40px_rgba(147,235,255,3.9)] transition-all border-[#fff] hover:border-primary group   rounded-full  border-4  duration-500 p-2 flex items-center justify-center" href={'https://wa.me/+212602314804'} target="_blank"><MessageSquare  className="stroke-[#fff] group-hover:stroke-primary" size={30}/></Link>
                <Link className="  hover:shadow-[0_0_40px_rgba(147,235,255,3.9)] transition-all border-[#fff] hover:border-primary group   rounded-full  border-4  duration-500 p-2 flex items-center justify-center" href={'www.linkedin.com/in/salaheddine-elfatimi'} target="_blank"><Linkedin  className="stroke-[#fff] group-hover:stroke-primary" size={30}/></Link>    
                <Link className="  hover:shadow-[0_0_40px_rgba(147,235,255,3.9)] transition-all border-[#fff] hover:border-primary group   rounded-full  border-4  duration-500 p-2 flex items-center justify-center" href={'https://www.instagram.com/salaheddine_elfatimi/'} target="_blank"><Instagram  className="stroke-[#fff] group-hover:stroke-primary" size={30} /></Link>
            </div>
            
        </div>
    );
}
