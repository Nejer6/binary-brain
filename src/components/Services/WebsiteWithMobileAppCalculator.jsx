import React from 'react';
import BigBlock from "@/components/BigBlock";
import SmallBlock from "@/components/SmallBlock";
import Button from "@/components/Button";

const WebsiteWithMobileAppCalculator = ({setIsModalOpen}) => {
    return (
        <BigBlock className="text-2xl text-center font-bold">
            Стоимость расчитывается индивидуально от технического задания
            <SmallBlock className="flex justify-center">
                <Button text="Связаться" className="h-16 w-80" onClick={() => setIsModalOpen(true)}/>
            </SmallBlock>
        </BigBlock>
    );
};

export default WebsiteWithMobileAppCalculator;