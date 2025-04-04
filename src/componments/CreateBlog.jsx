import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const CreateBlog = ({ getdata }) => {
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    content: "",
    category: "",
    author: "",
    date: new Date().toISOString(),
  };



  const validationSchema = Yup.object({
    title: Yup.string().min(5, "Title must be at least 5 characters").required("Title is required"),
    content: Yup.string().min(10, "Content must be at least 10 characters").required("Content is required"),
    category: Yup.string().required("Category is required"),
  });

  const { values, handleChange, handleSubmit, resetForm, errors, touched, handleBlur } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      getdata({ ...values, author: values.author.trim() || "Anonymous" });
      resetForm();
      navigate("/");
    },
  });

  return (
    <div className="create-form-wrapper">
      <div className="text-center">
        <h3 >Create Blog</h3>

        <button className="btn  btn-info my-2" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>

      <div className="bg-dark text-white px-5 py-3">
        <form onSubmit={handleSubmit}>

          <label className="fs-5 my-1"><strong> Title: </strong></label>
          <input
            type="text"
            name="title"
            className="form-control "
            placeholder="Enter Blog Title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.title && errors.title && <div className="text-danger">{errors.title}</div>}

          <label className="fs-5 my-1"><strong> Content : </strong></label>
          <textarea
            name="content"
            placeholder="Enter Blog Content"
            className="form-control"
            value={values.content}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.content && errors.content && <div className="text-danger">{errors.content}</div>}

          <label className="fs-5 my-1"><strong> Category : </strong></label>
          <select
            name="category"
            placeholder="Enter Blog Category"
            className="form-control"
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select a category</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Education">Education</option>
          </select>
          {touched.category && errors.category && <div className="text-danger">{errors.category}</div>}

          <label className="fs-5 my-1"><strong>Author (Optional) : </strong></label>
          <input
            type="text"
            name="author"
            className="form-control"
            placeholder="Enter Blog Author (Optional)"
            value={values.author}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <input type="submit" value="Submit" className="btn btn-primary mt-4 w-100 " />
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
