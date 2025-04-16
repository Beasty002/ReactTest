import React, { useCallback, useState, memo } from 'react'

const UseCallBackReact = () => {
    const [count,setCount] = useState(0)
    const [theme,setTheme] = useState(true) 


    const themeChanger = useCallback(() => {
        console.log("called ................");
        setTheme(prev => !prev)
        console.log(count + 1)
    },[count])






  return (
    <>
        <section>
            <button onClick={() => setCount(count + 1)} className='bg-red-700 text-white text-2xl'>-</button>
            <span className='border mx-5 inline-block w-16 text-center rounded-sm border-black'>{count}</span>
            <button onClick={() => setCount(count + 1)} className='bg-blue-700 text-white text-2xl'>+</button>
            <Child themeChanger={themeChanger} theme={theme}/>
        </section>




    
    </>
  )
}


const Child = memo(({themeChanger,theme}) => {

    console.log("rerendered..........");
    
    return(
            <button className={` border-black border-4 ml-9 ${theme ? "bg-black text-white" : "bg-white text-black"}`}  onClick={themeChanger}>Click me</button>
    )
})

export default UseCallBackReact;


//harek rerender ma function change hunxa so memo le prop change vako sochxa so,  tei vara usecallback use garinxa