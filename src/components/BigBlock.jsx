import React from 'react';

const BigBlock = ({children, className}) => {
    return (
        <div className={`mt-24 ${className}`}>
            {children}
        </div>
    );
};

export default BigBlock;