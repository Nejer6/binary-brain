import React from 'react';

const AboutUs = ({ref}) => {
    return (
        <div ref={ref}>
            <a name="1" className="h-14 block"/>
            <div className="mt-20">
                <div className="flex justify-between flex-wrap-reverse lg:flex-nowrap items-center gap-8">
                    <img src="/about-us.svg" alt="" className="w-full lg:w-1/2"/>

                    <div className="w-full lg:w-1/2">
                        <div className="text-orange-400 text-5xl font-normal uppercase text-center lg:text-start font-tektur">О нас</div>
                        <div className="text-2xl leading-10 mt-12 hyphens-auto">
                            Мы молодая IT-компания, которая помогает вашему бизнесу вырасти. Мы уверены, что разработка ПО - это не просто создание кода, это искусство, требующее многолетнего опыта и экспертизы. Мы ценим инновации и стремимся к лучшему. Наша команда увлеченных профессионалов всегда готова помочь нашим клиентам достичь своих целей.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;