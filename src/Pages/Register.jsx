import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../api/usersApi";
import "./Register.css";
function Register({ title = "Register", onSuccess, onCancel }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});


  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validations = {
      name: !user.name.trim() && "name is required",
      phone: user.phone.length !== 10 && "phone must be of 10 digit",
      email: !user.email.trim() && "email is required",
      password: user.password.length < 5 && "password atleast 6 characters",
      confirmPassword:
        !user.confirmPassword.trim()
          ? "Confirm Password is required"
          : user.password !== user.confirmPassword
            ? "Passwords do not match"
            : false
    }
    const newErrors = {}
    Object.keys(validations).forEach((key) => {

      if (validations[key]) {
        newErrors[key] = validations[key];
      }
    });
    setError(newErrors);
    if (Object.keys(newErrors).length > 0) return;
  
    const newUser = {
      name: user.name,
      phone: user.phone,
      email: user.email,
      password: user.password,
    };

    try {
      await addUser(newUser);

      if (onSuccess) {
        onSuccess();
      } else {
        alert("Registration Successful");
        navigate("/login");
      }

    } catch (error) {
      console.log(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>{title}</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter Name"
              value={user.name} onChange={handleChange}
            />

          </div>
          {error.name && (<span className="error-msg">{error.name}</span>)}
          <div className="form-group">
            <label>Phone</label>
            <input type="text" name="phone"
              placeholder="Enter Phone" value={user.phone}
              onChange={handleChange} />

          </div>
          {error.phone && (<span className="error-msg">{error.phone}</span>)}
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email"
              placeholder="Enter Email" value={user.email}
              onChange={handleChange} />

          </div>
          {error.email && (<span className="error-msg">{error.email}</span>)}
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password"
              placeholder="Enter Password" value={user.password}
              onChange={handleChange} />

          </div>
          {error.password && (<span className="error-msg">{error.password}</span>)}
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" placeholder="Confirm Password"
              value={user.confirmPassword} onChange={handleChange} />

          </div>
          {error.confirmPassword && (<span className="error-msg">{error.confirmPassword}</span>)}
          <button type="submit" className="register-btn">
            {title}
          </button>
          {onCancel && (<button type="button" className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>)}
        </form>
      </div>
    </div>
  );
}

export default Register;