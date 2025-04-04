import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const BlogDetail = ({ blogs, removeItem }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const blogIndex = parseInt(id);
    const blog = blogs[blogIndex];

    return (
        <div className="">

            <h3 className="text-center my-3">Edit Blog</h3>
            <div className="card shadow w-50 m-auto p-4 ">
                <h4 className="card-title mb-3"><strong>Title:</strong>{blog.title}</h4>
                <p><strong>Category:</strong> {blog.category}</p>
                <p><strong>Published On:</strong> {blog.date ? new Date(blog.date).toLocaleDateString() : "Unknown Date"}</p>
                <p><strong>Author:</strong> {blog.author || "Anonymous"}</p>
                <hr />
                <p className="card-text"><strong>Content:</strong></p>
                <p>{blog.content}</p>
                <div className="mt-4">
                    <button className="btn btn-secondary" onClick={() => navigate("/")}>
                        Back to Blogs
                    </button>
                    <Link to={`/edit/${blogIndex}`} className="btn btn-success ms-2">Edit</Link>
                    <button
                        className="btn btn-danger ms-2"
                        onClick={() => {

                            removeItem(blog.id);
                            navigate("/");

                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
