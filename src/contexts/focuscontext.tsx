import React, { createContext, ReactNode, useRef } from "react";

interface IFocusContext {
    cardFocusReference: React.RefObject<HTMLDivElement>
    filterFocusReference: React.RefObject<HTMLElement>
}

export const FocusContext = createContext({} as IFocusContext);

interface IFocusProviderProps {
    children: ReactNode;
}

export const FocusProvider: React.FC<IFocusProviderProps> = ({
    children
}) => {
    const cardFocusReference = useRef(null);
    const filterFocusReference = useRef(null);

    return (
        <FocusContext.Provider
            value={{
                cardFocusReference,
                filterFocusReference
            }}>
            {children}
        </FocusContext.Provider>
    )
}
