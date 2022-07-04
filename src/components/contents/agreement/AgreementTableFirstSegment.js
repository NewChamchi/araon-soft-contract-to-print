import React, { Fragment } from 'react';
import SignatureVerifyArea from '../../signature/SignatureVerifyArea';
import './Agreement.css';

const AgreementTableFirstSegment = ({ Writer, drawBoxIndex }) => {
    const basicTableDataWidthCM = 1.5;

    const TableDataWidthToString = (mutiple) => {
        let calculatedTableDataWidth = mutiple * basicTableDataWidthCM;
        return calculatedTableDataWidth.toString() + "cm"
    }

    const TableDataWidthToObject = (mutiple) => {
        let calculatedTableDataWidth = mutiple * basicTableDataWidthCM;
        return {
            width: calculatedTableDataWidth.toString() + "cm"
        }
    }

    /* div로 return하게 되면 div또한 결국 하나의 속성이기 때문에 table의 모양이 깨지게 된다.
       일반적인 페이지의 컴포넌트로써 활용을 한다면 div라는 속성을 return해도 상관이 없으나,
       table 안에서 반복되는 구조를 재활용하기 위한 구조 등등 특정 요소의 안에서 여러번 컴포넌트를 배치한다면
       div 대신 Fragment를 쓰는 것이 더 적합하다.
    */
    return (
        <Fragment className = 'Agreement AgreementTableFirstSegment' > 
            <tr>
                <td rowSpan={3}
                    style={{
                        backgroundColor: "paleturquoise",
                        width: TableDataWidthToString(1),
                        borderRight: "1px dashed black"
                    }}>{Writer}</td>
                <td style={TableDataWidthToObject(1)}>주 소</td>
                <td colSpan={5} style={TableDataWidthToObject(5)}></td>
                <td style={TableDataWidthToObject(1)}>전화번호</td>
                <td colSpan={2}></td>
            </tr>
            <tr>
                <td style={TableDataWidthToObject(1)}>성 명</td>
                <td colSpan={2} style={TableDataWidthToObject(2)}></td>
                <td style={TableDataWidthToObject(1)}>생년월일</td>
                <td colSpan={3} style={TableDataWidthToObject(3)}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <table className="DateOfBirthTable" style={{ width: "3.6cm", height: "0.55cm" }}><tr>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr></table>
                        -
                        <table className="DateOfBirthTable" style={{ width: "0.6cm", height: "0.55cm" }}><tr>
                            <td></td>
                        </tr></table>
                    </div>
                </td>
                <td style={{
                    border: "2px solid rgb(250, 39, 88)",
                    borderRight: "0.1px solid black",
                    width: "1cm"
                }}>서 명</td>
                <td style={{
                    border: "2px solid rgb(250, 39, 88)",
                    borderLeft: "0.1px solid black",
                    width: "3cm"
                }}>
                    <span style={{ position: "relative" }}>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <SignatureVerifyArea drawBoxIndex={drawBoxIndex}/>
                    </span>
                </td>
            </tr>
            <tr>
                <td colSpan={2} style={TableDataWidthToObject(2)}>법정대리인(친권인)</td>
                <td style={{ borderRight: "none", width: TableDataWidthToString(1) }}></td>
                <td colSpan={2}
                    className="SetColorGray"
                    style={{
                        borderLeft: "none",
                        textAlign: "right",
                        width: TableDataWidthToString(2)
                        }}>(서명)&ensp;</td>
                <td colSpan={2} style={TableDataWidthToObject(2)}>법정대리인(친권인)</td>
                <td colSpan={2} className="SetColorGray" style={{textAlign: "right"}}>(서명)&ensp;</td>
            </tr>
        </Fragment>
    )
};

export default AgreementTableFirstSegment;