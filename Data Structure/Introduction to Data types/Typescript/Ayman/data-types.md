# Introduction to Data types

- [String](#string)
- [Time complexity for strings](#time-complexity-for-strings)
- [Numbers](#number)
- [Time complexity for numbers](#time-complexity-for-numbers)
- [Arrays](#arrays)
- [Time complexity for arrays](#time-complexity-for-arrays)
- [Objects](#objects)
- [Time complexity for objects](#time-complexity-for-objects)



## String
A string is essentially an ordered **collection** of individual characters.

*Example TypeScript*
```ts
let str: string = "Hello world!";
```
### Time complexity for Strings 

- *Access*: cost **O(1)**
- *Concat*: cost **O(n)**
- *Split*: cost **O(n)**
- *Search(indexOf)*: cost: **O(n)**

*Examples* 
```ts
let greeting: string = "Hello";

let newGreeting = greeting + " World"; // concat - O(n)
console.log(newGreeting); // Hello World

let chars = greeting.split(""); // split - O(n)
console.log(chars); // ['H', 'e', 'l', 'l', 'o']
```


-----------

## Numbers

*Example*
```ts
let num: number = 5;
```
### Time complexity for Numbers 

- *collect*: cost **O(1)**
- *subtraction*: cost **O(1)**
- *divide*: cost **O(1)**
- *multiply*: cost **O(1)**
- *round*: cost **O(1)**

*Examples* 
```ts
let x: number = 10;
let y: number = 5;

let sum = x + y; // collect - O(1)
console.log(sum); // 15

let product = x * y; // multiply - O(1)
console.log(product); // 50

let rounded = Math.round(x / y); // round - O(1)
console.log(rounded); // 2
```


-----------


## Arrays
Arrays store elements of the same data type (e.g., all integers, all strings). but there are some programming languages are not strongly type you can store elements with different data types

*Example: Javascript*
```js
let arr = ["a", 1, false];
```

### Time complexity for Arrays 
- *insert*: or remove at end (pop, push) cost **O(1)**
- *insert*: or remove at begging (shift, unshift) cost **O(n)**
- *access*: cost **O(1)**
- *search*: cost **O(n)**
- *slice, contact, splice*: cost **O(n)**
- *forEach, map, filter, reduce*: cost **O(n)**

*Examples*
```ts
let numbers: number[] = [1, 2, 3];

numbers.push(4); // Add new one as last element - O(1)
console.log(numbers); // [1, 2, 3, 4]

numbers.shift(); // delete the first element - O(n)
console.log(numbers); // [2, 3, 4]
```

-------

## Objects
- Objects store information using key-value pairs, where keys are property names and values are the data associated with those properties.

*Example*
```ts
let obj: { [key: string]: type } = {};
```

### Time complexity for Objects 
- *insert*: cost **O(1)**
- *delete*: cost **O(1)**
- *access*: cost **O(1)**
- *search*: cost **O(n)**
- *keys*: cost **O(n)**
- *values*: cost **O(n)**
- *entries*: cost **O(n)**

*Examples*
```ts
let user: { [key: string]: string | number } = {
    name: "Ahmed",
    age: 25
};

user["city"] = "Cairo"; // insert - O(1)
console.log(user.name); // access - O(1)
console.log(user); // { name: "Ahmed", age: 25, city: "Cairo" }

delete user.age; // delete - O(1)
console.log(user); // { name: "Ahmed", city: "Cairo" }
```
