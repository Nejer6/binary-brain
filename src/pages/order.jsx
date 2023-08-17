import React from 'react';
import Layout from "@/components/Layout";
import Search from "@/components/Order/Search";
import OrderDetail from "@/components/Order/OrderDetail";
import HeaderOrder from "@/components/Order/HeaderOrder";

const Order = () => {
    return (
        <Layout>
            <HeaderOrder/>
            <div className="mx-3 md:mx-16 mt-52 sm:mt-40">
                <div className="w-full uppercase text-orange-400 text-4xl font-tektur">Уже сделали заказ?</div>
                <div className="w-full text-xl mt-6">Можете проверить на каком этапе разработки он сейчас</div>
                <Search />
                <OrderDetail />
            </div>
        </Layout>
    );
};

export default Order;