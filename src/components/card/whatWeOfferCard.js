import React from 'react'

const WhatWeOfferCard = ({style, icon,title,msg}) => {
  return (
    <div>
        <div className='flex flex-row  '>
            <div className={style}> {icon} </div>
            <div>
            <div className='font-sans py-2 text-base font-bold '>{title}</div>
            <div className='  font-sans font-semibold text-sm'>{msg}</div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeOfferCard