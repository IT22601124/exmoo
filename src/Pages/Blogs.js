import React from "react";
import "../css/Blogs.css"; // Create a CSS file for styling

const blogs = [
  {
    title: "Explore the Depths: Code Corner - IT Wisdom Straight from Nuxus",
    date: "22 Dec, 2024",
    author: "Malisa John",
    image: "./images/man1.png", // Replace with the actual image URL
    description:
      "Lorem ipsum dolor sit amet consectetur. Velit mi vitae dolor curabitur duis sociis. Eget risus vestibulum dictum sed viverra blandit massa non nunc.",
  },
  {
    title: "Fuel Your Imagination: Innovation Station - IT Musings by Nuxus",
    date: "22 Dec, 2024",
    author: "Malisa John",
    image: "./images/man2.png", // Replace with the actual image URL
    description:
      "Lorem ipsum dolor sit amet consectetur. Velit mi vitae dolor curabitur duis sociis. Eget risus vestibulum dictum sed viverra blandit massa non nunc.",
  },
  {
    title:
      "Decipher Complexity: Bytes & Bits - Unraveling IT Mysteries with Nuxus",
    date: "22 Dec, 2024",
    author: "Malisa John",
    image: "./images/man3.png", // Replace with the actual image URL
    description:
      "Lorem ipsum dolor sit amet consectetur. Velit mi vitae dolor curabitur duis sociis. Eget risus vestibulum dictum sed viverra blandit massa non nunc.",
  },
];

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">
        Explore Our <span className="highlight">LATEST BLOGS</span>
      </h2>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-meta">
              <span className="blog-date">{blog.date}</span>
              <span className="blog-author">{blog.author}</span>
            </div>
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-description">{blog.description}</p>
            <a href="#read-more" className="read-more">
              Read More <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
