import React, { useRef, useCallback } from 'react';
import ReactToPrint from 'react-to-print';

import './Contract.css';

const Page = ({ children }) => {
    return (
        <div className='Page'>
            {children}
        </div>
    )
};

export default Page;