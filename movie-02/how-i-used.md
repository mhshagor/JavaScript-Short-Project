# JavaScript Methods - সহজ ভাষায় ব্যাখ্যা

## সংক্ষেপে কোনটা কোথায় ব্যবহার হয়েছে

`1. length - মোট মুভি ও রিভিউ গোনা  `  
`2. flat() - সব রিভিউ এক array তে আনা  `  
`3. reduce() - গড় রেটিং বের করা  `  
`4. toFixed(2) - রেটিং 2 দশমিকে রাউন্ড  `  
`5. querySelector() - HTML element খোঁজা  `  
`6. createElement() - নতুন div, span, p তৈরি  `  
`7. innerHTML - লেখা বসানো  `  
`8. appendChild - Element এর ভেতরে element যোগ  `  
`9. sort() - রিভিউ তারিখ অনুযায়ী সাজানো (array কে পরিবর্তন করে)  `  
`10. toSorted() - রিভিউ তারিখ অনুযায়ী সাজানো (sort এর মতোই কিন্তু আসল array কে পরিবর্তন করে না)  `  
`11. map() - প্রতিটি রিভিউর জন্য card তৈরি  `
`12. new Date() - তারিখ object তৈরি  `  
`13. Intl.DateTimeFormat - তারিখ সুন্দর দেখানো  `  
`14. classList.add() - Tailwind style যোগ  `  
`15. Arrow Function - ছোট ফাংশন লেখা  `  
`16. Template Literal - Dynamic string  `  
`17. Spread ... - CSS class যোগ  `  
`18. import - Data file থেকে function আনা  `  
`20. Object.groupBy() - মুভি অনুযায়ী রিভিউ গ্রুপ করা  `  
`21. Reflect.ownKeys() - গ্রুপের key গুলো পাওয়া  `  
`22. Math.floor() / % - পূর্ণ সংখ্যা আর ভগ্নাংশ আলাদা করা  `  
`23. String.padStart() - সংখ্যার আগে শূন্য যোগ  `  
`24. typeof - টাইপ চেক করা (string নাকি element)  `  
`25. Ternary Operator ? - শর্ত অনুযায়ী মান বাছাই  `  
`26. charAt() / toUpperCase() - প্রথম অক্ষর বড় করা  `  
`27. SVG linearGradient - হাফ স্টার রঙ করা  `  
`28. while loop - সব child element মুছে ফেলা  `  
`29. Conditional Classes Array - শর্ত অনুযায়ী CSS class  `

## Data Processing (ডেটা প্রসেসিং)

### 1. `Array.length` - গোনা

**কী করে:** Array তে কতগুলো item আছে তা বলে দেয়

```javascript
const totalMovies = movieReviewData.length;
// 5টা মুভি থাকলে 5 return করবে
```

### 2. `Array.flat()` - সমতল করা

**কী করে:** ভেতরে ভেতরে থাকা array গুলোকে একটা সাদা array বানায়

```javascript
// আগে: [[{review1}], [{review2}]] - 2D array
const reviewData = movieReviewData.flat();
// এখন: [{review1}, {review2}] - 1D array
```

### 3. `Array.reduce()` - যোগ করে একটা ফলাফল

**কী করে:** সব item এর মান একসাথে করে একটা ফলাফল বের করে

```javascript
// সব রেটিং যোগ করে গড় বের করা
const avgRating =
  reviewData.reduce((total, review) => {
    return total + review.rating;
  }, 0) / totalReviews;
// প্রথমে total = 0, তারপর প্রতিটি রেটিং যোগ হয়
```

### 4. `Number.toFixed()` - দশমিক সীমা

**কী করে:** কতগুলো দশমিক ঘর দেখাবে তা নির্ধারণ করে

```javascript
(4.6666).toFixed(2); // "4.67" - 2 ঘর দেখাবে
```

---

## DOM Manipulation (ওয়েব পেজে কিছু যোগ করা)

### 5. `document.querySelector()` - খোঁজা

**কী করে:** HTML থেকে কোনো element খুঁজে বের করে

```javascript
const element = document.querySelector("#totalMovie");
// id="totalMovie" এলিমেন্টটি খুঁজে দেবে
```

### 6. `document.createElement()` - তৈরি করা

**কী করে:** নতুন HTML tag তৈরি করে

```javascript
const div = document.createElement("div"); // <div></div>
const span = document.createElement("span"); // <span></span>
const p = document.createElement("p"); // <p></p>
```

