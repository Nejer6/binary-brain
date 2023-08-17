import React from 'react';
import Link from "next/link";

const HeaderElement = ({href, text, isSelected, onClick, className}) => {
    return (
        <div className={className}>
            {href && <Link
                href={href}
                className={`h-full w-full flex items-end justify-center text-center cursor-pointer hover:underline px-2 ${isSelected ?
                    "bg-sky-400 text-white" :
                    "text-sky-400 bg-white"}`}
                onClick={onClick}
            >{text}</Link>}

            {!href && <a
                href={href}
                className={`h-full w-full flex items-end justify-center text-center cursor-pointer hover:underline px-2 ${isSelected ?
                    "bg-sky-400 text-white" :
                    "text-sky-400 bg-white"}`}
                onClick={onClick}
            >{text}</a>}
        </div>

    )

};

export default HeaderElement;