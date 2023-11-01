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

6. ### **<span style="color: rgb(77, 161, 230);">What is the purpose of the key prop in React?</span>**

   - The `key` prop is used to help React identify unique components in a list, enabling efficient updates and re-renders.

   - It's crucial when rendering lists of components, as it helps React distinguish between items in the list.

7. ### **<span style="color: rgb(77, 161, 230);">Describe the concept of props and how they are used to pass data between React components.</span>**

   - Props (short for properties) are used to pass data from parent components to child components in React.

   - They make it easy to share information between components, allowing you to create reusable and modular UI elements.
