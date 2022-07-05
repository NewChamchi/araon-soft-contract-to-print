import React, { useState, useContext } from 'react';
import DrawContext from '../../contexts/DrawContext';
import './Signature.css';
import SignaturePopUp from './SignaturePopUp';

/* 계약서 싸인 화면 컴포넌트 */
const SignatureVerifyArea = ({ drawBoxIndex }) => {

    const [isPopUp, setIsPopUp] = useState(false);
    const { state } = useContext(DrawContext);

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
                {(state.canvasStore[drawBoxIndex].base64Data) ?
                    <img
                        src={state.canvasStore[drawBoxIndex].base64Data}
                        className='SignaturePaste'
                        alt="signature paste"
                    /> : false
                } {/* 이미지가 존재하면 화면에 표시하고, 존재하지 않으면 화면에 표시하지 않음 */}
            </form>
            {isPopUp && <SignaturePopUp
                drawBoxIndex={drawBoxIndex}
                openPopUp={openPopUp}
                closePopUp={closePopUp}
            />} {/*팝업창이 띄워져 있으면 isPopUp과 함께 컴포넌트가 뜨고, 그렇지 않으면 뜨지 않음*/}
        </span>
    );
};

export default SignatureVerifyArea;