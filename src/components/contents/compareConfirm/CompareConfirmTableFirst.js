import React from 'react';

import './CompareConfirm.css';

const CompareConfirmTableFirst = () => {
    return (
        <div className='CompareConfirm CompareConfirmTableFirst'>
            <table style={{height:"1.3cm"}}>
                <caption><span>1. 보험가입 내용</span></caption>
                <tr>
                    <td className='TableHeader' style={{width: "3cm"}}>계약자</td>
                    <td></td>
                    <td className='TableHeader' style={{width: "2.5cm"}}>생년월일</td>
                    <td></td>
                </tr>
                <tr>
                    <td className='TableHeader'>보험회사</td>
                    <td></td>
                    <td className='TableHeader'>보험상품</td>
                    <td></td>
                </tr>
            </table>
        </div>
    )
};

export default CompareConfirmTableFirst;