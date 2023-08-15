import React, {useState} from 'react';
import HeaderElement from "@/components/HeaderElement";
import Image from "next/image";

const Header = ({tabs, activeTab}) => {
    // const [selected, setSelected] = useState(tabs[0].title)
    // const handleItemClick = (item) => {
    //     setSelected(item)
    // }

    return (
        <header>
            {/*<div className="w-full backdrop-blur-md top-0 fixed">*/}
            <div className="w-full bg-white top-0 fixed">
                <div className="flex justify-between flex-wrap items-center">
                    <div className="text-sky-400 text-5xl font-black uppercase order-first">Logo</div>
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