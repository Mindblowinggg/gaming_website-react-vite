import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { logoanimation } from "../utils/logoanimation";
import logo from "../assets/game-controller.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#Categories", label: "Categories" },
    { href: "#Trending", label: "Trending" },
    { href: "#Filter", label: "Filter" },
    { href: "#About Us", label: "About Us" },
  ];

  return (
    <motion.nav
      initial="hidden"
      whileInView="show"
      className="fixed top-0 left-0 right-0 py-4 h-24  backdrop-blur-xs z-50 bg-amber-900 "
    >
      <div className="flex justify-between items-centre  m-auto w-[80%] ">
        {/*--------------------LOGO DIV-------------------*/}
        <div className="flex-col items-center">
          <a href="/">
            <div className="flex">
              <motion.img
                src={logo}
                className="h-8 w-auto mr-2  select-none"
                variants={logoanimation()}
              />
              <h3 className="text-white select-none">prime</h3>
            </div>

            <div>
              <h1 className="text-orange-500 font-bold text-2xl w-full  select-none">
                Gaming
              </h1>
            </div>
          </a>
        </div>
        {/* <================================================================> */}
        {/* -------------------------Mobile Menu Button----------------------- */}
        <motion.button
          variants={fadeIn("left", 0)}
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="h-8 w-8 text-white" />
          ) : (
            <HiMenu className="h-8 w-8 text-white" />
          )}
        </motion.button>

        {/*________------------Navigation Links - Desktop--------------__________*/}
        <div
          className="md:flex items-center justify-center gap-20 hidden
          "
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              variants={fadeIn("down", 0.2 * index)}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`
              flex  items-center gap-1
                font-medium 
               ${
                 activeLink === link.href
                   ? "text-orange-500"
                   : "text-white hover:text-orange-500"
               }
               
              `}
            >
              {link.label}
              <div>
                <IoIosArrowDown className="text-orange-500 mt-1" />
              </div>
            </motion.a>
          ))}
        </div>

        {/*----------------- SIGN UP AND LOGIN BUTTON --------------------*/}

        <div className="hidden  md:flex gap-4 justify-center items-center  ">
          <button className="group flex hover:box-shad relative justify-center items-center p-3 bg-orange-500 cursor-pointer text-white font-medium text-16 h-10 w-24 rounded-2xl transition-all duration-300 hover:shadow-[0px_0px_10px_#ffffff] ">
            <span>Sign Up</span>
          </button>

          <button className=" flex  justify-center items-center pb-1 cursor-pointer  bg-transparent hover:bg-gray-700  transition-all duration-300 text-orange-500 w-20 h-10 font-medium  text-16 rounded-3xl border hover:text-white border-orange-500 ">
            Login
          </button>
        </div>
      </div>

      {/* ------------------------Mobile Menu--------------------------- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="show"
            exit={{ y: -30, opacity: 0 }}
            className="md:hidden mt-10 z-50"
          >
            <motion.div className="container w-[80%] m-auto space-y-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  variants={fadeIn("down", 0.1 * index)}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  className={`block text-center text-xl font-semibold py-2
                  ${
                    activeLink === link.href
                      ? "text-orange-500"
                      : "text-gray-600"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="flex justify-center">
                <motion.button
                  variants={fadeIn("down", 0.5)}
                  initial="hidden"
                  animate="show"
                  className="w-40 bg-orange-500 text-white px-6 py-3 rounded-lg  text-sm font-medium "
                >
                  Get in touch
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
