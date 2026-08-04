import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Table from "./Components/Table"
import {getUsers} from "./api/usersApi";
import { ToastContainer } from "react-toastify";
function App() {

  const [users, setUsers]= useState([]);
   const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );
  const loadUsers = async() => {
    const response = await getUsers();
    setUsers(response);
  }

  useEffect(()=> {
     loadUsers();
  },[])

  return (
    <>
   
    <BrowserRouter>

      <Header
  loggedInUser={loggedInUser}
  setLoggedInUser={setLoggedInUser} />
      
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/table" element={<Table />} />
      </Routes>

    </BrowserRouter>
    <ToastContainer position="top-center"
       autoClose={2000}
      closeButton={false} />
     </>
  );
}

export default App;