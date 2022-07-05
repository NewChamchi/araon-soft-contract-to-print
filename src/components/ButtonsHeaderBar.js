import React from 'react';
import ButtonToAfterPage from './ButtonToAfterPage';
import ButtonToBeforePage from './ButtonToBeforePage';
import ButtonToEntirePage from './ButtonToEntirePage';

const ButtonsHeaderBar = ({
  pageIndex,
  setPageIndex,
  isEntirePage,
  setIsEntirePage,
}) => {
  return (
    <div className="ButtonsBar ButtonsHeaderBar">
      <ButtonToBeforePage
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        isEntirePage={isEntirePage}
      />
      <ButtonToEntirePage
        isEntirePage={isEntirePage}
        setIsEntirePage={setIsEntirePage}
      />
      <ButtonToAfterPage
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        isEntirePage={isEntirePage}
      />
    </div>
  );
};

export default ButtonsHeaderBar;
