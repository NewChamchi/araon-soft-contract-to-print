import React from 'react';
import './Agreement.css';
import AgreementTableFirstSegment from './AgreementTableFirstSegment';

const AgreementTableFirst = ({canvasStore, setCanvasStore}) => {
    return (
        <div className='Agreement AgreementTableFirst'>
            <table style={{height: "5cm"}}>
                <caption style={{textAlign: "left", marginBottom: "0.1cm"}}>
                    본인은 ⌈개인정보보호법⌋ 및 ⌈신용정보의 이용 및 보호에 관한 법률⌋에 따라 귀사가 본인의
                    개인(신용)정보를 상기 내용과 같이 처리하는 것에 동의합니다.
                </caption>
                <AgreementTableFirstSegment Contracter="계약자" drawIndex={6} canvasStore={canvasStore} setCanvasStore={setCanvasStore}/> {/*표가 같은 구조로 반복되어서 같은 컴포넌트를 두 번 반복되게 만듬*/}
                <AgreementTableFirstSegment Contracter="피보험자" drawIndex={7} canvasStore={canvasStore} setCanvasStore={setCanvasStore}/>
            </table>
        </div>
    )
};

export default AgreementTableFirst;