"use client"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import logo from "../../assets/D5-white.png";
import Image from 'next/image';

export default function Footer(){
    return(
        <>
        <div className="bg-footer-100 w-full">
        <div className="flex py-8 sm:py-14  text-normalWhite flex-wrap mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
            <div className=" px-7 max-w-3xl my-2 sm:w-1/3 ">
                <div className="mb-4">
                    <Image src={logo} className='w-[80%]' alt="logo" />
                {/* <a class="  block  text-xl tracking-[8px] w-fit leading-3  p-3" href="/">
                    LOGO
                 </a> */}
                </div>
                <div className="sm:text-lg text-base font-sans font-normal leading-[20px] sm:leading-[30px]">Grade Booster is an online platform that connects online tutors with students across the globe who seeks academic help.</div>
            </div>
            <div className=" px-7 max-w-3xl my-2 sm:w-1/3">
                <div className="font-serif pt-3 text-xl font-bold mb-3">SERVICES</div>
                <div>
                    <ul className="flex flex-col gap-2">
                        <li>
                        <a class="text-normalWhite transition font-sans font-normal hover:text-normalWhite/75" href="/">
                          Online Tutorial
                         </a>
                        </li>
                        <li>
                        <a class="text-normalWhite transition font-sans font-normal hover:text-normalWhite/75" href="/">
                          Homework Help
                         </a>
                        </li>
                        <li>
                        <a class="text-normalWhite transition font-sans font-normal hover:text-normalWhite/75" href="/">
                          Live Session
                         </a>
                        </li>
                        <li>
                        <a class="text-normalWhite transition font-sans font-normal hover:text-normalWhite/75" href="/">
                          Project Help
                         </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="gap-2 space-y-2 px-7 max-w-3xl my-2 sm:w-1/3">
                <p><span className="font-bold"><MailOutlineIcon className='text-primary-white'/> </span><span className="font-bold">Email:</span> support@thegradebooster.com</p>
                <p><span className="font-bold"><PhoneOutlinedIcon className='text-primary-white'/> </span><span className="font-bold">Phone:</span> +91 6289409441</p>
                <p><span className="font-bold"><LocationOnOutlinedIcon className='text-primary-white'/> </span><span className="font-bold">Adress:</span> C/O -S.K. Mishra, C.M.R.I. Gate, Bartand, Dhanbad, Jharkhand, India(826001)</p>
            </div>
        </div>
        </div>
        <div className="w-full text-normalWhite   bg-footer-200">
        <div className="flex p-3  flex-wrap mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
            <div className="text-xs text-center px-7 max-w-3xl my-2 sm:w-1/2 ">
                
                <div>© 2022 gradebooster.com. All rights reserved Abhay Education Pvt. Ltd.</div>
            </div>
            
            <div className="text-xs text-center px-7 max-w-3xl my-2 sm:w-1/2">
            <div><a href="/termandcond">Terms & conditions</a> | <a href="/privacy">Privacy Policy</a> | <a href="/refund">Refunds</a></div>
            </div>
        </div>
        </div>
        </>
    )
}