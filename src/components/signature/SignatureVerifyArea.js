import React, { useState, useContext, useRef } from 'react';
import DrawContext from '../../contexts/DrawContext';
import NameAndSignatureContext from '../../contexts/NameAndSignatureContext';
import './Signature.css';
import SignaturePopUp from './SignaturePopUp';

/* 계약서 싸인 화면 컴포넌트 */
const SignatureVerifyArea = ({ drawBoxIndex }) => {
  const SignatureCanvasRef = useRef();
  const [isPopUp, setIsPopUp] = useState(false);
  const { state: drawState } = useContext(DrawContext);
  const { state: nameAndSignatureState } = useContext(NameAndSignatureContext);

  const IndicateDrawBoxBelongTo = (index) => {
    let result;
    switch (index) {
      case 2:
      case 4:
        result = 'name';
        break;
      case 3:
      case 5:
      case 6:
      case 7:
        result = 'signature';
        break;
      default:
        break;
    }
    return result;
  };

  // setTimeout은 다음 이벤트에서 작동
  const openPopUp = (e) => {
    setIsPopUp(true);
    if ('name' === IndicateDrawBoxBelongTo(drawBoxIndex)) {
      setTimeout(() => {
        SignatureCanvasRef.current.fromDataURL(
          nameAndSignatureState.base64NameAndSignatureStore.base64Name
        );
      });
    } else if ('signature' === IndicateDrawBoxBelongTo(drawBoxIndex)) {
      setTimeout(() => {
        SignatureCanvasRef.current.fromDataURL(
          nameAndSignatureState.base64NameAndSignatureStore.base64Signature
        );
      });
    }
  };

  const closePopUp = (e) => {
    setIsPopUp(false);
  };

  return (
    <span className="SignatureVerifyArea">
      <form className="SignatureVerifyAreaClickable" onClick={openPopUp}>
        <span className="SignatureLocation"></span>
        {drawState.canvasStore[drawBoxIndex].base64Data ? (
          <img
            src={drawState.canvasStore[drawBoxIndex].base64Data}
            className="SignaturePaste"
            alt="signature paste"
          />
        ) : (
          false
        )}
        {/* 이미지가 존재하면 화면에 표시하고, 존재하지 않으면 화면에 표시하지 않음 */}
      </form>
      {isPopUp ? (
        <SignaturePopUp
          SignatureCanvasRef={SignatureCanvasRef}
          drawBoxIndex={drawBoxIndex}
          openPopUp={openPopUp}
          closePopUp={closePopUp}
          IndicateDrawBoxBelongTo={IndicateDrawBoxBelongTo}
        />
      ) : (
        false
      )}
      {/*팝업창이 띄워져 있으면 isPopUp과 함께 컴포넌트가 뜨고, 그렇지 않으면 뜨지 않음*/}
    </span>
  );
};

export default SignatureVerifyArea;
