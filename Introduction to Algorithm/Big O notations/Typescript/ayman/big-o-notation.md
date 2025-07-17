# Introduction to Algorithm

- [Characteristics](#characteristics)
- [Time Complexity](#time-complexity)
- [Space Complexity](#space-complexity)
- [Examples](#examples)
- [Time complexity for Objects](#time-complexity-for-objects)
- [Time complexity for Arrays](#time-complexity-for-arrays)


## Characteristics
- Well defined input & output
- Every step in algorithm should be clear and unambiguous
- Language independent

### How to represent complexity (Asymptotic notation)

- **big-O-notation**: Worst case complexity
- **Omega-notation**: Best case complexity
- **Theta-notation**: Average case complexity

#### Time Complexity
بتركز على عدد الخطوات التنفيذية
- **`O(1)`**: Constant
- **`O(n)`**: Linear
- **`O(n²)`**: Quadratic
- **`O(n3)`**: Cubic
- **`O(log n)`**: Logarithmic `Input size reduce by half every iteration`

#### Space Complexity
بتركز على كمية الذاكرة المستخدمة (variables, arrays ,etc)
**`O(1)`**: Constant
**`O(n)`**: Linear
**`O(log n)`**: Logarithmic 


#### Examples 

**1. Time Complexity Example: O(1) - Constant Time**

```typescript
function getFirst(arr: number[]): number {
    return arr[0]; // O(1) - دايمًا يرجع العنصر الأول
}

const numbers = [10, 20, 30, 40];
console.log(getFirst(numbers)); // 10
```

**2. Time Complexity Example: O(n) - Linear Time**

```typescript
function sumArray(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { // O(n)
        sum += arr[i];
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // 15
```

**3. Space Complexity Example: O(1) - Constant Space**

```typescript
function doubleNumber(num: number): number {
    return num * 2; // O(1) - متغير واحد فقط
}

console.log(doubleNumber(5)); // 10
```

**4. Space Complexity Example: O(n) - Linear Space**
```typescript
function createArray(n: number): number[] {
    const result: number[] = new Array(n); // O(n) - حجم المصفوفة يعتمد على n
    for (let i = 0; i < n; i++) {
        result[i] = i * 2;
    }
    return result;
}

console.log(createArray(5)); // [0, 2, 4, 6, 8]
```



