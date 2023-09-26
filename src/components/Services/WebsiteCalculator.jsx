import React from 'react';
import BigBlockWithTitle from "@/components/BigBlockWithTitle";
import SmallBlock from "@/components/SmallBlock";
import InputWithLabel from "@/components/InputWithLabel";

const WebsiteCalculator = () => {
    return (
        <div>
            <BigBlockWithTitle title={"Тип сайта:"}>
                <SmallBlock>
                    <InputWithLabel label={"Количество страниц:"}/>
                </SmallBlock>
            </BigBlockWithTitle>

            <BigBlockWithTitle title={"Дизайн:"}>

            </BigBlockWithTitle>

            <BigBlockWithTitle title={"Дополнительно"}>

            </BigBlockWithTitle>

            <BigBlockWithTitle title={"Чек:"}>

            </BigBlockWithTitle>
        </div>
    );
};

export default WebsiteCalculator;