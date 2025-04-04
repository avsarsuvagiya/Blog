import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./componments/Home";
import CreateBlog from "./componments/CreateBlog";
import EditBlog from "./componments/Editblog";
import BlogDetail from "./componments/Blogdetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState(() => {
    // Load blogs from localStorage if available
    const savedBlogs = localStorage.getItem("blogs");
    return savedBlogs ? JSON.parse(savedBlogs) : [];
  });

  // Save blogs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  // Function to add a new blog post
  const getdata = (value) => {
    const newBlog = { ...value, id: Date.now(), date: new Date() };
    setBlogs([...blogs, newBlog]);
  };

  // Function to delete a blog post
  const removeItem = (id) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
    }
  };

 
  const editItem = (id, updatedData) => {
    const updatedBlogs = blogs.map((item, index) => 
      index === id ? updatedData : item
    );
    setBlogs(updatedBlogs);
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home blogs={blogs} removeItem={removeItem} />} />
        <Route path="create" element={<CreateBlog getdata={getdata} />} />
        <Route path="/edit/:id" element={<EditBlog blogs={blogs} editItem={editItem} />} />
        <Route path="/detail/:id" element={<BlogDetail blogs={blogs}  removeItem={removeItem}/>} />
      </Routes>
    </div>
  );
}

export default App;

