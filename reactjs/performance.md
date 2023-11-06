### Table of Contents:

- [Key Difference between useEffect and useLayoutEffect](#key-difference-between-useeffect-and-uselayouteffect)

- [Performance Techniques](#performance-techniques)

## Performance techniques:

1. `Code Splitting`:

   - Technique to **Split the code into chunks and load them on demand** to reduce the initial bundle size.

   - React's **React.lazy** and **dynamic imports** can be helpful.

2. `Lazy Loading`:

   - Lazy loading is a technique that **defers the loading of certain resources** (e.g., images, scripts, or components) until they are needed, to reduce initial load time.

   - Lazy loading is often triggered by user interactions, such as scrolling down a page or clicking on an element.

3. `useCallback() and useMemo():`

   - **useCallback() is for memoizing functions**, while **useMemo() is for memoizing values or computations**.
   - Both help optimize performance by reducing unnecessary re-computation or re-renders in React components.

4. `Keyed Lists`:

   - Always provide a unique key prop for elements in a list to help React efficiently update the DOM.

5. `Windowing and Pagination`:

   - To render required dta from large list or data grid, windowing or pagination can be implemented.

6. `PureComponents and React.memo()`:

   - Ensure that you avoid unnecessary component re-renders until props and state is changed

7. `Server-Side Rendering (SSR)`:

   - To pre-render your application on the server, which can improve initial load times.

8. `Minification and Tree Shaking`:

   - Optimize the bundle size by enabling tree shaking in your build process to eliminate unused code.

9. `Optimize Redux`:
   - Use libraries like Redux Toolkit, which provides performance optimizations for Redux applications.

## Key Difference between useEffect and useLayoutEffect

`useEffect` and `useLayoutEffect` are two React hooks that are similar in many ways, but they differ in terms of when they run and their potential impact on performance. Here are the key differences between useEffect and useLayoutEffect:

- **`Timing`**:

  **useEffect** runs asynchronously after the browser has painted and the component is committed to the screen. It does not block the browser's rendering and layout process.

  **useLayoutEffect** runs synchronously immediately after the DOM has been updated, but before the browser repaints. It runs during the browser's rendering and layout process. As a result, it can potentially block the rendering if it contains expensive operations.

- **`Performance Impact`**:

  **useEffect** is less likely to cause performance issues because it runs after the browser has rendered, which means it won't block the initial render.

  **useLayoutEffect** can potentially impact performance if the code within it is computationally expensive or if it makes changes to the DOM that trigger reflows and repaints.

- **`Use Cases`**:

  **useEffect** is suitable for most side effects that don't need to be synchronous with the rendering process, such as data fetching, state updates, and interactions that don't require immediate layout information.

  **useLayoutEffect** is suitable for situations where you need to read layout properties from the DOM or make changes that depend on the most up-to-date layout information. For example, measuring the size of a DOM element or making DOM changes that affect the layout.

- **`Dependencies`**:

  Both hooks accept a second argument, an array of dependencies, to control when the effect is run. The dependencies list works the same way for both hooks.

In summary, useEffect is the safer choice for most use cases as it doesn't block the rendering process and is less likely to introduce performance issues. However, useLayoutEffect is necessary when you need to interact with the DOM immediately after it's updated and when you require the most up-to-date layout information. It's essential to use them judiciously and be aware of the potential performance implications when choosing between them.
