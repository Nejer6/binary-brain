import React from 'react';
import Link from "next/link";

const HeaderElement = ({href, text, isSelected, onClick, className}) => {
    const styles = `h-full w-full duration-300 transition-all hover:pb-4 hover:pt-2 flex items-end pb-2 pt-4 justify-center text-center cursor-pointer hover:underline px-2 ${isSelected ?
        "bg-sky-400 text-white" :
        "text-sky-400 bg-white"}`

    return (
        <div className={className}>
            {href && <Link
                href={href}
                className={styles}
                onClick={onClick}
            >{text}</Link>}

            {!href && <a
                href={href}
                className={styles}
                onClick={onClick}
            >{text}</a>}
        </div>

    )

};

export default HeaderElement;