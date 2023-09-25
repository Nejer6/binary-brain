import React from 'react';

const Button = ({text, onClick, className, selected}) => {
    return (
        <div onClick={onClick} className={`relative flex items-center cursor-pointer bg-sky-400 group ${className}`}>
            <div className={`bg-orange-400 absolute w-0 ${selected ? "w-full" :"group-hover:w-full"} transform transition-all duration-300 h-full end-0`}/>
            <div className="relative z-10 w-full text-center text-white text-xl uppercase leading-9 px-1">
                {text}
            </div>
        </div>
    );
};

export default Button;