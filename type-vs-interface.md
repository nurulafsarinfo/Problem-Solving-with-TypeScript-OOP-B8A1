# Difference Between Type Alias and Interface in TypeScript

## Introduction
Type Alias and Interface are two important features of TypeScript. They help developers define data types and object structure. Although they have some similaritis, they also have some important differances.

## Detailed Explanation
First of all, Type Alias is useful when we need to define different kind of types. For example, we can use it for string, number, tuple, union, intersection and function types. It can also define object structure. Moreover, we can combine multiple object type into one type using the `intersection (&)` operator.

```ts
type Name = string;
type Age = number;
type Status = "Pending" | "Approved";

type User = {
    name: string;
    age: number;
}

type PersonName = {
    name: string;
};
type PersonAge = {
    age: number;
}

type Person = PersonName & PersonAge;
```


On the other hand, Interface is commonly used to describe object structure and define contracts for classes. We can also extend an existing interface using the `extends` keyword. 

```ts
interface Teacher {
    name: string;
    age: number;
}

interface Student extends Teacher {
    className: string;
}

```

Another important feature of Interface is Declaration Merging. It allows multiple declarations with the same interface name to merge into one structure. However, Type Alias does not support this feature.

```ts
interface User {
    name: string;
    
}
interface User {
    age: number;
}
```

Here, the `User` interface contains both `name` and `age` properties.


## Conclusion
Overall, Type Alias and Interface are not replacements for each other. Both can define object structures, but their features and uses are different. We should choose them base on our requirments and use cases.