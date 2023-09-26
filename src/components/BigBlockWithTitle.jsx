import React from 'react';
import BigBlock from "@/components/BigBlock";

const BigBlockWithTitle = ({children, title}) => {
    return (
        <BigBlock>
            <div className="uppercase text-4xl font-tektur">{title}</div>
            {children}
        </BigBlock>
    );
};

export default BigBlockWithTitle;