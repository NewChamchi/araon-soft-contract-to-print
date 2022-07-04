import React, { Fragment } from 'react';
import { AgreeStateProvider } from './AgreeStateContext';
import { DrawProvider } from './DrawContext';
import { YesOrNoCheckBoxProvider } from './YesOrNoCheckBoxContext';

const ContextIntegratedProvider = ({ children }) => {
    return (
        <Fragment>
        <DrawProvider>
            <YesOrNoCheckBoxProvider>
                <AgreeStateProvider>
                    {children}
                </AgreeStateProvider>
            </YesOrNoCheckBoxProvider>
        </DrawProvider>
        </Fragment>
    )
}

export default ContextIntegratedProvider;