import React, { useContext } from 'react'
import TabPanel from './TabPanel'
import { TabsContext } from './../../hooks/TabsContext'

const TabPanels = ({ tabDetails }) => {
    const { active } = useContext(TabsContext)
    const activetab = tabDetails.find(item => item.id === active)
    return (
        <section className='border bg-white px-5 py-3 mt-4 rounded-lg min-h-32 shadow-sm'>
            {/* use this if we want to load all and retain their current state to use this use the passed hidden prop in tabpanel compoenet too */}
            {/* {tabDetails.map(item => (
                <TabPanel
                    key={item.id}
                    content={item.content}
                    hidden={item.id !== active}
                />
            ))} */}


            {/* this up method might cause overhead issue so better way is ..... */}
            {/* {
                tabDetails.map(item => item.id === active && <TabPanel content={item.content} />)
            } */}

            {
                activetab && <TabPanel content={activetab.content} />
            }






        </section>
    )
}

export default TabPanels