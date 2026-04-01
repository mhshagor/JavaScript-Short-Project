import { getMovieReviewData } from "./data.js";

let sortByToggle = false;

function globalData() {
  const movieReviewData = getMovieReviewData();
  const totalMovies = movieReviewData.length;
  const reviewData = movieReviewData.flat();
  const sortedData = reviewData.toSorted((a, b) => b.on - a.on);
  const totalReviews = reviewData.length;
  const avgRating =
    reviewData.reduce((total, review) => total + review.rating, 0) /
    totalReviews;
  return {
    totalMovies,
    totalReviews,
    avgRating,
    reviewData,
    sortedData,
  };
}

function init() {
  setElement("span", globalData().totalMovies, [], "#totalMovie");
  setElement("span", globalData().totalReviews, [], "#totalReview");
  setElement("span", globalData().avgRating.toFixed(2), [], "#avgRating");
  setMovieReviewElement(globalData().sortedData);
  sortBy(globalData().sortedData);
}

function setMovieReviewElement(values) {
  // Create grid layout wrapper
  const grid = setElement(
    "div",
    "",
    ["grid", "grid-cols-1", "lg:grid-cols-2", "gap-5"],
    "#movieReview",
  );

  values.forEach((review, index) => {
    const card = setElement(
      "div",
      "",
      [
        "bg-white",
        "rounded-2xl",
        "shadow-md",
        "hover:shadow-2xl",
        "transition-all",
        "duration-300",
        "border",
        "border-slate-100",
        "overflow-hidden",
        "group",
      ],
      grid,
    );

    // Rating badge strip
    const ratingColor =
      review.rating >= 4
        ? "from-emerald-500 to-teal-600"
        : review.rating >= 3
          ? "from-amber-400 to-orange-500"
          : "from-rose-500 to-pink-600";

    setElement(
      "div",
      "",
      ["h-1.5", "bg-gradient-to-r", ...ratingColor.split(" ")],
      card,
    );

    const content = setElement("div", "", ["p-5"], card);

    // Movie title with icon
    const titleRow = setElement(
      "div",
      "",
      ["flex", "items-center", "gap-2", "mb-3"],
      content,
    );

    setElement("span", "🎬", ["text-xl"], titleRow);
    setElement(
      "h3",
      review.title,
      ["font-bold", "text-lg", "text-slate-800", "line-clamp-1"],
      titleRow,
    );

    // Rating bar
    const ratingRow = setElement(
      "div",
      "",
      ["flex", "items-center", "justify-between", "mb-4"],
      content,
    );

    const starsWrap = setElement(
      "div",
      "",
      ["flex", "items-center", "gap-1"],
      ratingRow,
    );
    setStars(review.rating, ["text-yellow-500"], starsWrap);
    const badgeClasses =
      review.rating >= 4
        ? ["bg-emerald-100", "text-emerald-700"]
        : review.rating >= 3
          ? ["bg-amber-100", "text-amber-700"]
          : ["bg-rose-100", "text-rose-700"];

    setElement(
      "span",
      review.rating.toFixed(1),
      ["text-sm", "font-bold", "px-2", "py-1", "rounded-lg", ...badgeClasses],
      ratingRow,
    );

    // Review content
    setElement(
      "p",
      `"${review.content}"`,
      [
        "text-slate-600",
        "text-sm",
        "italic",
        "leading-relaxed",
        "mb-4",
        "line-clamp-3",
      ],
      content,
    );

    // Divider
    setElement("div", "", ["h-px", "bg-slate-100", "my-4"], content);

    // Footer
    const footer = setElement(
      "div",
      "",
      ["flex", "items-center", "justify-between"],
      content,
    );

    const authorWrap = setElement(
      "div",
      "",
      ["flex", "items-center", "gap-2"],
      footer,
    );

    // Avatar circle with initial
    setElement(
      "div",
      review.by.charAt(0).toUpperCase(),
      [
        "w-8",
        "h-8",
        "rounded-full",
        "bg-gradient-to-br",
        "from-indigo-500",
        "to-purple-600",
        "text-white",
        "text-sm",
        "font-bold",
        "flex",
        "items-center",
        "justify-center",
      ],
      authorWrap,
    );

    setElement(
      "span",
      review.by,
      ["text-sm", "font-medium", "text-slate-700"],
      authorWrap,
    );

    setElement(
      "time",
      new Date(review.on).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      ["text-xs", "text-slate-400"],
      footer,
    );
  });
}

function sortBy(sortedData) {
  const sortBtn = getElement(".sortByRatingBtn");
  const resetBtn = getElement(".resetBtn");
  const groupByMovieBtn = getElement(".groupByMovieBtn");
  sortBtn.addEventListener("click", () => sortByRating(sortedData));
  resetBtn.addEventListener("click", () => resetAll(sortedData));
  groupByMovieBtn.addEventListener("click", () => groupByMovie(sortedData));
}

function sortByRating(sortedData) {
  removeAllChildNodes();
  sortByToggle = !sortByToggle;
  const sortByRating = sortByToggle
    ? sortedData.toSorted((a, b) => b.rating - a.rating)
    : sortedData.toSorted((a, b) => a.rating - b.rating);
  setMovieReviewElement(sortByRating);
}

