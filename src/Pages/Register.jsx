import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../api/usersApi";
import "./Register.css";
function Register({title="Register"}) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user.name) {
      alert("Enter Name");
      return;
    }

    if (user.phone.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }

    if (!user.email) {
      alert("Enter Email");
      return;
    }

    if (user.password.length < 6) {
      alert("Password should be at least 6 characters");
      return;
    }

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const newUser = {
      name: user.name,
      phone: user.phone,
      email: user.email,
      password: user.password,
    };

    try {
      await addUser(newUser);

      alert("Registration Successful");

      navigate("/login");

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

  <div className="form-group">
    <label>Phone</label>
    <input type="text" name="phone"
      placeholder="Enter Phone" value={user.phone}
      onChange={handleChange} />
  </div>

  <div className="form-group">
    <label>Email</label>
    <input type="email" name="email"
      placeholder="Enter Email" value={user.email}
      onChange={handleChange} />
  </div>

  <div className="form-group">
    <label>Password</label>
    <input type="password" name="password"
      placeholder="Enter Password" value={user.password}
      onChange={handleChange} />
  </div>

  <div className="form-group">
    <label>Confirm Password</label>
    <input type="password" name="confirmPassword" placeholder="Confirm Password"
      value={user.confirmPassword} onChange={handleChange} />
  </div>

  <button type="submit" className="register-btn">
    {title}
  </button>

</form>
 </div>
 </div>
  );
}

export default Register;