
export const EasiIn = {
  initial: { opacity: 0, x: -20, },
  animate: { opacity: 1, x: 0, },  
  exit: { opacity: 0, x: 100 },
 transition: { 
  type: "tween",
  stiffness: 100,
  damping: 15,
  delay: 0.3
},
};
