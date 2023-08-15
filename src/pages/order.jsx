import React from 'react';
import Layout from "@/components/Layout";
import Search from "@/components/Order/Search";
import OrderDetail from "@/components/Order/OrderDetail";

const Order = () => {
    return (
        <Layout>
            <div className="mx-3">
                <div className="w-full uppercase text-orange-400 text-4xl">Уже сделали заказ?</div>
                <div className="w-full text-xl mt-6">Можете проверить на каком этапе разработки он сейчас</div>
                <Search />
                <OrderDetail />
            </div>
        </Layout>
    );
};

export default Order;