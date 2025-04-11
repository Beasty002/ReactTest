import React from 'react'
import TabPanel from './TabPanel'

const TabPanels = ({ tabDetails, active }) => {
    return (
        <section className='border bg-white px-5 py-3 mt-4 rounded-lg min-h-32'>
            {
                tabDetails.map(item => item.id === active && <TabPanel content={item.content} />)
            }



        </section>
    )
}

export default TabPanels