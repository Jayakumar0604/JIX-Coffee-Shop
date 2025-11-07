import React from "react";
import { useLocation } from "react-router-dom";

const ViewBlog = () => {
  const { state: post } = useLocation();

  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#4b2e2e]">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
          <img
            src={post.author.imageUrl}
            alt={post.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800">{post.author.name}</p>
            <p>{post.author.role}</p>
          </div>
          <span className="ml-auto">{post.date}</span>
        </div>

        {/* Category */}
        <div className="mb-6">
          <span className="inline-block bg-[#d4a373] text-white px-3 py-1 rounded-full text-xs font-medium">
            {post.category.title}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-8">
          {post.description}
        </p>

        {/* Optional Ordered List Example */}
        <h2 className="text-xl font-semibold mb-2">An Ordered List</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Vestibulum in mauris semper tortor interdum ultrices.</li>
          <li>Sed diam erat, luctus et justo laoreet bibendum. Donec dictum.</li>
          <li>Sed et massa libero, lacinia at, commodo in, tincidunt sed, leo.</li>
          <li>Praesent volutpat eros eu nisl ultrices blandit.</li>
          <li>
            Aenean eu libero nec lectus ultricies laoreet. Donec rutrum, nisi vel
            egestas ultrices, ipsum urna sagittis libero, vitae vestibulum dui
            dolor vel velit.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default ViewBlog;