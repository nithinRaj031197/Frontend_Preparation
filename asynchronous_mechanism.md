# Callback:

### Definition:

- A function that is passed as an argument to another function, and is intended to be executed after some specific task or event has occured.

### Use Case:

- To enable asynchronous operations, handle events etc...

```js
function performTask(callback) {
  setTimeout(() => {
    console.log("Task Completeed");
    const res = callback(a, b);
    console.log(res);
  }, 3000);
}

function add(a, b) {
  return a + b;
}

performTask(add);
```

### Disadvantage:

1. **Callback hell**:
   - Asynchronous code with **_multiple nested callbacks_** can become difficult to read and maintain.
   - They are referred as **_"Callback Hell" or "Pyramid of Doom"_**, which lead to complex and error-prone code.

```js
asyncFunction1(function () {
  asyncFunction2(function () {
    asyncFunction3(function () {
      // ....
    });
  });
});
```

2. **Error Handling**:
   - You often need to pass error objects as parameters to callbacks and manually check for errors at each steps.

# Promises:

### Definition:

- An alternative to callbacks for handling asynchronous operations in a **more structured and readable way**.

- Promise represent value that not be available yet but it will be resolved at some point, either successfully with value or unsuccessfully with an error.

- Promises have three states: **'pending', 'fulfilled' and 'rejected'**

- They provide cleaner syntax to handle error.

```js
//callback
doSomething((result) => {
  result,
    doSomethingElse((newResult) => {
      newResult,
        doThirdThing((finalResult) => {
          console.log(`Got the final result: ${finalResult}`);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);

// promises
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);
```

# Promises Composition:

There are four composition tools for running asynchronous operations concurrently: Promise.all(), Promise.allSettled(), Promise.any(), and Promise.race().

1.  **Promise.all()**:

    - Promise.all() takes array of promises, and returns a new Promise **_that fulfills when all promises are fulfilled or rejects when any one of promise is rejected_**.

      ```js
      const promise1 = Promise.resolve(1);
      const promise2 = Promise.resolve(2);
      const promise3 = Promise.resolve(3);

      Promise.all([promise1, promise2, promise3])
        .then((values) => {
          console.log(values); // Output: [1, 2, 3]
        })
        .catch((error) => console.error(error));
      ```

2.  **Promise.any()**:

    - Promise.any() takes array of promises, and returns a new Promise **_if any one of promise is fulfilled, and rejects if all promises are rejected_**.

      ```js
      const promise1 = new Promise((resolve, reject) => setTimeout(reject, 100, "Rejected"));
      const promise2 = Promise.resolve(2);
      const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 50, "Resolved"));

      Promise.any([promise1, promise2, promise3])
        .then((value) => {
          console.log(value); // Output: 2
        })
        .catch((error) => {
          console.error(error); // This won't execute in this example
        });
      ```

3.  **Promise.allSettled()**: - Promise.allSettled() takes an array of Promises, and return a new Promise **_that fulfills with array of objects when all promises are settled(either fulfilled or rejected)._**

    - Each object containing the **_status and value/reason_** of the corresponding promise.

      ```js
      const promise1 = Promise.resolve(1);
      const promise2 = Promise.reject("Error");
      const promise3 = Promise.resolve(3);

      Promise.allSettled([promise1, promise2, promise3]).then((results) => {
        console.log(results);
        /* Output:
            [
                { status: 'fulfilled', value: 1 },
                { status: 'rejected', reason: 'Error' },
                { status: 'fulfilled', value: 3 }
            ]
        */
      });
      ```

4.  **Promise.race()**:

    - Promise.race() takes an array of promises, returns a new Promise **_that fulfills or rejects as soon as the first promise in the array fulfills or rejects._**

      ```js
      const promise1 = new Promise((resolve) => setTimeout(resolve, 100, "First"));
      const promise2 = new Promise((resolve) => setTimeout(resolve, 50, "Second"));

      Promise.race([promise1, promise2]).then((value) => {
        console.log(value); // Output: 'Second' (whichever promise resolves first)
      });
      ```

# Async/await:

- Async/await is a modern JavaScript feature that provides a more concise and readable way to work with asynchronous code compared to traditional Promises.
- It is built on top of Promises and makes asynchronous programming in JavaScript more intuitive.

```js
//promise
function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

fetchData();

//async/await
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```
