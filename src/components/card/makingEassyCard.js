import React from "react";
import Image from "next/image"

const MakingEassyCard = ({btnBg,img,step,title,msg}) => {
  return (
    <div className="bg-normalWhite shadow-md max-w-[350px]"> 
        <Image src={img} alt="not found"/>
        <div className="p-4">
            <div className={btnBg}>
              <p className="p-1 text-white rounded-md text-sm">
                {step}
              </p>
            </div>
            <h1 className="font-semibold py-1 text-sm">{title}</h1>
            {/* <p className="text-sm font-OpenSans">{msg}</p> */}
        </div>
    </div>
  )
}

export default MakingEassyCard;