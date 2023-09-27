import React, {useState} from 'react';
import HeaderOrder from "@/components/Order/HeaderOrder";
import Calculator from "@/components/Services/Calculator";
import NotificationModalWrapper from "@/components/NotificationModalWrapper";
const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <NotificationModalWrapper isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <HeaderOrder/>
            <Calculator setIsModalOpen={setIsModalOpen}/>
        </NotificationModalWrapper>
    );
};

export default Services;