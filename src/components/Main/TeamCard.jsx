import React from 'react';

const TeamCard = ({name, description, src}) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="w-full px-10">
                <img
                    className="w-full object-cover"
                    src={src}
                    alt=""
                />
            </div>



            <div className="text-center text-sky-400 text-4xl uppercase my-5 font-tektur">{name}</div>
            <div className="text-2xl leading-9 hyphens-auto">{description}</div>
        </div>
    );
};

export default TeamCard;