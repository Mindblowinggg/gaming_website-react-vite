import logo from "../assets/game-controller.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full justify-center items-center h-[400px] flex bg-[#171621]">
      <div className="w-[80%] relative  bg-[#171621] flex ">
        {/*first div starts here */}
        <div className="flex gap-8 w-[500px] h-[250px] flex-col">
          <div className="flex items-center ">
            <div className="flex-col items-center ">
              <div className="flex">
                <img src={logo} className="h-8 w-auto mr-2" />
                <h3 className="text-white">prime</h3>
              </div>

              <div>
                <h1 className="text-[#FF5733] font-bold text-2xl w-full">
                  Gaming
                </h1>
              </div>
            </div>
            <div className="text-white">
              <p>Unleash your gaming potential with Prime Gaming</p>
            </div>
          </div>
          <div className="text-[#888888] text-justify">
            <p>
              Step into the future of gaming with Prime Gaming. Explore top-tier
              reviews, news, and in-depth analysis on the latest and greatest
              games. Join the gaming community now to get exclusive content and
              features.
            </p>
          </div>
          <div className="flex justify-evenly items-center mt-5 text-3xl text-white">
            {/*icons */}
            <a href="">
              <FaSquareFacebook />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="absolute right-0 text-white gap-x-10 flex">
          {/*second div */}

          <div className="flex items-center gap-y-4 flex-col">
            {/*first col */}
            <h2 className="text-orange-500 text-xl font-bold">Explore</h2>
            <div className="text-[#888888] gap-y-3 flex flex-col items-center ">
              <p>Trending games</p>
              <p>Upcoming releases</p>
              <p>reviews</p>
              <p>news</p>
            </div>
          </div>
          <div className="flex  items-center gap-y-4 flex-col">
            {/*second col */}
            <h2 className="text-orange-500 text-xl font-bold">Explore</h2>
            <div className="text-[#888888] gap-y-3 flex flex-col items-center ">
              <p>Trending games</p>
              <p>Upcoming releases</p>
              <p>reviews</p>
              <p>news</p>
            </div>
          </div>
          <div className="flex  items-center gap-y-4 flex-col">
            {/*third col */}
            <h2 className="text-orange-500 text-xl font-bold">Explore</h2>
            <div className="text-[#888888] gap-y-3 flex flex-col items-center ">
              <p>Trending games</p>
              <p>Upcoming releases</p>
              <p>reviews</p>
              <p>news</p>
            </div>
          </div>
          <div className="flex  items-center gap-y-4 flex-col">
            {/*fourth col */}
            <h2 className="text-orange-500 text-xl font-bold">Explore</h2>
            <div className="text-[#888888] gap-y-3 flex flex-col items-center ">
              <p>Trending games</p>
              <p>Upcoming releases</p>
              <p>reviews</p>
              <p>news</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
