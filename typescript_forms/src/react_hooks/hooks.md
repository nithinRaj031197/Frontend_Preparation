# React.memo():

- React.memo is a higher-order component in React that's **_used for optimizing the performance of functional components by preventing unnecessary re-renders_**.

- Ex: Refer memo.tsx file

  ```bash
      const Child = React.memo(() => {
        return (
            <div>
            <h1>Child</h1>
            </div>
        );
      });
  ```

# PureComponent:

- Similar to React.memo()
- Used in class componenets

# useCallback:

- useCallback is a hook in React that is used to **_memoize functions, preventing them from being recreated on every render_**

- It's particularly useful when you need to pass functions as props to child components to optimize performance.

  ```bash
    # syntax
      const memoizedFunction = useCallback(
      () => {
          # Function logic
      },
      [dependency1, dependency2, ...]
      );
  ```

# useMemo():

- useMemo is a hook in React that allows you **_to memoize the result of a function or computation and cache it for performance optimization_**

- This hook is useful when you have a costly computation or a function that, given the same inputs, produces the same output, and you want to avoid recomputing it on every render.

  ```bash
      const memoizedValue = useMemo(() => {
          # Expensive calculation or function
          return result;
      }, [dependency1, dependency2, ...]);

  ```
