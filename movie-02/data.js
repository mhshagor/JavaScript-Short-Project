// ১ থেকে ৫ এর মধ্যে র‍্যান্ডম রেটিং জেনারেট করুন
const getRandomRating = () => Math.floor(Math.random() * 5) + 1;

// গত ২ বছরের মধ্যে র‍্যান্ডম টাইমস্ট্যাম্প জেনারেট করুন
const getRandomTimestamp = () => {
  const now = Date.now();
  const twoYearsAgo = now - 2 * 365 * 24 * 60 * 60 * 1000;
  return Math.floor(Math.random() * (now - twoYearsAgo) + twoYearsAgo);
};

const movieReviewData = [
  [
    {
      id: "m1",
      title: "Inception",
      content: "Mind bending movie, Nolan never disappoints!",
      rating: getRandomRating(),
      by: "Rahim U",
      on: getRandomTimestamp(),
    },
    {
      id: "m1",
      title: "Inception",
      content: "Story complex but খুব interesting",
      rating: getRandomRating(),
      by: "Sabbir H",
      on: getRandomTimestamp(),
    },
  ],
  [
    {
      id: "m2",
      title: "Titanic",
      content: "Emotional rollercoaster 😢",
      rating: getRandomRating(),
      by: "Mitu A",
      on: getRandomTimestamp(),
    },
    {
      id: "m2",
      title: "Titanic",
      content: "Classic love story",
      rating: getRandomRating(),
      by: "Jamal K",
      on: getRandomTimestamp(),
    },
    {
      id: "m2",
      title: "Titanic",
      content: "A bit slow but worth it",
      rating: getRandomRating(),
      by: "Nadia S",
      on: getRandomTimestamp(),
    },
  ],
  [
    {
      id: "m3",
      title: "The Dark Knight",
      content: "Best Batman movie ever",
      rating: getRandomRating(),
      by: "Hasan R",
      on: getRandomTimestamp(),
    },
    {
      id: "m3",
      title: "The Dark Knight",
      content: "Joker performance 🔥",
      rating: getRandomRating(),
      by: "Imran T",
      on: getRandomTimestamp(),
    },
  ],
  [
    {
      id: "m4",
      title: "Avatar",
      content: "Visual masterpiece",
      rating: getRandomRating(),
      by: "Rupa D",
      on: getRandomTimestamp(),
    },
    {
      id: "m4",
      title: "Avatar",
      content: "Story average but visuals amazing",
      rating: getRandomRating(),
      by: "Kamal P",
      on: getRandomTimestamp(),
    },
    {
      id: "m4",
      title: "Avatar",
      content: "Loved Pandora world",
      rating: getRandomRating(),
      by: "Tanvir M",
      on: getRandomTimestamp(),
    },
  ],
  [
    {
      id: "m5",
      title: "Joker",
      content: "Dark and গভীর movie",
      rating: getRandomRating(),
      by: "Arif L",
      on: getRandomTimestamp(),
    },
  ],
  [
    {
      id: "m6",
      title: "Frozen",
      content: "Kids friendly and fun",
      rating: getRandomRating(),
      by: "Sumi K",
      on: getRandomTimestamp(),
    },
    {
      id: "m6",
      title: "Frozen",
      content: "Songs are catchy 🎶",
      rating: getRandomRating(),
      by: "Nusrat J",
      on: getRandomTimestamp(),
    },
  ],
  [
    {
      id: "m7",
      title: "Spider-Man: No Way Home",
      content: "Nostalgia overloaded 🔥",
      rating: getRandomRating(),
      by: "Rakib Z",
      on: getRandomTimestamp(),
    },
    {
      id: "m7",
      title: "Spider-Man: No Way Home",
      content: "Fan service done right",
      rating: getRandomRating(),
      by: "Shanto B",
      on: getRandomTimestamp(),
    },
    {
      id: "m7",
      title: "Spider-Man: No Way Home",
      content: "Too many characters but fun",
      rating: getRandomRating(),
      by: "Nayeem F",
      on: getRandomTimestamp(),
    },
  ],
  [
    {
      id: "m8",
      title: "The Matrix",
      content: "Ahead of its time",
      rating: getRandomRating(),
      by: "Fahim S",
      on: getRandomTimestamp(),
    },
    {
      id: "m8",
      title: "The Matrix",
      content: "Concept is mind blowing",
      rating: getRandomRating(),
      by: "Rasel D",
      on: getRandomTimestamp(),
    },
  ],
  [
    {
      id: "m9",
      title: "Harry Potter",
      content: "Magical journey ✨",
      rating: getRandomRating(),
      by: "Labib A",
      on: getRandomTimestamp(),
    },
    {
      id: "m9",
      title: "Harry Potter",
      content: "Childhood favorite",
      rating: getRandomRating(),
      by: "Nabil H",
      on: getRandomTimestamp(),
    },
    {
      id: "m9",
      title: "Harry Potter",
      content: "Rewatchable series",
      rating: getRandomRating(),
      by: "Sadia T",
      on: getRandomTimestamp(),
    },
  ],
  [
    {
      id: "m10",
      title: "Fast & Furious",
      content: "Action packed 🚗💨",
      rating: getRandomRating(),
      by: "Bappi G",
      on: getRandomTimestamp(),
    },
    {
      id: "m10",
      title: "Fast & Furious",
      content: "Story weak but action great",
      rating: getRandomRating(),
      by: "Kawsar M",
      on: getRandomTimestamp(),
    },
  ],
];

export function getMovieReviewData() {
  return movieReviewData;
}
