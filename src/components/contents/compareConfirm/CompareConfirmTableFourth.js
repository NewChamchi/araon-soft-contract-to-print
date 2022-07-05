import React from 'react';
import { VscCheck } from 'react-icons/vsc';

import './CompareConfirm.css';
import SignatureVerifyArea from '../../signature/SignatureVerifyArea';

const CompareConfirmTableFourth = () => {
    return (
        <div className='CompareConfirm CompareConfirmTableFourth'>
            <table style={{ height: "3cm" }}>
                <tr className='TableHeader'>
                    <td style={{ width: "2cm" }}>구분</td>
                    <td style={{ width: "2.7cm" }}>성명</td>
                    <td>서명</td>
                </tr>
                <tr>
                        <td className='TableHeader'>계약자</td>
                        <td className='RedBorderBox' style={{
                            borderRight: "0.1px solid black",
                            position: "relative"
                            }}>
                            <VscCheck className='VscCheckRed VscCheckPositionAbsoluteForAlignTopLeft' />
                            <span style={{ position: "relative" }}>
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<SignatureVerifyArea drawBoxIndex={2}/>
                            </span>
                        </td>
                        <td className='RedBorderBox' style={{
                            borderLeft: "0.1px solid black",
                            position: "relative"
                            }}>
                            <VscCheck className='VscCheckRed VscCheckPositionAbsoluteForAlignTopLeft' />
                            <span style={{ position: "relative" }}>
                                &emsp;&emsp;&emsp;&emsp;&emsp;<SignatureVerifyArea drawBoxIndex={3}/>
                            </span>
                        </td>
                </tr>
                <tr>
                    <td className='TableHeader'>친권자1</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='TableHeader'>친권자2</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    )
};

export default CompareConfirmTableFourth;