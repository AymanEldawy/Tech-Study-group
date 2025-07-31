//1️⃣String عكس 
// خطوات حل التحدي 
// split() اول خطوه هفصل النص من خلال 
// reverse() تاني خطوه اعكس النص  من خلال   
// join() تالت خطوه ادمج النص تاني عكس الخطوه الاول من خلال 

let str = "hello";
let reversed = str.split("").reverse().join("");
console.log(reversed);

// 2️⃣ Array فلترة 
// خطوات حل التحدي 
// علشان احل التحدي ده محتاج استخدم معادله مشهوره جدا في معرفه الاعداد الزوجيه
// HOF => filter الخطوه الاولي استخدام 
// num => num % 2 === 0 الخطوه التانيه استخدام المعادلة 

let numbers = [1,2,3,4,5];
let events = numbers.filter(num => num % 2 === 0);

console.log(events); // 2 , 4

// 3️⃣ Array دمج نص  
// خطوات حل التحدي 
// join() اول خطوه نعمل دمج من خلال 

let words = ["I","love","JS"];
let sentence = words.join(" ");

console.log(sentence); // "I love JS"

//4️⃣ Array البحث جوة 
// خطوات حل التحدي 
// includes() الخطوه الاولي نبحث عن العناصر من خلال 
let names = ["Ali", "Ahmed", "Eslam"];

console.log(names.includes("Eslam")); // true

//5️⃣ Array جمع عناصر 
// خطوات حل التحدي 
// HOF => Reduce الخطوه الاولي استخدام 
let number = [1, 2, 3, 4, 5];
let sum = number.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

//6️⃣ Array أكبر قيمة في 
// خطوات حل التحدي 
//لايجاد اكبر قيمه  max() الخطوه الاولي استخدام 
let num = [5, 8, 3, 12, 7];
let max = Math.max(...num);
console.log(max); // 12

//7️⃣ عدّ الكلمات في جملة
// خطوات حل التحدي 
// split الخطوه الاولي نقسم النص من خلال 
// length الخطوه التانيه نعد الاحرف من خلال 
let sentences = "I love problem solving with JS";
let count = sentences.split(" ").length;
console.log(count); // 6


