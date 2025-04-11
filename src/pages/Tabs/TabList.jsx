import React, { useEffect, useRef } from 'react'
import Tab from './Tab'

const TabList = ({ tabDetails, active, setActive, tabRef }) => {
    const underLineRef = useRef(null)
    useEffect(() => {
        const current = tabRef.current[active]
        if (current && underLineRef.current) {
            underLineRef.current.style.width = `${current.offsetWidth + 10}px`
            underLineRef.current.style.left = `${current.offsetLeft - 5}px`
        }
    })
    return (
        <section className='relative'>
            <div className='flex w-full justify-between px-6 py-2 border rounded-md '>
                {
                    tabDetails.map(item => <Tab title={item.title} id={item.id} active={active} setActive={setActive} tabRef={tabRef} />)
                }
                <span
                    ref={underLineRef}
                    className="absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-500 rounded-full"
                    style={{ left: 0, width: 0 }}
                />
            </div>

        </section>

    )
}

export default TabList