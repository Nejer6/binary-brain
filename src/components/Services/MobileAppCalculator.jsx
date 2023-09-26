import React from 'react';
import SmallBlock from "@/components/SmallBlock";
import NormalText from "@/components/NormalText";
import BigBlockWithTitle from "@/components/BigBlockWithTitle";
import InputWithLabel from "@/components/InputWithLabel";

const MobileAppCalculator = () => {
    return (
        <div>
            <BigBlockWithTitle title={"Тип мобильного приложения:"}>
                {/*<SmallBlock className="flex">*/}
                {/*    <div className="text-2xl">Количество основных экранов:</div>*/}
                {/*    <input type="number" className="border-2 border-sky-400 ml-2 w-14"/>*/}
                {/*</SmallBlock>*/}
                <SmallBlock>
                    <InputWithLabel label={"Количество основных экранов:"}/>
                </SmallBlock>

                <SmallBlock className="flex flex-row justify-between">
                    <NormalText className="cursor-pointer">Решение для бизнеса</NormalText>
                    <NormalText className="cursor-pointer">Социальный продукт</NormalText>
                    <NormalText className="cursor-pointer">Обучающее приложение</NormalText>
                </SmallBlock>
            </BigBlockWithTitle>

            <BigBlockWithTitle title="Дизайн:"/>
            <BigBlockWithTitle title="Дополнительно:"/>
            <BigBlockWithTitle title="Чек:"/>
        </div>
    );
};

export default MobileAppCalculator;