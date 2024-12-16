import EmblaCarousel from "@/components/infiniteHorizontalScroll";
import Navbar from "@/components/navbar/navbar";
import HeaderPage from "@/pages/headerPage";
import Project from "@/pages/project";
import WhatIKnow from "@/pages/WhatIKnow";


export default function Home() {
  return (
   <div className=" flex flex-col justify-between">
    {/* <Navbar/> */}
    <HeaderPage/>
    <WhatIKnow/>
    <Project/>
    
   </div>
  );
}
