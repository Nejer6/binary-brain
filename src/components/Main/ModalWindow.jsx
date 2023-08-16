import React from 'react';
import ModalInput from "@/components/Main/ModalInput";

const ModalWindow = ({onClick}) => {
    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm flex justify-center items-center"
            onClick={onClick}
        >
            <div
                className="bg-white shadow-sky-400/50 shadow-full mx-10 sm:mx-12 md:mx-24"
                onClick={e => {
                    e.stopPropagation()
                }}
            >
                <div className="mx-16 my-12">
                    <div className="flex-wrap-reverse justify-end flex items-start">
                        <div className="text-sky-400 text-4xl uppercase text-start w-full md:w-auto font-tektur">Понравилась наша работа?</div>
                        <img
                            src="/cross.svg"
                            width={40}
                            height={40}
                            alt="Закрыть"
                            className="cursor-pointer ml-8"
                            onClick={onClick}
                        />
                    </div>


                    <div className="text-2xl leading-9 mt-6">Оставьте свои данные и мы с вами свяжемся</div>

                    <div className="mt-12">
                        <ModalInput placeholder="Иван" title="Имя"/>
                        <ModalInput placeholder="ivanivanov123@mail.ru" title="E-mail"/>
                        <ModalInput placeholder="8 (123) 456-78-90" title="Номер телефона"/>
                        <ModalInput placeholder="@ivan123" title="Telegram"/>
                        <div className="border-t-2 border-sky-400"/>
                    </div>

                    <div className="cursor-pointer bg-sky-400 mt-6 w-80">
                        <div className="text-center text-white uppercase text-xl leading-9 m-4">
                            Оставить заявку
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;