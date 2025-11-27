/**
 * Blog posts data
 * Extracted from latestBlogsList.js
 */

/**
 * @typedef {Object} Blog
 * @property {number} id
 * @property {string} title
 * @property {string} shortDescription
 * @property {string} thumbnail - Thumbnail image URL
 */

/**
 * Blog posts
 * @type {Blog[]}
 */
export const blogs = [
  {
    id: 1,
    title: "Lorem Ipsum is simply dummy text",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: "https://picsum.photos/200/300?random=1",
  },
  {
    id: 2,
    title: "Lorem Ipsum is simply dummy text",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: "https://picsum.photos/200/300?random=2",
  },
  {
    id: 3,
    title: "Lorem Ipsum is simply dummy text",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: "https://picsum.photos/200/300?random=3",
  },
];
