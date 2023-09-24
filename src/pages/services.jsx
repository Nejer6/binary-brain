import React from 'react';
import Layout from "@/components/Layout";
import HeaderOrder from "@/components/Order/HeaderOrder";
import Button from "@/components/Button";
const Services = () => {
    return (
        <Layout>
            <HeaderOrder/>
            <div className="mx-3 md:mx-16 mt-52 sm:mt-40">
                <div className="uppercase text-orange-400 text-center text-5xl font-tektur">Калькулятор услуг</div>
                <div className="text-center text-2xl mt-12">Здесь вы можете примерно расчитать стоимость нашиг услуг под ваш проект</div>

                <div className="uppercase text-4xl font-tektur mt-24">Выберете тип проекта:</div>
                <div className="flex flex-row justify-center">
                    <Button text="Веб-сайт" className="min-w"/>
                    <Button text="Мобильное приложение" className="mx-6 h-16"/>
                    <Button text="Мобильное приложение и веб-сайт"/>
                </div>

                <div className="flex flex-col items-center text-2xl font-bold">
                    <div>Примерная стоимость проекта: </div>
                    <div>186 500р</div>
                    <Button className="mt-6" text="Заказать проект"/>
                </div>

            </div>
        </Layout>
    );
};

export default Services;