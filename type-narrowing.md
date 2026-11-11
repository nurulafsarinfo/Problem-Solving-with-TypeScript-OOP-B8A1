# What is Type Narrowing in TypeScript?

## Introduction

Type Narrowing is a process that helps us identify a specific type from a broader type. It allows TypeScript to understand the actual type of a variable through conditions. As a result, we can safely use type-specific methods and properties. Some common techniques used for Type Narrowing are `typeof`, `instanceof`, and the `in` operator.

## Detailed Explanation

### 1. typeof

The `typeof` operator is used to check primitive types such as string and number. Based on the condition, TypeScript can narrow the variable to a specific type.

```ts
function printValue(data: string | number) {
  if (typeof data === "string") {
    console.log(data.toUpperCase());
  } else {
    console.log(data * 2);
  }
}
```

### 2. instanceof

The `instanceof` operator checks whether an object is an instance of a particular class or constructor.

```ts
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  mew() {
    console.log("Mewo!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.mew();
  }
}
```

### 3. in Operator

The `in` operator checks whether a specific property exists in an object. It helps TypeScript identify the object's structure.

```ts
interface Student {
  name: string;
  attendance: boolean;
}

interface Teacher {
  name: string;
  subject: string;
}

function getDetails(person: Student | Teacher) {
  if ("attendance" in person) {
    console.log(person.name);
  } else {
    console.log(person.subject);
  }
}
```

## Conclusion

Overall, Type Narrowing is an important TypeScript feature that helps developers work safely with different types. It makes code more reliable by allowing TypeScript to identify specific types before accessing their methods and properties.