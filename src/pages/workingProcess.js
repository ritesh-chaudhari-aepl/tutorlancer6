"use client"
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import SmartButtonOutlinedIcon from '@mui/icons-material/SmartButtonOutlined';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import WhatWeOfferCard from '@/components/card/whatWeOfferCard'
const WorkingProcess = () => {
  return (
    <div id='features' className='bg-normalWhite'>
        <div className='container px-4 sm:px-20 max-w-screen-2xl mx-auto py-16 p-2'>
            <div className=' '>
                <div className='py-3'>
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
                <h2 className='font-medium text-base'>Why our working is so unique</h2>
                <h1 className='font-bold text-2xl py-4'>See how working process <br></br> easily adapt your need</h1>
            </div>
            <div className='grid grid-flow-row sm:grid-cols-2 grid-cols-1 pt-8 lg:gap-4 gap-3'>
                <WhatWeOfferCard 
                 icon={<HeadsetOutlinedIcon className='text-[#7357fb]'/>}
                 style=" bg-[#f1eeff] text-10 p-3 sm:p-4 rounded-full w-fit h-fit mx-2" 
                 title="24/7 support"
                 msg="Urdoer is focused on ensuring to meet the needs of the students around the globe for their assignments." 
                /> 

                <WhatWeOfferCard 
                 icon={<AccessAlarmOutlinedIcon className='text-[#20b9a5]'/>}
                 style=" bg-[#e7f8f5] text-10 p-3 sm:p-4 rounded-full w-fit h-fit mx-2" 
                 title='Plagiarism Free' 
                 msg="Get plagiarism free work where each and every assignment is written from scratch to ensure that no content is plagiarized." /> 
                <WhatWeOfferCard 
                 icon={<SmartButtonOutlinedIcon className='text-[#ff6167]'/>}
                 style=" bg-[#ffeff0] text-10 p-3 sm:p-4 rounded-full w-fit h-fit mx-2" 
                 title='On time Delivery' 
                 msg="We make sure your work reach you on time because we know if it's not with you on-time, it will be a waste." /> 
                <WhatWeOfferCard 
                 icon={<PlagiarismOutlinedIcon className='text-[#7357fb]'/>}
                 style=" bg-[#f1eeff] text-10 p-3 sm:p-4 rounded-full w-fit h-fit mx-2" 
                 title='Refundable' 
                 msg="Your payment is secured by paypal and razorpay, upto 100% money back guarantee." /> 
                <WhatWeOfferCard 
                 icon={<MonetizationOnOutlinedIcon className='text-[#20b9a5]'/>}
                 style=" bg-[#e7f8f5] text-10 p-3 sm:p-4 rounded-full w-fit h-fit mx-2" 
                 title='Compatative Pricing' 
                 msg="Our prices are reasonable and pocket-friendly because we understand you better." /> 
                <WhatWeOfferCard 
                 icon={<AutorenewOutlinedIcon className='text-[#ff6167]'/>}
                 style=" bg-[#ffeff0] text-10 p-3 sm:p-4 rounded-full w-fit h-fit mx-2" 
                 title='Unlimited Revissions' 
                 msg="You get 100% customized work as per your requirements, we are always willing to accommodate." /> 


            </div>
        </div>
    </div>
  )
}

export default WorkingProcess