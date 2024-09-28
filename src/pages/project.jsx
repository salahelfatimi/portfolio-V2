import Image from "next/image";
import { Link2, SquareArrowOutUpRight } from "lucide-react"
import Link from "next/link";

export default function Project(){
    const website=[
        {image:'/project/explorem.png', url:'https://www.explorem.net'},
        {image:'/project/ecotechdepannage.png', url:'https://www.ecotechdepannage.com'},
    ]
    return (
        <div className="  bg-[#193141] py-12">
            <div className=" container flex justify-center items-center flex-col pt-10">
                    <h2 className=" text-[#D2BFB7] font-bold text-5xl text-center capitalize">latest project</h2>
                    <div className="  flex flex-col xl:flex-row items-center justify-between  pt-16">
                       
                        <div className=" justify-center flex flex-col gap-14 items-center  ">
                            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                                {
                                    website.map((ele,index)=>(
                                        <div key={index} className=" relative  ">
                                            <Link href={ele.url} target="_blank" className="group  absolute flex items-center justify-center duration-500 cursor-pointer hover:bg-[#D2BFB7]/50 shadow-inner rounded inset-0"><SquareArrowOutUpRight size={50} className=" text-[#193141] stroke-2 group-hover:block hidden  " /></Link>
                                            <Image className=" rounded " src={ele.image} width={'1200'} height={'630'}/>
                                        </div>
                                    ))
                                    
                                }
                            </div>
                            <Link target="_blank" className=" hover:border-[#D2BFB7] border-4 duration-700 border-[#193141] hover:text-[#D2BFB7] hover:bg-[#193141]  font-medium text-4xl bg-[#D2BFB7] text-[#193141] w-full text-center   p-4 " href={'https://github.com/salahelfatimi'}><span>View More In Github</span></Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}