import React, { useMemo, useState } from 'react';

const slowFunction = (num) => {
  console.log("Executing Slow function...");
  let result = num;
  for (let i = 0; i < 3000000000; i++) {
    result += 0; // Do nothing, just loop
  }

  return result + 1;
};

const UseMemoReact = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  const memoizedResult = useMemo(() => {
    return slowFunction(num);
  }, [num]);   //num change vaye maatra yo result calculate

// const memoizedResult = slowFunction(num);

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
        <div>{memoizedResult}</div>
      </div>
    </div>
  );
};

export default UseMemoReact;
