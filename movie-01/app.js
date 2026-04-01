import { getMovieReviewData } from "./data.js";

const movieReviewData = getMovieReviewData();
const totalMovies = movieReviewData.length;
const reviewData = movieReviewData.flat();
const totalReviews = reviewData.length;
const avgRating =
  reviewData.reduce((total, review) => total + review.rating, 0) / totalReviews;
console.log(reviewData);

function init() {
  setSpanElement("#totalMovie", totalMovies);
  setSpanElement("#totalReview", totalReviews);
  setSpanElement("#avgRating", avgRating.toFixed(2));
  setMovieReviewElement("#movieReview", reviewData);
}

function getElement(selector) {
  return document.querySelector(selector);
}
function setSpanElement(selector, value) {
  const spanElement = document.createElement("span");
  const element = getElement(selector);

  if (element) {
    spanElement.innerHTML = value;
    element.appendChild(spanElement);
  }
}
function setMovieReviewElement(selector, values) {
  const element = getElement(selector);

  if (element) {
    values
      .toSorted((a, b) => b.on - a.on)
      /* .sort(function (a, b) {
        return new Date(b.on) - new Date(a.on);
      }) */
      .map(function (review) {
        const container = document.createElement("div");
        container.classList.add("bg-gray-200", "p-4", "rounded-lg");
        setPElement(container, `${review.title} - ${review.rating}`, [
          "font-bold",
          "text-lg",
        ]);
        setPElement(container, review.content, ["italic"]);
        const auth = `By ${review.by} on ${new Intl.DateTimeFormat("en-IN").format(review.on)}`;
        setPElement(container, auth, ["text-gray-600", "text-sm"]);

        element.appendChild(container);
      });
  }
}
function setPElement(selector, value, className = []) {
  const pElement = document.createElement("p");
  pElement.innerHTML = value;
  if (className.length > 0) {
    pElement.classList.add(...className);
  }
  selector.appendChild(pElement);
}

init();
