import React from 'react'

const Page = () => {
  return (
    <div className='p-4 min-h-screen  max-w-screen-2xl mx-auto '>
       <a
            href='/'
            className="inline-block cursor-pointer rounded-full   bg-contact text-normalWhite px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
          >
            Back
          </a>
        <h1 className='font-bold font-serif text-2xl'>Refund policy</h1>
        <p className='p-2 font-sans text-base'>If after making payment you change your mind and want a refund of your payment, the amount to be refunded will depend on how much work is done. The refund amount will be the amount excluding the payment for work done till that time.</p>
        <p className='p-2 font-sans text-base'>If you feel unsatisfactory of our services, you can request for a refund, after your request our experts will check the quality of work and depending on that the refund amount will be decided.</p>
 
 
    </div>
  )
}

export default Page