import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Table from "./Components/Table"
import {getUsers} from "./api/usersApi";
import { ToastContainer } from "react-toastify"; 
import { getMovies } from "./api/MoviesApi";
import MoviesDetails from "./Components/MovieCard/MoviesDetails";
function App() {

  const [users, setUsers]= useState([]);
  const [movie, setMovie] = useState([]);
  
  const loadUsers = async() => {
    const response = await getUsers();
    setUsers(response);
  }
  const loadMovies= async()=> {
    const response = await getMovies();
    setMovie(response); 
  }
 
  useEffect(()=> {
     loadUsers();
     loadMovies();
  },[])

  return (
    <>
   
    <BrowserRouter>

      <Header movies={movie} setMovies={setMovie}/>
      
      <Routes>
        <Route path="/" element= {<Home movies={movie}/>} />
        <Route path="/login" element={<Login  />} />
        <Route path="/register" element={<Register />} />
        <Route path="/table" element={<Table />} />
        <Route path="/movie/:id" element={<MoviesDetails movies={movie}/>} />
      </Routes>

    </BrowserRouter>
    <ToastContainer position="top-center"
       autoClose={2000}
      closeButton={false} />
     </>
  );
}

export default App;