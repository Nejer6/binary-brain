import React, {useEffect, useState} from 'react';
import HeaderElement from "@/components/HeaderElement";

const HeaderMain = () => {
    const [scrollingDown, setScrollingDown] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            if (currentPosition >= 1) {
                setScrollingDown(true)
            } else {
                setScrollingDown(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollingDown]);

    return (
        <header className={`flex flex-wrap justify-center sm:justify-between lg:px-16 fixed z-20 w-full bg-white top-0`}>
            <div className={`flex flex-col items-center mx-3 lg:mx-0 my-3`}>
                <object type="image/svg+xml" data="/logo.svg" className={`transition-all duration-300 ${scrollingDown ? 'max-h-0' : 'max-h-60'} `}/>
                <div
                    className="text-center text-sky-400 text-sm leading-snug md:text-2xl md:leading-9 font-tektur">BinaryBrains
                </div>
            </div>

            <div className={`w-full sm:w-auto flex flex-row transition-all duration-300 ${scrollingDown ? 'md:pb-0' : 'md:pb-10 '}`}>
                <HeaderElement
                    text={"Главная"}
                    isSelected={false}
                    className="w-1/2 xl:w-auto"
                    href="/"
                />
                <HeaderElement
                    text={"Отслеживание заказа"}
                    isSelected={true}
                    className="w-1/2 xl:w-auto"
                    href="/order"
                />
            </div>
        </header>
    );
};

export default HeaderMain;