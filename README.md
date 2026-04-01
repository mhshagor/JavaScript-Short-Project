# 🎬 JavaScript Short Project - Movie Mania

A modern, responsive movie review dashboard application with two progressive versions. Users can view, sort, and organize movie ratings and reviews.

---

## 📁 Project Structure

```
JavaScript-Short-Project/
├── movie-01/           # Basic Dashboard (Part 1)
│   ├── index.html
│   ├── app.js
│   ├── data.js
│   ├── problem.md
│   └── how-i-used.md
├── movie-02/           # Advanced Dashboard (Part 2)
│   ├── index.html
│   ├── app.js
│   ├── data.js
│   ├── problem.md
│   └── how-i-used.md
└── README.md
```

---

## ✨ Features

### Movie-01: Basic Dashboard

- **Total Movies Count** - Display total number of movies
- **Total Reviews Count** - Display total number of reviews across all movies
- **Average Rating** - Calculate and display average rating (out of 5)
- **Movie-wise Statistics** - Show ratings and reviews for each movie
- **Dynamic Rendering** - New movies added to data automatically appear

### Movie-02: Advanced Dashboard

All features from movie-01, plus:

#### Dashboard Statistics

- Total movies count with visual cards
- Total reviews count
- Average rating display (out of 5)

#### Review Management

- **Date-based Sorting** - Latest reviews shown first by default
- **Rating-based Sorting** - Sort by rating (ascending/descending)
- **Group by Movie** - Group all reviews by their movie
- **Reset Option** - Clear all filters and return to default view

#### UI/UX Features

- Modern card-based design
- Responsive layout (mobile, tablet, desktop)
- Color-coded rating badges (green/yellow/red)
- Star rating visual display
- Animated transitions
- No internal scrolling needed

---

## 🛠️ Tech Stack

| Technology                    | Description                        |
| ----------------------------- | ---------------------------------- |
| **HTML5**                     | Semantic markup                    |
| **Tailwind CSS v4**           | Utility-first CSS loaded from CDN  |
| **Vanilla JavaScript (ES6+)** | Pure JavaScript without frameworks |
| **JavaScript Modules**        | ES6 import/export usage            |

---

## � How to Run

### Run Locally

1. **Clone the project:**

   ```bash
   git clone <repository-url>
   cd JavaScript-Short-Project
   ```

2. **Navigate to desired version:**

   ```bash
   cd movie-01   # For basic version
   # OR
   cd movie-02   # For advanced version
   ```

3. **Use Live Server (Recommended):**

   For VSCode users:
   - Install `Live Server` extension
   - Open `index.html` file
   - Click `Go Live` button

   Or from terminal:

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

4. **Open in browser:**
   ```
   http://localhost:8000
   ```

> ⚠️ **Important:** JavaScript modules cannot be opened directly with `file://` protocol. You must use a local server.

---

## 📊 Data Structure

```javascript
// data.js - Movie review data format
const movieReviewData = [
  [
    {
      id: "m1",
      title: "Inception", // Movie name
      content: "Mind bending...", // Review content
      rating: 5, // Rating (1-5)
      by: "Rahim U", // Reviewer name
      on: 1718500000001, // Timestamp (ms)
    },
    // More reviews...
  ],
  // More movies...
];
```

---

## 🎯 Functionality Details

### Movie-01 Features

#### Global Statistics (`globalData()`)

```javascript
- Count total number of movies
- Count total number of reviews
- Calculate average rating
- Sort by date (descending)
```

#### Movie Display

```javascript
- Render movies in list format
- Display ratings and reviews count per movie
- Show average rating per movie
```

### Movie-02 Additional Features

#### Review Card (`setMovieReviewElement()`)

```javascript
- Grid layout card rendering
- Color-coded rating strip
- Star rating display (full/half/empty)
- Reviewer avatar (first letter of name)
- Formatted date display
```

#### Sorting Feature (`sortByRating()`)

```javascript
- Ascending: Low to high rating
- Descending: High to low rating
- Uses toggle switch
```

#### Grouping Feature (`groupByMovie()`)

```javascript
- Uses Object.groupBy()
- Separate card for each movie
- Header with average rating
- Movie-based review count
```

---

## 🎨 Design System

### Color Palette

| Color      | Hex                     | Usage           |
| ---------- | ----------------------- | --------------- |
| Primary    | `#0f172a` (slate-900)   | Navbar, buttons |
| Secondary  | `#4f46e5` (indigo-600)  | Action buttons  |
| Accent     | `#f59e0b` (amber-500)   | Reset button    |
| Success    | `#10b981` (emerald-500) | High rating     |
| Warning    | `#f59e0b` (amber-500)   | Mid rating      |
| Danger     | `#f43f5e` (rose-500)    | Low rating      |
| Background | `#f8fafc` (slate-50)    | Page background |

### Breakpoints

- **Mobile:** < 640px (single column)
- **Tablet:** 640px - 1024px (2 columns)
- **Desktop:** > 1024px (2 column grid)

---

## 🧠 What You Can Learn

From this project you can learn:

- ✅ **JavaScript ES6+ Features:**
  - `Array.flat()` - Flatten multidimensional arrays
  - `Array.toSorted()` - Immutable sorting
  - `Object.groupBy()` - Data grouping
  - `Reflect.ownKeys()` - Extract object keys

- ✅ **DOM Manipulation:**
  - Create dynamic elements with `document.createElement()`
  - Class management with `classList.add()`
  - Add event listeners

- ✅ **Tailwind CSS:**
  - Utility class usage
  - Responsive design (`sm:`, `md:`, `lg:`)
  - Gradients and shadows
  - Hover states

- ✅ **Modern JavaScript Patterns:**
  - Module system (import/export)
  - Pure function usage
  - Destructuring

---

## 🔧 Possible Extensions

Future additions you can implement:

- 🔍 **Search Feature** - Search by movie or reviewer
- 🏷️ **Filtering** - Filter by rating range
- 🌙 **Dark Mode** - Theme toggle
- 📱 **PWA** - Offline support
- 🗄️ **Backend Integration** - Fetch data from real API

---

## 📝 License

This project is created for educational purposes.

---

## 👨‍💻 Developer

**Movie Mania Dashboard** - JavaScript Short Project Series

Feel free to reach out if you have questions about the project or want to contribute.

---

**🎬 Enjoy the Movie Reviews!** ⭐
