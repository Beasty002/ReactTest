import React, { useContext, useEffect } from 'react'
import { TabsContext } from './../../hooks/TabsContext'

const Tab = ({ title, id }) => {

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         console.log('Tab Ref:', tabRef.current);
    //     }, 4000);

    //     return () => clearInterval(interval); // clean up
    // }, []);

    const { active, setActive, tabRef } = useContext(TabsContext)
    return (
        <button className={`cursor-pointer ${active === id ? "text-blue-500" : "`text-gray-500"}`} onClick={() => setActive(id)}
            ref={el => tabRef.current[id] = el}
        >{title}</button>
    )
}

export default Tab