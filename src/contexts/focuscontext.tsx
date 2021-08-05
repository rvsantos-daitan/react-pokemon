import React, { createContext, ReactNode, useRef } from "react";

interface IFocusContext {
    cardFocusReference: React.RefObject<HTMLDivElement>
    filterFocusReference: React.RefObject<HTMLInputElement>
}

export const FocusContext = createContext({} as IFocusContext);

interface IFocusProviderProps {
    children: ReactNode;
}

export const FocusProvider: React.FC<IFocusProviderProps> = ({
    children
}) => {
    const cardFocusReference = useRef<HTMLDivElement>(null);
    const filterFocusReference = useRef<HTMLInputElement>(null);

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
