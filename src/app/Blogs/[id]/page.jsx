import React from "react";

const Page = ({ params }) => {
  const { id } = params;

  // Find the blog post based on the id
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  // Destructure blog details for easy access
  const { title, author, date, content, tags, imageUrl } = blog;

  return (
    <div className="p-4 bg-white text-black ">
      <div className="w-[500px] mx-auto border p-5 border-black">
        {/* Blog Title */}
        <h1 className="text-3xl font-bold mb-2">{title}</h1>

        {/* Author and Date */}
        <div className="text-gray-600 mb-4">
          <p>By {author}</p>
          <p>{date}</p>
        </div>

        {/* Blog Image */}
        <div className="border border-black">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-64 object-cover mb-4 rounded-md"
          />
        </div>

        {/* Blog Content */}
        <p className="text-lg mb-6">{content}</p>

        {/* Blog Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-200 text-blue-800 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    author: "Jane Doe",
    date: "2024-11-01",
    content:
      "React Hooks have revolutionized the way we handle state and lifecycle in React components. This article covers the basics of useState, useEffect, and custom hooks.",
    tags: ["React", "JavaScript", "Web Development"],
    imageUrl: "https://example.com/images/react-hooks.jpg",
    slug: "understanding-react-hooks",
  },
  {
    id: 2,
    title: "A Guide to CSS Flexbox",
    author: "John Smith",
    date: "2024-10-28",
    content:
      "CSS Flexbox is a powerful layout tool that helps create responsive designs. This guide explains how Flexbox works and provides examples of common layouts.",
    tags: ["CSS", "Flexbox", "Responsive Design"],
    imageUrl: "https://example.com/images/css-flexbox.jpg",
    slug: "guide-to-css-flexbox",
  },
  {
    id: 3,
    title: "Introduction to Node.js",
    author: "Alex Brown",
    date: "2024-10-20",
    content:
      "Node.js allows JavaScript to be used on the server side, opening up a new world of possibilities for JavaScript developers. Learn the basics of Node.js in this article.",
    tags: ["Node.js", "JavaScript", "Backend"],
    imageUrl: "https://example.com/images/nodejs-intro.jpg",
    slug: "introduction-to-nodejs",
  },
  {
    id: 4,
    title: "Building REST APIs with Express",
    author: "Lisa White",
    date: "2024-11-05",
    content:
      "Express is a minimal and flexible Node.js framework that makes it easy to build REST APIs. This article goes over setting up a basic REST API using Express.",
    tags: ["Express", "API", "Node.js"],
    imageUrl: "https://example.com/images/express-api.jpg",
    slug: "building-rest-apis-with-express",
  },
  {
    id: 5,
    title: "Mastering Asynchronous JavaScript",
    author: "Emma Wilson",
    date: "2024-11-07",
    content:
      "Asynchronous JavaScript is essential for modern web development. This guide explains callbacks, promises, and async/await with practical examples.",
    tags: ["JavaScript", "Async", "Web Development"],
    imageUrl: "https://example.com/images/async-js.jpg",
    slug: "mastering-asynchronous-javascript",
  },
];

export default Page;
