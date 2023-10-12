# Debounce and Throttle:

- Its a technique, **_to control rate at which function is executed_**.
- Especially, in response to frequent events like scrollling, resizing or typing.
- They improve performance and reduce unnecessary function calls.

# Debounce:

- Its a technique, **_that delays function execution until certain time has passed since last event_**.

### Polyfill of Debounce:

```js
function myDebounce(fn, delay) {
  return function (...args) {
    clearInterval(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
```

# Throttle:

- Its a technique,that ensures function is executed at a specified interval,

### Polyfill of Throttle:

```js
function myTrottle(fn, delay) {
  let isThrottle;
  return function () {
    if (!isThrottle) {
      fn.apply(this, arguments);
      isThrottle = true;
      setTimeout(() => {
        isThrottle = false;
      }, delay);
    }
  };
}
```
