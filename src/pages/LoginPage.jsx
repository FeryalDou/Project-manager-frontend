import React, { useState } from "react";
import projectManagerApi from "../service/myApi";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";

function LoginPage() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { storeToken, authenticateUser } = useAuth();
  const navigate = useNavigate();
  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value;
    setFormState({ ...formState, [key]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await projectManagerApi.post("/auth/login", formState);
      const token = response.data.authToken;
      storeToken(token);
      await authenticateUser();
      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.response?.data?.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-beige-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Login
        </h2>
        {error && <p className="text-center text-red-500">{error}</p>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-1 border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Enter your email"
              value={formState.email}
              onChange={handleChange}
              autoComplete="on"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-1 border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Enter your password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Need an account?{" "}
          <Link to="/signup" className=" text-indigo-600 hover:text-indigo-500">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
