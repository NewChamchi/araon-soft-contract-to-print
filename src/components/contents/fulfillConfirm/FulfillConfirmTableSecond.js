import React, { useRef, useState } from 'react';
import SignatureVerifyArea from '../../signature/SignatureVerifyArea';
import './FulfillConfirm.css';

const YesOrNoCheckBox = ({ componentIndex, yesOrNoStore, setYesOrNoStore }) => {
    const yesRef = useRef();
    const noRef = useRef();

    const clickYes = () => {
        if (yesRef.current.checked == true && noRef.current.checked == true) {
            noRef.current.checked = false;
        }
        saveYesOrNoCheckedState();
    }

    const clickNo = () => {
        if (yesRef.current.checked == true && noRef.current.checked == true) {
            yesRef.current.checked = false;
        }
        saveYesOrNoCheckedState();
    }

    const saveYesOrNoCheckedState = () => {
        setYesOrNoStore([
            ...yesOrNoStore.slice(0, componentIndex),
            {
                isYesChecked: yesRef.current.checked,
                isNoChecked: noRef.current.checked
            },
            ...yesOrNoStore.slice(componentIndex + 1, yesOrNoStore.length)
        ]);
    }

    return (
        <div className='YesOrNoCheckBox'>
            {(yesOrNoStore[componentIndex].isYesChecked) ?
            <input type="checkbox" onClick={clickYes} ref={yesRef} checked/> :
            <input type="checkbox" onClick={clickYes} ref={yesRef}/>}예&nbsp;

            {(yesOrNoStore[componentIndex].isNoChecked) ?
            <input type="checkbox" onClick={clickNo} ref={noRef} checked/> :
            <input type="checkbox" onClick={clickNo} ref={noRef}/>}아니오&nbsp;
        </div>
    );

}


