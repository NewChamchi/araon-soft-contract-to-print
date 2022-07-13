import React, { useContext } from 'react';
import './Signature.css';
import SignatureButtons from './SignatureButtons';
import SignatureCanvas from 'react-signature-canvas';
import Modal from 'react-modal';
import DrawContext from '../../contexts/DrawContext';
import NameAndSignatureContext from '../../contexts/NameAndSignatureContext';

const modalWindowStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // 각각 화면 상하좌우로부터 얼마나 떨어지는지 표시하는 기능임 (다 50%으로 밀어버리면 화면 가운데로 수렴해버림)
    marginRight: '50%',
    transform: 'translate(-50%, -50%)', // 위치를 이동 시킴 (right와 bottom을 쓸 수 없기 때문에 대신 쓰는 듯)
  },
};

/* 팝업창 */
const SignaturePopUp = ({
  SignatureCanvasRef,
  drawBoxIndex,
  openPopUp,
  closePopUp,
  IndicateDrawBoxBelongTo,
}) => {
  const { state: drawState, actions: drawActions } = useContext(DrawContext);
  const { state: nameAndSignatureState, actions: nameAndSignatureActions } =
    useContext(NameAndSignatureContext);

  const submitDrawSignature = (e) => {
    drawActions.setCanvasStore([
      ...drawState.canvasStore.slice(0, drawBoxIndex),
      {
        ...drawState.canvasStore[drawBoxIndex],
        base64Data: SignatureCanvasRef.current
          .getCanvas()
          .toDataURL('image/png'),
      },
      ...drawState.canvasStore.slice(
        drawBoxIndex + 1,
        drawState.canvasStore.length
      ),
    ]);

    if ('name' === IndicateDrawBoxBelongTo(drawBoxIndex)) {
      nameAndSignatureActions.setBase64NameAndSignatureStore({
        ...nameAndSignatureState.base64NameAndSignatureStore,
        base64Name: SignatureCanvasRef.current
          .getCanvas()
          .toDataURL('image/png'),
      });
    } else if ('signature' === IndicateDrawBoxBelongTo(drawBoxIndex)) {
      nameAndSignatureActions.setBase64NameAndSignatureStore({
        ...nameAndSignatureState.base64NameAndSignatureStore,
        base64Signature: SignatureCanvasRef.current
          .getCanvas()
          .toDataURL('image/png'),
      });
    }
    closePopUp();
  };

  // 취소 콜백 함수는 싸인 위치에 있는 싸인 이미지를 제거하는 게 아니라 유지를 해야함
  const cancelDrawSignature = (e) => {
    closePopUp();
  };

  return (
    <div className="SignaturePopUp">
      <Modal
        isOpen={openPopUp}
        // onAfterOpen={}
        onRequestClose={closePopUp}
        style={modalWindowStyles}
        contentLabel={'Signature Input Window'}
      >
        <form>
          <div className="SignatureCanvas">
            <SignatureCanvas
              ref={SignatureCanvasRef} // 확인버튼을 누르면 해당 ref의 current에서 canvas를 가져옴
              penColor="black"
              minWidth={1} // 최소 굵기
              maxWidth={5} // 최대 굵기
              canvasProps={{ className: 'SigCanvas' }}
            />
          </div>
          <SignatureButtons
            submitDrawSignature={submitDrawSignature}
            cancelDrawSignature={cancelDrawSignature}
          />
        </form>
      </Modal>
    </div>
  );
};

export default SignaturePopUp;
