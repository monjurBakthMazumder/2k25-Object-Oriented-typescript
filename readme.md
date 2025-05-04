# 2K25: Object Oriented typescript

This guide provides an overview of the key concepts in TypeScript, along with practical examples and detailed explanations. Whether you are a beginner or someone looking to refresh your knowledge, this guide covers the essentials of TypeScript, including data types, functions, destructuring, operators, and advanced types.

---

## 🛠 TypeScript Project Setup

### 1. Initialize TypeScript

```bash
tsc --init
```

### 2. Update `tsconfig.json`

```json
{
  "compilerOptions": {
    "rootDir": "./src/",
    "outDir": "./dist/",
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### 3. Install ts-node-dev

```bash
npm install -g ts-node-dev
```

### 4. Run the project

```bash
ts-node-dev --respawn --transpile-only src/index.ts
```

---

## Folder Structure

```
2k25-2k25-Object-Oriented-typescript/
├── src/             # All TypeScript source files
│   ├── index.ts     # Entry point
│   └── examples/    # Example scripts (types, functions, etc.)
├── dist/            # Compiled JavaScript output
├── tsconfig.json    # TypeScript compiler configuration
└── README.md        # This documentation file
```

---

# Welcome to Object-Oriented TypeScript

Welcome back to the next step in your TypeScript journey!

In this module, you'll dive into the heart of Object-Oriented Programming (OOP). Here's what you'll explore:

### Introduction to Object-Oriented Programming

We will introduce you to object-oriented programming. You'll learn what OOP is and how OOP principles help structure and maintain complex codebases.

### Class and Object

Classes serve as blueprints for creating objects, which are instances that encapsulate both state and behavior. You'll learn how to define classes with properties and methods, create objects from them, and understand why this pattern is crucial for building scalable and maintainable applications.

### Inheritance in OOP

Continuing our exploration of OOP, we’ll talk about inheritance, one of the most powerful tools for code reuse. Inheritance allows a class to inherit properties and methods from another class, creating a parent-child relationship.

### Type Guard using `typeof` & `in`

When working with dynamic types, it's crucial to ensure you're dealing with the expected type. TypeScript offers type guards to help with this. You'll explore how to use the `typeof` operator and the `in` keyword to safely implement conditional logic based on variable types.

### Type Guard using `instanceof`

Building on your knowledge of type guards, you'll explore the `instanceof` operator — a powerful tool for checking whether an object is an instance of a specific class, especially useful in class hierarchies.

### Access Modifiers

Access modifiers are key to controlling the visibility of class members. You’ll learn about `public`, `private`, and `protected` in TypeScript, and how they help enforce encapsulation.

### Getter and Setter

Take control of how your class properties are accessed and modified! You'll learn how to define getters and setters in TypeScript and explore their practical benefits.

### Static Members in OOP

Static properties and methods belong to the class itself, not to instances. We'll show you how to declare and use `static` members in TypeScript effectively.

### Polymorphism

Polymorphism allows different classes to be treated as if they are the same through a shared interface or base class. You’ll implement polymorphism and understand its importance in flexible application design.

### Abstraction in OOP

Abstraction hides implementation details and exposes only essential features. You'll learn to create abstract classes and interfaces to define clear and robust contracts in your code.

### Encapsulation in OOP

Encapsulation ensures that internal class details are hidden and protected. We’ll demonstrate how to implement encapsulation using private properties and access modifiers.

---

With this knowledge, you can confidently build complex applications that are both maintainable and resilient. Keep practicing and experimenting with these concepts. The more you apply them, the more intuitive they will become!

---

## Class and Object in TypeScript

In Object-Oriented Programming (OOP), **classes** are blueprints for creating **objects**. Each object created from a class can have its own data (**properties**) and functionality (**methods**).

Let’s break this down with examples and explanations.

---

### Basic Example of a Class

```ts
class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(
      `The ${this.species} named "${this.name}" says: "${this.sound}"`
    );
  }
}

const dog = new Animal("Dog Miya", "dog", "Ghew Ghew");
const cat = new Animal("Cat Miya", "cat", "Meaw Meaw");

dog.makeSound(); // Output: The dog named "Dog Miya" says: "Ghew Ghew"
cat.makeSound(); // Output: The cat named "Cat Miya" says: "Meaw Meaw"
```

### Explanation:

- `class Animal` defines a class with 3 properties (`name`, `species`, `sound`) and 1 method (`makeSound()`).
- The `constructor` initializes the object when created using the `new` keyword.
- The `makeSound()` method logs a sentence using the object's data.

---

### Using Constructor Shorthand

TypeScript allows a shorthand for defining and assigning properties directly from the constructor:

```ts
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(
      `The ${this.species} named "${this.name}" says: "${this.sound}"`
    );
  }
}

const dog = new Animal("Dog Miya", "dog", "Ghew Ghew");
const cat = new Animal("Cat Miya", "cat", "Meaw Meaw");

