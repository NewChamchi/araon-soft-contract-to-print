import React, { useContext } from 'react';
import { VscCheck } from 'react-icons/vsc';

import './CompareConfirm.css';
import SignatureVerifyArea from '../../signature/SignatureVerifyArea';
import classNames from 'classnames';
import DrawContext from '../../../contexts/DrawContext';

const CompareConfirmTableFourth = () => {
  const { state } = useContext(DrawContext);
  return (
    <div className="CompareConfirm CompareConfirmTableFourth">
      <table style={{ height: '3cm' }}>
        <tr className="TableHeader">
          <td style={{ width: '2cm' }}>구분</td>
          <td style={{ width: '2.7cm' }}>성명</td>
          <td>서명</td>
        </tr>
        <tr>
          <td className="TableHeader">계약자</td>
          <td
            className="RedBorderBox"
            style={{
              borderRight: '0.1px solid black',
              position: 'relative',
            }}
          >
            <VscCheck className="VscCheckRed VscCheckPositionAbsoluteForAlignTopLeft" />
            <span
              className={classNames({
                SetBackgroundColorYellow: !state.canvasStore[2].base64Data,
              })}
              style={{
                marginLeft: '5px',
                position: 'relative',
              }}
            >
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <SignatureVerifyArea drawBoxIndex={2} />
            </span>
          </td>
          <td
            className="RedBorderBox"
            style={{
              borderLeft: '0.1px solid black',
              position: 'relative',
            }}
          >
            <VscCheck className="VscCheckRed VscCheckPositionAbsoluteForAlignTopLeft" />
            <span
              className={classNames({
                SetBackgroundColorYellow: !state.canvasStore[3].base64Data,
              })}
              style={{
                marginLeft: '5px',
                position: 'relative',
              }}
            >
              &emsp;&emsp;&emsp;&emsp;&emsp;
              <SignatureVerifyArea drawBoxIndex={3} />
            </span>
          </td>
        </tr>
        <tr>
          <td className="TableHeader">친권자1</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="TableHeader">친권자2</td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default CompareConfirmTableFourth;
