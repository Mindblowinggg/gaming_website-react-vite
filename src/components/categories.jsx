import f1 from '../assets/f124.png'
import goli from '../assets/goli.png'
import minecraft from  '../assets/minecraft.png'
import gta5 from '../assets/gta5.png'
import ac from '../assets/acvalhalla.png'
import fighter from  '../assets/fighter.png'




const categories = () => {
  
  return (


    
     
<div className="w-full bg-[#1C1B29]  relative h-[527px]"> {/* full div*/ }


{/* heading div with 80% width */}
<div className="w-[80%] h-14  m-auto">



{/* game categies title div */}
  <div className="w-56">
    <h1 className="text-white text-2xl font-bold">
      Game Categories 
    </h1>
  </div>
  

  {/* pics div-----------------------------------------*/}


  <div className="w-[80%]  items-center justify-between absolute left-[10%] right-[10%] bottom-0 h-[444px]  flex"  >


    {/*there is 2 divs left and right*/}


   <div className="  flex-col">{/*left div */}

    <div className="w-[588px] relative transition duration-150 hover:scale-105 cursor-pointer  " > {/*upper pic div */}

    <img src={f1} alt="" />
    <h2 className='absolute bottom-5 left-5 text-white font-medium'>Sports and Racing</h2>

    </div>


    <div className="w-[588px] flex">{/*lower pics divs which has 2 photos*/}


      <div className="transition relative duration-150 hover:scale-105  cursor-pointer">{/*first pic */}

        <img src={goli} alt="" />
        <h2 className='absolute bottom-5 left-5 text-white font-medium'>Strategy</h2>

      </div>

      <div className="transition duration-150 relative hover:scale-105  cursor-pointer">{/*second pic */}
        <img src={minecraft} alt="" />
        <h2 className='absolute bottom-5 left-5 text-white font-medium'>Survival</h2>

      </div>



    </div>



   </div>



   <div className=" flex-col">{/*right div */}

    <div className=" w-[588px] flex">{/*upper pics divs which has 2 photos*/}


      <div className= " relative transition  duration-150 hover:scale-105  cursor-pointer">{/*first pic */}
        
        <img src={gta5} alt="" />
        <h2 className='absolute bottom-5 left-5 text-white font-medium'>RPG</h2>

      </div>

      <div className="transition duration-150 hover:scale-105 relative cursor-pointer">{/*second pic */}

        <img src={ac} alt="" />
        <h2 className='absolute bottom-5 left-5 text-white font-medium'>Adventure</h2>

      </div>



    </div>

    <div className="w-[588px] relative transition duration-150 hover:scale-105  cursor-pointer" > {/*lower pic div */}

    <img src={fighter} alt="" />
    <h2 className='absolute bottom-5 left-5 text-white font-medium'>Action</h2>

    </div>


    

   </div>


  </div>


</div>


</div>



  
     
  )
}

export default categories