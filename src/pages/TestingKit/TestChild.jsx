import React, { memo } from 'react'

const TestChild = ({ name, count , something  }) => {
    // console.log(children);
    console.log("rerendered........");
    

    return (
        <div>{something}</div>
        // <div>{name} {count} asdfasdf</div>
    )
}

export default memo(TestChild); //props ya yesko state change vaye maatra change hunxa yo