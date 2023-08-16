import React from 'react';
import OurServicesCard from "@/components/Main/OurServicesCard";

const OurServices = () => {
    return (
        <div>
            <div>
                <div className="text-orange-400 text-5xl font-normal uppercase text-center font-tektur">Наши услуги</div>

                <div className="flex justify-center items-start flex-wrap xl:flex-nowrap mt-12">
                    <OurServicesCard
                        title="design"
                        text="Мы создаем инновационные дизайн-решения, которые помогают нашим клиентам выделиться на рынке."
                        src="/figma.svg"
                    />
                    <OurServicesCard
                        title="android"
                        src="/android.svg"
                        text="Мы помогаем нашим клиентам создавать мобильные приложения для устройств на платформе Android, чтобы они могли обеспечить удобство и удовлетворение потребностей своих пользователей."
                    />
                    <OurServicesCard
                        title="development"
                        src="/development.svg"
                        text="Мы разрабатываем современные веб-сайты, которые могут привлечь потенциальных клиентов и повысить узнаваемость бренда."
                    />
                </div>
            </div>
        </div>
    );
};

export default OurServices;