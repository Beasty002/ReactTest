import React, { createContext, useRef, useState } from "react";

export const TabsContext = createContext(0);
export const TabsProvider = ({ children }) => {
    const [active, setActive] = useState(1)
    const tabRef = useRef([])

    return (
        <TabsContext.Provider value={{ active, setActive, tabRef }}>
            {children}
        </TabsContext.Provider>
    )
}