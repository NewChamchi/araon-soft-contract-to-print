import React from 'react';
import { VscCheck } from 'react-icons/vsc';
import SignatureVerifyArea from '../../signature/SignatureVerifyArea';
import './CompareConfirm.css';

const CompareConfirmDate = () => {
    let now = new Date();
    return (
        <div className='CompareConfirmDate'>
            <VscCheck className='VscCheckRed' />
            <span>
                {now.getFullYear()}&emsp;&emsp;년
                &emsp;&emsp;{now.getMonth() + 1}&emsp;&emsp;월
                &emsp;&emsp;{now.getDate()}&emsp;&emsp;일
            </span>
        </div >
    )
};

export default CompareConfirmDate;