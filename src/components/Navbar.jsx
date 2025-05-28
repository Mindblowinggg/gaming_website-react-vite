import { useState } from 'react'
// import { HiMenu, HiX } from 'react-icons/hi'
import { motion } from "framer-motion";
import { fadeIn} from "../utils/motion";
import { logoanimation } from '../utils/logoanimation';
import logo from '../assets/game-controller.png';
import { IoIosArrowDown } from "react-icons/io";
// import { hamMenu } from '../utils/hamMenu';


const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#Categories", label: "Categories" },
    { href: "#Trending", label: "Trending" },
    { href: "#Filter", label: "Filter" },
    { href: "#About Us", label: "About Us" },
  ]

  return (
    <motion.nav 
    
      
      initial="hidden"
      whileInView="show" 
      className="fixed top-0 left-0 right-0 py-4 h-24  backdrop-blur-xs z-50  "
    >


      <div className="flex justify-between items-centre  m-auto w-[80%]">
        
        
         <div className="flex-col items-center">
        
        <motion.div 
          
          className='flex'
 
        >
         <motion.img src={logo} className="h-8 w-auto mr-2"  variants={logoanimation()} />
         <h3 className='text-white'>prime</h3>
         
        </motion.div>

        <div >

          <h1 className='text-orange-500 font-bold text-2xl w-full'>Gaming</h1>

        </div>
        </div>

        

      
      

        
        
        
        {/* Mobile Menu Button */}
        {/* <motion.button 
          variants={fadeIn('left', 0)}
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (<HiX className="h-7 w-7" />) : (<HiMenu className="h-7 w-7" /> )}
          
        </motion.button> */}

        
        
      

        {/*________Navigation Links - Desktop __________*/}
        <motion.div 
          variants={fadeIn('down', 0)}
          className="flex items-center gap-20"
        >
          {navLinks.map((link, index) => (
            <motion.a 
              key={index}
              variants={fadeIn('down', 0.2 * (index ))}
              href={link.href }
              onClick={() => setActiveLink(link.href)}
            className={
                
              `
              flex  items-end
                font-medium
               ${activeLink === link.href ? 'text-orange-500' : 'text-white hover:text-orange-500'}
               
              `
              
              }
            >
              {link.label} <span><IoIosArrowDown  className='text-orange-500'/></span>

            </motion.a>
          ))}
        </motion.div>

         <div className="hidden [perspective::1000px] [transform-style:preserve-3d] md:flex gap-4 justify-center items-center  "
          >
          <motion.button
          whileHover={{
           
           boxShadow:"0px 0px 20px #ffff",
           

          }}

          transition={{
            duration:0.1,
          }}
          className="   group flex relative justify-center items-center p-3 bg-orange-500    cursor-pointer text-white font-medium text-16   h-10  w-24 rounded-2xl  "
          
          >
            <span>Sign Up</span>
            <span className="absolute inset-x-0 bottom-[-2px] bg-gradient-to-r from transparent via-white to-transparent h-[3px] w-3/4 m-auto blur-[2px] "></span>

          <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-[-2px] bg-gradient-to-r from transparent via-white to-transparent h-[6px] w-3/4 m-auto blur-[4px] "></span>
        
          </motion.button>

          <button className=" flex  justify-center items-center pb-1 cursor-pointer  bg-transparent hover:bg-gray-700 hover:scale-105 transition-all text-orange-500 w-20 h-10 font-medium  text-16 rounded-3xl border border-orange-500"
         
          >
            Login
          </button>
        </div>




      </div>

      {/* Mobile Menu*/}
      {/* {isMenuOpen && (
        <motion.div 
    
          className="md:hidden bg-white border-t border-gray-100 py-4"
        >
          <motion.div 
            
            className="container mx-auto px-4 space-y-4"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2
                  ${activeLink === link.href ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {link.label}
              </motion.a>
            ))}

            <div className='flex justify-center'>
            <motion.button 
              variants={hamMenu()}
              initial="hidden"
              whileInView="show" 
              
              className="w-40  bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium  hover:shadow-lg hover:shadow-blue-100"
            >
              Get in touch
            </motion.button>

            </div>
          </motion.div>
        </motion.div> 
      )} */}
    </motion.nav>
  )
}

export default Navbar