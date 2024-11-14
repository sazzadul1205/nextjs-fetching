import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <p className="text-center text-3xl font-bold pt-5">Blogs Page </p>

      <div className="flex flex-wrap gap-4 justify-center p-6 ">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="w-96 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow text-black"
          >
            <div className="border border-black">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="h-40 w-full object-cover rounded-md mb-4 "
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <div className="flex justify-between">
              <p className="text-red-500 mb-2">By {blog.author}</p>
              <p className=" mb-4">{blog.date}</p>
            </div>
            <div className="flex justify-end">
              <Link href={`/Blogs/${blog.id}`}>
                <button className="text-blue-500 border border-gray-600 px-5 py-2 font-semibold hover:text-white hover:bg-gray-500">
                  Show More
                </button>
              </Link>
            </div>
          </div>
        ))}
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

export default page;
