import useAuth from "../context/useAuth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import projectManagerApi from "../context/service/myApi";

function SignupPage() {
  const { user } = useAuth();
  console.log(user);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  //const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const nav = useNavigate();

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value;
    setFormState({ ...formState, [key]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("firstName", formState.firstName);
      fd.append("lastName", formState.lastName);
      fd.append("email", formState.email);
      fd.append("password", formState.password);
      // Uncomment and adjust if handling file uploads
      // fd.append("avatar", file);

      const response = await projectManagerApi.post("/auth/signup", fd);
      console.log(response);
      if (response.status === 201) {
        nav("/login");
      }
    } catch (error) {
      console.log(error.message);
      setError(error.response?.data?.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <p style={{ color: "red" }}>{error}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={formState.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={formState.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default SignupPage;
