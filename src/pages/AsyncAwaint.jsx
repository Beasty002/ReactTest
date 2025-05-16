import React, { useEffect, useMemo, useState } from 'react';

const slowFunction = (num) => {
    console.log("Executing Slow function...");
    return new Promise((resolve) => {
      setTimeout(() => {
        let result = num;
        for (let i = 0; i < 800000000; i++) {
          result += 0; 
        }
        resolve(result + 1);
      }, 0);
    });
  };
  

const UseMemoReact = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);
  const [isloading,setloading] = useState(false)
  const [memoizedResult,setMemoizedResult] = useState(null)


// const memoizedResult = slowFunction(num);

useEffect(() => {
    const calc = async() => {
        setloading(true)
        const result = await slowFunction(num)
        setMemoizedResult(result)
        setloading(false)
    }
    calc()

},[num])

  return (
    <div>
      <h1>React useMemo with Slow Function</h1>

      <div>
        <button onClick={() => setCount(count + 1)}>Increment count: {count}</button>
      </div>

      <div>
        <button onClick={() => setNum(num + 1)}>Change num: {num}</button>
      </div>

      <div>
        <h2>Memoized Result:</h2>
        {isloading ? "...Loading" : <div>{memoizedResult}</div>}
      </div>
    </div>
  );
};

export default UseMemoReact;
