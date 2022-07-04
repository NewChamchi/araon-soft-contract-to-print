import React from 'react';

import './CompareConfirm.css';

const CompareConfirmTableSecond = () => {
    return (
        <div className='CompareConfirm CompareConfirmTableSecond'>
            <table style={{ height: "2.6cm" }}>
                <caption>
                    <span>2. 비교 설명들은 보험회사 및 보험상품 (3개이상의 동종, 유사상품)목록</span>
                    <span className="SetColorRed" style={{
                        fontSize: "smaller"
                    }}>
                        (자동차보험 기재 불필요)
                    </span>
                </caption>
                <tr className="TableHeader" >
                    <td style={{ width: "1.5cm" }}>구분</td>
                    <td>보험회사</td>
                    <td>보험상품명</td>
                </tr>
                <tr>
                    <td className="TableHeader">1</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='TableHeader'>2</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='TableHeader'>3</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    )
};

export default CompareConfirmTableSecond;