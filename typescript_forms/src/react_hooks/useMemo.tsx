import React, { useCallback, useMemo, useState } from "react";

const Parent = () => {
  console.log("Parent");
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const expensiveTask = useMemo(() => {
    console.time("task");
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += 1;
    }
    console.timeEnd("task");
    return "Heavy Task " + total;
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1>Parent {count}</h1>
      <p>{expensiveTask}</p>
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
 

    useMemo = (
        "Heavy Task 10000000",
    )

 */

// useMemo => caches / memizes exppensive functions within the componenet
