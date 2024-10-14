
import EmblaCarousel from "@/components/infiniteHorizontalScroll";
import HeaderPage from "@/pages/headerPage";
import Project from "@/pages/project";
import WhatIKnow from "@/pages/WhatIKnow";
import Image from "next/image";

export default function Home() {
  return (
   <div className=" flex flex-col justify-between">
    <EmblaCarousel/>
    <HeaderPage/>
   
    <WhatIKnow/>
    <Project/>
    
   </div>
  );
}
