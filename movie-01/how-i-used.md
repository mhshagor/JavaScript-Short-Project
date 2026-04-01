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
`19. Default Param - ঐচ্ছিক parameter  `

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

### 18. Default Values

**কী করে:** Function এর parameter এর default মান দেয়া যায়

```javascript
function greet(name = "Guest") {
  return "Hello " + name;
}

greet(); // "Hello Guest"
greet("Alice"); // "Hello Alice"
```

---