### 7. `innerHTML` - লেখা বসানো

**কী করে:** Element এর ভেতরে লেখা বা HTML বসায়

```javascript
element.innerHTML = "Hello"; // <div>Hello</div>
```

### 8. `appendChild()` - ভেতরে যোগ করা

**কী করে:** একটা element এর ভেতরে আরেকটা element বসায়

```javascript
parent.appendChild(child);
// parent = <div></div>, child = <span>5</span>
// result = <div><span>5</span></div>
```

---

## Array Transformation (Array বদলানো)

### 9. `Array.sort()` - সাজানো (পুরাতন)

**কী করে:** Array এর item গুলো সাজায়, কিন্তু মূল array বদলে ফেলে

```javascript
values.sort((a, b) => new Date(b.on) - new Date(a.on));
// তারিখ অনুযায়ী নতুন থেকে পুরাতন সাজাবে
// কিন্তু values array বদলে যাবে!
```

### 9.1. `Array.toSorted()` - সাজানো (নতুন ES2023)

**কী করে:** সাজায়, কিন্তু মূল array অক্ষত রাখে

```javascript
const sorted = values.toSorted((a, b) => b.on - a.on);
// নতুন sorted array return করে
// আগের values array একই থাকে
```

### 10. `Array.map()` - প্রতিটি উপরে কাজ করা

**কী করে:** Array এর প্রতিটি item এর উপরে একই কাজ করে

```javascript
values.map((review) => {
  // প্রতিটি review এর জন্য এই কাজ হবে
  return createCard(review);
});
```

---

## Date & Formatting (তারিখ)

### 11. `new Date()` - তারিখ তৈরি

**কী করে:** String তারিখ কে Date object এ রূপান্তর করে

```javascript
new Date("2025-01-15"); // Date object তৈরি করবে
// তারিখ তুলনা করতে Date object লাগে
```

### 12. `Intl.DateTimeFormat` - তারিখ সুন্দর দেখানো

**কী করে:** তারিখ সুন্দর করে দেখায় (দেশ অনুযায়ী)

```javascript
new Intl.DateTimeFormat("en-IN").format("2025-01-15");
// "15/1/2025" - ভারতীয় ফরম্যাট
```

---

## Class Manipulation (স্টাইল যোগ করা)

### 13. `classList.add()` - CSS class যোগ

**কী করে:** HTML element এ CSS class যোগ করে

```javascript
element.classList.add("bg-gray-200", "p-4", "rounded-lg");
// Tailwind CSS class গুলো যোগ হবে
// background gray, padding 4, rounded corners
```

---

## Modern JavaScript Features (নতুন জাভাস্ক্রিপ্ট)

### 14. Arrow Function `=>` - সংক্ষিপ্ত ফাংশন

**কী করে:** ছোট করে ফাংশন লেখা যায়

```javascript
// পুরাতন:
function(a, b) { return a + b; }

// নতুন:
(a, b) => a + b

// উদাহরণ:
values.map(review => review.title);
```

### 15. Template Literals (Backticks `` ` ``)

**কী করে:** Variable সহ স্ট্রিং লেখা যায়

```javascript
const name = "Inception";
const rating = 5;

// পুরাতন:
name +
  " - " +
  rating // "Inception - 5"
  // নতুন:
  `${name} - ${rating}`; // "Inception - 5"
```

### 16. Spread Operator `...`

**কী করে:** Array কে individual items এ ভাঙে

```javascript
const classes = ["font-bold", "text-lg"];
element.classList.add(...classes);
// ...classes এর মানে: "font-bold", "text-lg"
// classList.add("font-bold", "text-lg") এর মতো
```

### 17. ES6 Modules (import/export)

**কী করে:** অন্য file থেকে কোড আনা যায়

```javascript
// data.js file থেকে getMovieReviewData আনা
import { getMovieReviewData } from "./data.js";

// ব্যবহার:
const data = getMovieReviewData();
```

---

## Default Parameters (ডিফল্ট মান)

---

## Object Grouping (গ্রুপিং)

### 19. `Object.groupBy()` - গ্রুপ করা

**কী করে:** Array এর item গুলোকে কোনো শর্ত অনুযায়ী গ্রুপ করে

```javascript
const groupReviews = Object.groupBy(sortedData, ({ title }) => title);
// একই মুভির রিভিউ গুলো একসাথে হবে
// { "Inception": [review1, review2], "Dark Knight": [review3] }
```

### 20. `Reflect.ownKeys()` - Key গুলো পাওয়া

