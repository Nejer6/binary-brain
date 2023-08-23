import React from 'react';
import OrderStep from "@/components/Order/OrderStep";

const OrderDetail = ({order}) => {


    return (
        <>
            {order && <div>
                <div className="text-sky-400 text-4xl uppercase mt-12 lg:mt-24 mb-9 font-tektur">Ваш заказ № {order.numeric_link}</div>

                <div className="flex flex-col items-center">
                    {order.steps_info.map(step_info =>
                        <OrderStep step_info={step_info} key={step_info.id} step={order.step} is_completed={order.is_completed}/>
                    )}
                </div>
            </div>}
        </>

    );
};

export default OrderDetail;