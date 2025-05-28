import { MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import m from "../assets/m vectorr.png";
import calendar from "../assets/calendar.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";


const Trending = () => {
  const imageData = [
    {
      image: "src/assets/monkeylogo.png",
      title: "Image Title 1",
      rating: 91,
      releasedate: "2015",
      actualprice:'800/-',
      afterdiscountprice:'700/-',
      discount:'10%',
    },
    {
      image: "src/assets/kombatlogo.png",
      title: "Image Title 2",
      rating: 98,
      releasedate: "2015",
       actualprice:'800/-',
       afterdiscountprice:'700/-',
        discount:'11%',
    },
    {
      image: "src/assets/alanlogo.png", // अपनी इमेज का वास्तविक पाथ यहाँ जोड़ें
      title: "Image Title 3",
      rating: 95,
      releasedate: "2015",
       actualprice:'800/-',
       afterdiscountprice:'700/-',
        discount:'10%',
    },
    {
      image: "src/assets/spiderman2logo.png", // अपनी इमेज का वास्तविक पाथ यहाँ जोड़ें
      title: "Image Title 4",
      rating: 90,
      releasedate: "2015",
       actualprice:'800/-',
       afterdiscountprice:'700/-',
        discount:'10%',
    },
    {
      image: "src/assets/witcherlogo.png", // अपनी इमेज का वास्तविक पाथ यहाँ जोड़ें
      title: "Image Title 5",
      rating: 87,
      releasedate: "2015",
       actualprice:'800/-',
       afterdiscountprice:'700/-',
        discount:'10%',
    },
    {
      image: "src/assets/lastofuslogo.png", // अपनी इमेज का वास्तविक पाथ यहाँ जोड़ें
      title: "Image Title 6",
      rating: 91,
      releasedate: "2015",
       actualprice:'800/-',
       afterdiscountprice:'700/-',
        discount:'10%',
    },
    {
      image: "src/assets/gowlogo.png", // अपनी इमेज का वास्तविक पाथ यहाँ जोड़ें
      title: "Image Title 7",
      rating: 91,
      releasedate: "2015",
       actualprice:'800/-',
       afterdiscountprice:'700/-',
        discount:'10%',
    },
    {
      image: "src/assets/rdr2logo.png", // अपनी इमेज का वास्तविक पाथ यहाँ जोड़ें
      title: "Image Title 8",
      rating: 97,
      releasedate: "2015",
       actualprice:'800/-',
       afterdiscountprice:'700/-',
        discount:'10%',
    },
  ];

   let settings = {

    dots: false,
    infinite: false,     
    speed: 300,          // स्लाइड एनीमेशन की गति
    slidesToShow: 5,     // एक बार में 5 स्लाइड दिखाता है
    slidesToScroll: 1,   // एक बार में 1 स्लाइड स्क्रॉल करता है
    autoplay: false,      // स्वचालित रूप से स्लाइड करता है
    autoplaySpeed: 2000, // स्वचालित स्लाइडिंग के बीच का समय (मिलीसेकंड में)
    cssEase: "linear",   // CSS एनीमेशन कर्व
  };

  return (
    <div className="w-full h-[460px] bg-[#1C1B29] relative flex-col ">
      
      {/*main trending div */}
      {/* heading div with 80% width */}
      <motion.div className="w-[80%]  h-14 flex m-auto"
       variants={fadeIn('right', 0)}
                    initial="hidden"
                    whileInView="show">
        {/* Trending games title and viewall div */}

        <div className="gap-12 flex items-center">
          {/*div ke andar heading aur viewall ka div hai */}

          {/*heading div */}
          <div>
            <h1 className="text-white mb-1.5 text-2xl font-bold">
              Trending Games
            </h1>
          </div>

          {/*view all div */}
          <div className="flex ">
            <p className="text-orange-500  p-1 cursor-pointer">View all</p>
            <MdArrowForwardIos className="text-orange-500 items-center mt-0.5 cursor-pointer text-3xl " />
          </div>
        </div>
      </motion.div>


      {/*bottom div slider*/}


      <motion.div className="w-[80%]  absolute bottom-0 left-[10%] right-[10%] h-[370px]  m-auto"
      >

       <Slider {...settings} >
        {imageData.map((item, index) => (
          <div key={index} className=" h-[372px] w-[227px] p-2.5 flex justify-center items-center  border-1 border-[#7D3C98]  rounded-xl ">
            <div className="h-[238px] w-[216px] m-auto" >
              <img src={item.image} className="h-full w-full hover:scale-100 rounded-xl" alt="" />  
            </div>
            <p className="text-white p-1">{item.title}</p>



         {/*rating div*/}

          <div className="flex-col  justify-evenly mt-3  gap-2.5">
            <div className=" flex justify-between items-center  text-center ">  
              <div className="h-8 w-8 flex">
                <img src={m} alt="m logo" className="mr-1" />

                <div className="mr-6">
                <span className="text-[#FFCC00]  text-xl font-semibold">
                  {item.rating}
                </span>
                <span className="text-gray-400 text-sm ">/100</span>
              </div>
              </div>

              
              <div className=" flex items-center">
              <img className=" h-5 w-5" src={calendar} alt="" />

              <span className="text-gray-300">{item.releasedate}</span>
            </div>
            </div>


          {/*---------------------------------------------------------*/}  

         {/*price div-------------------------------------- */}


         <div className="flex justify-between mt-5">
         <div className="flex gap-2">
          <p className="line-through text-[11px] text-gray-300 font-bold" >{item.actualprice}</p>

          <p className="text-sm text-white font-semibold " >{item.afterdiscountprice}</p>

          <p className="w-8 flex justify-center items-center text-white text-[10px] rounded-xl h-5 bg-amber-500">{item.discount}</p>

          </div>

          <button className="text-white cursor-pointer text-center  justify-center items-center text-sm flex hover:scale-105 transition duration-100">
            <span className="flex justify-center items-center ml-3 text-center font-medium">Buy Now  </span>
             <span  className="flex justify-center  items-center ml-1 mt-1 text-orange-500">
              <FaLongArrowAltRight  />
              </span>

          </button>


         </div>

         </div>


            
          </div>
        ))}
      </Slider>
        
      </motion.div>
    </div>
  );
};

export default Trending;
