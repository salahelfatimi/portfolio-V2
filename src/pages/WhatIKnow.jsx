import Image from "next/image";

export default function WhatIKnow(){
    const coding=['Html','CSS','','','Javascript','React','Next.js','SQL','MongoDB','Prisma','Tailwind Css','Figma','laravel','WordPress',,'Php','SEO','SEA','Adobe Illustrator']
    return(
        <div className="   bg-[#D2BFB7] pt-12 ">
            <div className="  pt-10">
                <h2 className=" text-[#193141] pb-10 font-bold text-3xl md:text-5xl text-center">What I Know</h2>
                <div className="relative bottom-0 flex flex-col items-center justify-center  pb-[53rem] md:pb-[24rem] xl:pb-36">
                    <Image className="    z-10" src={'/saction2.png'} width={400} height={400}/>
                    <div className="  w-full grid md:grid-cols-4 grid-cols-2 xl:grid-cols-6   absolute bottom-0 z-10">
                        {
                            coding.map((ele,index)=>(
                                <h2 className={` lg:${ele==''?'block':'cursor-pointer	shadow-inner  bg-[#193141] hover:bg-[#D2BFB7] hover:text-[#193141] border-y-2  border-x-2  border-[#D2BFB7] duration-700 '}   ${ele==''?'hidden':' cursor-pointer	  bg-[#193141] hover:bg-[#D2BFB7] hover:text-[#193141] border-y-4  border-x-4  border-[#D2BFB7] duration-700'}  text-[#D2BFB7] font-medium flex justify-center items-center text-xl md:text-2xl h-28 text-center`} key={index}>{ele}</h2>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}