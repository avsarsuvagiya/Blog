import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Editblog({ blogs, editItem }) {
  const { id } = useParams();
  const blogIndex = parseInt(id);
  const [blogData, setBlogData] = useState(blogs[blogIndex]);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    editItem(blogIndex, blogData);
    navigate('/');
  };

  return (
    <div className="edit-form-wrapper">

      <h3 className="text-center">Edit Blog</h3>
      <div className="bg-dark text-white px-5 py-3">
        <form onSubmit={handleSubmit} className=''>
          
          <label className="fs-5 my-1"><strong> Title: </strong></label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Enter Blog Title"
            value={blogData.title}
            onChange={handleChange}

          />

          <label className="fs-5 my-1"><strong> Content : </strong></label>
          <textarea
            name="content"
            placeholder="Enter Blog Content"
            className="form-control"
            value={blogData.content}
            onChange={handleChange}
          />

          <label className="fs-5 my-1"><strong> Category : </strong></label>
          <select
            name="category"
            className="form-control"
            value={blogData.category}
            onChange={handleChange}

          >
            <option value="">Select a category</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Education">Education</option>
          </select>

          <label className="fs-5 my-1"><strong>Author (Optional) : </strong></label>
          <input
            type="text"
            name="author"
            className="form-control"
            placeholder="Enter Blog Author (Optional)"
            value={blogData.author}
            onChange={handleChange}
          />

          <input type="submit" value="Save Changes" className="btn btn-primary  mt-4 w-100" />
        </form>
      </div>
    </div>
  );
}

export default Editblog;