**কী করে:** Object এর সব key (property name) গুলো array আকারে দেয়

```javascript
const groupKeys = Reflect.ownKeys(groupReviews);
// ["Inception", "Dark Knight"] - মুভি নামগুলো পাওয়া যাবে
```

---

## Math Operations (গণিত)

### 21. `Math.floor()` এবং `%` (Modulo)

**কী করে:** সংখ্যার পূর্ণ অংশ আর ভগ্নাংশ আলাদা করে

```javascript
const fullStars = Math.floor(3.5); // 3 - পূর্ণ স্টার
const hasHalf = 3.5 % 1 >= 0.5; // true - হাফ স্টার আছে কি না
// % 1 দশমিক অংশ বের করে
```

---

## String Formatting (স্ট্রিং ফরম্যাটিং)

### 22. `String.padStart()` - আগে ফিলার যোগ

**কী করে:** String এর আগে কিছু character যোগ করে নির্দিষ্ট দৈর্ঘ্য বানায়

```javascript
strPadLeft(5, 2, "0"); // "05" - সংখ্যার আগে শূন্য
// (value, length, padChar)
```

---

## Type Checking (টাইপ চেক)

### 23. `typeof` Operator - টাইপ জানা

**কী করে:** Variable এর টাইপ বলে দেয়

```javascript
const parent =
  typeof parentElement === "string"
    ? getElement(parentElement) // string হলে selector
    : parentElement; // না হলে element
```

---

## Conditional Logic (শর্ত)

### 24. Ternary Operator `? :` - এক লাইনে if-else

**কী করে:** শর্ত অনুযায়ী দুইটা ভ্যালুর একটা বাছাই করে

```javascript
const color =
  rating >= 4
    ? "bg-emerald-100" // true হলে
    : "bg-rose-100"; // false হলে

// সংক্ষিপ্ত: condition ? trueValue : falseValue
```

### 25. Conditional Classes Array - শর্ত অনুযায়ী class

**কী করে:** শর্ত অনুযায়ী CSS class গুলো array তে যোগ করে

```javascript
const badgeClasses =
  rating >= 4
    ? ["bg-emerald-100", "text-emerald-700"] // 4+ rating
    : rating >= 3
      ? ["bg-amber-100", "text-amber-700"] // 3 rating
      : ["bg-rose-100", "text-rose-700"]; // <3 rating

// ব্যবহার: ["rounded-lg", ...badgeClasses]
```

---

## String Manipulation (স্ট্রিং কাজ)

### 26. `charAt()` এবং `toUpperCase()` - প্রথম অক্ষর

**কী করে:** String এর নির্দিষ্ট position এর অক্ষর বের করে বড় করে

```javascript
const initial = "alice".charAt(0).toUpperCase(); // "A"
// Avatar circle এ নামের প্রথম অক্ষর দেখানোর জন্য
```

---

## SVG Graphics (ভেক্টর গ্রাফিক্স)

### 27. SVG `linearGradient` - রং গ্রেডিয়েন্ট

**কী করে:** SVG shape এর একাংশে রং দেয় (হাফ স্টার এর জন্য)

```javascript
const halfStar = `<svg>
  <defs>
    <linearGradient id="half">
      <stop offset="50%" stop-color="currentColor"/>  <!-- বাঁ অংশ রং -->
      <stop offset="50%" stop-color="transparent"/>    <!-- ডান অংশ ফাকা -->
    </linearGradient>
  </defs>
  <path fill="url(#half)" ... />
</svg>`;
// 3.5 rating এ 3টা পূর্ণ + 1টা হাফ স্টার দেখাবে
```

---

## DOM Cleanup (পরিষ্কার করা)

### 28. `while` Loop - সব element মুছে ফেলা

**কী করে:** শর্ত পূরণ না হওয়া পর্যন্ত loop চালায়

```javascript
while (movieReviewElement.firstChild) {
  movieReviewElement.removeChild(movieReviewElement.firstChild);
}
// firstChild আছে? হ্যাঁ → মুছে ফেলো → আবার চেক
// innerHTML = "" এর পরিবর্তে এটা safer
```

---

## Default Parameters (ডিফল্ট মান)

### 29. Default Values

**কী করে:** Function এর parameter এর default মান দেয়া যায়

```javascript
function greet(name = "Guest") {
  return "Hello " + name;
}

greet(); // "Hello Guest"
greet("Alice"); // "Hello Alice"
```

---
