

export const hamMenu = () => {  

  return{

    hidden:{
       y: 30,
      x: 0,
      opacity: 0,
      
    },


    show: {
      y: 0,
      x: 0,
      opacity: 1,
      scale:1,
     
      transition: {
        
        duration: 0.5,
      
        }
      }
    
  };
};
