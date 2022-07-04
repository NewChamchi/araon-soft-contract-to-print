import React from 'react';
import './FulfillConfirm.css';

const FulfillConfirmTableThird = () => {
    return (
        <div className='FulfillConfirm FulfillConfirmTableThird'>
            <table>
                <caption>
                    &ensp;<span style={{
                        fontWeight: "bold",
                        fontSize:"medium"
                    }}>
                        [금융상품판매대리 • 중개업자(개인) 확인]
                    </span>
                </caption>
                <tr>
                    <td>
                        <p style={{marginTop:"0"}}>
                        주식회사 뉴니케 보험설계사&ensp;
                        <span className="TextUnderLine">
                            &emsp;&emsp;&emsp;&emsp;&emsp;
                        </span>
                        &ensp;(은)는 금소법의 주요내용과 고지의무내용에 대해 숙지하고,
                        보험계약자&ensp;
                        <span className="TextUnderLine">
                            &emsp;&emsp;&emsp;&emsp;
                        </span>
                        &ensp;가 본인임을 확인하고, 보험계약자에게&ensp;
                        <span className="TextUnderLine">
                        <span style={{fontSize:"medium", color:"gainsboro"}}>위 확인사항을 충분히 설명하고 안내</span>
                        </span>
                        &ensp;하였습니다.
                        </p>
                        <p style={{marginBottom:"0"}}>
                            소속지점&ensp;:&ensp;
                            <span className="TextUnderLine">
                            &emsp;&emsp;&emsp;&emsp;&emsp;
                        </span>
                        &emsp;모집인 등록번호&ensp;:&ensp;
                        <span className="TextUnderLine">
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        </span>
                        &emsp;보험설계사&ensp;:&ensp;
                        <span className="TextUnderLine">
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        </span>
                        &ensp;(서명)
                        </p>
                    </td>
                </tr>
            </table>
        </div>
    )
};

export default FulfillConfirmTableThird;