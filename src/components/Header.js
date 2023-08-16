import React from 'react';
import HeaderElement from "@/components/HeaderElement";

const Header = ({tabs, activeTab}) => {

    return (
        <header>
            {/*<div className="w-full backdrop-blur-md top-0 fixed">*/}
            <div className="w-full bg-white top-0 fixed px-16">
                <div className="flex justify-between flex-wrap items-start">
                    <div className="flex flex-col items-center mt-3">
                        <object type="image/svg+xml" data="/logo.svg"/>
                        <div className="text-center text-sky-400 text-sm leading-snug md:text-2xl md:leading-9 font-tektur">BinaryBrains</div>
                    </div>

                    {/*<div className="text-sky-400 text-5xl font-black uppercase order-first">Logo</div>*/}
                    <nav className="order-last md:order-1 w-full md:w-auto">
                        <ul className="flex justify-stretch">
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
                                />)}

                        </ul>
                    </nav>
                    <ul className="order-1 md:order-last">
                        <HeaderElement
                            text="Отслеживание заказа"
                            isSelected={false}
                            href="/order"
                        />
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;