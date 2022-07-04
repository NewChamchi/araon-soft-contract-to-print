import React, { Fragment, useState, useRef } from 'react';
import { VscCheck } from 'react-icons/vsc';

import ContractPage from './components/ContractPage';
import ContractFrame from './components/ContractFrame';
import ContractHeader from './components/ContractHeader';
import ContractFooter from './components/ContractFooter';

import logoSrc from './lib/img/logo.png';

import ContractLogo from './components/ContractLogo';
import ContractBody from './components/ContractBody';
import CompareConfirmHeading from './components/contents/compareConfirm/CompareConfirmHeading';
import FulfillConfirmHeading from './components/contents/fulfillConfirm/FulfillConfirmHeading';
import FulfillConfirmTableFooter from './components/contents/fulfillConfirm/FulfillConfirmTableFooter';
import AgreementHeader from './components/contents/agreement/AgreementHeader';
import AgreementHeading from './components/contents/agreement/AgreementHeading';
import AgreementForm from './components/contents/agreement/AgreementForm';
import ContextIntegratedProvider from './contexts/ContextIntegratedProvider';
import CompareConfirmForm from './components/contents/compareConfirm/CompareConfirmForm';
import FulfillConfirmForm from './components/contents/fulfillConfirm/FulfillConfirmForm';
import ButtonsHeaderBar from './components/ButtonsHeaderBar';
import ButtonsFooterBar from './components/ButtonsFooterBar';

const App = () => {
  const [isEntirePage, setIsEntirePage] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const entirePageRef = useRef();
  return (
    <div>
      <ButtonsHeaderBar
        isEntirePage={isEntirePage}
        setIsEntirePage={setIsEntirePage}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
      />
      <br />
      <br />
      <br />
      <ContextIntegratedProvider>
        {isEntirePage ? (
          <PageEntire entirePageRef={entirePageRef} />
        ) : pageIndex == 1 ? (
          <PageFirst />
        ) : pageIndex == 2 ? (
          <PageSecond />
        ) : pageIndex == 3 ? (
          <PageThird />
        ) : (
          false
        )}
      </ContextIntegratedProvider>

      {isEntirePage ? (
        <ButtonsFooterBar entirePageRef={entirePageRef} />
      ) : (
        false
      )}
    </div>
  );
};

const PageEntire = ({ entirePageRef }) => {
  return (
    <div
      className="PageEntire"
      style={{ margin: '0', padding: '0' }}
      ref={entirePageRef}
    >
      <PageFirst />
      <PageSecond />
      <PageThird />
    </div>
  );
};
const PageFirst = ({ pageIndex }) => {
  return (
    <Fragment>
      <ContractPage pageIndex={pageIndex}>
        <ContractHeader>
          <span style={{ color: 'royalblue', fontWeight: 'bold' }}>
            증권번호:
          </span>
          <span style={{ color: 'royalblue', fontWeight: 'bold' }}>
            계약일자:
          </span>
        </ContractHeader>
        <ContractFrame AddBorder={true}>
          <ContractBody>
            <CompareConfirmHeading />
            <CompareConfirmForm />
          </ContractBody>
        </ContractFrame>
        <ContractFooter>
          <span>
            *&ensp;&ensp;
            <VscCheck className="VscCheckRed" />
            &ensp;&ensp;&ensp;&ensp;빨강색 체크는 반드시 계약자 자필로 작성
          </span>
          <ContractLogo logoSrc={logoSrc} />
        </ContractFooter>
      </ContractPage>
    </Fragment>
  );
};

const PageSecond = ({ pageIndex }) => {
  return (
    <Fragment>
      <ContractPage pageIndex={pageIndex}>
        <ContractFrame SetPositionAbsoluteForAlignCenter={true}>
          <ContractHeader>
            <ContractLogo logoSrc={logoSrc} />
            <EmptyComponent />
          </ContractHeader>
          <FulfillConfirmHeading />
          <FulfillConfirmForm />
          <ContractFooter>
            <FulfillConfirmTableFooter />
            <span style={{ fontWeight: 'bold', fontSize: 'large' }}>
              주식회사 뉴니케 귀중
            </span>
          </ContractFooter>
        </ContractFrame>
      </ContractPage>
    </Fragment>
  );
};

const PageThird = ({ pageIndex }) => {
  return (
    <Fragment>
      <ContractPage pageIndex={pageIndex}>
        <ContractFrame SetPositionAbsoluteForAlignCenter={true}>
          <ContractHeader>
            <EmptyComponent />
            <AgreementHeader />
          </ContractHeader>
          <AgreementHeading />
          <AgreementForm />
          <ContractFooter>
            <EmptyComponent />
            <ContractLogo logoSrc={logoSrc} />
          </ContractFooter>
        </ContractFrame>
      </ContractPage>
    </Fragment>
  );
};

const EmptyComponent = () => {
  return (
    <Fragment>
      <span />
    </Fragment>
  );
};

export default App;