dog.makeSound(); // Output: The dog named "Dog Miya" says: "Ghew Ghew"
cat.makeSound(); // Output: The cat named "Cat Miya" says: "Meaw Meaw"
```

### Benefits of Constructor Shorthand:

- Less code.
- Automatically creates and assigns properties with `public`, `private`, or `protected` access modifiers.

---

### Logging and Debugging

You can always inspect your objects and debug like this:

```ts
console.log(dog); // Output: Animal { name: 'Dog Miya', species: 'dog', sound: 'Ghew Ghew' }
dog.makeSound(); // Output: The dog named "Dog Miya" says: "Ghew Ghew"
```

This is very helpful when working on complex object hierarchies or when you want to ensure data is passed correctly.

---

### Why Use Classes?

- Reuse code by creating multiple instances (objects).
- Group related data and behaviors.
- Helps with large-scale, maintainable application design.

---

### Class vs Object Summary

| Feature    | Class                         | Object                                   |
| ---------- | ----------------------------- | ---------------------------------------- |
| Definition | A blueprint or template       | An instance of a class                   |
| Use        | Define structure and behavior | Access or manipulate specific data       |
| Keyword    | `class`                       | `new ClassName(...)` to create an object |

---

### Practice Challenge

Try defining your own class called `Car` with the following:

- Properties: `brand`, `model`, `year`
- Method: `displayInfo()` that logs `"Brand Model (Year)"`

<details>
<summary>Example solution</summary>

```ts
class Car {
  constructor(
    public brand: string,
    public model: string,
    public year: number
  ) {}

  displayInfo() {
    console.log(`${this.brand} ${this.model} (${this.year})`);
  }
}

const car1 = new Car("Toyota", "Corolla", 2020);
car1.displayInfo(); // Output: Toyota Corolla (2020)
```

</details>

---

## Inheritance in TypeScript

**Inheritance** is a core principle of Object-Oriented Programming (OOP) that allows one class to inherit the properties and methods of another. This promotes **code reuse**, **organization**, and **scalability**.

---

### Base Class (Parent)

A **base class** defines common properties and methods that can be reused by **derived classes** (child classes).

```ts
class Person {
  name: string;
  age: string;
  address: string;

  constructor(name: string, age: string, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numberOfHours: number) {
    console.log(`${this.name} will sleep for ${numberOfHours} hours.`);
  }
}
```

---

### Derived Class (Child)

You can create new classes that **extend** the base class using the `extends` keyword.

```ts
class Student extends Person {
  constructor(name: string, age: string, address: string) {
    super(name, age, address); // Call base class constructor
  }
}
```

### Another Derived Class with Extra Features

You can add additional properties and methods to a subclass.

```ts
class Teacher extends Person {
  designation: string;

  constructor(name: string, age: string, address: string, designation: string) {
    super(name, age, address); // Inherit base properties
    this.designation = designation;
  }

  takeClass(numOfClass: number) {
    console.log(`${this.name} will take ${numOfClass} class(es).`);
  }
}
```

---

### Full Example with Console Output

```ts
// Create a Student
const student1 = new Student("Rafi", "20", "Dhaka");
console.log("Student Info:", student1);
// Output: Student Info: Student { name: 'Rafi', age: '20', address: 'Dhaka' }

student1.getSleep(8);
// Output: Rafi will sleep for 8 hours.

// Create a Teacher
const teacher1 = new Teacher("Munna Sir", "40", "Chattogram", "Math Teacher");
console.log("Teacher Info:", teacher1);
// Output: Teacher Info: Teacher { name: 'Munna Sir', age: '40', address: 'Chattogram', designation: 'Math Teacher' }

teacher1.getSleep(6);
// Output: Munna Sir will sleep for 6 hours.

teacher1.takeClass(3);
// Output: Munna Sir will take 3 class(es).
```

---

### Explanation

| Concept        | Description                                                                  |
| -------------- | ---------------------------------------------------------------------------- |
| `extends`      | Used to inherit from another class.                                          |
| `super()`      | Calls the constructor of the parent class.                                   |
| Shared Methods | Inherited methods (like `getSleep()`) are available to all subclasses.       |
| Custom Methods | You can add new behavior to each subclass (like `takeClass()` in `Teacher`). |

---

### Why Use Inheritance?

- Avoid duplicate code.
- Express logical relationships (e.g., a Teacher **is a** Person).
- Make future extensions easier (e.g., add more subclasses like `Admin`, `Guardian`, etc.).
- Encourage consistency across components.

---

### Practice Task

Try creating a new class `Admin` that inherits from `Person` and adds the method `manageSystem()`.

<details>
<summary>Example Solution</summary>

```ts
class Admin extends Person {
  constructor(name: string, age: string, address: string) {
    super(name, age, address);
  }

  manageSystem() {
    console.log(`${this.name} is managing the system.`);
  }
}

const admin1 = new Admin("Kamal", "35", "Sylhet");
admin1.getSleep(7); // Inherited method
admin1.manageSystem(); // New method
```

</details>

---

## Author

**Md Monjur Bakth Mazumder**  
Software Engineer & Lead Frontend Developer  
[Qrinux](https://www.qrinux.com/)  
[Email me](mailto:md.monjurmbm2001@gmail.com)  
[Portfolio](https://mdmonjurbakthmazumder.netlify.app)  
Passionate about building clean, maintainable, and scalable applications.
