# React Fundamentals:

1. ### **<span style="color: rgb(77, 161, 230);">What is React, and how does it differ from traditional JavaScript frameworks?</span>**

   - React is a JavaScript library for building user interfaces.

   - It differs from traditional JavaScript frameworks by using a component-based architecture, a virtual DOM for efficient updates and uni-directional flow, making it more organized and allowing developers to build complex UIs more easily.

2. ### **<span style="color: rgb(77, 161, 230);">Explain the virtual DOM and its significance in React.</span>**

   - The virtual DOM is a lightweight representation of the actual DOM in memory.

   - It allows React to efficiently update and render components by minimizing direct manipulation of the DOM.

   - Changes are first made to the virtual DOM, and then React calculates the most efficient way to update the real DOM, resulting in improved performance.

3. ### **<span style="color: rgb(77, 161, 230);">What is JSX, and why is it used in React?</span>**

   - JSX is a syntax extension for JavaScript used in React to describe the structure of UI components.

   - It allows developers to write HTML-like code within JavaScript, making it easier to create and visualize UI components.

4. ### **<span style="color: rgb(77, 161, 230);">Describe the key differences between functional components and class components in React.**

   - Syntax:

     - Functional components are defined as **_JavaScript functions_** that return JSX (React elements).

     - Class components are defined as **_JavaScript classes_** that extend the React.Component class and use a render method to return JSX.

   - State:

     - Functional components don't have built-in state. However, with the introduction of React Hooks, functional components can now manage state using the **useState hook**.

     - Class components have a built-in state that can be initialized in the constructor and updated using this.**setState()**.

   - Readability and Conciseness:

     - Functional components are generally more concise and easier to read. They have less boilerplate code, making them simpler and more lightweight.

     - Class components tend to be more verbose due to the required render method and lifecycle methods, which can make the code harder to read.

   - Props Handling:

     - Both functional and class components can receive and handle props in a similar manner.
     - Class components use this.props, while functional components can directly access props as function arguments.

5. ### **<span style="color: rgb(77, 161, 230);">Synthetic Event</span>**

   - This event provides a consistent cross-browser interface for handling events.

   - These synthetic events wrap native browser events, making event handling more predictable and reliable.
   - `It wraps across native browser events to provide a consistent cross-browser interface for handling events`.

6. ### **<span style="color: rgb(77, 161, 230);">What is the purpose of the key prop in React?</span>**

   - The `key` prop is used to help React identify unique components in a list, enabling efficient updates and re-renders.

   - It's crucial when rendering lists of components, as it helps React distinguish between items in the list.

     ```jsx
     import React from "react";

     const MyListComponent = () => {
       const items = [
         { id: 1, text: "Item 1" },
         { id: 2, text: "Item 2" },
         { id: 3, text: "Item 3" },
       ];

       const itemList = items.map((item) => <div key={item.id}>{item.text}</div>);

       return <div>{itemList}</div>;
     };

     export default MyListComponent;
     ```

7. ### **<span style="color: rgb(77, 161, 230);">Describe the concept of props and how they are used to pass data between React components.</span>**

   - Props (short for properties) are used to pass data from parent components to child components in React.

   - They make it easy to share information between components, allowing you to create reusable and modular UI elements.

8. ### **e.preventDefault() and stopPropogation() difference?**

   - e.preventDefault() and e.stopPropagation() are two commonly used methods in JavaScript to handle events in web development. They serve different purposes:

   - `e.preventDefault():`

     Purpose: This method is used to prevent the default behavior of an event. For example, it's often used to prevent a form submission or prevent a link from navigating to a new page when a user clicks it.

     ```js
     const form = document.querySelector("form");
     form.addEventListener("submit", function (e) {
       e.preventDefault(); // Prevent the form from submitting
       // Additional code to handle form data without submitting
     });
     ```

   - `e.stopPropagation():`
     Purpose: This method is used to stop the propagation of an event through the DOM tree. It prevents the event from bubbling up to parent elements or capturing down to child elements.

     ````js
     const childElement = document.querySelector('.child');
     const parentElement = document.querySelector('.parent');
     childElement.addEventListener('click', function(e) {
     e.stopPropagation(); // Stop the click event from reaching the parent
     // Additional code to handle the click event on the child
     });
     parentElement.addEventListener('click', function(e) {
     // This event will not be triggered if e.stopPropagation() is used in the child event handler.
     });
     ```

     **In summary, e.preventDefault() is used to prevent the default action associated with an event, like form submission or link navigation, while e.stopPropagation() is used to stop the event from further propagation through the DOM tree, preventing it from reaching or triggering other event listeners on parent or child elements.**
     ````

### 9. Controlled and Uncontrolled Components:

- i. **`Controlled Component`**:

  - A controlled component is a React component `where its state is controlled by React`. This means that the component's data and behavior are managed through React's state and props.

  - Controlled components are often used in forms and input elements, where the component's value is controlled by React, and changes to the value trigger re-renders.

    ```jsx
    import React, { useState } from "react";

    function ControlledComponent() {
      const [inputValue, setInputValue] = useState("");

      const handleChange = (event) => {
        setInputValue(event.target.value);
      };

      return <input type="text" value={inputValue} onChange={handleChange} />;
    }

    export default ControlledComponent;
    ```

- ii. **`Uncontrolled Component`**:

  - An uncontrolled component is a React component `where the component's state is not controlled by React`.

  - Instead, the component relies on the DOM for its state and behavior.

  - Uncontrolled components are typically used for simple interactions or when integrating with non-React code or libraries.

  - Example of an uncontrolled component using a ref to access the input element directly:

    ```jsx
    import React, { useRef } from "react";

    function UncontrolledComponent() {
      const inputRef = useRef(null);

      const handleClick = () => {
        alert("Input Value: " + inputRef.current.value);
      };

      return (
        <div>
          <input type="text" ref={inputRef} />
          <button onClick={handleClick}>Get Value</button>
        </div>
      );
    }

    export default UncontrolledComponent;
    ```

### 10. React Fiber:

- React Fiber is an `internal reimplementation of the React reconciliation algorithm`, designed to improve the efficiency and concurrency of rendering in React applications.

- Allows React to work on more complex user interfaces while maintaining a responsive user experience

### 11. React Reconcilation:

- React keeps the in-memory Virtual representation of actual DOM and keeps it in sync with batch update. This process is called Reconcilation.

### 12. Error Boundry:

- `Error Boundaries in React are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display fallback UI instead of crashing the whole application`.
- React introduced Error Boundaries as a way to handle errors more gracefully and to prevent a broken component from affecting the entire application.

- Error Boundaries are typically implemented as class components using lifecycle methods. However, with the introduction of React Hooks, you can also create Error Boundaries using functional components.

  ```jsx
  // Error Boundry as HOC:

  import React, { useState, useEffect } from "react";

  const ErrorBoundary = ({ children }) => {
    const [error, setError] = useState(null);

    useEffect(() => {
      // The componentDidCatch lifecycle method is replaced with useEffect in functional components
      const handleError = (error, info) => {
        console.error("Error Boundary caught an error:", error);
        setError(error);
      };

      window.addEventListener("error", handleError);

      return () => {
        window.removeEventListener("error", handleError);
      };
    }, []);

    if (error) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{error.message}</p>
        </div>
      );
    }

    return children;
  };

  export default ErrorBoundary;
  ```

  ```jsx
  // To use this Error Boundary in your application, wrap the components you want to protect with it:
  <ErrorBoundary>
    <YourComponent />
  </ErrorBoundary>
  ```
