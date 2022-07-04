import React, { useRef } from 'react';
import './Agreement.css';

const AgreeCheckBox = ({ componentIndex, agreeStateStore, setAgreeStateStore }) => {
    const checkBoxRef = useRef();
    
    const clickCheckBox = () => {
        saveCheckBoxState();
    }

    const saveCheckBoxState = () => {
        setAgreeStateStore([
            ...agreeStateStore.slice(0, componentIndex),
            {
                isChecked: checkBoxRef.current.checked
            },
            ...agreeStateStore.slice(componentIndex + 1, agreeStateStore.length)
        ]);
    }

    return (
        <div className='Agreement AgreeCheckBox'>
            [ 동의함 {(agreeStateStore[componentIndex].isChecked) ?
            <input type="checkbox" onClick={clickCheckBox} ref={checkBoxRef} checked/> :
            <input type="checkbox" onClick={clickCheckBox} ref={checkBoxRef} />} ]
        </div>
    );
}

export default AgreeCheckBox;