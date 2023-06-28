 'use client'
import Image from "next/image"
import  ceoImg from '@/assets/ceoImg.png'
const OnlineEducation = () => {
  function handleScroll(section){
    const values = document.getElementById(section)
   
    if(values){
        values.scrollIntoView({behavior:"smooth",block:'center',inline:'center'})
    }
}
  return (
    <div id="about" className="bg-normalWhite">
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 max-w-screen-2xl lg:px-20 sm:px-10 px-4  mx-auto">
            <div className=" lg:mt-10 py-5">
            <div className='py-4'>
                    <svg width="52" height="13" viewBox="0 0 52 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M2 2.03135C7 1.54541 9.23007 11.9457 15.5 11.0313C20.699 10.2732 20.2771 2.60181 25.5 2.03135C31.4797 1.37823 31.9859 11.1485 38 11.0313C43.8568 10.9173 45.5 2.03135 50 2.03135" stroke="url(#paint0_linear_188_1337)" stroke-width="3" stroke-linecap="round"/>
                     <defs>
                     <linearGradient id="paint0_linear_188_1337" x1="2" y1="6.54416" x2="50" y2="6.54417" gradientUnits="userSpaceOnUse">
                     <stop stop-color="#EAA60E"/>
                     <stop offset="0.508511" stop-color="#EF4444"/>
                     <stop offset="1" stop-color="#EF4444"/>
                     </linearGradient>
                     </defs>
                     </svg>
                </div>
                <h2 className='font-medium text-base'>Beter Learning. Better Result</h2>
                <h1 className='font-bold text-2xl py-4'>See how working process <br></br> easily adapt your need</h1>
                <p className="font-sans  font-medium text-sm">Get all your Assignments/Projects  covered by our highly experienced teams of Writers.We know that students coming to our essay writing service expect us to provide them with original content. {"That's"} exactly what we do. We write a paper from scratch while following your instructions.We assign expert tutors to ensure students get detailed, step-by-step solutions for their assignments.Students across the UK and other countries know who and how professional we are.</p>
                <button  onClick={()=>handleScroll('contact')} className="px-4 text-sm mt-6 py-3 text-normalWhite bg-contact rounded-sm">Explore more about us</button>
            </div>
            <div className="relative py-5">
                <Image  width={600} src={ceoImg} alt="not fond" />
                <div className="float-right relative bottom-0 right-0 lg:bottom-9 lg:right-9">
                <h1>Founder & CEO</h1>
                <h2>Vikash kumar</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnlineEducation