import React, { Component, PureComponent, useState } from "react";

const Parent = () => {
  console.log("Parent");
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1>Parent {count}</h1>
      <Child />
      <button style={{ background: "#000", color: "#fff", padding: 10 }} onClick={handleCount}>
        Click
      </button>
    </div>
  );
};

export default Parent;

const Child = React.memo(() => {
  console.log("Child");

  return (
    <div>
      <h1>Child</h1>
    </div>
  );
});

// Unwantedly Child is rendered due to change in state of Parent Component ===> React.memo()

// class Child extends PureComponent {
//   constructor(props: any) {
//     super(props);
//   }

//   render(): React.ReactNode {
//     console.log("child");
//     return (
//       <div>
//         <h1>Child</h1>
//       </div>
//     );
//   }
// }
