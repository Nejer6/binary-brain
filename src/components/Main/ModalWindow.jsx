import React, {useState} from 'react';
import ModalInput from "@/components/Main/ModalInput";
import Button from "@/components/Main/Button";
import axios from "axios";

const ModalWindow = ({onClick, successHandler}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [telegram, setTelegram] = useState("")
    const [isEmailError, setIsEmailError] = useState(false)

    const handleSubmit = async () => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(email)) {
            setIsEmailError(true)
            return
        }

        const url = 'http://92.53.120.219:8080/v1/feedback';
        const data = {
            name,
            email,
            phone,
            telegram
        };

        try {
            await axios.post(url, data);
            onClick()
            successHandler(true)
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
            successHandler(false)
        }
    };

    return (
        <div
            className="fixed z-20 top-0 left-0 w-screen h-screen backdrop-blur-sm flex justify-center items-center"
            onClick={onClick}
        >
            <div
                className="bg-white shadow-sky-400/50 shadow-full mx-10 sm:mx-12 md:mx-24"
                onClick={e => {
                    e.stopPropagation()
                }}
            >
                <div className="mx-16 my-12">
                    <div className="flex-row justify-between flex items-start">
                        <div className="text-sky-400 text-4xl uppercase text-start w-full md:w-auto font-tektur">Оставьте заявку</div>
                        <img
                            src="/cross.svg"
                            width={40}
                            height={40}
                            alt="Закрыть"
                            className="cursor-pointer ml-8"
                            onClick={onClick}
                        />
                    </div>


                    <div className="text-2xl leading-9 mt-6">отправьте свои данные и мы с вами свяжемся</div>

                    <div className="mt-12">
                        <ModalInput placeholder="Иван" title="Имя" required value={name} onChange={e => setName(e.target.value)}/>
                        <ModalInput
                            placeholder="ivanivanov123@mail.ru"
                            title="E-mail"
                            required
                            value={email}
                            onChange={e => {
                                setEmail(e.target.value)
                                setIsEmailError(false)
                            }}
                            isError={isEmailError}
                            errorMessage="Введен неверный email"
                            type={'email'}/>
                        <ModalInput placeholder="8 (123) 456-78-90" title="Номер телефона" required value={phone} onChange={e => setPhone(e.target.value)}/>
                        <ModalInput placeholder="@ivan123" title="Telegram" value={telegram} onChange={e => setTelegram(e.target.value)}/>
                        <div className="border-t-2 border-sky-400"/>
                    </div>

                    <div className="cursor-pointer bg-sky-400 mt-6 w-80">
                        {/*<div className="text-center text-white uppercase text-xl leading-9 m-4">*/}
                        {/*    Оставить заявку*/}
                        {/*</div>*/}
                        <Button className="mt-6 w-80" text="Оставить заявку" onClick={handleSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;