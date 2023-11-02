## Lifecycle Methods in Class Components

There are four different phases in the lifecycle of a React class component:

### 1. Initialization Phase

- React component prepares by setting up the default props and initial state.
- **`constructor()`**: The constructor method is called before the component is mounted. You can use it to initialize state and bind event handlers.

### 2. Mounting Phase

- Mounting refers to putting the elements into the browser DOM. React uses Virtual DOM, so the entire browser DOM is not refreshed.
- This phase occurs when an instance of a component is created and inserted into the DOM.
- Key methods in the Mounting phase:

  - **`render()`**: This method outputs or re-renders the HTML to the DOM with new changes. It's an essential method and is always called.
  - **`componentDidMount()`**: This method is called after the component is rendered. You can use it for tasks like data fetching, initializing third-party libraries, or setting up timers.

### 3. Updating Phase

- This phase is triggered when the component's state or props change.
- Key methods in the Updating phase:

  - **`shouldComponentUpdate(nextProps, nextState)`**: You can control whether the component should update by returning true or false. This is useful for optimizing performance.
  - **`render()`**: This method is called to update the component's UI.
  - **`componentDidUpdate(prevProps, prevState)`**: It's invoked after the component has updated and is often used for additional data fetches or DOM interactions.
  - **`getSnapshotBeforeUpdate()`**: This method provides access to the props and state before the update.

### 4. Unmounting Phase

- This phase occurs when the component is removed from the DOM.
- Key methods in the Unmounting phase:

  - **`componentWillUnmount()`**: This method is called just before the component is removed from the DOM. It's used for cleaning up resources, canceling network requests, or unsubscribing from event listeners.
