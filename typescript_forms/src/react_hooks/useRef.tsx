import { useRef } from "react";

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
