import React, { useState } from "react";
import "./todolistform.css";
import axios from "axios";

const Todolistform = () => {
  const [formData, setFormData] = useState({
    userId: 0,
    title: 0,
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="number"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="id">UserId:</label>
        <input
          type="number"
          id="userId"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          required

        />
      </div>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default Todolistform;
