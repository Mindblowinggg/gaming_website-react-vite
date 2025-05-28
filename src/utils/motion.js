/*______________________________________________________________________________________________*/

/* (yeh fade in animation ke liye code kiya hai) */


export const fadeIn = (direction, delay) => {  

  /* 2 arguments - (direction) and (delay)*/         

  return {
    hidden: {
      y: direction === 'nav' ? 750: direction === 'up' ? 10 :direction === 'down' ? -50 : 0,
      x: direction === 'nav' ? -300 :direction === 'left' ? 10   : direction === 'right' ? -80 : 0,
      opacity: 0,
      

    },
    
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      
      transition: {
        
        
        duration: 0.5,
        delay: delay,
        
        
        
      }
    }
  };
};


/*______________________________________________________________________________________________*/



export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      }
    }
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      }
    }
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      }
    }
  };
};

export const scale = (delay) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      }
    }
  };
}; 