import React from 'react';
import Layout from "@/components/Layout";
import HeaderOrder from "@/components/Order/HeaderOrder";
import Calculator from "@/components/Services/Calculator";
const Services = () => {
    return (
        <Layout>
            <HeaderOrder/>
            <Calculator />
        </Layout>
    );
};

export default Services;