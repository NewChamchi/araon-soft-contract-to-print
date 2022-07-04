import React from 'react';

import AgreeCheckBox from './AgreeCheckBox';
import './Agreement.css';

const AgreementContentSecond = ({ checkBoxIndex }) => {
    return (
        <div className='Agreement AgreementContentSecond'>
            <h5>1. 개인(신용)정보의 수집 • 이용에 관한 사항</h5>
            <p className='SkyBox'>
                본인은 ⌈개인정보보호법⌋ 제15조 및 제22조, ⌈신용정보의 이용 및 보호에 관한 법률⌋ 제 32조 및
                제33조에 따라 아래와 같은 내용으로 본인의 개인(신용)정보를 수집 • 이용하는데 동의합니다.
                <span className='AgreeCheck'>
                    <AgreeCheckBox componentIndex={checkBoxIndex}/>
                </span>
            </p>
        </div>
    )
};

export default AgreementContentSecond;