import React, { useState } from "react";


const Testbutton = ({text, className, isSelected, onClick}) =>{

  

    return (
      <div onClick={onClick}  className={`relative flex items-center cursor-pointer border border-sky-400 ${
        isSelected? "bg-sky-400 group" : "bg-white"
      } ${className}`}>
        
          <div className={isSelected? "relative z-10 w-full text-center text-white text-xl uppercase leading-9" :
           "relative z-10 w-full text-center text-stone-500 text-xl uppercase leading-9"}>
            {text}
          </div>
      </div>
      );
  

};
export default Testbutton;
