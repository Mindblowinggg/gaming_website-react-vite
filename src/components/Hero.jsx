import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { fadeIn} from "../utils/motion";
import { motion } from "framer-motion";
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

const logoimages = [logo1, logo2, logo3, logo4, logo5];

const images = [image1, image2, image3, image4, image5];

const imageinfo = [
  {
    title: "The Witcher 3",
    description:
      "The Witcher 3: Wild Hunt is an open-world RPG where players follow Geralt of Rivia, a monster hunter, in his quest to find his adopted daughter, Ciri. Set in a richly detailed and expansive world, the game offers a deep narrative and complex choices that affect the game's outcome.",

    rating: "93",

    releasedate: "May 19, 2015",
    availablefor: "pc-ps4",
    genre: "horror",
    pc: "pc",
    ps4: "ps4",
    ps5: "ps5-NA",
  },
  {
    title: "Red Dead Redemtion II",
    description:
      "In this open-world action-adventure game, players control Arthur Morgan, an outlaw navigating the downfall of the Wild West. Set in a vast, immersive world, the game follows Arthur’s struggles with loyalty, survival, and morality as his gang faces opposition from law enforcement.",
    rating: "97",

    releasedate: "Oct 26, 2018",
    availablefor: "pc-ps4-ps5",
    genre: "action",
    pc: "pc",
    ps4: "ps4",
    ps5: "ps5",
  },
  {
    title: "God Of War: Ragnarok",
    description:
      "In this soft reboot, Kratos embarks on a journey with his son Atreus in the world of Norse mythology. Combining intense combat with a rich narrative, the game explores themes of fatherhood, redemption, and the gods’ power over fate.",
    rating: "94",
    releasedate: " Apr 20, 2018",
    availablefor: "ps4-ps5",
    genre: "fantasy",
    pc: "pc-NA",
    ps4: "ps4",
    ps5: "ps5",
  },
  {
    title: "Ghost Of Tushima",

    description:
      "Set in feudal Japan, players follow Jin Sakai, a samurai warrior defending his home from Mongol invaders. Blending stealth, swordplay, and open-world exploration, the game is a tribute to classic samurai films and the code of honor that drives its protagonist.",

    rating: "83",
    releasedate: "Jul 17, 2020",
    availablefor: "ps5",
    genre: "action",
    pc: "pc-NA",
    ps4: "ps4-NA",
    ps5: "ps5",
  },
  {
    title: "The Last Of Us II",

    description:
      "The Last of Us Part II continues the emotional journey of Ellie, now older and seeking revenge. Set in a post-apocalyptic world, the game combines stealth and action, forcing players to confront moral dilemmas and the harsh consequences of violence.",

    rating: "93",
    releasedate: "Jun 19, 2020",
    availablefor: "pc-ps4-ps5",
    genre: "survival",
    pc: "pc",
    ps4: "ps4",
    ps5: "ps5",
  },
];

{
  /*start------------------------------------------------------ */
}

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex) => (currentIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative h-full w-full  overflow-hidden">
      <motion.img
        src={images[currentIndex]}
        className=" h-full w-full object-cover"
      />

      <div className="absolute top-[9%]  left-[10%] right-[10%] m-auto  w-[80%] h-155 ">
        {/*centred div*/}

        {/*left div-------------*/}
        <motion.div className=" text-white h-full  w-84 gap-8 relative "
        variants={fadeIn('right', 0.1)}
              initial="hidden"
              whileInView="show">
          <div className="bottom-0 absolute ">
            {/*left ke andar wala inside div*/}

            <h2 className="text-4xl font-bold  mb-8">
              {imageinfo[currentIndex].title}
            </h2>

            <p className="text-gray-300  text-justify mb-8">
              {imageinfo[currentIndex].description}
            </p>

            <div className="flex  mb-8">
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

              <div className="ml-auto flex items-center">
                <img className="mr-2" src={calendar} alt="" />

                <span className="text-gray-300">
                  {imageinfo[currentIndex].releasedate}
                </span>
              </div>
            </div>

            <div className="flex justify-between mb-8">
              <div>
                <h3 className="text-md font-semibold text-center text-gray-300 mb-1">
                  Available For:
                </h3>
                <p className="text-sm text-gray-400">
                  {imageinfo[currentIndex].availablefor}
                </p>
              </div>
              <div>
                <h3 className="text-md font-semibold text-center text-gray-300 mb-1">
                  Genre:
                </h3>
                <p className="text-sm text-gray-400">
                  {imageinfo[currentIndex].genre}
                </p>
              </div>
            </div>

            <div className="flex justify-between  mb-8">
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

            <div className="flex justify-between ">
              <button className="bg-[#FF5733]   cursor-pointer text-white font-bold mb- py-3 px-6 rounded-3xl hover:scale-105 transition-all w-36">
                Buy Now
              </button>
              <button className="bg-transparent border cursor-pointer border-red-500  text-red-500 font-bold py-3 px-6  rounded-3xl hover:scale-105 transition-all w-44">
                Game review
              </button>
            </div>
          </div>
        </motion.div>

        {/*right side div   */}

        <div className=" right div   h-[50%] w-[68%] absolute bottom-0 right-0 ">
          <div className="flex justify-between gap-4 items-center text-xl   font-semibold">
            <p className="text-white ">
              The Most <span className="text-orange-500 ">Popular </span>Games
            </p>
            <div className="flex gap-2">
              <motion.button
                whileTap={{ scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="  w-12 h-12 rounded-xl  text-white  border border-white flex items-center justify-center hover:bg-orange-500 hover:scale-110  hover:text-white cursor-pointer transition-all"
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

          <div className="w-full h-full">
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
