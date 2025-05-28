import calendar from "../assets/calendar.png";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import m from "../assets/m vectorr.png";
import { motion } from "framer-motion";
import { useState } from "react";
import {fadeIn} from  "../utils/motion";
import image1 from "../assets/gameplay1.jpg";
import image2 from "../assets/gameplay2.jpg";
import image3 from "../assets/gameplay3.jpg";
import { RiRam2Line } from "react-icons/ri";

const mediaData = [image1, image2, image3];

const Gameofmonth = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % mediaData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex) => (currentIndex - 1 + mediaData.length) % mediaData.length
    );
  };

  return (
    <div className="h-[860px] w-full bg-gradient-to-r from-[#1C1B29] from-10% via-[#1b1a2c] via-50% to-[#22203b] to-100% ...">

      {/*centred div--------------------------------- */}


      <div className="h-full w-[80%]  m-auto">
        <motion.h1 className="text-3xl justify-center flex font-bold text-white"
        variants={fadeIn('down',0)}
        initial="hidden"
              whileInView="show"
        >
          Game of the month
        </motion.h1>

        {/*upper div---------------------------- */}

        <div className="h-[460px] gap-10 flex mt-8 w-full ">
          {/*upper div left div------------------------- */}
          <div className="w-[50%] h-full  ">
            <p className="text-white text-xl font-bold">Black Myth Wukong</p>
            <p className="text-white  mt-2 text-justify">
              Black Myth: Wukong is an action RPG inspired by the legendary
              Chinese novel Journey to the West. The game takes players on an
              epic journey as the Monkey King, Wukong, battling through
              mythological creatures and mastering magical abilities. Featuring
              stunning visuals, challenging combat, and an immersive world,
              Black Myth: Wukong aims to set a new standard for action RPGs.
            </p>

            {/* rating , available for, genre , date div */}

            <div className="flex mt-5  justify-between">
              {/*rating and date div */}
              <div className="flex-col  w-1/2">
                <div className="flex">
                  <div>
                    <img src={m} alt="m logo" />
                  </div>

                  <span className="text-[#FFCC00] ml-3 mt-0.5 text-xl font-semibold">
                    81
                  </span>
                  <span className="text-gray-400 flex ml-1 items-center">
                    /100
                  </span>
                </div>

                <div className="mt-4 flex  items-center">
                  <img className="mr-2" src={calendar} alt="" />

                  <span className="text-gray-300">2020</span>
                </div>
              </div>
              {/*available for and genre div */}
              <div className="w-1/2  text-center">
                <div>
                  <h3 className="text-md font-semibold text-center text-white mb-1">
                    Available For:
                  </h3>
                  <p className="text-sm text-gray-300">
                    Pc - Ps5 - Xbox Series X & S
                  </p>
                </div>
                <div>
                  <h3
                    className="text-md
                   font-semibold  text-center text-white "
                  >
                    Genre:
                  </h3>
                  <p className="text-sm text-gray-400">Action RPG Adventure</p>
                </div>
              </div>
            </div>

            {/*all buttons div */}
            <div className="flex justify-between mt-10">
              {/*left buttons div */}
              <div className="flex flex-col gap-4">
                <button className="text-gray-500 h-[30px] w-[280px] rounded-xl border-1 border-gray-500 hover:bg-gray-50 hover:text-black cursor-pointer">
                  ps5
                </button>
                <button className="text-gray-500  rounded-xl h-[30px] w-[280px] border-1 border-gray-500  hover:bg-gray-50 hover:text-black cursor-pointer ">
                  pc
                </button>
                <button className="text-white font-bold  rounded-full h-[44px] w-[280px] bg-orange-500  cursor-pointer  hover:bg-orange-600 hover:scale-105 transition duration-100 ">
                  Buy now
                </button>
              </div>
              {/*right buttons div */}
              <div className="flex flex-col gap-4">
                <button className="text-gray-500 h-[30px] w-[280px] rounded-xl border-1 border-gray-500  hover:bg-gray-50 hover:text-black cursor-pointer ">
                  ps4
                </button>
                <button className="text-gray-500  rounded-xl h-[30px] w-[280px] border-1 border-gray-500  hover:bg-gray-50 hover:text-black cursor-pointer">
                  ps3
                </button>
                <button className="text-orange-500 font-bold  rounded-full h-[44px] w-[280px] border-2 border-orange-500 cursor-pointer hover:bg-orange-50 hover:scale-105 transition duration-100">
                  Game Review
                </button>
              </div>
            </div>
          </div>

          {/*upper div right div------------------------ */}
          <div className="w-[50%] h-full ">
            <div className="flex justify-between">
              {" "}
              {/*this contains header items*/}
              <p className="text-white font-bold text-xl">Trailer & Gallery</p>
              <div className="flex gap-2">
                {/* 2 buttons div */}
                <motion.button
                  whileTap={{ scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="  w-12 h-10 rounded-xl  text-white  border border-white flex items-center justify-center hover:bg-orange-500 hover:scale-110  hover:text-white cursor-pointer transition-all"
                  onClick={prevSlide}
                >
                  <BsChevronLeft className="w-6 h-6" />
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="  w-12 h-10 rounded-xl  text-white  border border-white flex items-center justify-center hover:bg-orange-500 hover:scale-110 hover:text-white cursor-pointer transition-all"
                  onClick={nextSlide}
                >
                  <BsChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/*trailer screen------------------------------------ */}

            <div className="w-full h-[290px] mt-5">
              <img
                src={mediaData[currentIndex]}
                className="h-full w-full  object-cover "
              />
            </div>

            {/*slides--------------------------------------------------------- */}

            <div className=" flex w-full h-26 items-center gap-10 justify-center">
              {mediaData.map((item, index) => (
                <div
                  key={index}
                  className={` cursor-pointer h-[70%]  w-full flex justify-center
               ${
                 currentIndex === index
                   ? "  rounded-2xl scale-115 transition duration-200  ease-in  "
                   : ""
               }
              `}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img src={item} className={` 
               ${
                 currentIndex === index
                   ? " border-2  border-orange-500 "
                   : ""
               }
              `} />
                </div>
              ))}
            </div>
          </div>
   
        </div>

        {/*bottom  div */}
        <div className="flex h-[250px] gap-10 mt-6 w-full ">

          {/*first div----------------------------- */}

          <div className="h-full w-[32%] ">
           <span className="text-orange-500 ">Minimum </span><span className="text-white">System Requirments</span>
           <br />
           
           <span className="text-white font-medium">Os: </span><span className="text-gray-500 text-sm">Windoes 10 64-Bit Or Newer</span>
           <br />
           <br />
           <span className="text-white font-medium">CPU: </span><span className="text-gray-500 text-sm"> Intel Core i5-8400 / AMD 5 1600</span>
           <br />
           <br />
           <span className="text-white font-medium">Memory: </span> <span className="text-gray-500 text-sm">16 GB RAM</span>
           <br /> 
           <br />
           <span className="text-white font-medium">GPU: </span > <span className="text-gray-500 text-sm">NVIDIA GeForce GTX 1060 (6GB) / AMD 5 1600</span>
           <br />
           <br />
           <span className="text-white font-medium">DirectX: </span> <span className="text-gray-500 text-sm">Version 11</span>
           <br />
           <br />
           <span className="text-white font-medium">Storage: </span> <span className="text-gray-500 text-sm">130GB Available Space</span>

          </div>
          {/*second div----------------------------- */}

          <div className="h-full w-[32%] ">

            <span className="text-orange-500 ">Recommended </span><span className="text-white">System Requirments</span>
           <br />
           <span className="text-white font-medium">Os: </span><span className="text-gray-500 text-sm">Windoes 10 64-Bit Or Newer</span>
           <br />
           <br />
           <span className="text-white font-medium">CPU: </span><span className="text-gray-500 text-sm"> Intel Core i5-8400 / AMD 5 1600</span>
           <br />
           <br />
           <span className="text-white font-medium">Memory: </span> <span className="text-gray-500 text-sm">16 GB RAM</span>
           <br /> 
           <br />
           <span className="text-white font-medium">GPU: </span > <span className="text-gray-500 text-sm">NVIDIA GeForce GTX 1060 (6GB) / AMD 5 1600</span>
           <br />
           <br />
           <span className="text-white font-medium">DirectX: </span> <span className="text-gray-500 text-sm">Version 11</span>
           <br />
           <br />
           <span className="text-white font-medium">Storage: </span> <span className="text-gray-500 text-sm">130GB Available Space</span>


          </div>

          {/*third div----------------------------- */}

          <div className="h-[300px] w-[32%] rounded-2xl bg-[#181724]">

            <p className="text-white font-medium ml-4 ">RAM</p>
            <div className="flex justify-center mt-2">
            <input type="text" placeholder="enter your ram storage"  className="w-[90%] border border-white text-white "  /> <RiRam2Line className="text-white absolute right-50 h-6 w-10"  />
            </div>
            <p className="text-white font-medium ml-4 mt-1 ">GPU</p>
            <div className="flex justify-center mt-2">
            <input type="text" placeholder="enter your ram storage"  className="border border-white w-[90%]  text-white" /> <RiRam2Line className="text-white absolute right-50 h-6 w-10"  />
            </div>
            <p className="text-white font-medium ml-4 mt-1">CPU</p>
            <div className="flex justify-center mt-2">
            <input type="text" placeholder="enter your ram storage"  className="w-[90%] border border-white text-white" /><RiRam2Line className="text-white absolute right-50 h-6 w-10"  />

            </div>

            <div className="flex justify-center mt-4">
           <button className=" w-[90%] h-10 rounded-full font-semibold text-white bg-orange-500">Can i run it?</button>
           </div>
           <div className="flex justify-center mt-4">
           <button className=" w-[90%] h-10 rounded-full font-semibold text-white border-2 border-orange-500">Test My PC Automaticly</button>
           </div>

          </div>
        

        
      </div>
        


        </div>


        
    </div>
  );
};

export default Gameofmonth;
