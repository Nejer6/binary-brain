import React from 'react';

const InputWithLabel = ({label}) => {
    return (
        <div className={"flex"}>
            <div className="text-2xl">{label}</div>
            <input type="number" className="border-2 border-sky-400 ml-2 w-14"/>
        </div>
    );
};

export default InputWithLabel;