import React from 'react';

const Main = ({onClick}) => {
    return (
        <div>
            <a name="0" className="h-14 block"/>
            <div className="mt-20">
                <div className="flex justify-between items-center flex-wrap md:flex-nowrap gap-8">
                    <div className="w-full md:w-1/2">
                        <span className="text-black text-5xl font-normal uppercase font-tektur">Окунись в </span>
                        <span className="text-orange-400 text-5xl font-normal uppercase font-tektur">новую эпоху IT</span>
                        <div className="text-2xl leading-10 mt-12 hyphens-auto">
                            Мы предоставляем широкий спектр услуг, включая разработку ПО, создание инновационных дизайн-решений, разработку мобильных приложений для платформы Android и создание современных веб-сайтов.
                        </div>
                        <div
                            className="bg-sky-400 cursor-pointer h-16 w-80 justify-center items-center inline-flex mt-6"
                            onClick={onClick}
                        >
                            <div className="text-center text-white text-xl uppercase leading-9">связаться</div>
                        </div>
                    </div>

                    <img src="/main.svg" alt="" className="w-full md:w-1/2"/>
                </div>
            </div>
        </div>
    );
};

export default Main;