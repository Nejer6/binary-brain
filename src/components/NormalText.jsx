import React from 'react';

const NormalText = ({children, className}) => {
    return (
        <div className={`text-2xl ${className}`}>
            {children}
        </div>
    );
};

export default NormalText;