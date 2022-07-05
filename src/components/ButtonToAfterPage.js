import React from 'react';
import './Contract.css';


const ButtonToAfterPage = ({ pageIndex, setPageIndex, isEntirePage }) => {
   
    const goToAfterPage = (e) => {
        setPageIndex(pageIndex + 1)
        e.preventDefault();
    }

    const isPageAfterClickable = () => {
        return pageIndex <3 && !isEntirePage; 
    }

    return (
        <div className="ContractButton ButtonToAfterPage">
            {(isPageAfterClickable()) ? <button onClick={goToAfterPage}>다음 페이지</button> : false}
        </div>
    );
}

export default ButtonToAfterPage;