import React from 'react';

const Notification = ({title, text, isError, onClose, visible}) => {
    return (
        <div className={`absolute transition-all duration-300 ${visible ? "top-0" : "-top-64"}`}>
            <div className="shadow-light bg-white w-fit shadow-sky-400 px-4 md:mt-8">
                <img className="cursor-pointer ml-auto" src="/cross.svg" alt="close" onClick={onClose}/>
                <div className={`text-center uppercase text-2xl ${isError ?
                    "text-red-400" :
                    "text-sky-400"}`}>{title}</div>
                <div className="font-bold text-center text-lg pb-5">{text}</div>
            </div>
        </div>
    );
};

export default Notification;