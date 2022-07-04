import React from 'react';
import './Agreement.css';

const AgreementTableSecond = () => {
    let now = new Date();
    return (
        <div className='Agreement AgreementTableSecond'>
            <table style={{height: "0.9cm"}}>
                <caption style={{textAlign: "right", margin:"10px 40px"}}>
                    {now.getFullYear()}&nbsp;년&emsp;{now.getMonth() + 1}&emsp;월&emsp;{now.getDate()}&emsp;일
                </caption>
                <tr>
                    <td style={{width: "3.2cm", backgroundColor: "paleturquoise"}}>기관 및 담당자 확인</td>
                    <td style={{
                        borderRight: "0px",
                        textAlign: "left",
                        width: "5.5cm"
                    }}>&emsp;㈜ 뉴니케&emsp;&emsp;&emsp;&emsp;&emsp;지점장</td>
                    <td className='TextAlignRightAndColorGray' style={{ borderLeft: "0px" }}>(서명)&emsp;</td>
                    <td style={{width: "1.5cm", backgroundColor: "paleturquoise"}}>담당 FC</td>
                    <td className='TextAlignRightAndColorGray' style={{width: "4.3cm"}}>(서명)&ensp;&emsp;</td>
                </tr>
            </table>
        </div>
    )
};

export default AgreementTableSecond;