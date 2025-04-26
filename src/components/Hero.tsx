import React from "react";
import { ArrowRight } from "lucide-react";

// const brands = [
//   {
//     name: "ETV Bharat",
//     logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFizWojmS8ErqRiC1d5y3FWYXNolqiT_FSQ&s",
//   },
//   {
//     name: "Untold - By Aboyob",
//     logo: "https://media.licdn.com/dms/image/v2/D5605AQHG0eGNJgd9Sw/feedshare-thumbnail_720_1280/feedshare-thumbnail_720_1280/0/1713106336827?e=2147483647&v=beta&t=1gs6l4Bz3y1-lRcIwTwabKvANYh1Zpm5Cfow242CJz0",
//   },
//   {
//     name: "Dainik Assam",
//     logo: "https://the-media-ant.mo.cloudinary.net/medias/5a44cc50120ee13cdca6e76f/1565810461739/93b81a280dd0729a4d236f2879a3411c.jpg?tx=w_350",
//   },
//   {
//     name: "The Truth India",
//     logo: "https://media.licdn.com/dms/image/v2/C560BAQGN6aSFSg3mXQ/company-logo_200_200/company-logo_200_200/0/1630640909001?e=2147483647&v=beta&t=mSRwdHA9QzYbirS2djesBqSIRF5w6VSDqkEYSgToalA",
//   },
//   {
//     name: "Satya",
//     logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAysxt6mPkU50AzV4-TCj6KZTUOzqIp4AZ_Q&s",
//   },
// ];

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 opacity-0 animate-fade-in-up">
            LLM Research for Business Innovation
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl opacity-0 animate-fade-in-up animation-delay-200">
            We specialize in LLM research and development, creating AI agents
            that transform business operations. Our Assamese chatbot showcases
            our expertise in building culturally-aware AI solutions.
          </p>
          <div className="flex gap-4 items-center flex-wrap opacity-0 animate-fade-in-up animation-delay-400">
            <a href="https://chat.navdyut.com" className="bg-white border-2 border-orange-600 hover:bg-orange-600 hover:text-white text-orange-600 font-medium py-3 px-6 rounded-md transition-colors flex items-center gap-2 group">Try Our Assamese AI       <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              /></a>
            <a
              href="#services"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center gap-2 group"
            >
              Explore Our Services
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
      {/* <div className=" mt-24 md:mt-36 relative overflow-hidden">
      <div className="border-gray-100 border-t w-full md:mb-24 mb-14 "></div>
        <h1 className=" text-center md:mb-16 mb-8 font-display underline text-2xl md:text-4xl  ">
          Featured In
        </h1>
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex gap-4 md:gap-8 animate-marquee-left hover:pause-animation">
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-20 h-16 md:w-32 md:h-20 relative group"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 "
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
