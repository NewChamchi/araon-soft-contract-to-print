import React from 'react';
import './Agreement.css';

const AgreementHeader = () => {
    return (
        <div className='Agreement AgreementHeader'>
            <table>
                <tr style={{height: "0.6cm"}}>
                    <td style={{width: "2.8cm"}}>설계 또는 증번</td>
                    <td style={{width: "5cm"}}></td>
                </tr>
            </table>
        </div>
    )
};

export default AgreementHeader;