const FulfillConfirmTableSecond = ({ canvasStore, setCanvasStore, yesOrNoStore, setYesOrNoStore}) => {
    let now = new Date();
    return (
        <div className='FulfillConfirm FulfillConfirmTableSecond'>
            <table>
                <caption>
                    &ensp;<span style={{
                        fontWeight: "bold",
                        fontSize: "16px"
                    }}>
                        [보험계약자 확인]
                    </span>
                    &nbsp;<span className="SetColorRed" style={{
                        fontWeight: "bold"
                    }}>
                        * 반드시 보험계약자 본인이 자필로 작성해야합니다.
                    </span>
                </caption>
                <tr className='TableHeader'>
                    <td style={{ width: "1.5cm" }}>구분</td>
                    <td>확 인 사 항</td>
                    <td style={{ width: "3cm" }}>확 인</td>
                </tr>
                <tr >
                    <td>1</td>
                    <td>
                        보험대리점이 대리하는 보험회사의 명칭 및 업무내용(위탁판매)을 들으셨습니까?
                        (금소법 제26조 제1항 제1호)
                    </td>
                    <td><YesOrNoCheckBox
                        componentIndex={0}
                        yesOrNoStore={yesOrNoStore}
                        setYesOrNoStore={setYesOrNoStore} /></td>
                </tr>
                <tr >
                    <td>2</td>
                    <td>
                        여러 보험회사의 상품을 취급하는지 들으셨습니까?
                        (금소법 제26조 제1항 제2호)
                    </td>
                    <td><YesOrNoCheckBox
                        componentIndex={1}
                        yesOrNoStore={yesOrNoStore}
                        setYesOrNoStore={setYesOrNoStore} /></td>
                </tr>
                <tr >
                    <td>3</td>
                    <td>
                        설계사가 금융소비자보호법 상 준수사항 미준수, 금지행위 위반 등 동법을 위반하여
                        고객에게 손해를 발생시킨 경우 설계사 및 보험회사 등은 손해를 배상할 책임이 있음을
                        들으셨습니까? (금소법 제26조 제1항 제1호)
                    </td>
                    <td><YesOrNoCheckBox
                        componentIndex={2}
                        yesOrNoStore={yesOrNoStore}
                        setYesOrNoStore={setYesOrNoStore} /></td>
                </tr>
                <tr >
                    <td>4</td>
                    <td>
                        설계사는 고객이 보험사에 지금해야하는 금전을 받을 권한이 없으며, 고객으로부터 청약 •
                        해지 등 계약에 관한 의사표시를 수령할 수 있는 권한이 없음을 들으셨습니까? (금소법
                        시행령 제24조 제1항 제1호)
                    </td>
                    <td><YesOrNoCheckBox
                        componentIndex={3}
                        yesOrNoStore={yesOrNoStore}
                        setYesOrNoStore={setYesOrNoStore} /></td>
                </tr>
                <tr >
                    <td>5</td>
                    <td>
                        소비자의 신용정보 및 개인정보는 보험회사가 보유 • 관리한다는 사실여부를 들으셨습니까?
                        (금소법 시행령 제24조 제1항 제3호)
                    </td>
                    <td><YesOrNoCheckBox
                        componentIndex={4}
                        yesOrNoStore={yesOrNoStore}
                        setYesOrNoStore={setYesOrNoStore} /></td>
                </tr>
                <tr >
                    <td>6</td>
                    <td>
                        설계사의 이력, 불완전판매비율, 계약유지율, 법적처분 여부를 이클린 보험서비스(
                        <a href='https://www.e-cleanins.or.kr' target='_blank'>www.e-cleanins.or.kr</a>
                        )에서 확인할 수 있는 사실을 들으셨습니까?
                        (금소법 감독규정 제23조 제1항 제2호)
                    </td>
                    <td><YesOrNoCheckBox
                        componentIndex={5}
                        yesOrNoStore={yesOrNoStore}
                        setYesOrNoStore={setYesOrNoStore} /></td>
                </tr>
                <tr >
                    <td>7</td>
                    <td>보험설계사의 등록증명서(증표)을 확인하셨습니까? (금소법 제26조 제2항)</td>
                    <td><YesOrNoCheckBox
                        componentIndex={6}
                        yesOrNoStore={yesOrNoStore}
                        setYesOrNoStore={setYesOrNoStore} /></td>
                </tr>
                <tr>
                    <td colSpan={3} style={{ paddingTop: "0", paddingBottom: "0" }}>
                        <p style={{ textAlign: "left", lineHeight: "0.6cm" }}>
                            보험계약자&nbsp;
                            <span className="TextUnderLine">
                                &emsp;&emsp;&emsp;&emsp;&emsp;
                            </span>
                            (은)는 법인보험대리점&nbsp;
                            <span className="TextUnderLine">
                                <span className="SetColorGray" style={{ fontSize: "medium" }}>뉴니케</span>
                            </span>
                            &nbsp;소속의 설계사&nbsp;
                            <span className="TextUnderLine">
                                &emsp;&emsp;&emsp;&emsp;&emsp;
                            </span>
                            (으)로부터 금융소비자보호법과 위 확인 내용에 대해&nbsp;
                            <span className="TextUnderLine">
                                <span className="SetColorGray" style={{ fontSize: "medium" }}>충분히 설명을 듣고 이해하였음</span>
                            </span>
                            &nbsp;을 확인합니다.
                        </p>
                        <p style={{ marginLeft: "20%" }}>
                            {now.getFullYear()}&emsp;년&emsp;&emsp;{now.getMonth() + 1}&emsp;월&emsp;&emsp;{now.getDate()}&emsp;일
                        </p>
                        <p className="TextUnderLine TextUnderLineRedBold" style={{ textAlign: "right" }}>
                            보험계약자 :&emsp;
                            <span style={{ position: "relative" }}>
                                &emsp;&emsp;&emsp;&emsp;&emsp;
                                <SignatureVerifyArea drawIndex={4} canvasStore={canvasStore} setCanvasStore={setCanvasStore} />
                            </span>
                            <span className="SetColorGray" style={{ width: "200px" }}>
                                <span style={{ position: "relative" }}>
                                    &emsp;(서명)
                                    <SignatureVerifyArea drawIndex={5} canvasStore={canvasStore} setCanvasStore={setCanvasStore} />
                                </span>
                            </span>
                        </p>
                        <p className="TextUnderLine" style={{ textAlign: "right" }}>
                            친권자 :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className="SetColorGray">(서명)</span>&emsp;
                            친권자2 :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className="SetColorGray">(서명)</span>

                        </p>
                    </td>
                </tr>
            </table>
        </div>
    )
};


export default FulfillConfirmTableSecond;