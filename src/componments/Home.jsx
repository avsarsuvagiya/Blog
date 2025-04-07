import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = ({ blogs, removeItem }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Submitted Blogs</h2>
        <Link to="/create">
          <button className="btn btn-primary px-3 py-2">Create a New Blog</button>
        </Link>
      </div>

      <div className="d-flex mb-4 search-filter-container">

        <input
          type="text"
          className="form-control w-75 mx-2"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Category Dropdown */}
        <select
          className="form-select w-25 mx-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Education">Education</option>
        </select>
      </div>

      {/* Blog List */}
      {filteredBlogs.length === 0 ? (
        <p>No matching blogs found.</p>
      ) : (
        <div className="row blog">
          {filteredBlogs.map((blog, index) => (
            <div key={blog.id} className="col-12 col-md-6 col-lg-4 mb-4">

              <div className="card my-2 blog-card h-100 w-100 px-4 py-2">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    <strong>Title:</strong> {blog.title}
                  </h5>
                  <p className="card-text">
                    <strong>Category:</strong> {blog.category}
                  </p>
                  <p className="card-text">
                    <strong>Published On:</strong>{" "}
                    {new Date(blog.date).toLocaleDateString()}
                  </p>
                  <p className="card-text">
                    <strong>Short Description:</strong>{" "}
                    {blog.content.length > 100
                      ? blog.content.substring(0, 50) + "..."
                      : blog.content}
                  </p>
                  <p className="card-text">
                    <strong>Author:</strong> {blog.author || "Anonymous"}
                  </p>
                  <div className="mt-auto d-flex justify-content-between">
                    <Link to={`/edit/${index}`} className="btn btn-success">
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeItem(blog.id)}
                    >
                      Delete
                    </button>
                    <Link to={`/detail/${index}`} className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

