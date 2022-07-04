import React from 'react';
import './Contract.css';


const ButtonToBeforePage = ({ pageIndex, setPageIndex, isEntirePage }) => {
    const onClick = (e) => {
        setPageIndex(pageIndex - 1)
        e.preventDefault();
    }

    return (
        <div className="ContractButton ButtonToBeforePage">
            {(pageIndex > 1 && !isEntirePage) ? <button onClick={onClick}>이전 페이지</button> : false}
        </div>
    );
}

export default ButtonToBeforePage;