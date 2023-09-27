import React from "react";


const SelectedButton = ({text, className, isSelected, onClick}) => {
    return (
        <div
            onClick={onClick}
            className={`relative flex items-center cursor-pointer border border-sky-400 ${
                isSelected ? "bg-sky-400" : "bg-white"
            } ${className}`}
        >
            <div className={`relative z-10 w-full text-center text-xl uppercase leading-9 ${isSelected ? "text-white" : "text-stone-500"}`}>
                {text}
            </div>
        </div>
    );


};
export default SelectedButton;
