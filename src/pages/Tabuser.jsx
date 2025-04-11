import React from 'react'
import { Tabs, TabsList, Tab, TabPanel } from './Tabs';


const Tabuser = () => {
    return (
        <div className="max-w-xl mx-auto mt-10 font-sans">
            <h1 className="text-2xl font-bold mb-6">🌟 Tailwind Tabs Example</h1>

            <Tabs>
                <TabsList>
                    <Tab index={0}>Overview</Tab>
                    <Tab index={1}>Features</Tab>
                    <Tab index={2}>Pricing</Tab>
                </TabsList>

                <TabPanel index={0}>
                    <p>This is the Overview tab content. Tailwind makes it look clean and responsive.</p>
                </TabPanel>
                <TabPanel index={1}>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Fast performance</li>
                        <li>Fully customizable</li>
                        <li>Reusable components</li>
                    </ul>
                </TabPanel>
                <TabPanel index={2}>
                    <p>Our pricing is simple and transparent. Get started for free!</p>
                </TabPanel>
            </Tabs>
        </div>)
}

export default Tabuser