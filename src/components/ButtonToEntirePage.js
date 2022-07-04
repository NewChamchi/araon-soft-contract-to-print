import React from 'react';
import './Contract.css';

const ButtonToEntirePage = ({ isEntirePage, setIsEntirePage }) => {
  const toggleEntirePage = () => {
    setIsEntirePage(!isEntirePage);
  };

  return (
    <div className="ContractButton ButtonToEntirePage">
      <button onClick={toggleEntirePage}>
        {isEntirePage ? (
          <span>전체 페이지 닫기</span>
        ) : (
          <span>전체 페이지 열기</span>
        )}
      </button>
    </div>
  );
};

export default ButtonToEntirePage;
