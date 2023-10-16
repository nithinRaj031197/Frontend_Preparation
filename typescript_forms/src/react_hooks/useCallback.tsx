import React, { useCallback, useState } from "react";

const Parent = () => {
  console.log("Parent");
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1>Parent {count}</h1>
      <Child handleCount={handleCount} />
    </div>
  );
};

export default Parent;

interface ChildProps {
  handleCount: () => void;
}

const Child = React.memo(({ handleCount }: ChildProps) => {
  console.log("Child");

  return (
    <div>
      <h1>Child</h1>
      <button style={{ background: "#000", color: "#fff", padding: 10 }} onClick={handleCount}>
        Click
      </button>
    </div>
  );
});

/**
    {        
        ref1 : handleCount
    }
 */

// memo => caches / memoizes state and props of the component
// useCallback => caches / memoizes function in the component
