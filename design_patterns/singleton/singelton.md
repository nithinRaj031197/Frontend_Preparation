# Singleton Pattern:

![Singleton Pattern](https://www.freecodecamp.org/news/content/images/2022/07/singleton-def-gif.gif)

The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance.

## Pros:

- It makes sure that only a single instance of the class is created.

- We get a single access point to the instance that can be accessed globally.

## Cons:

- It violates the single responsibility principle. That is, it tries to solve two problems at the same time. It tries to solve the following problems: Ensure that a class will have only one instance, and assigning a global access point to the singleton class instance.

- It is difficult to write unit test cases for singleton classes. This is because the order of execution can change the value present in the global state, so the order of execution is important.

## Summary:

- It is a pattern that restricts the class to create only one instance.
- Singleton pattern can be considered the basics of global state management libraries such Redux or React Context.
- They can be accessed globally and acts as a single access point for accessing the global state.
