import React from 'react';
import FulfillConfirmExplain from './FulfillConfirmExplain';
import FulfillConfirmTableFirst from './FulfillConfirmTableFirst';
import FulfillConfirmTableSecond from './FulfillConfirmTableSecond';
import FulfillConfirmTableThird from './FulfillConfirmTableThird';

const FulfillConfirmForm = () => {
    return (
        <div className='FulfillConfirmForm'>
                    <FulfillConfirmExplain />
                    <FulfillConfirmTableFirst />
                    <FulfillConfirmTableSecond />
                    <FulfillConfirmTableThird />
        </div>
    );
}

export default FulfillConfirmForm;