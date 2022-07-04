import React, { Fragment, useState, useRef } from 'react';
import { VscCheck } from 'react-icons/vsc';
import ReactToPrint from 'react-to-print'

import ContractPage from '../components/ContractPage';
import ContractFrame from '../components/ContractFrame';
import ContractHeader from '../components/ContractHeader';
import ContractFooter from '../components/ContractFooter';

import logoSrc from '../lib/img/logo.png';

import ContractLogo from '../components/ContractLogo';
import ContractBody from '../components/ContractBody';
import CompareConfirmHeading from '../components/contents/compareConfirm/CompareConfirmHeading';
import CompareConfirmTableFirst from '../components/contents/compareConfirm/CompareConfirmTableFirst';
import CompareConfirmTableSecond from '../components/contents/compareConfirm/CompareConfirmTableSecond';
import CompareConfirmTableThird from '../components/contents/compareConfirm/CompareConfirmTableThird';
import CompareConfirmDate from '../components/contents/compareConfirm/CompareConfirmDate';
import CompareConfirmTableFourth from '../components/contents/compareConfirm/CompareConfirmTableFourth';
import CompareConfirmTableFifth from '../components/contents/compareConfirm/CompareConfirmTableFifth';
import FulfillConfirmHeading from '../components/contents/fulfillConfirm/FulfillConfirmHeading';
import FulfillConfirmExplain from '../components/contents/fulfillConfirm/FulfillConfirmExplain';
import FulfillConfirmTableFirst from '../components/contents/fulfillConfirm/FulfillConfirmTableFirst';
import FulfillConfirmTableSecond from '../components/contents/fulfillConfirm/FulfillConfirmTableSecond';
import FulfillConfirmTableThird from '../components/contents/fulfillConfirm/FulfillConfirmTableThird';
import FulfillConfirmTableFooter from '../components/contents/fulfillConfirm/FulfillConfirmTableFooter';
import AgreementHeader from '../components/contents/agreement/AgreementHeader';
import AgreementHeading from '../components/contents/agreement/AgreementHeading';
import AgreementBody from '../components/contents/agreement/AgreementBody';
import ButtonToBeforePage from '../components/ButtonToBeforePage';
import ButtonToAfterPage from '../components/ButtonToAfterPage';
import ButtonToEntirePage from '../components/ButtonToEntirePage';

const drawSet = [
    { index: 0, base64Data: '' },
    { index: 1, base64Data: '' },
    { index: 2, base64Data: '' },
    { index: 3, base64Data: '' },
    { index: 4, base64Data: '' },
    { index: 5, base64Data: '' },
    { index: 6, base64Data: '' },
    { index: 7, base64Data: '' }
];

const yesOrNoCheckBoxSet = [
    { isYesChecked: false, isNoChecked: false },
    { isYesChecked: false, isNoChecked: false },
    { isYesChecked: false, isNoChecked: false },
    { isYesChecked: false, isNoChecked: false },
    { isYesChecked: false, isNoChecked: false },
    { isYesChecked: false, isNoChecked: false },
    { isYesChecked: false, isNoChecked: false }
]

const agreeStateSet = [
    { isChecked: false },
    { isChecked: false }
]

const App = () => {
    const [isEntirePage, setIsEntirePage] = useState(false);
    const [canvasStore, setCanvasStore] = useState(drawSet);
    const [pageIndex, setPageIndex] = useState(1)
    const [yesOrNoStore, setYesOrNoStore] = useState(yesOrNoCheckBoxSet);
    const [agreeStateStore, setAgreeStateStore] = useState(agreeStateSet);
    return (
        <div className="App" style={{ display: "flex", justifyContent: "space-around" }}>
            <ButtonToBeforePage
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
                isEntirePage={isEntirePage} />
            <ButtonToEntirePage
                isEntirePage={isEntirePage}
                setIsEntirePage={setIsEntirePage} />
            {(isEntirePage) ? <PageEntire
                canvasStore={canvasStore}
                setCanvasStore={setCanvasStore}
                yesOrNoStore={yesOrNoStore}
                setYesOrNoStore={setYesOrNoStore}
                agreeStateStore={agreeStateStore}
                setAgreeStateStore={setAgreeStateStore}
            /> :
                (pageIndex == 1) ? <PageFirst
                    canvasStore={canvasStore}
                    setCanvasStore={setCanvasStore}
                /> :
                    (pageIndex == 2) ? <PageSecond
                        canvasStore={canvasStore}
                        setCanvasStore={setCanvasStore}
                        yesOrNoStore={yesOrNoStore}
                        setYesOrNoStore={setYesOrNoStore}
                    /> :
                        (pageIndex == 3) ? <PageThird
                            canvasStore={canvasStore}
                            setCanvasStore={setCanvasStore}
                            agreeStateStore={agreeStateStore}
                            setAgreeStateStore={setAgreeStateStore}
                        /> : false}
            <ButtonToAfterPage
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
                isEntirePage={isEntirePage} />
        </div>
    );
}

