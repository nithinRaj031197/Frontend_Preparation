# Classes:

## [Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor):

Its a method to creating and initializing an object instance of that class.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const human = new Animal("Rekha");
console.log(human.getName());
```

- **_function_** keyword must not be used in class.

### Public variables:

- It must be accessed with **_this_** keyword within the class.
- similarly methods are also accessed with help of **_this_** keyword.

```js
class Circle {
  pi = Math.PI;

  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return this.pi * this.getRadiusSquare();
  }

  getRadiusSquare() {
    return this.radius * this.radius;
  }
}

const cr1 = new Circle(2);
console.log(cr1.getArea());
```

### Extend classes

- Used to create new classes that inherit properties and methods from existing classes.
- While extending **_parent class name_** also call **_super() within the child class_**.
- Here are some reasons why you might want to extend a class in JavaScript:
  1. Code Reusability
  2. Inheritance
  3. Modularity
  4. Polymorphism

```js
class LivingBeing {
  constructor(type) {
    this.survivalType = type;
  }

  getSurvivalType() {
    return this.survivalType;
  }
}

// const animal = new LivingBeing("air");
// console.log(animal.getSurvivalType());

class Animals extends LivingBeing {
  constructor(type) {
    super(type);
  }
}
const human = new Animals("air");
console.log(human.getSurvivalType());

const dog = new Animals("air");
console.log(dog.getSurvivalType());

class Aquatic extends LivingBeing {
  constructor(type) {
    super(type);
  }
}

const fish = new Aquatic("water");
console.log(fish.getSurvivalType());
```

## Static Members (static variables and methods):

- To create static memebers, it should be done within the class.
- Static Members are associated and accessed with help of class, not with instance of class(i.e.., object).
- Static members are defined using the **_static_** keyword.

1. Static Variables

```js
class MyClass {
  static staticVar = 42;

  constructor(instanceVar) {
    this.instanceVar = instanceVar;
  }

  static getStaticVar() {
    return MyClass.staticVar;
  }
}

const instance1 = new MyClass("Instance 1");
const instance2 = new MyClass("Instance 2");

console.log(instance1.instanceVar); // Output: "Instance 1"
console.log(instance2.instanceVar); // Output: "Instance 2"

console.log(MyClass.staticVar); // Accessing static variable
console.log(MyClass.getStaticVar()); // Using a static method to access the static variable
```

2. Static Method:

```js
class MathUtils {
  static add(x, y) {
    return x + y;
  }

  static subtract(x, y) {
    return x - y;
  }
}

const result1 = MathUtils.add(5, 3);
const result2 = MathUtils.subtract(10, 4);

console.log(result1); // Output: 8
console.log(result2); // Output: 6
```

## Private Members:

- It can be created within the class by prefixing variables and methods with '**_#_**'.
- It can be accessed only within that class.
- If u need to expose then a seperate **_public method or variable_** must be provided.
- We cant access **_static private members_** outside the class or cant even access by extending class.

```js
class Parent {
  #income = {
    mainIncome: ["10_00_000", "MAIN INCOME"],
    investment: ["200_00_000", "INVESTMENT"],
    realEstate: ["30_00_000", "REAL ESTATE"],
  };

  revealRevenue = this.#income.mainIncome[0];

  revealProperty() {
    return this.#income.mainIncome[1];
  }
}

class Nithin extends Parent {
  constructor() {
    super();
  }
  getMyProperty() {
    return this.revealProperty() + " " + this.revealRevenue;
  }
}
// console.log(new Nithin().getMyProperty());
const nithin = new Nithin();
console.log(nithin.getMyProperty());
```

## Polymorphism

- Its a object-oriented paradignm, that provides **_single action in different forms_** .

```js
class Shape {
  area() {
    return 0;
  }
  perimeter() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Circle extends Shape {
  constructor(r) {
    super();
    this.radius = r;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  perimeter() {
    return Math.PI * this.radius * 2;
  }
}

class Rectangle extends Shape {
  constructor(w, h) {
    super();
    this.width = w;
    this.height = h;
  }

  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
}

function cumulateShapes(shapes) {
  return shapes.reduce((sum, shape) => {
    if (shape instanceof Shape) {
      console.log(`Shape: ${shape.toString()} - area: ${shape.area()}`);
      console.log(`Shape: ${shape.toString()} - perimeter: ${shape.perimeter()}`);
      return sum + shape.area();
    }
    throw Error("Bad argument shape.");
  }, 0);
}

const shapes = [new Circle(3), new Rectangle(2, 3)];

console.log(cumulateShapes(shapes));
```

## Encapsulation

- Process of binding the properties and method that operate on data into a single unit called class.

```js
class BankAccount {
  constructor(balance) {
    this._balance = balance; // Encapsulated property
  }

  // Encapsulated method
  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this._balance}`);
    }
  }

  // Encapsulated method
  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${this._balance}`);
    }
  }
}

const account = new BankAccount(1000);
account.deposit(200);
account.withdraw(300);
```

## Inheritance:

- Inheritance is a mechanism that allows a new class (subclass or derived class) to inherit properties and methods from an existing class.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} (a ${this.breed} dog) barks`);
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak(); // Inherited from Animal
myDog.bark(); // Specific to Dog
```
