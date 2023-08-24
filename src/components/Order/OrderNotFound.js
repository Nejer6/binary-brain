import React from 'react';

const OrderNotFound = ({number}) => {
    return (
        <div className="flex flex-col items-center mt-24">
            <div className="text-center font-tektur text-red-400 text-4xl uppercase">{`К сожалению мы не нашли заказ №${number}`}</div>
            <div className="text-center text-2xl xl:w-[1026px] mt-6">Пожалуйста проверьте правильно ли был введен номер заказа, если проблема не решилась свяжитесь с нами</div>
        </div>
    );
};

export default OrderNotFound;