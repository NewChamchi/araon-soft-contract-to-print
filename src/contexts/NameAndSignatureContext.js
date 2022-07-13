import React, { createContext, useState } from 'react';

const NameAndSignatureContext = createContext({
  state: { base64Name: '', base64Signature: '' },
  actions: {
    setBase64NameAndSignatureStore: () => {},
  },
});

const NameAndSignatureProvider = ({ children }) => {
  const [base64NameAndSignatureStore, setBase64NameAndSignatureStore] =
    useState({ base64Name: '', base64Signature: '' });

  const value = {
    state: { base64NameAndSignatureStore },
    actions: { setBase64NameAndSignatureStore },
  };

  return (
    <NameAndSignatureContext.Provider value={value}>
      {children}
    </NameAndSignatureContext.Provider>
  );
};

const { Consumer: NameAndSignatureConsumer } = NameAndSignatureContext;

export { NameAndSignatureProvider, NameAndSignatureConsumer };

export default NameAndSignatureContext;
