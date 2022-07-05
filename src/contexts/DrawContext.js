import React, { createContext, useState } from 'react';

const DrawContext = createContext({
    state: [
        { index: 0, base64Data: '' },
        { index: 1, base64Data: '' },
        { index: 2, base64Data: '' },
        { index: 3, base64Data: '' },
        { index: 4, base64Data: '' },
        { index: 5, base64Data: '' },
        { index: 6, base64Data: '' },
        { index: 7, base64Data: '' }
    ],
    
    actions : {
        setCanvasStore : () => {}
    }
});

const DrawProvider = ({ children }) => {
    const [canvasStore, setCanvasStore] = useState(
        [
            { index: 0, base64Data: '' },
            { index: 1, base64Data: '' },
            { index: 2, base64Data: '' },
            { index: 3, base64Data: '' },
            { index: 4, base64Data: '' },
            { index: 5, base64Data: '' },
            { index: 6, base64Data: '' },
            { index: 7, base64Data: '' }
        ]
    );

    const value = {
        state : { canvasStore },
        actions : { setCanvasStore }
    };

    return (
        <DrawContext.Provider value={value}>{children}</DrawContext.Provider>
    );
};

const { Consumer: DrawConsumer } = DrawContext;

export { DrawProvider, DrawConsumer };

export default DrawContext;