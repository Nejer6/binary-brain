import React from 'react';

const SmallBlock = ({children, className}) => {
    return (
        <div className={`mt-12 ${className}`}>
            {children}
        </div>
    );
};

export default SmallBlock;