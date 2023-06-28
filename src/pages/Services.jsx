"use client";
import React from "react";
 
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
 
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import DataUsageOutlinedIcon from "@mui/icons-material/DataUsageOutlined";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
const data=[
  {
    icon:<AppsOutlinedIcon   className="text-normalWhite iconstyle" />,
    title:'Apps For Mobile & Web',
    msg:'Our doers will make very user-friendly and efficient apps,exactly matching your needs. Boost your business now!'

  },
  {
    icon:<ContentPasteSearchOutlinedIcon  className="text-normalWhite iconstyle" />,
    title:'Homework Help',
    msg:'Stuck with homework? PhD doers have a distinctive mode of expression assisting students to solve assignments flawlessly.'

  },
  {
    icon:<VideoCameraFrontOutlinedIcon  className="text-normalWhite iconstyle" />,
    title:'Live session',
    msg:'We provide the best doers for you to interact with in real time to get instant solutions for your problems. Pickup your phone now !'

  },
  {
    icon:<ScienceOutlinedIcon  className="text-normalWhite iconstyle" />,
    title:'Lab Work',
    msg:'PSpice, Orcad, AutoCAD,Solidworks, and many more simulation softwares, our Lab doers can handle them all.'

  },
  {
    icon:<DataUsageOutlinedIcon  className="text-normalWhite iconstyle" />,
    title:'Project Help',
    msg:'Get the most professional project assistance from our PhD doers who can guide and walk you through your project online.'

  },
  {
    icon:<DriveFileRenameOutlineOutlinedIcon  className="text-normalWhite iconstyle" />,
    title:'Writing Help',
    msg:'Our Native essay doers help you meet university standards in terms of writing and structuring of academic essays.'

  },
]
const Services = () => {
  // const iconstyle = {
  //   fontSize: "2rem",
  // };

  return (
    <div>
      <section id="service" className="bg-lightSky text-black">
        <div className="mx-auto max-w-screen-2xl  lg:mt-16 md:mt-0 px-4 py-14 sm:py-22 sm:px-6 lg:py-16 lg:px-8">
          

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

            {
              data.map(e=>
                
                  <a key={e.title} className="flex flex-col items-center text-center md:block md:text-left   p-8   shadow-pink-light transition hover:shadow-lg  ">
                  <div className="rounded-full   bg-contact w-fit p-2 hover:text-lightSky hover:bg-btnColor transition hover:shadow-lg">
                     {e.icon}
                  </div>
    
                  <h2 className="mt-4 text-lg   font-bold text-black">
                     {e.title}
                  </h2>
    
                  <p className="mt-1 text-sm text-black">
                    {e.msg}  
                  </p>
                </a>
                )
            }
           
{/* 
            <a className="flex flex-col items-center text-center md:block md:text-left   p-8   shadow-pink-light transition hover:shadow-lg  ">
              <div className="rounded-full   bg-contact w-fit p-2 hover:text-lightSky hover:bg-btnColor transition hover:shadow-lg">
                <AccessTimeOutlinedIcon style={iconstyle} className="text-normalWhite" />
              </div>

              <h2 className="mt-4 text-lg   font-bold text-black">
                24/7 Support
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left   p-8   shadow-pink-light transition hover:shadow-lg  ">
              <div className="rounded-full   bg-contact w-fit p-2 hover:text-lightSky hover:bg-btnColor transition hover:shadow-lg">
                <ImportantDevicesOutlinedIcon style={iconstyle} className="text-normalWhite" />
              </div>

              <h2 className="mt-4 text-lg   font-bold text-black">
                live sessions
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left   p-8   shadow-pink-light transition hover:shadow-lg  ">
              <div className="rounded-full   bg-contact w-fit p-2 hover:text-lightSky hover:bg-btnColor transition hover:shadow-lg">
                <ScienceOutlinedIcon style={iconstyle} className="text-normalWhite" />
              </div>

              <h2 className="mt-4 text-lg font-bold   text-black">
                Lab work
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left   p-8   shadow-pink-light transition hover:shadow-lg  ">
              <div className="rounded-full   bg-contact w-fit p-2 hover:text-lightSky hover:bg-btnColor transition hover:shadow-lg">
                <DataUsageOutlinedIcon style={iconstyle} className="text-normalWhite" />
              </div>

              <h2 className="mt-4 text-lg font-bold   text-black">
                project help
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left   p-8   shadow-pink-light transition hover:shadow-lg  ">
              <div className="rounded-full   bg-contact w-fit p-2 hover:text-lightSky hover:bg-btnColor transition hover:shadow-lg">
                <VideoCameraFrontOutlinedIcon style={iconstyle} className="text-normalWhite" />
              </div>

              <h2 className="mt-4 text-lg font-bold   text-black">
                video calling support
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left   p-8   shadow-pink-light transition hover:shadow-lg  ">
              <div className="rounded-full   bg-contact w-fit p-2 hover:text-lightSky hover:bg-btnColor transition hover:shadow-lg">
                <DriveFileRenameOutlineOutlinedIcon style={iconstyle} className="text-normalWhite" />
              </div>

              <h2 className="mt-4 text-lg font-bold   text-black">
                writing help
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left   p-8   shadow-pink-light transition hover:shadow-lg  ">
              <div className="rounded-full   bg-contact w-fit p-2 hover:text-lightSky hover:bg-btnColor transition hover:shadow-lg">
                <ContentPasteSearchOutlinedIcon style={iconstyle} className="text-normalWhite" />
              </div>

              <h2 className="mt-4 text-lg font-bold   text-black">
                homework help
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </a> */}


          </div>

          {/* <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-black transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Services;
