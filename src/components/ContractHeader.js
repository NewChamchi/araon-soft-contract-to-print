import React from 'react';

import './Contract.css';

const ContractHeader = ({ children }) => {
    return (
        <div className='ContractHeader'>
            {children}
        </div>
    )
};

export default ContractHeader;