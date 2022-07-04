import React, { createContext, useState } from 'react';

const YesOrNoCheckBoxContext = createContext({
    state: [
        { isYesChecked: false, isNoChecked: false },
        { isYesChecked: false, isNoChecked: false },
        { isYesChecked: false, isNoChecked: false },
        { isYesChecked: false, isNoChecked: false },
        { isYesChecked: false, isNoChecked: false },
        { isYesChecked: false, isNoChecked: false },
        { isYesChecked: false, isNoChecked: false }
    ],
    
    actions : {
        setYesOrNoCheckBoxStore : () => {}
    }
});

const YesOrNoCheckBoxProvider = ({ children }) => {
    const [yesOrNoCheckBoxStore, setYesOrNoCheckBoxStore] = useState(
        [
            { isYesChecked: false, isNoChecked: false },
            { isYesChecked: false, isNoChecked: false },
            { isYesChecked: false, isNoChecked: false },
            { isYesChecked: false, isNoChecked: false },
            { isYesChecked: false, isNoChecked: false },
            { isYesChecked: false, isNoChecked: false },
            { isYesChecked: false, isNoChecked: false }
        ]
    );

    const value = {
        state : { yesOrNoCheckBoxStore },
        actions : { setYesOrNoCheckBoxStore }
    };

    return (
        <YesOrNoCheckBoxContext.Provider value={value}>{children}</YesOrNoCheckBoxContext.Provider>
    );
};

const { Consumer: YesOrNoCheckBoxConsumer } = YesOrNoCheckBoxContext;

export { YesOrNoCheckBoxProvider, YesOrNoCheckBoxConsumer };

export default YesOrNoCheckBoxContext;