import EmblaCarousel from "@/components/infiniteHorizontalScroll";
import Image from "next/image";
import Link from "next/link";

export default function HeaderPage(){
    return(
    <div className="bg-[#193141] py-12 xl:py-0 ">
        
        <div className=" flex xl:flex-row flex-col items-center justify-center h-screen container gap-4 ">
            <div className="">
                <Image className=" "  src={'/header.png'} width={400} height={400}/>
               
            </div>
            <div className=" flex flex-col gap-6">
                <span className="text-[#2a9348] font-medium animate-pulse  duration-500 flex gap-1 capitalize"><Image className="    " src={'/icon/online.svg'} width={10} height={10}/>ready to work</span>
                <span className="text-[#D2BFB7]  duration-500 text-2xl md:text-4xl">Hello, I&apos;m </span>
                <h1 className=" text-3xl md:text-6xl font-semibold text-white">Salaheddine Elfatimi</h1>
                <p className=" bg-[#29404E] p-2"><span className="text-[#D2BFB7] text-2xl md:text-4xl font-medium">Full Stack Developer & Web Marketer</span></p>
                <div className=" flex gap-4">
                    <Link href={'/resume.pdf'} target="_blank"><Image className="bg-[#D2BFB7]  p-2 hover:animate-bounce  duration-500" src={'/icon/resume.svg'} width={50} height={50}/></Link>
                    <Link href={'mailto:job.elfatimi@gmail.com'} target="_blank"><Image className="bg-[#D2BFB7]  p-2 hover:animate-bounce  duration-500" src={'/icon/email.svg'} width={50} height={50}/></Link>
                    <Link href={'https://wa.me/+212602314804'} target="_blank"><Image className="bg-[#D2BFB7]  p-2 hover:animate-bounce  duration-500" src={'/icon/whatsapp.svg'} width={50} height={50}/></Link>
                    <Link href={'https://www.linkedin.com/in/salaheddine-elfatimi-b160ab252/'} target="_blank"><Image className="bg-[#D2BFB7]  p-2 hover:animate-bounce  duration-500" src={'/icon/linkedin.svg'} width={50} height={50}/></Link>    
                    <Link href={'https://www.instagram.com/salaheddine_elfatimi/'} target="_blank"><Image className="bg-[#D2BFB7]  p-2 hover:animate-bounce  duration-500" src={'/icon/instagram.svg'} width={50} height={50}/></Link>
                </div>
            </div>
        </div>
        {/* <div className="hidden lg:block">
            <div className="   animate-pulse  text-[#D2BFB7] text-xl font-semibold absolute text-center bottom-0 right-0 left-0 flex items-center flex-col" >
                scroll down
                <Image src={'/icon/down-arrow.svg'} width={80} height={80}/>
            </div>
        </div> */}
   
    </div>
    )
}