import Image from "next/image";

export default function Navbar(){
    return(
        <div className="bg-[#193141]">
            <div className=" container">
                <Image src={'/navbar.png'} width={50} height={50}/>
            </div>
            
        </div>
    )
}