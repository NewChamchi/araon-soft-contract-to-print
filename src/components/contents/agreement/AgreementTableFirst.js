import React from 'react';
import './Agreement.css';
import AgreementTableFirstSegment from './AgreementTableFirstSegment';

const AgreementTableFirst = () => {
    return (
        <div className='Agreement AgreementTableFirst'>
            <table style={{height: "5cm"}}>
                <caption style={{textAlign: "left", marginBottom: "0.1cm"}}>
                    본인은 ⌈개인정보보호법⌋ 및 ⌈신용정보의 이용 및 보호에 관한 법률⌋에 따라 귀사가 본인의
                    개인(신용)정보를 상기 내용과 같이 처리하는 것에 동의합니다.
                </caption>
                {/*표가 같은 구조로 반복되어서 컴포넌트를 두 번 반복되게 만듬*/}
                <AgreementTableFirstSegment Writer="계약자" drawBoxIndex={6} /> 
                <AgreementTableFirstSegment Writer="피보험자" drawBoxIndex={7} />
            </table>
        </div>
    )
};

export default AgreementTableFirst;