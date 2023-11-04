# EventLoop :

- Event loop is a **fundamental concept** in JS, to **handle asynchronous mechanism** by **managing and executing within a single-threaded environment**.

- The event loop continuously checks call stack and callback queue.

  - If call stack is empty, it takes first function from cllback queue and push to call stack for execution.
  - This process ensures asynchronous tasks are executed when call stack is clear.

- Javascript is a synchronous and single threaded language, where asynchronous nature is provided by Web-API's.
