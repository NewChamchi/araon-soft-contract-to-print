import React from 'react';
import { VscCheck } from 'react-icons/vsc';

import './CompareConfirm.css';

const CompareConfirmTableFifth = () => {
    return (
        <div className='CompareConfirm CompareConfirmTableFifth'>
            <table style={{height: "1.8cm"}}>
                <caption>
                    <span style={{fontWeight:'lighter'}}>* 계약자가 자필로 서명 해 주시고 미성년자인 경우 친권자가 자필서명 하시기 바랍니다.</span>
                </caption>
                <tr>
                    <td rowSpan={2} className="TableHeader" style={{ width: "1.5cm" }}>확인자</td>
                    <td rowSpan={2} className="TableHeader" style={{ width: "0.7cm" }}>소속</td>
                    <td colSpan={2} style={{
                        width: "2.5cm",
                        fontWeight: "lighter",
                        position: "relative"
                    }}>
                        <VscCheck className='VscCheckBlue VscCheckPositionAbsoluteForAlignTopLeft' /><span style={{ marginLeft: "75%" }}>지점</span></td>
                    <td className="TableHeader" style={{ width: "2cm" }}>설계사</td>
                    <td style={{
                        width: "3cm",
                        position: "relative"
                    }}>
                        <VscCheck className='VscCheckBlue VscCheckPositionAbsoluteForAlignTopLeft' /></td>
                    <td className="SetColorGray" style={{
                        width: "1.5cm",
                        fontWeight: "lighter",
                        textAlign: "center",
                        position: "relative"
                    }}>
                        <VscCheck className='VscCheckBlue VscCheckPositionAbsoluteForAlignTopLeft' />(서명)
                    </td>
                </tr>
                <tr>
                    <td className="TableHeader" style={{ width: "1.5cm" }}>직책</td>
                    <td></td>
                    <td className="TableHeader" style={{ width: "2cm" }}>성명</td>
                    <td style={{
                        width: "3cm",
                        position: "relative"
                    }}>
                        <VscCheck className='VscCheckBlue VscCheckPositionAbsoluteForAlignTopLeft' /></td>
                        <td className="SetColorGray" style={{
                        width: "1.5cm",
                        fontWeight: "lighter",
                        textAlign: "center",
                        position: "relative"
                    }}>
                        <VscCheck className='VscCheckBlue VscCheckPositionAbsoluteForAlignTopLeft' />(서명)
                    </td>
                </tr>
            </table>
        </div>
    )
};

export default CompareConfirmTableFifth;