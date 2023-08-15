import React from 'react';

const OurServicesCard = ({title, text, src}) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div>
                <div className="flex items-center bg-sky-400 justify-center w-full h-64">
                    <img src={src} className="w-55 h-55"/>
                </div>
            </div>

            <div className="text-center uppercase text-orange-400 text-4xl mb-3 mt-14">{title}</div>
            <div className="text-2xl leading-10 hyphens-auto">{text}</div>
        </div>
    );
};

export default OurServicesCard;