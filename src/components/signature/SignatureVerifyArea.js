import React, { useState } from 'react';
import './Signature.css';
import SignaturePopUp from './SignaturePopUp';

/* 계약서 싸인 화면 컴포넌트 */
const SignatureVerifyArea = ({ drawIndex, canvasStore, setCanvasStore }) => {

    const [isPopUp, setIsPopUp] = useState(false);

    const openPopUp = (e) => {
        setIsPopUp(true);
    };

    const closePopUp = (e) => {
        setIsPopUp(false);
    };

    return (
        <span className="SignatureVerifyArea">
            <form className="SignatureVerifyAreaClickable" onClick={openPopUp}>
                <span className="SignatureLocation"></span>
                {(canvasStore[drawIndex].base64Data) ?
                    <img
                        src={canvasStore[drawIndex].base64Data}
                        className='SignaturePaste'
                        alt="signature paste"
                    /> : false
                } {/* 이미지가 존재하면 화면에 표시하고, 존재하지 않으면 화면에 표시하지 않음 */}
            </form>
            {isPopUp && <SignaturePopUp
                drawIndex={drawIndex}
                canvasStore={canvasStore}
                setCanvasStore={setCanvasStore}
                openPopUp={openPopUp}
                closePopUp={closePopUp}
            />} {/*팝업창이 띄워져 있으면 isPopUp과 함께 컴포넌트가 뜨고, 그렇지 않으면 뜨지 않음*/}
        </span>
    );
};

export default SignatureVerifyArea;