import React, {useState} from 'react';
import Layout from "@/components/Layout";
import Search from "@/components/Order/Search";
import OrderDetail from "@/components/Order/OrderDetail";
import HeaderOrder from "@/components/Order/HeaderOrder";
import axios from "axios";

const Order = () => {
    const [query, setQuery] = useState("")
    const [order, setOrder] = useState(null)

    const searchHandler = async () => {
        const url = `http://92.53.120.219:8080/v1/cabinet/l/${query}`
        try {
            const response = await axios.get(url)
            setOrder(response.data)
        } catch (error) {
            if (error.response.status !== 404) {
                console.error(error)
            }

            setOrder(null)
        }
    }

    return (
        <Layout>
            <HeaderOrder/>
            <div className="mx-3 md:mx-16 mt-52 sm:mt-40">
                <div className="w-full uppercase text-orange-400 text-4xl font-tektur">Уже сделали заказ?</div>
                <div className="w-full text-xl mt-6">Можете проверить на каком этапе разработки он сейчас</div>
                <Search onSubmit={searchHandler} value={query} setValue={e => setQuery(e.target.value)}/>
                <OrderDetail order={order}/>
            </div>
        </Layout>
    );
};

export default Order;