import { useEffect, useRef } from "react";

// Creating a Ref for a DOM Element:
const InputFocus = () => {
  const inputRef = useRef<any>(null);

  const handleFocusByButton = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" style={{ border: "1px solid green", outlineColor: "green" }} />
      <br />
      <button onClick={handleFocusByButton} style={{ background: "#000", color: "#fff", padding: 5 }}>
        Click
      </button>
    </div>
  );
};

export default InputFocus;

// Storing Values Without Causing Re-Renders:

const Timer = () => {
  const count = useRef(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      count.current += 1;
      console.log(`Count: ${count.current}`);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div>Count: {count.current}</div>;
};
