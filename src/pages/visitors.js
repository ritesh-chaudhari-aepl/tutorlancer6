 
import Image from 'next/image'
import visitors from  '@/assets/visitors.png' 
const Visitors = () => {
  return (
    <div className='bg-lightSky sm:visitorBg'>
        <div className='max-w-screen-2xl mx-auto p-6 flex flex-col sm:flex-row'>
            <div className=''>
                <h1 className='font-semibold text-2xl py-4 px-5 w-2/3'>See how our visitors & members made their <span className='text-lightBlue'>#Success Stories</span></h1>
                  <Image src={visitors} alt='not found' /> 
            </div>
            <div className='px-5   '>
                 <div className='sm:pt-32 pt-0 px-4'>
                <h1 className='font-semibold text-xl py-8'>I highly recommend this platform, amazing experience with fast delivery</h1>
                <p className='text-sm font-semibold'>“ their teaching method is conceptual, motivating and friendly. i can clear my doubt any time. they have very deep knowledge of subject and exam pattern, with all the guidance of their tutos, i scored 98% in mathematics and 96% in physics. and yet qualified in iit mains with 12th rank. ”</p>
                <h2 className='font-semibold text-lg pt-6'>leonard sullivan</h2>
                <h3 className='text-sm font-bold'>2nd Standard, Manchester UK</h3>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Visitors