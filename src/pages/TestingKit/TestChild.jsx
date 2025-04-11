import React from 'react'

const TestChild = ({ children }) => {
    console.log(children);

    return (
        <div>TestChild</div>
    )
}

export default TestChild