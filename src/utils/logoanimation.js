


export const logoanimation = () => {  
       

  return {
    hidden: {
      x:100,
      y:200,
      opacity: 1,
      scale:5,
       
    
        
      

         
    },
    
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      scale:1,
     
      transition: {
      
        duration:2,
        type:"spring",
       
        
    
        }
      },
    
  };
};