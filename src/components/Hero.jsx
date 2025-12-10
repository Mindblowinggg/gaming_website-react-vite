import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { fadeIn } from "../utils/motion";
import { AnimatePresence, motion } from "framer-motion";
import image1 from "../assets/witcherbig.png";
import image2 from "../assets/rdr2big.png";
import image3 from "../assets/gowbig.png";
import image4 from "../assets/ghostbig.png";
import image5 from "../assets/lastofusbig.png";
import logo1 from "../assets/witcherlogo.png";
import logo2 from "../assets/rdr2logo.png";
import logo3 from "../assets/gowlogo.png";
import logo4 from "../assets/ghostlogo.png";
import logo5 from "../assets/lastofuslogo.png";
import m from "../assets/m vectorr.png";
import calendar from "../assets/calendar.png";
import { imageinfo } from "../utils/imageInfo";

const logoimages = [logo1, logo2, logo3, logo4, logo5];

const images = [image1, image2, image3, image4, image5];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative xl:h-full md:h-full lg:h-full w-full h-[70vh]  overflow-hidden bg-black">
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="h-full w-full md:object-cover object-cover"
      />

      <div className="absolute top-[9%] left-[10%] right-[10%] m-auto w-[80%] h-155 ">
        {/*left div-------------*/}
        <motion.div
          className=" text-white h-full xl:w-1/4 w-[80%] gap-8 relative "
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          animate="show"
        >
          <div className="xl:bottom-0 lg:bottom-2 absolute">
            {/*left ke andar wala inside div*/}

            <h2 className="text-4xl font-bold absolute top-1/2 md:relative xl:flex mb-8">
              {imageinfo[currentIndex].title}
            </h2>

            <p className="text-gray-300 text-justify lg:text-lg hidden lg:flex lg:mb-10  xl:mb-8 lg:w-[40%] xl:w-full">
              {imageinfo[currentIndex].description}
            </p>
            {/* ------------------------RATING AND DATE ------------------------ */}
            <div
              className="flex mb-8 mt-100 md:relative w-[80%] md:justify-between
             md:w-full lg:w-[50%] xl:w-full"
            >
              <div className="flex gap-2">
                <div>
                  <img src={m} alt="m logo" />
                </div>

                <div>
                  <span className="text-[#FFCC00]  text-xl font-semibold">
                    {imageinfo[currentIndex].rating}
                  </span>
                  <span className="text-gray-400">/100</span>
                </div>
              </div>

              <div className="ml-5 flex justify-center items-center">
                <img className="mr-2" src={calendar} alt="" />

                <span className="text-gray-300">
                  {imageinfo[currentIndex].releasedate}
                </span>
              </div>
            </div>
            {/* ----------------------AVAILABLE FOR AND GENRE----------------------- */}
            <div className=" xl:justify-between gap-10 w-fit mb-8 xl:w-full lg:w-[80%] md:w-1/2 W-1/2 hidden md:flex">
              <div>
                <h3 className="text-md font-semibold text-center text-gray-300 mb-1">
                  Available For:
                </h3>
                <p className="text-sm text-gray-400 text-center">
                  {imageinfo[currentIndex].availablefor}
                </p>
              </div>
              <div>
                <h3 className="text-md  font-semibold text-center text-gray-300 mb-1">
                  Genre:
                </h3>
                <p className="text-sm text-center text-gray-400">
                  {imageinfo[currentIndex].genre}
                </p>
              </div>
            </div>
            {/* ------------------AVAILABLE ON WHICH PLATFORM---------------- */}
            <div className="hidden md:flex justify-between mb-8 xl:w-full lg:w-[80%] md:w-[70%] W-1/2">
              <button className="bg-gray-800 text-white w-24 hover:scale-110 transition-all rounded-md px-4 py-2 cursor-pointer text-sm">
                {imageinfo[currentIndex].pc}
              </button>
              <button className="bg-gray-800 text-white hover:scale-110 transition-all w-24 rounded-md px-4 py-2 cursor-pointer text-sm">
                {imageinfo[currentIndex].ps4}
              </button>
              <button className="bg-gray-800 text-white hover:scale-110 transition-all w-28 rounded-md px-4 cursor-pointer py-2 text-sm">
                {imageinfo[currentIndex].ps5}
              </button>
            </div>
            {/*-------------------- BUY NOW AND REVIEW BUTTON---------------- */}
            <div className="flex mt-10 gap-8 ">
              <button className="bg-[#FF5733] cursor-pointer text-white font-bold mb- py-3 px-6 rounded-3xl hover:scale-105 transition-all w-36">
                Buy Now
              </button>
              <button className="bg-transparent border cursor-pointer border-red-500  text-red-500 font-bold py-3 px-6  rounded-3xl hover:scale-105 transition-all w-44">
                Game review
              </button>
            </div>
          </div>
        </motion.div>

        {/*right side div   */}

        <div className=" right div h-[50%] w-[60%] absolute bottom-0 right-0 ">
          <div className="flex justify-between gap-4 items-center text-xl font-semibold">
            <p className="text-white xl:flex hidden">
              The Most <span className="text-orange-500 mx-2 ">Popular</span>
              Games
            </p>

            {/*---------------------- NEXT PREV BUTTONS ------------------------- */}
            <div className="flex gap-5 absolute right-0 bottom-[60%] xl:right-0 md:right-3 md:bottom-[50%] xl:bottom-full ">
              <motion.button
                whileTap={{ scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="w-12 h-12 rounded-xl  text-white  border border-white flex items-center justify-center hover:bg-orange-500 hover:scale-110  hover:text-white cursor-pointer transition-all"
                onClick={prevSlide}
              >
                <BsChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="  w-12 h-12 rounded-xl  text-white  border border-white flex items-center justify-center hover:bg-orange-500 hover:scale-110 hover:text-white cursor-pointer transition-all"
                onClick={nextSlide}
              >
                <BsChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          <div className="w-full h-full xl:flex hidden">
            <div className="flex absolute bottom-0  box-border gap-4 h-[72%] w-full">
              {logoimages.map((logo, index) => (
                <div
                  key={index}
                  className={` cursor-pointer
               ${
                 index === currentIndex
                   ? " box-border  scale-120 shadow-amber-500 border-3 border-orange-500 transition duration-200 delay-20 ease-in  "
                   : ""
               }
              `}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img
                    src={logo}
                    alt=""
                    className="w-56 box-border  h-[100%]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
