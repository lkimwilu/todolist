import { useState } from "react";
import "./create_user.css";
import axios from "axios";
import { Toaster, toast } from "sonner";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    job: "",
  });

  const postUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://reqres.in/api/posts",
        formData
      );
      if (response.status === 201) {
        toast.success("User created successfully");
        setFormData({ name: "", job: "" });
      }
      console.log("post", response);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <>
      <div>
        <Toaster richColors position="top" />
        <form onSubmit={postUser}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="username"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="job-title">Job-title</label>
          <input
            name="job"
            type="text"
            placeholder="job-title"
            value={formData.job}
            onChange={handleChange}
          />
          <button type="submit">Create User</button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
