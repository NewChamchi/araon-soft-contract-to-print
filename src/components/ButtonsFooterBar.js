import React from 'react';
import ReactToPrint from 'react-to-print';

const ButtonsFooterBar = ({ entirePageRef }) => {
  return (
    <div className="ButtonsBar ButtonsFooterBar">
      <div className="ContractButton ButtonToPrintPopUp">
        <ReactToPrint
          trigger={() => (
            <button>
              전체 페이지
              <br />
              인쇄하기
            </button>
          )}
          content={() => entirePageRef.current}
        />
      </div>
    </div>
  );
};

export default ButtonsFooterBar;
