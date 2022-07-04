import React from 'react';
import './Contract.css';


const ButtonToAfterPage = ({ pageIndex, setPageIndex, isEntirePage }) => {
    const onClick = (e) => {
        setPageIndex(pageIndex + 1)
        e.preventDefault();
    }

    return (
        <div className="ContractButton ButtonToAfterPage">
            {(pageIndex < 3 && !isEntirePage) ? <button onClick={onClick}>다음 페이지</button> : false}
        </div>
    );
}

export default ButtonToAfterPage;