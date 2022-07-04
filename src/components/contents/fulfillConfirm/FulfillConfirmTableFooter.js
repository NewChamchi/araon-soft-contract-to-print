import React from 'react';
import './FulfillConfirm.css';

const FulfillConfirmTableFooter = () => {
    return (
        <div className='FulfillConfirm FulfillConfirmTableFooter'>
            <table>
                <tr>
                    <td style={{width:"1.1cm"}}>확인자</td>
                    <td style={{width:"0.8cm"}}>직책</td>
                    <td style={{width:"1.5cm"}}></td>
                    <td style={{width:"0.9cm"}}>성명</td>
                    <td style={{width:"3cm", textAlign:"right"}}><span style={{color: "gainsboro"}}>(서명)</span></td>
                </tr>
            </table>
        </div>
    )
};

export default FulfillConfirmTableFooter;