import React from 'react';

import './CompareConfirm.css';
import CompareConfirmDate from './CompareConfirmDate';
import CompareConfirmTableFifth from './CompareConfirmTableFifth';
import CompareConfirmTableFirst from './CompareConfirmTableFirst';
import CompareConfirmTableFourth from './CompareConfirmTableFourth';
import CompareConfirmTableSecond from './CompareConfirmTableSecond';
import CompareConfirmTableThird from './CompareConfirmTableThird';

const CompareConfirmForm = () => {
    return (
        <div className='CompareConfirmForm'>
            <CompareConfirmTableFirst />
            <CompareConfirmTableSecond />
            <CompareConfirmTableThird />
            <CompareConfirmDate />
            <CompareConfirmTableFourth />
            <CompareConfirmTableFifth />
        </div>
    )
}

export default CompareConfirmForm;