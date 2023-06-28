import React from "react";
import bgbanner from "@/assets/heroBg1.png";
import bannerrightimage from "@/assets/heroImg1.png";
import Image from "next/image";

const HeroSection = () => {
   
  const banner = {
    // backgroundImage: "url(" + `${bgbanner}` + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "-webkit-fill-available",
    height: "-webkit-fill-available",
  };
  return (
    <div>
      <section className="block relative bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0">
          <Image src={bgbanner} alt="background image" style={banner} />
        </div>
        {/* <div class="absolute inset-0 bg-darkBg/75 sm:bg-transparent sm:from-white/95 sm:to-white/25  sm:bg-gradient-to-l" /> */}

        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 md:flex h-auto lg:items-center justify-between lg:px-8">
          <div className="md:w-1/2 w-full text-center sm:text-left">
            <h1 class="text-3xl text-white leading-5 font-Outfit font-extrabold lg:text-5xl">
              A good
              <span class="font-Outfit font-extrabold text-orange-home8">
                #education
              </span>
              is always a base of
              <span class="flex p-6 font-Outfit font-extrabold w-fit text-white bg-blue-light">
                A bright future
              </span>
            </h1>

            <p class="mt-5 text-white font-OpenSans max-w-lg sm:text-l/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                class="block w-full rounded-md bg-gradient-to-r from-yellow-home7 from-10% via-orange-home7 via-50% to-orange-home7 to-100% px-12 py-3 text-md font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Start as student
              </a>

              <a
                href="#contact"
                class="block w-full rounded-md border-2 bg-transparent border-gray-100 px-12 py-3 text-md font-medium text-white focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Join as Instructor
                <span className="font-Outfit ml-2 font-normal text-sm text-yellow-home8">
                  It is Free!
                </span>
              </a>
            </div>
          </div>
          <div className="flex md:w-1/2 w-full justify-end sm:text-right">
            <Image
              className="md:w-[80%] xl:w-full w-full"
              alt="Party"
              src={bannerrightimage}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
