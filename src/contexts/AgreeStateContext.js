import React, { createContext, useState } from 'react';

const AgreeStateContext = createContext({
    state: [
        { isChecked: false },
        { isChecked: false }
    ],
    
    actions : {
        setAgreeStateStore : () => {}
    }
});

const AgreeStateProvider = ({ children }) => {
    const [agreeStateStore, setAgreeStateStore] = useState(
        [
            { isChecked: false },
            { isChecked: false }
        ]
    );

    const value = {
        state : { agreeStateStore },
        actions : { setAgreeStateStore }
    };

    return (
        <AgreeStateContext.Provider value={value}>{children}</AgreeStateContext.Provider>
    );
};

const { Consumer: AgreeStateConsumer } = AgreeStateContext;

export { AgreeStateProvider, AgreeStateConsumer };

export default AgreeStateContext;