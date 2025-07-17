// Examples

// ================================
// ======== 1. Time Complexity Example: O(1) - Constant Time

function getFirst(arr: number[]): number {
  return arr[0]; // O(1) - دايمًا يرجع العنصر الأول
}

const numbers = [10, 20, 30, 40];
console.log(getFirst(numbers)); // 10

// ================================
// ======== 2. Time Complexity Example: O(n) - Linear Time

function sumArray(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    sum += arr[i];
  }
  return sum;
}

const numbers2 = [1, 2, 3, 4, 5];
console.log(sumArray(numbers2)); // 15

// ================================
// ======== 3. Space Complexity Example: O(1) - Constant Space

function doubleNumber(num: number): number {
  return num * 2; // O(1) - متغير واحد فقط
}

console.log(doubleNumber(5)); // 10

// ================================
// ======== 4. Space Complexity Example: O(n) - Linear Space

function createArray(n: number): number[] {
  const result: number[] = new Array(n); // O(n) - حجم المصفوفة يعتمد على n
  for (let i = 0; i < n; i++) {
    result[i] = i * 2;
  }
  return result;
}

console.log(createArray(5)); // [0, 2, 4, 6, 8]
