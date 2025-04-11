import React, { useEffect } from 'react'

const Tab = ({ title, id, active, setActive, tabRef }) => {

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         console.log('Tab Ref:', tabRef.current);
    //     }, 4000);

    //     return () => clearInterval(interval); // clean up
    // }, []);
    return (
        <button className={`cursor-pointer ${active === id ? "text-blue-500" : "`text-gray-500"}`} onClick={() => setActive(id)}
            ref={el => tabRef.current[id] = el}
        >{title}</button>
    )
}

export default Tab