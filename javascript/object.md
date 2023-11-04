- [Creating an Object](#creating-an-object)
- [How to iterate using for in loop](#how-to-iterate-using-for-in-loop)
- [Using the Function Constructor Method in JavaScript before the introduction of ES6](#using-the-function-constructor-method-in-javascript-before-the-introduction-of-es6)
- [Using Class Constructor](#using-class-constructor)
- [Prototypal Inheritance](#prototypal-inheritance)

# Creating an Object:

1. ### Using Object Literal:

- Example:
  ```js
  const user = {
    name: "john",
    age: 40,
  };
  user.name; // "john"
  ```

2. ### Using Object.create():

- Syntax: **Object.create(proto, propertiesObject)**
- Example:

  ```js
  // creating the prototype for the object that will be created later
  function greeting() {
    this.greeting = "Hello Muthu!";
  }

  // using the object.create() method to create a function whose object inherits properties from the prototype
  function greetMuthu() {
    greeting.call(this);
  }
  // creating an greetMuthu function object with the prototype object's properties (such as greeting)
  greetMuthu.prototype = Object.create(greeting.prototype);
  const app = new greetMuthu();
  // Displaying the object created
  console.log(app.greeting); //Output : Hello Muthu!
  ```

# How to iterate using for in loop

- A for...in statement iterates over an object's properties.

  ```js
  const candidate = {
    firstName: "John",
    lastName: "Abraham",
  };

  for (attribute in candidate) {
    console.log(attribute); // Output : firstName,lastName
  }

  for (attribute in candidate) {
    console.log(candidate[attribute]); //Output : Muthu, Annamalai
  }
  ```

# Using Object.keys(), Object.values(), Object.enteries()

```js
const candidate = {
  firstName: "John",
  lastName: "Abraham",
};

console.log(Object.keys());
/* 
  [
    "firstName",
    "lastName"
  ]
*/
console.log(Object.values());
/* 
  [
      "John",
      "Abraham"
  ]
*/
console.log(Object.entries());
/*[
    [
        "firstName",
        "John"
    ],
    [
        "lastName",
        "Abraham"
    ]
]*/
```

# Using the function Constructor Method in JavaScript before the introduction of es6

- In JavaScript, the constructor method can also be utilized to create an object.
- An object instance of the class is created by the method.
- In this method, an object type is defined using the constructor method

  ### Syntax

  ```js
  function Constructor(property) {
    this.property = property;
  }
  let newObject = new Constructor("objectValue");
  ```

Following is a description of the parameters.

- Constructor: a method for initializing class objects.
- newObject: Represents An object that has just been created
- property: Describes the existing properties of an object
- objectValue: Identifies the value assigned to the object.

  ### Example:

  ```js
  // Example of creating an object using a constructor
  function Class(name, age) {
    this.name = name;
    this.age = age;
  }

  let candidate1 = new Class("John", 20);
  let candidate2 = new Class("Abraham", 25);
  console.log(candidate1.name); // Ou

  tput: John;
  console.log(candidate2.name); // Output : Abraham
  ```

# Using Class Constructor

- JavaScript ES6 supports the concept of classes. Using a class to create the object is quite similar to using a constructor.
- In JavaScript, the methods are replaced with classes by providing the functionality in the ES6 version.
- Below is the syntax for creating this method:

  ### Syntax

  ```js
  class className {
    constructor(property) {
      this.property = property;
    }
  }
  let newObject = new className("objectValue");
  ```

  ### Example

  ```js
  // An example of how to create an object using classes
  class Student {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  let candidate1 = new Student("Muthu", 20);
  let candidate2 = new Student("Annamalai", 25);
  console.log(candidate1.name); // Output : Muthu
  console.log(candidate2.age); // Output : 25
  ```

# Prototypal Inheritance

- In Javascript, prototypal inheritance is used to add methods and properties to objects.
- It allows one object to inherit the properties and methods of another.
- We typically use Object.getPrototypeOf and Object.setPrototypeOf to get and set the prototype of an object.
- Nowadays, proto is used to set it in modern languages.

  ```js
  let candidate = {
    fly: true,
    Cantalk() {
      return "Sorry, Can't talk";
    },
  };

  // Object User
  let user = {
    CanCook: true,
    CanCode() {
      return "Can't Code";
    },
    //  Inheriting the properties and methods of candidate
    __proto__: candidate,
  };
  // Printing on console the properties of candidate
  console.log("Can a user fly: " + user.fly); // Output : Can a user fly: true
  // Method of candidate
  console.log("Can a user talk: " + user.Cantalk()); // Output: Can a user talk: Sorry, Can't talk
  // Property of user
  console.log("Can a user cook: " + user.CanCook); // Ouput : Can a user cook: true
  // Method of user
  console.log("Can a user code: " + user.CanCode()); // Output : Can a user code: Can't Code
  ```

# Object.freeze()

- Object.freeze, you cannot update, delete, or add any property.
  ```js
  const user = {
    name: "John",
    age: 20,
  };
  Object.freeze(user);
  user.name = "Jim";
  console.log(user); // {name: "Jim", age: 20}
  ```