const PageEntire = ({ canvasStore, setCanvasStore, yesOrNoStore, setYesOrNoStore, agreeStateStore, setAgreeStateStore }) => {
    const entirePageRef = useRef();
    return (
        <Fragment>
            <div className='PageEntire' style={{ margin: "0", padding: "0" }} ref={entirePageRef}>
                <PageFirst
                    canvasStore={canvasStore}
                    setCanvasStore={setCanvasStore}
                />
                <PageSecond
                    canvasStore={canvasStore}
                    setCanvasStore={setCanvasStore}
                    yesOrNoStore={yesOrNoStore}
                    setYesOrNoStore={setYesOrNoStore}
                />
                <PageThird
                    canvasStore={canvasStore}
                    setCanvasStore={setCanvasStore}
                    agreeStateStore={agreeStateStore}
                    setAgreeStateStore={setAgreeStateStore}
                />
            </div>
            <div className="ButtonToPrintPopUp">
                <ReactToPrint
                    trigger={() => <button>전체 페이지<br />인쇄하기</button>}
                    content={() => entirePageRef.current}
                />
            </div>
        </Fragment>
    );
}
const PageFirst = ({ pageIndex, canvasStore, setCanvasStore }) => {
    return (
        <Fragment>
            <ContractPage pageIndex={pageIndex}>
                <ContractHeader>
                    <span style={{
                        color: "royalblue",
                        fontWeight: "bold"
                    }}>
                        증권번호:
                    </span>
                    <span style={{
                        color: "royalblue",
                        fontWeight: "bold"
                    }}>
                        계약일자:
                    </span>
                </ContractHeader>
                <ContractFrame AddBorder={true}>
                    <ContractBody>
                        <CompareConfirmHeading />
                        <CompareConfirmTableFirst />
                        <CompareConfirmTableSecond />
                        <CompareConfirmTableThird
                            canvasStore={canvasStore}
                            setCanvasStore={setCanvasStore} />
                        <CompareConfirmDate />
                        <CompareConfirmTableFourth
                            canvasStore={canvasStore}
                            setCanvasStore={setCanvasStore} />
                        <CompareConfirmTableFifth />
                    </ContractBody>
                </ContractFrame>
                <ContractFooter>
                    <span>*&ensp;&ensp;<VscCheck className='VscCheckRed' />&ensp;&ensp;&ensp;&ensp;빨강색 체크는 반드시 계약자 자필로 작성</span>
                    <ContractLogo logoSrc={logoSrc} />
                </ContractFooter>
            </ContractPage>
        </Fragment>
    );
}

const PageSecond = ({ pageIndex, canvasStore, setCanvasStore, yesOrNoStore, setYesOrNoStore }) => {
    return (
        <Fragment>
            <ContractPage pageIndex={pageIndex}>
                <ContractFrame SetPositionAbsoluteForAlignCenter={true}>
                    <ContractHeader>
                        <ContractLogo logoSrc={logoSrc} />
                        <EmptyComponent/>
                    </ContractHeader>
                    <FulfillConfirmHeading />
                    <FulfillConfirmExplain />
                    <FulfillConfirmTableFirst />
                    <FulfillConfirmTableSecond
                        canvasStore={canvasStore}
                        setCanvasStore={setCanvasStore}
                        yesOrNoStore={yesOrNoStore}
                        setYesOrNoStore={setYesOrNoStore} />
                    <FulfillConfirmTableThird />
                    <ContractFooter>
                        <FulfillConfirmTableFooter />
                        <span style={{
                            fontWeight: "bold",
                            fontSize: "large"
                        }}>주식회사 뉴니케 귀중</span>
                    </ContractFooter>
                </ContractFrame>
            </ContractPage>
        </Fragment>
    );
}

const PageThird = ({ pageIndex, canvasStore, setCanvasStore, agreeStateStore, setAgreeStateStore }) => {
    return (
        <Fragment>
            <ContractPage pageIndex={pageIndex}>
                <ContractFrame SetPositionAbsoluteForAlignCenter={true}>
                    <ContractHeader>
                        <EmptyComponent/>
                        <AgreementHeader />
                    </ContractHeader>
                    <AgreementHeading />
                    <AgreementBody
                        canvasStore={canvasStore}
                        setCanvasStore={setCanvasStore}
                        agreeStateStore={agreeStateStore}
                        setAgreeStateStore={setAgreeStateStore} />
                    <ContractFooter>
                        <EmptyComponent/>
                        <ContractLogo logoSrc={logoSrc} />
                    </ContractFooter>
                </ContractFrame>
            </ContractPage>
        </Fragment>
    );
}

const EmptyComponent = () => {
    return (
        <Fragment>
            <span/>
        </Fragment>
    );
}
// export default connect()(App);
export default App;