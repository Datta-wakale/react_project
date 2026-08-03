import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser} from "../api/usersApi";
import "./Login.css";

function Login() {
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
      const users = await loginUser(login.email, login.password);

      if (users.length > 0) {
        localStorage.setItem("loggedInUser", JSON.stringify(users[0]));

        alert("Login Successful");

        navigate("/");
      } else {
        alert("Invalid Email or Password");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={login.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={login.password}
              onChange={handleChange}
            />
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