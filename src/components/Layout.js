import React from 'react';
import Footer from "@/components/Footer";

const Layout = ({children}) => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-grow">
                {children}
            </div>

            <Footer/>
        </div>
    );
};

export default Layout;