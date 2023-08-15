import React from 'react';
import Link from "next/link";

const HeaderElement = ({href, text, isSelected, onClick, className}) => {
    return (

        <li className={className}>
            {href && <Link
                href={href}
                className={`pt-8 cursor-pointer hover:underline inline-block px-2 ${isSelected ?
                    "bg-sky-400 text-white" :
                    "text-sky-400 bg-white"}`}
                onClick={onClick}
            >{text}</Link>}

            {!href && <a
                href={href}
                className={`pt-8 cursor-pointer hover:underline inline-block px-2 ${isSelected ?
                    "bg-sky-400 text-white" :
                    "text-sky-400 bg-white"}`}
                onClick={onClick}
            >{text}</a>}
        </li>

    )

};

export default HeaderElement;