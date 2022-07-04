import React from 'react';
import './Agreement.css';

const AgreementHeading = () => {
    return (
        <div className='Agreement AgreementHeading'>
            <h4>상품 소개, 계약 체결, 이행 등 고객관리를 위한 개인(신용)정보처리 활용동의서</h4>
            <p style={{
                textAlign: "right",
                fontWeight: "bold",
                margin: "5px 0"
            }}>주식회사 뉴니케 귀중</p>
        </div>
    )
};

export default AgreementHeading;