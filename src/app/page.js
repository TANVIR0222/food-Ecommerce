import Banner from "@/components/Banner";
import Footers from "@/components/Footers";
import Hero from "@/components/Hero";
import HotDesset from "@/components/HotDesset";
import Nabvar from "@/components/Nabvar";
import PopularRecipe from "@/components/PopularRecipe";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className=' overflow-x-hidden text-black '>
      <div className='relative overflow-hidden'>
      <Nabvar/>
      <Hero/>
      </div>
      <HotDesset/>
      <Banner/>
      <PopularRecipe/>
      <Testimonial/>
      <Footers/>
    </div>
  );
}
