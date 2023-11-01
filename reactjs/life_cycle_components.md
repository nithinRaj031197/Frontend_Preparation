## **<span style="color: rgb(77, 161, 230);">Explain the lifecycle methods in a class component. List them in order.</span>**

- There are four different phases in the lifecycle of React class component:

  1. **<span style="color: rgb(77, 161, 230);">Initialization Phase:</span>**

  - React component will prepare by **setting up the default props and initial state**.

  - **<span style="color: yellow">constructor()</span>**: This is the component's constructor method, called before the component is mounted. You can use it for initializing state and binding event handlers.

  2. **<span style="color: rgb(77, 161, 230);">Mounting Phase:</span>**

  - Mounting refers to putting the elements into the browser DOM. Since React uses VirtualDOM, the entire browser DOM which has been currently rendered would not be refreshed.

  - Hence phase occurs **when an instance of a component is being created and inserted into the DOM**.
    The key methods in the Mounting phase are:

    - **<span style="color: yellow">render():</span>**

    - This method will **output or re-render the HTML to the DOM with new changes**.
    - The render() method is an essential method and will be called always while the remaining methods are optional.

    - **<span style="color: yellow">componentDidMount():</span>**

    - This method will be called after the rendering of the component. Using this method, you can run statements that need the component to be already kept in the DOM.

    - It's often used to perform tasks like **data fetching, initializing third-party libraries, or setting up timers.**

  3.  **<span style="color: rgb(77, 161, 230);">Updating Phase:</span>**

  - This phase is triggered when the component's state or props change.
  - The key methods in the Updating phase are:

    - **<span style="color: yellow">shouldComponentUpdate(nextProps, nextState):</span>**
    - This method allows you to control whether the component should update or not by returning true or false. It is useful for optimizing performance.

    - **<span style="color: yellow">render():</span>**
    - The render method is called again to update the component's UI.

    - **<span style="color: yellow">componentDidUpdate(prevProps, prevState):</span>**
    - This method is invoked after the component has updated. It's often used for making additional data fetches or interacting with the DOM following an update.

    - **<span style="color: yellow">getSnapshotBeforeUpdate():</span>**
    - This method will provide access for the props as well as for the state before the update.
    - It is possible to check the previously present value before the update, even after the update

  4.  **<span style="color: rgb(77, 161, 230);">Unmounting Phase:</span>**

  - This phase occurs when the component is removed from the DOM.
  - The key methods in the Unmounting phase are:

    - **<span style="color: yellow">componentWillUnmount():</span>**
    - This method is called just before the component is removed from the DOM.
    - It's used for cleaning up resources, canceling network requests, or unsubscribing from event listeners.
