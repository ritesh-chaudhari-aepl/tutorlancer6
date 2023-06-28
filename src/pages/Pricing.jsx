"use client";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const Pricing = () => {
  const iconstyle = {
    fontSize: "2rem",
  };
  function handleScroll(section){
    const values = document.getElementById(section)
   
    if(values){
        values.scrollIntoView({behavior:"smooth",block:'center',inline:'center'})
    }
}

  return (
    <>
      <section id="pricing" className="bg-normalWhite text-black">
        <div className="mx-auto max-w-screen-x  lg:mt-16 md:mt-0 px-4 py-14 sm:py-22 sm:px-6 lg:py-16 lg:px-8">
          
            <h2 className="text-3xl border-b-2 w-fit mx-auto pb-2 border-btnColor font-bold sm:text-4xl">Pricing</h2>
 

          <div className="mt-12 grid grid-cols-1 max-w-screen-2xl mx-auto px-4 sm:px-12 lg:px-20 gap-8 md:grid-cols-3 lg:grid-cols-3 ">
            <div className="wrapper   grid-flow-col block rounded-xl border text-center border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="card items-center gap-4 flex flex-col">
                <div className="rounded-full bg-lightSky w-fit text-btnColor p-4 hover:text-white hover:bg-contact transition hover:border-contact">
                  <ShoppingCartOutlinedIcon style={iconstyle} className="text-btnColor" />
                </div>

                <ul className="grid gap-3">
                  <li className="font-bold font-xl font-QuickSand text-btnColor">
                    $10 <span className="font-normal text-black">/mon</span>
                  </li>
                  <li className="font-bold font-2xl uppercase">pro</li>
                  <li>1 User</li>
                  <li>10 GB Storage</li>
                  <li>Email Support</li>
                  <li>Lifetime Updates</li>
                </ul>

                <a
                   
                  className="inline-block rounded-full bg-contact sm:px-8 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                onClick={()=>handleScroll('contact')}>
                  Buy Now
                </a>
              </div>
            </div>

            <div className="wrapper grid-flow-col block rounded-xl border text-center border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="card items-center gap-4 flex flex-col">
                <div className="rounded-full   bg-contact w-fit text-white border-contact p-4">
                  <LocalActivityOutlinedIcon style={iconstyle} className="text-normalWhite" />
                </div>

                <ul className="grid gap-3">
                  <li className="font-bold font-xl font-QuickSand text-btnColor">
                    $35 <span className="font-normal text-black">/mon</span>
                  </li>
                  <li className="font-bold font-2xl uppercase">plus</li>
                  <li>10 User</li>
                  <li>30 GB Storage</li>
                  <li>Priority Email Support</li>
                  <li>Lifetime Updates</li>
                </ul>

                <a
                   
                  className="inline-block rounded-full bg-contact sm:px-8 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                onClick={()=>handleScroll('contact')}>
                  Buy Now
                </a>
              </div>
            </div>

            <div className="wrapper grid-flow-col block rounded-xl border text-center border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="card items-center gap-4 flex flex-col">
                <div className="rounded-full bg-lightSky w-fit text-btnColor p-4 hover:text-white hover:bg-contact transition hover:border-contact">
                  <StarBorderOutlinedIcon style={iconstyle} className="text-btnColor" />
                </div>

                <ul className="grid gap-3">
                  <li className="font-bold font-xl font-QuickSand text-btnColor">
                    $150 <span className="font-normal text-black">/mon</span>
                  </li>
                  <li className="font-bold font-2xl uppercase">pro</li>
                  <li>Unlimited User</li>
                  <li>Unlimited Storage</li>
                  <li>24/7 Support</li>
                  <li>Lifetime Updates</li>
                </ul>

                <a
                   
                  className="inline-block rounded-full bg-contact sm:px-8 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                onClick={()=>handleScroll('contact')}>
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
