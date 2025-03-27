import React, { useState } from "react";
import styles from "./loginform.module.css";
import { login } from "../../services/authServices/login";
import { Link, useNavigate } from "react-router";
import { signup } from "../../services/authServices/signup";

const SignupForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e) => {
    const { value, id } = e.target;

    setData((curr) => ({ ...curr, [id]: value }));
  };

  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    // Placeholder for form submission logic
    if (
      data.username &&
      data.username.length > 4 &&
      data.password &&
      data.email
    ) {
      setIsLoading(true);
      try {
        await signup(data);
        navigate("/login");
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    } else {
      setError(true);
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <h2 className={styles.loginHeading}>Signup</h2>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={onChange} required />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={onChange} required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={onChange} required />
      </div>
      {error && <p className={styles.error}>Credentials are wrong!</p>}
      <button disabled={isLoading} type="submit">
        {isLoading ? "Submiting..." : "Signup"}
      </button>
      <Link to="/login">Already have an account? Login</Link>
    </form>
  );
};

export default SignupForm;
