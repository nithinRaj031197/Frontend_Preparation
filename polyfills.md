# Polyfills:

## 1. **map()**:

- Its a HOF, where each item in array is iterated to apply given function, and stored in a new array.

### Original implementation of map:

```js
const arr = [3, 2, 4, 1, 5];
// multiply by 2

const new_arr = arr.map((val, index, array) => {
  return val * 2;
});

console.log(new_arr);
```

### Customize by using Polyfill:

```js
// Creating Polyfill "myMap"

if (Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }

    return result;
  };
}

// Implementing customized "myMap()"
const new_arr = arr.myMap((val, index, array) => {
  return val * 2;
});

console.log(new_arr);
```

## 2. **filter()**:

- Its a HOF, which return a new array containing elements that meet certain criteria based on a provided callback function.

- Its used for filtering out elements and deleting elements from a list.

### Original implementation of filter:

```js
const arr = [3, 2, 4, 1, 5, 2];

//delete 2 # [3, 4, 1, 5]
const deleteNum = arr.filter((val) => val != 2);
console.log(deleteNum);

// get 2 #[2, 2] or [1, 5]
const filterNum = arr.filter((val) => val == 2);
console.log(filterNum);
```

### Customize by using Polyfill:

```js
if (Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback) {
    let results = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        results.push(this[i]);
      }
    }

    return results;
  };
}
```

3. ## **reduce()**:

- Its a built in function, which provides single result after iterating over the given array.

### Original implementation of filter:

```js
const arr = [5, 3, 2, 4, 1, 5, 2];

const total = arr.myReduce((p, c) => {
  return p + c;
});

console.log(total);
```

### Customize by using Polyfill:

```js
if (Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initialValue) {
    let accumlator = initialValue === undefined ? this[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      accumlator = callback(accumlator, this[i], i, this);
    }

    return accumlator;
  };
}
```

4. **call():**

- Its a method, invoked to its respective owner object using **_this_** keyword
  (or)
- Its an inbuit function, used to invoke a function with a specifed owner object by using this keyword and arguments provided individually as argument.

### Original implementation of filter:

```js
const person1 = {
  name: "Nithin",
  age: 20,
};

const person2 = {
  name: "Rekha",
  age: 50,
};

function greet(message, sec) {
  console.log(`${message} ${sec}; ${this.name}`);
}

greet.call(person1, "Hello", "Hi");
greet.call(person2, "Hello", "Hi");
```

### Customize by using Polyfill:

```js
Function.prototype.myCall = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this, " is not callable.");
  }
  obj.fn = this;
  obj.fn(...args);
};
```

5. **apply():**

- Its a in-built function, which is used to invoke a function with a specified owner object using this keyword and arguments are passed as an array.

### Original implementation of apply():

```js
const person1 = {
  name: "Nithin",
  age: 20,
};

const person2 = {
  name: "Rekha",
  age: 50,
};

function greet(message, sec) {
  console.log(`${message} ${sec}; ${this.name}`);
}

greet.apply(person1, ["Hello", "Hi"]);
greet.apply(person2, ["Hello", "Hi"]);
```

### Polyfill for apply():

```js
Function.prototype.myApply = function (obj = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(`${this}, is not callable.`);
  }

  if (!Array.isArray(args)) {
    throw new Error(`CreateListFromArrayLike called on non-object`);
  }

  obj.fn = this;
  obj.fn(...args);
};
```

6. ## **bind():**

- Its a in-built method, which returns a function that used to invoke a function with a specifed owner object by using this keyword and arguments provided individually as argument.

```js
const person1 = {
  name: "Nithin",
  age: 20,
};

function greet(message, sec, third) {
  console.log(`${message} ${sec} ${third}; ${this.name}`);
}

const res = greet.bind(person1, "Hello", "Hi");
res("Wow");
```

## Polyfill for bind():

```js
Function.prototype.myBind = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this}, is not callable`);
  }
  obj.fn = this;
  return function (...newArgs) {
    obj.fn(...args, ...newArgs);
  };
};
```
