
import HeroSection from '@/pages/HeroSection'
import OnlineEducation from '@/pages/onlineEducation'
import Services from '@/pages/Services'
import WorkingProcess from '@/pages/workingProcess'
import Visitors from '@/pages/visitors'
import Pricing from '@/pages/Pricing'
import MakingEassy from '@/pages/makingEassy'
//  import Instructor from '@/pages/instructor'
 import Contact from '@/pages/Contact'
import Download from '@/pages/download'
import Hero from '@/pages/hero'
import {IoLogoWhatsapp} from 'react-icons/io'
import Header from '@/components/header/header'
export default function Home() {
  return (
    <main>
      <a
            href="#contact"
            className="  w-fit h-fit z-50 bg-[green]  text-base font-semibold text-[white] hover:scale-105 duration-300  delay-100  rounded-full right-7 bottom-5 fixed"
          >
           <span className="pl-3  text-primaryWhite">Chat In</span> <IoLogoWhatsapp className="inline-flex p-1" size={50} color="white"/>
          </a>
          <Header myRef={undefined}/>
      <Hero/>
      {/* <HeroSection/> */}
      <OnlineEducation/>
      <Services/>

      <WorkingProcess/>
      <Visitors/>
      <Pricing/>
      <MakingEassy/>
      {/* <Instructor/> */}
      <Contact/>
      <Download/>
    </main>
       
  )
}
