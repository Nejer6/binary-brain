import React, {useEffect, useState} from 'react';
import Layout from "@/components/Layout";
import ModalWindow from "@/components/Main/ModalWindow";
import Notification from "@/components/Main/Notification";

const NotificationModalWrapper = ({children, isModalOpen, setIsModalOpen}) => {
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const successHandler = (isSuccess) => {
        if (isSuccess) {
            setIsSuccess(true)
        } else {
            setIsError(true)
        }
    }

    useEffect(() => {
        if (isSuccess || isError) {
            const interval = setInterval(() => {
                setIsError(false)
                setIsSuccess(false)
                clearInterval(interval)
            }, 5000)
        }
    }, [isError, isSuccess]);

    return (
        <Layout>
            <div className="fixed z-50 w-full flex justify-center">
                <Notification
                    text="В ближайшее время мы ее рассмотрим и свяжемся с вами"
                    title="Ваша заявка была отправлена"
                    isError={false}
                    visible={isSuccess}
                    onClose={() => setIsSuccess(false)}
                />
                <Notification
                    text="К сожалению что-то пошло не так и заявка не была отправлена, попробуйте позже"
                    title="Заявка не отправлена"
                    isError={true}
                    visible={isError}
                    onClose={() => setIsError(false)}
                />
            </div>

            {children}

            {isModalOpen && (
                <ModalWindow successHandler={successHandler} onClick={() => setIsModalOpen(false)} />
            )}
        </Layout>
    );
};

export default NotificationModalWrapper;