import React from 'react';

import { VscCheck } from 'react-icons/vsc';
import './CompareConfirm.css';
import SignatureVerifyArea from '../../signature/SignatureVerifyArea';

const CompareConfirmTableThird = () => {
    return (
        <div className='CompareConfirm CompareConfirmTableThird'>
            <table>
                <caption>
                    <span>3. 보험상품 비교 • 설명 관련 사항</span>
                </caption>
                <tr className='TableHeader'>
                    <td style={{ width: "13cm" }}>확인내용</td>
                    <td>비고</td>
                </tr>
                <tr>
                    <td>
                        <span>&nbsp;&nbsp;본인은 상기 보험상품에 청약하면서 3가지 이상의 동종 또는 유사상품에 대하여
                            ①보험금 및 지급사유, ②보험기간, ③보험료, ④보험금을 지급하지 아니하는 사유
                            ⑤해지환급금에 관한 사항, ⑥갱신 등 재계약에 관한 사항, ⑦해당 보험상품의
                            차별회된 특징등에 대하여 비교 • 설명을 들었음</span>
                        <p style={{ marginTop: "0", marginBottom: "0.1cm" }}><VscCheck className='VscCheckRed' />(
                            <span className='SetColorGray' style={{
                                position: "relative",
                                fontWeight: "lighter"
                            }}>
                                &nbsp;설 명 &nbsp;&nbsp;&nbsp;들 었 음&nbsp;
                                <SignatureVerifyArea drawBoxIndex={0}/>
                            </span>
                            ) <span className='SetColorRed'>← 보험계약자 자필 덧칠(쓰기)</span>
                        </p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                        <span className="SetColorRed" style={{ fontWeight: "lighter" }}>
                            (자동차보험은 해당없음)
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>&nbsp;&nbsp;본인은 상기 보험상품에 청약하면서 손해보험 협회 공시실의 자동차보험료 비교 공시 사이트
                            (https://e-insmarket.or.kr/intro.knia)에서 보험회사별 자동차보험료를 확인 하였음.
                        </span>
                        <p style={{ marginTop: "0", marginBottom: "0.1cm" }}><VscCheck className='VscCheckRed' />(
                            <span className='SetColorGray' style={{
                                position: "relative",
                                fontWeight: "lighter"
                            }}>
                                &nbsp;확 인 &nbsp;&nbsp;&nbsp;하 였 음&nbsp;
                                <SignatureVerifyArea drawBoxIndex={1}/>
                            </span>
                            ) <span className='SetColorRed'>← 보험계약자 자필 덧칠(쓰기)</span>
                        </p>
                        <span>
                            ※ 동 자동차보험료 비교•공시는 회사별 보험료 수준을 비교하기 위한 것으로
                            주가입계층을 기준으로 상품별, 차종별, 연령별로 예시한 것이며 회사 선택의
                            참고자료로만 활용하시기 바랍니다.
                        </span>
                    </td>
                    <td style={{ textAlign: "center" }}>
                        <span className='SetColorRed' style={{
                            fontWeight: "lighter",
                            textAlign: "center"
                        }}>
                            (자동차보험만 해당)
                        </span>
                    </td>
                </tr>
            </table>
        </div>
    )
};

export default CompareConfirmTableThird;