import { forwardRef, useImperativeHandle, useRef } from "react";

const Form = () => {
  const inputRef = useRef<MyInputRef | null>(null);

  const handleFocusByButton = () => {
    inputRef.current?.focusInput();
  };

  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={handleFocusByButton} style={{ background: "#000", color: "#fff", padding: 5 }}>
        Click
      </button>
    </div>
  );
};

const MyInput = forwardRef<MyInputRef, {}>((props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(
    ref,
    () => ({
      focusInput: () => {
        inputRef.current?.focus();
      },
    }),
    []
  );

  return (
    <div>
      <input ref={inputRef} type="text" style={{ border: "1px solid green", outlineColor: "green" }} />
      <br />
    </div>
  );
});

type MyInputRef = {
  focusInput: () => void;
};

export default Form;
