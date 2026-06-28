export function getResources(role: string) {
  return {
    youtube: [
      `https://www.youtube.com/results?search_query=${role}`,
    ],
    courses: [
      "https://www.coursera.org",
      "https://www.udemy.com",
      "https://www.freecodecamp.org",
      "https://www.deeplearning.ai",
    ],
    docs: [
      "https://developer.mozilla.org",
      "https://roadmap.sh",
      "https://www.geeksforgeeks.org",
    ],
  };
}