import React, { useState, useRef, useEffect, createContext, useContext } from 'react';

const TabsContext = createContext();

export function Tabs({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabRefs = useRef([]);

    return (
        <TabsContext.Provider value={{ activeIndex, setActiveIndex, tabRefs }}>
            <div className="w-full">
                {children}
            </div>
        </TabsContext.Provider>
    );
}

export function TabsList({ children }) {
    const underlineRef = useRef(null);
    const { activeIndex, tabRefs } = useContext(TabsContext);
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Tab Ref:', tabRef.current);
        }, 4000);

        return () => clearInterval(interval); // clean up
    }, []);

    useEffect(() => {
        const currentTab = tabRefs.current[activeIndex];
        if (currentTab && underlineRef.current) {
            underlineRef.current.style.width = `${currentTab.offsetWidth}px`;
            underlineRef.current.style.left = `${currentTab.offsetLeft}px`;
        }
    }, [activeIndex, tabRefs]);

    return (
        <div className="relative flex border-b border-gray-300 mb-4">
            {children}
            {/* Underline strictly under the tab headings */}
            <span
                ref={underlineRef}
                className="absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-300"
                style={{ left: 0, width: 0 }}
            />
        </div>
    );
}

export function Tab({ children, index }) {
    const { activeIndex, setActiveIndex, tabRefs } = useContext(TabsContext);
    const tabRef = useRef(null);

    useEffect(() => {
        tabRefs.current[index] = tabRef.current;
    }, [index, tabRefs]);

    const isActive = activeIndex === index;

    return (
        <button
            ref={tabRef}
            onClick={() => setActiveIndex(index)}
            className={`relative py-2 px-4 text-sm font-medium focus:outline-none ${isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'
                }`}
        >
            {children}
        </button>
    );
}

export function TabPanel({ children, index }) {
    const { activeIndex } = useContext(TabsContext);
    return activeIndex === index ? (
        <div className="p-4 border rounded-md bg-white shadow">{children}</div>
    ) : null;
}
