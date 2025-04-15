import React, { useRef, useState } from 'react';
import TestChild from './TestingKit/TestChild';

const ReactMemo = () => {
    const ref = useRef(0)
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  console.log("parent rerendering .............");
  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
      <h1 className="text-2xl font-bold mb-4">React Counter</h1>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          -
        </button>

        <span className="text-xl font-semibold">{count}</span>

        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          +
        </button>
      </div>

      {/* <TestChild name={"Beasty"} count={count}/> */}
      <TestChild something={"Beasty"}/>


      <h1>Dup Counter</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount2(count2 - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          -
        </button>

        <span className="text-xl font-semibold">{count2}</span>

        <button
          onClick={() => setCount2(count2 + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ReactMemo;





// No Props, No Rerender (Without React.memo):
// If no props are passed to the child component, it won't re-render when the parent re-renders, even without React.memo.

// Static Props, React.memo Behavior:
// If static props (props that do not change) are passed to the child:

// With React.memo: The child will not re-render when the parent re-renders.

// Without React.memo: The child will re-render every time the parent re-renders.

// Dynamic Props, React.memo Behavior:
// If dynamic props (props that change) are passed to the child:

// With React.memo: The child will re-render only when the props change.

// Without React.memo: The child will re-render every time the parent re-renders, even if the props haven't changed.

// Purpose of React.memo:
// React.memo prevents re-renders of a child component unless its props change. It can improve performance by avoiding unnecessary renders when props remain the same.

// When Parent Rerenders:

// With Static Props: If React.memo is used and props don't change, the child won’t re-render when the parent re-renders.

// With Dynamic Props: If props change, the child will re-render regardless of React.memo.

// Re-rendering without React.memo:

// When no props are passed, the child won’t re-render unless the parent itself re-renders.

// When props are passed, the child will always re-render on every parent re-render, unless React.memo is used.

// Re-render Trigger:
// A child component will re-render whenever:

// Its props change (with or without React.memo).

// The parent component re-renders (if the child receives props or doesn't use React.memo).
