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
                <object type="image/svg+xml" data="/logo.svg" className={`transition-all duration-300 ${scrollingDown ? 'max-h-0' : 'max-h-60'} `}/>
                <div
                    className="text-center text-sky-400 text-sm leading-snug md:text-2xl md:leading-9 font-tektur">BinaryBrains
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

            {/*<div className="w-full bg-white top-0 fixed px-16">*/}
            {/*    <div className="flex justify-between flex-wrap items-start">*/}
            {/*        <div className="flex flex-col items-center mt-3">*/}
            {/*            <object type="image/svg+xml" data="/logo.svg"/>*/}
            {/*            <div className="text-center text-sky-400 text-sm leading-snug md:text-2xl md:leading-9 font-tektur">BinaryBrains</div>*/}
            {/*        </div>*/}

            {/*        /!*<div className="text-sky-400 text-5xl font-black uppercase order-first">Logo</div>*!/*/}
            {/*        <nav className="order-last md:order-1 w-full md:w-auto">*/}
            {/*            <ul className="flex justify-stretch">*/}
            {/*                {tabs.map(tab =>*/}
            {/*                    <HeaderElement*/}
            {/*                        text={tab.title}*/}
            {/*                        isSelected={activeTab.title === tab.title}*/}
            {/*                        key={tab.title}*/}
            {/*                        onClick={() => {*/}
            {/*                            window.scrollTo({*/}
            {/*                                behavior: 'smooth',*/}
            {/*                                top: tab.ref.current.offsetTop*/}
            {/*                            })*/}
            {/*                        }}*/}
            {/*                    />)}*/}

            {/*            </ul>*/}
            {/*        </nav>*/}
            {/*        <ul className="order-1 md:order-last">*/}
            {/*            <HeaderElement*/}
            {/*                text="Отслеживание заказа"*/}
            {/*                isSelected={false}*/}
            {/*                href="/order"*/}
            {/*            />*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </header>
    );
};

export default HeaderMain;