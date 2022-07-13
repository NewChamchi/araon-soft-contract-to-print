import React from 'react';
import './Signature.css';

/* 확인 취소 버튼 */
const SignatureButtons = ({
  submitDrawSignature,
  cancelDrawSignature,
  eraseDrawSignature,
}) => {
  return (
    <div className="SignatureButtons">
      <button className="SignatureConfirm" onClick={submitDrawSignature}>
        확인
      </button>
      <button className="SignatureCancel" onClick={cancelDrawSignature}>
        취소
      </button>
      {/* <button className="SignatureErase" onClick={eraseDrawSignature}>
        지우기
      </button> */}
    </div>
  );
};

export default SignatureButtons;
