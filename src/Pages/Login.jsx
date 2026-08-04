import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/usersApi";
import { toast } from "react-toastify";
import "./Login.css";

function Login({ setLoggedInUser }) {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (login.email.trim() === "") {
      alert("Email is required");
      return;
    }

    if (login.password.trim() === "") {
      alert("Password is required");
      return;
    }

    try {
      const loggedInUser = await loginUser(
        login.email,
        login.password
      );

      if (loggedInUser) {
        // Save user in localStorage
        localStorage.setItem( "loggedInUser",JSON.stringify(loggedInUser));

        // Update React state
        setLoggedInUser(loggedInUser);
        toast.success("Login successful");
        navigate("/");
      } else {
        toast.error("Invalid Login Credentials");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>

            <input type="email"  name="email"
              placeholder="Enter your email" value={login.email}
              onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input  type="password" name="password"
              placeholder="Enter your password"
              value={login.password}
              onChange={handleChange} />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;