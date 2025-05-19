'use client'
import EmblaCarousel from "@/components/infiniteHorizontalScroll";
import Image from "next/image";
import Link from "next/link";

export default function Project(){
    
    const website=[

        {image:'/project/clinique-chifa-tasnime.jpg', url:'https://www.clinique-chifa-marrakech.com/',title:"Clinique Chifa Tasnime",code:['NextJs','tailwindcss','gsap']},
        {image:'/project/caravanserai.png', url:'https://www.caravanserai-marrakech.com/',title:"Caravan Serai",code:['NextJs','tailwindcss','gsap']},
        {image:'/project/french_opaname.png', url:'https://www.french-opaname.com',title:"French O'Paname",code:['restApi','NextJs','tailwindcss','Wordpress']},
        // {image:'/project/saveursdesprairies.png', url:'https://saveursdesprairies.com/',title:'Saveurs Des Prairies',code:['WooCommerce','Wordpress']},
        {image:'/project/dayafandco.png', url:'https://www.dayafandco.com/',title:'dayaf & co',code:['restApi','NextJs','tailwindcss','Wordpress']},
        {image:'/project/nj3d-marrakech.png', url:'https://nj3d-marrakech.com/',title:'nj3d marrakech',code:['Wordpress']},
        {image:'/project/elhabriConcept.png', url:'https://elhabriconcept.com',title:'Elhabri Concept',code:['Wordpress']},
        {image:'/project/traficgenius.png', url:'https://www.traficgenius.com',title:'trafic genius',code:['restApi','NextJs','tailwindcss','Wordpress']},
        {image:'/project/explorem.png', url:'https://www.explorem.net',title:'explorem sarl',code:['NextJs','tailwindcss','mongoDB','Prisma']},
        {image:'/project/ecotechdepannage.png', url:'https://www.ecotechdepannage.com',title:'ecotech depannage',code:['NextJs','tailwindcss']},
    ]
    
    return (
        <div className=" py-10  relative min-h-screen flex flex-col justify-start   bg-[url('/patterns/noisy.webp')] object-cover ">
            <div className="absolute animate-pulse -top-28 left-1/2 transform -translate-x-1/2 translate-y-0  w-[300px] lg:w-[1300px]  h-full bg-[#fe3c01]/50 opacity-50 rounded-t-full rounded-bl-3xl rounded-br-full blur-3xl z-0"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-[url('/patterns/grid.webp')] bg-left-top bg-no-repeat"></div>
            <div className="absolute left-0 top-0  w-full h-full bg-[url('/patterns/grid.webp')] bg-right-top bg-no-repeat"></div>
            <div className="container ">

                    <h2 className="z-50 relative  font-bold text-7xl md:text-7xl text-center capitalize mt-6 text-[#fe3c01]">project</h2>
                    <div className="flex flex-col items-center justify-between pt-16 xl:flex-row">
                       
                        <div className="flex flex-col items-center justify-center gap-14">
                            <div className="grid items-center justify-center grid-cols-1 gap-8 lg:grid-cols-2">
                                {
                                    website.map((ele,index)=>(
                                        <Link href={ele.url} target="_blank" className="flex flex-col gap-4 group " key={index}>
                                            <div className="rounded-3xl shadow-[0_0_40px_rgba(254,60,1,0.5)] ">
                                            <Image className="border-4 border-[#fe3c01] w-full  h-full object-cover rounded-3xl transform transition-transform duration-700 group-hover:scale-105" src={ele.image} alt={ele.title} width={'1200'} height={'675'}/>
                                            </div>
                                            <h2  className="relative z-50 px-3 py-1 text-3xl font-bold text-white capitalize rounded w-fit">{ele.title}</h2>
                                            <div className="relative z-50 flex flex-col gap-3 lg:flex-row lg:items-center">
                                                <h2 className="font-medium text-white uppercase ">Coding : </h2>
                                                <div className="flex flex-row gap-3">
                                                    {
                                                        ele.code.map((ele,index)=>(
                                                            <p  key={index} className="  text-[#fe3c01] border-2 border-[#fe3c01] py-1 px-3 rounded-3xl text-sm">{ele}</p>
                                                        ))
                                                    }
                                                </div>
                                             
                                            </div>
                                           
                                        </Link>
                                    ))
                                    
                                }
                            </div>
                            <Link target="_blank" className="hover:shadow-[0_0_40px_rgba(254,60,1,5.9)]  hover:bg-transparent z-50 relative hover:border-[#fe3c01] border-4 duration-700 border-[#fe3c01] hover:text-[#fe3c01] hover:bg-black  font-medium text-2xl md:text-4xl bg-[#fe3c01] text-black w-full text-center  rounded-3xl  p-4 " href={'https://github.com/salahelfatimi'}><span>View Github</span></Link>
                        </div>
                    </div>
            </div>
            
        </div>
    )
}