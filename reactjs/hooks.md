## What are ReactHooks:

- React Hooks are functions, that allows you to hook into `React state and lifecycle features` to functional components.

- They were introduced in `React 16.8` to provide a more elegant way of working with state and side effects in functional components.

### What are the rules that must be followed while using React Hooks?

- React Hooks must be called only at the top level.

- It is not allowed to call them inside the nested functions, loops, or conditions

- It is allowed to call the Hooks only from the React Function Components.

## List all React Hooks:

### 1. useState():

- Let's you to add state variable in functional components(FC).
- Also to `maintain local state` in FC.
- It returns an array with two elements: the current state and a function to update that state.

  ```jsx
  import React, { useState } from "react";

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}> Increment</button>
      </div>
    );
  }
  ```

### 2. useEffect():

- Enables performing [side-effects](#side-effect) in functional components, such as data-fetching, DOM manipulations etc...

- It takes a function as its first argument and an array of dependencies as its second argument.

  ```jsx
  import React, { useState, useEffect } from "react";

  function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);

      return () => clearInterval(interval);
    }, [seconds]);

    return <div>Seconds: {seconds}</div>;
  }
  ```

### 3. useContext():

- `Allows you to access context of a parent component within a child component`.

- Context provides a way to pass data, such as global state or configuration, to components without prop-drilling (i.e.,
  having to pass it explicitly through component props at every level of the component tree.)

- The `useContext` hook is part of the React Context API, and it is typically used in conjunction with the `React.createContext`function to create and access context.

- Steps to create useContext():

  1. Create Context:

     ```jsx
     const MyContext = React.createContext(defaultValue);
     ```

  2. Provide the Context:

     ```jsx
     <MyContext.Provider value={someValue}>{/* Child components */}</MyContext.Provider>
     ```

  3. Consume the Context:

     ```jsx
     const contextValue = useContext(MyContext);
     ```

  - Here's a simplified example of how useContext is used:

    ```jsx
    import React, { useContext } from "react";

    // Create a context
    const MyContext = React.createContext("default value");

    // Provide the context higher up in the component tree
    function App() {
      return (
        <MyContext.Provider value="context value">
          <ChildComponent />
        </MyContext.Provider>
      );
    }

    // Consume the context in a child component
    function ChildComponent() {
      const contextValue = useContext(MyContext);
      return <div>{contextValue}</div>;
    }
    ```

### 4. useReducer():

- To manage complex state logics in functional component.
- It returns the current state and a dispatch function for updating the state.

  ```jsx
  import React, { useReducer } from "react";

  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      default:
        return state;
    }
  }

  function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      </div>
    );
  }
  ```

### 5. useRef():

- useRef allows you `to create a mutable reference to a DOM element` or any value that persists across renders.
- It `doesn't cause re-renders when the reference changes`.

  ```jsx
  import React, { useRef, useEffect } from "react";

  function FocusInput() {
    const inputRef = useRef();

    useEffect(() => {
      inputRef.current.focus();
    }, []);

    return <input ref={inputRef} />;
  }
  ```

### 6. useImperativeHandle():

- `Allows a child component to customize what the parent component can access when using a ref`.

  ```jsx
  useImperativeHandle(ref, createHandle, [deps]);
  ```

  ```md
  **ref**: A ref object created with React.createRef() or the useRef hook.

  **createHandle**: A function that creates the instance value to be exposed when the ref is accessed. This function is called with two arguments: the ref object and the previous instance value. It should return the new instance value to expose.

  **[deps] (optional)**: An array of dependencies. The effect (creating the handle) will re-run if any of the dependencies change. If not provided, the effect will run after every render.
  ```

- It's used to create a controlled interface for communication between parent and child components, making it easier to work with the child component's functionalities or properties

- Use cases for useImperativeHandle:

  1. Customizing Refs:

     ```jsx
     import React, { useImperativeHandle, forwardRef } from "react";

     const ChildComponent = forwardRef((props, ref) => {
       const myRef = useRef(null);

       useImperativeHandle(ref, () => ({
         focus: () => {
           myRef.current.focus();
         },
       }));

       return <input ref={myRef} />;
     });

     // ParentComponent can now call childRef.current.focus()
     ```

  2. Optimizing Performance:

     You can use useImperativeHandle to avoid unnecessary re-renders when parent components hold refs to child components. By specifying dependencies, you can ensure that the handle is only created or updated when specific values change.

     ```jsx
     useImperativeHandle(
       ref,
       () => {
         // Define the handle
       },
       [dependency1, dependency2]
     );
     ```

7.  ### useCallback():

    - `useCallback` is a React hook that is used to memoize functions.

    - It's particularly useful when you want to `prevent unnecessary re-renders of child components that rely on function props`.

    - It takes two arguments: the function you want to memoize and an array of dependencies.

      ```jsx
        const memoizedCallback = useCallback(() => {
        // Your function logic
      }, [dependency1, dependency2, ...]);

      ```

8.  ### useMemo():

    - `useMemo` is a React hook used for memoizing the result of a computation.

    - It takes two arguments: a function that computes a value and an array of dependencies.

    - The computed value is memoized, and it is recalculated only when one of the dependencies in the array changes.

      ```jsx
      const memoizedValue = useMemo(() => {
        // Your computation logic
        return computedValue;
      }, [dependency1, dependency2, ...]);

      ```

9.  ### useTransition():

    - `Allows you to update the state without blocking the UI`.

    - useTransition() can be `used to tell React that certain state updates have a lower priority` (i.e., all other state updates or UI rendering triggers have a higher priority).

      ```jsx
      const [isPending, startTransition] = useTransition();
      ```

      ```md
      **Parameters**
      useTransition does not take any parameters.

      **Returns**
      useTransition returns an array with exactly two items:

      The `isPending` flag that tells you whether there is a pending transition.
      The `startTransition` function that lets you mark a state update as a transition.
      ```

      ```jsx
      function App() {
        const [isPending, startTransition] = useTransition();
        const [filterTerm, setFilterTerm] = useState("");

        const filteredProducts = filterProducts(filterTerm);

        function updateFilterHandler(event) {
          startTransition(() => {
            setFilterTerm(event.target.value);
          });
        }

        return (
          <div id="app">
            <input type="text" onChange={updateFilterHandler} />
            {isPending && <p>Updating List...</p>}
            <ProductList products={filteredProducts} />
          </div>
        );
      }
      ```

10. ### useDeferredValue():

    - Is a React Hook that lets you `defer` updating a part of the UI.

    - The difference is that `useTransition() wraps the state updating code`, while `useDeferredValue() wraps a value` that's affected by the state update.

    - Use Case:
    - i. Showing stale content while fresh content is loading.
    - ii. Deferring re-rendering for a part of the UI.

      ```jsx
      import { Suspense, useState, useDeferredValue } from "react";
      import SearchResults from "./SearchResults.js";

      export default function App() {
        const [query, setQuery] = useState("");
        const deferredQuery = useDeferredValue(query);
        return (
          <>
            <label>
              Search albums:
              <input value={query} onChange={(e) => setQuery(e.target.value)} />
            </label>
            <Suspense fallback={<h2>Loading...</h2>}>
              <SearchResults query={deferredQuery} />
            </Suspense>
          </>
        );
      }
      ```

### Side Effect

- Side effects refer to code executed outside the normal flow of the components rendering process.

- It can include tasks such as data fetching, interacting with DOM or subscribing external data sources.

- Back to [useEffect](#2-useeffect)

## Why React hooks better than class components?

- React hooks have gained popularity and are often preferred over class components for several reasons.

- `Simplicity and Readability:`
  Hooks make code simpler and more readable by allowing you to reuse stateful logic without introducing complex class hierarchies and lifecycle methods.

- `Reduced Boilerplate:`
  Hooks eliminate constructor functions, and lifecycle methods, resulting in significantly reduced boilerplate code.

- `Better Reusability:`
  Hooks promote reusability of stateful logic across different components **using custom hooks**. This makes it easier to share and maintain code.

- `Improved State Management:`
  The useState and useEffect hooks simplify state management and side effect handling, making it more intuitive to work with component state.

- `No 'this' Keyword:`
  Hooks eliminate the need to use the this keyword, **reducing confusion and potential bugs** related to context and binding.

- `Improved Performance:`
  Hooks enable performance optimizations like the useMemo and useCallback hooks to prevent unnecessary re-renders.

- `Official Recommendation:`
  React's official documentation and team recommend using hooks for new projects and even suggest migrating existing class components to functional components with hooks.

- `Community and Industry Adoption:`
  Hooks have gained widespread adoption in the React community and are considered the standard for writing React components.

**_In summary, React hooks offer a more modern, concise, and intuitive way to work with state and side effects in React components. They simplify the development process, improve code readability, and lead to better maintainability, making them a preferred choice over class components in many scenarios._**
