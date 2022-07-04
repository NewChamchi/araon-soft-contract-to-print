import React from 'react';
import './Agreement.css';
import AgreementContentFirst from './AgreementContentFirst';
import AgreementContentFourth from './AgreementContentFourth';
import AgreementContentSecond from './AgreementContentSecond';
import AgreementContentThird from './AgreementContentThird';
import AgreementTableFirst from './AgreementTableFirst';
import AgreementTableSecond from './AgreementTableSecond';


const AgreementForm = () => {
    return (
        <div className='Agreement AgreementForm'>
            <AgreementContentFirst />
            <AgreementContentSecond checkBoxIndex={0} />
            <AgreementContentThird />
            <AgreementContentFourth checkBoxIndex={1} />
            <br></br>
            <AgreementTableFirst/>
            <span>※ 만 14세 미만의 경우 법정대리인이 작성 후 친권인 서명을 하시고, 만 14세 이상
                미셩년자는 본인 직접 동의 또는 법정대리인의 대리 동의 후 친권인 서명하시기 바랍니다.
            </span>
            <AgreementTableSecond />
        </div>
    )
};

export default AgreementForm;