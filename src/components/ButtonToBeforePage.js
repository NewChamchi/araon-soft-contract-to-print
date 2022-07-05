import React from "react";
import "./Contract.css";

const ButtonToBeforePage = ({ pageIndex, setPageIndex, isEntirePage }) => {
  const goToBeforePage = (e) => {
    setPageIndex(pageIndex - 1);
    e.preventDefault();
  };

  const isPageBeforeClickable = () => {
    return pageIndex > 1 && !isEntirePage;
  };

  return (
    <div className="ContractButton ButtonToBeforePage">
      {isPageBeforeClickable() ? (
        <button onClick={goToBeforePage}>이전 페이지</button>
      ) : (
        false
      )}
    </div>
  );
};

export default ButtonToBeforePage;
