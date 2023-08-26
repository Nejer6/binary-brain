import React, {useEffect, useState} from 'react';
import Layout from "@/components/Layout";
import Search from "@/components/Order/Search";
import OrderDetail from "@/components/Order/OrderDetail";
import HeaderOrder from "@/components/Order/HeaderOrder";
import axios from "axios";
import {Router, useRouter} from "next/router";
import OrderNotFound from "@/components/Order/OrderNotFound";

const Index = () => {
    const router = useRouter()
    const { id } = router.query

    const [query, setQuery] = useState("")
    const [order, setOrder] = useState(null)
    const [errorNumber, setErrorNumber] = useState(null)

    const searchHandler = async (number) => {
        const url = `https://92.53.120.219:8080/v1/cabinet/l/${number}`
        try {
            const response = await axios.get(url)
            setOrder(response.data)
            setErrorNumber(null)
            await router.push({
                pathname: '/order',
                query: {
                    id: number
                }
            })
        } catch (error) {
            if (error.response.status !== 404) {
                console.error(error)
            }

            setOrder(null)
            setErrorNumber(number)
        }
    }

    useEffect(() => {
        if (!router.isReady) {
            return;  // NOTE: router.query might be empty during initial render
        }

        if (id) {
            searchHandler(id)
        }

    }, [id, router.isReady]);

    return (
        <Layout>
            <HeaderOrder/>
            <div className="mx-3 md:mx-16 mt-52 sm:mt-40">
                <div className="w-full uppercase text-orange-400 text-4xl font-tektur">Уже сделали заказ?</div>
                <div className="w-full text-xl mt-6">Можете проверить на каком этапе разработки он сейчас</div>
                <Search onSubmit={() => searchHandler(query)} value={query} setValue={e => setQuery(e.target.value)}/>
                <OrderDetail order={order}/>
                {errorNumber && <OrderNotFound number={errorNumber}/>}
            </div>
        </Layout>
    );
};

export default Index;