import React from 'react';

import AgreeCheckBox from './AgreeCheckBox';
import './Agreement.css';

const AgreementContentFourth = ({ checkBoxIndex, agreeStateStore, setAgreeStateStore }) => {
    return (
        <div className='Agreement AgreementContentFourth'>
            <h5>2. 민감정보 및 고유식별정보의 처리에 관한 사항</h5>
            <p className='SkyBox'>
                ⌈개인정보보호법⌋ 및 ⌈신용정보의 이용 및 보호에 관한 법률⌋에 따라 상기의 개인(신용)정보에
                대한 개별 동의사항에 대하여 각각의 동의를 얻어야 합니다. 이에 귀하의 민감정보(질병 및 상해정보)
                및 고유식별정보(주민등록번호, 외국인등록번호)를 처리(수집, 이용, 조회, 제공)하는 것에 동의합니까?
                <span className='AgreeCheck'>
                    <AgreeCheckBox
                        componentIndex={checkBoxIndex}
                        agreeStateStore={agreeStateStore}
                        setAgreeStateStore={setAgreeStateStore}
                    />
                </span>
            </p>
        </div>
    )
};

export default AgreementContentFourth;