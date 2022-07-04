import React, { useRef, useContext } from 'react';
import AgreeStateContext from '../../../contexts/AgreeStateContext';
import './Agreement.css';

const AgreeCheckBox = ({ componentIndex }) => {
    const checkBoxRef = useRef();
    const { state, actions } = useContext(AgreeStateContext);
    
    const clickCheckBox = () => {
        saveCheckBoxState();
    }

    const saveCheckBoxState = () => {
        actions.setAgreeStateStore([
            ...state.agreeStateStore.slice(0, componentIndex),
            {
                isChecked: checkBoxRef.current.checked
            },
            ...state.agreeStateStore.slice(componentIndex + 1, state.agreeStateStore.length)
        ]);
    }

    return (
        <div className='Agreement AgreeCheckBox'>
            [ 동의함 {(state.agreeStateStore[componentIndex].isChecked) ?
            <input type="checkbox" onClick={clickCheckBox} ref={checkBoxRef} checked/> :
            <input type="checkbox" onClick={clickCheckBox} ref={checkBoxRef} />} ]
        </div>
    );
}

export default AgreeCheckBox;