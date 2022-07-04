import React from 'react';
import classnames from 'classnames';

import './Contract.css';

const ContractFrame = ({ children, AddBorder, SetPositionAbsoluteForAlignCenter }) => {
    return (
        <div className={classnames('ContractFrame', {AddBorder}, {SetPositionAbsoluteForAlignCenter})}>
            {children}
        </div>
    )
};

export default ContractFrame;