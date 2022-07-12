import React, { Fragment } from 'react';
import { AgreeStateProvider } from './AgreeStateContext';
import { DrawProvider } from './DrawContext';
import { NameAndSignatureProvider } from './NameAndSignatureContext';
import { YesOrNoCheckBoxProvider } from './YesOrNoCheckBoxContext';

const ContextIntegratedProvider = ({ children }) => {
  return (
    <Fragment>
      <DrawProvider>
        <YesOrNoCheckBoxProvider>
          <NameAndSignatureProvider>
            <AgreeStateProvider>{children}</AgreeStateProvider>
          </NameAndSignatureProvider>
        </YesOrNoCheckBoxProvider>
      </DrawProvider>
    </Fragment>
  );
};

export default ContextIntegratedProvider;
