import React from 'react';
import Button from "@/components/Main/Button";

const Main = ({onClick}) => {
    return (
        <div>
            <div className="pt-52 sm:pt-40">
                <div className="flex justify-between items-center flex-wrap md:flex-nowrap gap-8">
                    <div className="w-full md:w-1/2">
                        <span className="text-black text-5xl font-normal uppercase font-tektur">Окунись в </span>
                        <span className="text-orange-400 text-5xl font-normal uppercase font-tektur">новую эпоху IT</span>
                        <div className="text-2xl leading-10 mt-12 hyphens-auto">
                            Мы предоставляем широкий спектр услуг, включая разработку ПО, создание инновационных дизайн-решений, разработку мобильных приложений для платформы Android и создание современных веб-сайтов.
                        </div>
                        <Button className="h-16 w-80 mt-6" text="связаться" onClick={onClick}/>
                    </div>

                    <object type="image/svg+xml" data="/main.svg" className="w-full md:w-1/2"/>
                </div>
            </div>
        </div>
    );
};

export default Main;