function groupByMovie(sortedData) {
  removeAllChildNodes();
  const groupReviews = Object.groupBy(sortedData, ({ title }) => title);
  const groupKeys = Reflect.ownKeys(groupReviews);
  const grid = setElement(
    "div",
    "",
    ["grid", "grid-cols-1", "lg:grid-cols-2", "gap-5"],
    "#movieReview",
  );
  groupKeys.forEach((title) => {
    const reviews = groupReviews[title];
    const avgRating =
      reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

    const card = setElement(
      "div",
      "",
      [
        "bg-white",
        "border",
        "border-gray-200",
        "rounded-2xl",
        "shadow-md",
        "hover:shadow-xl",
        "transition-all",
        "duration-300",
        "overflow-hidden",
        "mb-6",
      ],
      grid,
    );

    // Header with movie title and review count
    const header = setElement(
      "div",
      "",
      [
        "bg-gradient-to-r",
        "from-gray-900",
        "to-gray-700",
        "p-4",
        "flex",
        "items-center",
        "justify-between",
      ],
      card,
    );

    setElement("h3", title, ["font-bold", "text-xl", "text-white"], header);

    const meta = setElement(
      "div",
      "",
      ["flex", "items-center", "gap-3", "text-sm"],
      header,
    );

    // Rating stars and value with background badge
    const avgBadgeBg =
      avgRating >= 4
        ? "bg-emerald-500/20"
        : avgRating >= 3
          ? "bg-amber-500/20"
          : "bg-rose-500/20";
    const avgBadgeText =
      avgRating >= 4
        ? "text-emerald-400"
        : avgRating >= 3
          ? "text-amber-400"
          : "text-rose-400";

    const avgBadge = setElement(
      "div",
      "",
      [
        "flex",
        "items-center",
        "gap-2",
        "px-3",
        "py-1.5",
        "rounded-full",
        avgBadgeBg,
      ],
      meta,
    );

    setStars(avgRating, [avgBadgeText], avgBadge);
    setElement(
      "span",
      avgRating.toFixed(1),
      [avgBadgeText, "font-bold"],
      avgBadge,
    );
    setElement(
      "span",
      `(${strPadLeft(reviews.length)} ${strPlural(reviews.length, "review")})`,
      ["text-gray-300"],
      meta,
    );

    // Reviews list
    const reviewList = setElement(
      "div",
      "",
      ["divide-y", "divide-gray-200"],
      card,
    );

    reviews.forEach((review) => {
      const reviewItem = setElement(
        "div",
        "",
        ["p-4", "hover:bg-gray-50", "transition-colors", "duration-200"],
        reviewList,
      );

      // Review header
      const reviewHeader = setElement(
        "div",
        "",
        ["flex", "items-center", "justify-between", "mb-2"],
        reviewItem,
      );

      setStars(review.rating, ["text-yellow-500"], reviewHeader);
      setElement(
        "span",
        new Date(review.on).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        ["text-xs", "text-gray-400"],
        reviewHeader,
      );

      // Review content
      setElement(
        "p",
        review.content,
        ["text-gray-600", "text-sm", "italic", "mb-2", "leading-relaxed"],
        reviewItem,
      );

      // Reviewer
      setElement(
        "div",
        `- ${review.by}`,
        ["text-xs", "text-gray-500", "font-medium"],
        reviewItem,
      );
    });
  });
}

function resetAll(sortedData) {
  removeAllChildNodes();
  setMovieReviewElement(sortedData);
}

function removeAllChildNodes() {
  const movieReviewElement = getElement("#movieReview");
  //movieReviewElement.innerHTML = "";
  while (movieReviewElement.firstChild) {
    movieReviewElement.removeChild(movieReviewElement.firstChild);
  }
}

// Helper functions
function getElement(selector, multiple = false) {
  return multiple
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);
}
function setElement(tag, value = "", className = [], parentElement = null) {
  const element = document.createElement(tag);
  element.innerHTML = value;
  if (className.length > 0) {
    element.classList.add(...className);
  }
  if (parentElement) {
    const parent =
      typeof parentElement === "string"
        ? getElement(parentElement)
        : parentElement;
    if (parent) {
      parent.appendChild(element);
    } else {
      console.error("Parent element not found:", parentElement);
    }
  }
  return element;
}
function setStars(numberOfStars, className = [], parentElement = null) {
  const element = setElement("div", "", ["flex", "gap-0.5", ...className]);
  const filledStar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
  </svg>`;
  const halfStar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5">
    <defs>
      <linearGradient id="half-${numberOfStars}">
        <stop offset="50%" class="text-inherit" stop-color="currentColor"/>
        <stop offset="50%" stop-color="transparent"/>
      </linearGradient>
    </defs>
    <path fill="url(#half-${numberOfStars})" stroke="currentColor" stroke-width="1.5" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>`;
  const emptyStar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-5 h-5 opacity-30">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>`;

  const fullStars = Math.floor(numberOfStars);
  const hasHalf = numberOfStars % 1 >= 0.5;

  // Add filled stars
  for (let i = 0; i < fullStars; i++) {
    element.innerHTML += filledStar;
  }

  // Add half star if needed
  if (hasHalf) {
    element.innerHTML += halfStar;
  }

  // Add empty stars to make total 5
  const emptyCount = 5 - fullStars - (hasHalf ? 1 : 0);
  for (let i = 0; i < emptyCount; i++) {
    element.innerHTML += emptyStar;
  }

  if (parentElement) {
    const parent =
      typeof parentElement === "string"
        ? getElement(parentElement)
        : parentElement;
    if (parent) {
      parent.appendChild(element);
    } else {
      console.error("Parent element not found:", parentElement);
    }
  }
  return element;
}
function strPadLeft(str, length = 2, padChar = "0") {
  return str.toString().padStart(length, padChar);
}
function strPlural(count, singular, plural = null) {
  if (count === 1) return singular;

  if (plural) return plural;

  // English pluralization rules
  const word = singular.toLowerCase();

  if (word.endsWith("y") && !/[aeiou]y$/.test(word)) {
    return singular.slice(0, -1) + "ies";
  }

  if (/(s|x|z|ch|sh)$/.test(word)) {
    return singular + "es";
  }

  return singular + "s";
}

init();
