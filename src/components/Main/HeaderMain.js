import React, {useEffect, useState} from 'react';
import HeaderElement from "@/components/HeaderElement";

const HeaderMain = ({tabs, activeTab}) => {
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
        <header className="flex flex-wrap justify-center sm:justify-between lg:px-16 fixed z-20 top-0 w-full bg-white">
            <div className="flex flex-col items-center my-3 mx-3 lg:mx-0">
                <object type="image/svg+xml" data="/logo.svg" className={`h-[38px] md:h-[64px]  transition-all duration-300 ${scrollingDown ? 'max-h-0' : 'max-h-60'} `}/>
                <div
                    className="cursor-pointer text-center text-sky-400 text-sm leading-snug md:text-2xl md:leading-9 font-tektur"
                    onClick={() => {
                        window.scrollTo({
                            behavior: 'smooth',
                            top: 0
                        })
                    }}
                >BinaryBrains
                </div>
            </div>

            <div className={`w-full sm:w-auto flex flex-row transition-all duration-300 ${scrollingDown ? 'md:pb-0' : 'md:pb-10'}`}>
                <HeaderElement
                    text={tabs[0].title}
                    isSelected={true}
                    className="w-1/2 xl:hidden"
                />
                {tabs.map(tab =>
                    <HeaderElement
                        text={tab.title}
                        isSelected={activeTab.title === tab.title}
                        key={tab.title}
                        onClick={() => {
                            window.scrollTo({
                                behavior: 'smooth',
                                top: tab.ref.current.offsetTop
                            })
                        }}
                        className="hidden xl:block"
                    />
                )}
                <HeaderElement
                    text={"Отслеживание заказа"}
                    isSelected={false}
                    className="w-1/2 xl:w-auto"
                    href="/order"
                />
            </div>
        </header>
    );
};

export default HeaderMain;