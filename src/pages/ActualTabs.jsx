import React, { useRef, useState, useEffect } from 'react'
import TabList from './Tabs/TabList'
import TabPanels from './Tabs/TabPanels'

const ActualTabs = () => {
    const [active, setActive] = useState(1)
    const ref = useRef()
    const tabRef = useRef([])
    const tabDetails = [
        {
            id: 1,
            title: "Overview",
            content: "This is the overview of the product. It gives a general idea of what it's about, including its purpose, design philosophy, and target audience. This section helps users quickly understand the product’s core value proposition and how it fits into their needs or workflow. Whether you’re a first-time visitor or a returning customer, the overview provides a quick snapshot to help you make informed decisions."
        },
        {
            id: 2,
            title: "Specifications",
            content: "Detailed technical specifications and key features are listed here. This includes dimensions, weight, material composition, power requirements, supported platforms, compatibility information, and performance benchmarks. Specifications are particularly useful for comparing with similar products and ensuring this item fits your exact use case. We’ve also included certifications, environmental ratings, and version history to give you a comprehensive technical background."
        },
        {
            id: 3,
            title: "Reviews",
            content: "Here are some user reviews and ratings about the product. We’ve collected testimonials from verified buyers to give you real-world feedback on usage, reliability, durability, and overall satisfaction. Users share insights about their experience after weeks or months of use, highlighting both strengths and areas for improvement. This section includes average ratings, featured reviews, and filters so you can sort by most helpful, most recent, or rating level."
        },
        {
            id: 4,
            title: "FAQs",
            content: "Common questions and answers related to the product. This includes inquiries about shipping times, warranty details, setup instructions, compatibility, returns, and more. Whether you're wondering how the product works, what’s included in the box, or how to troubleshoot common issues, this section aims to save you time by answering what others have already asked. If your question isn’t listed, you can also submit a new one."
        },
        {
            id: 5,
            title: "Support",
            content: "Information on how to get help or contact customer service. If you encounter any issues with your product or have questions not answered elsewhere, our support team is here to assist. You can reach us through live chat, email, or phone support. We also provide downloadable manuals, setup guides, and troubleshooting articles. Our support center is available 24/7, and we strive to resolve most inquiries within 24 hours."
        }
    ];


    return (
        <>
            <TabList tabRef={tabRef} tabDetails={tabDetails} active={active} setActive={setActive} />
            <TabPanels tabDetails={tabDetails} active={active} setActive={setActive} />
        </>
    )
}

export default ActualTabs