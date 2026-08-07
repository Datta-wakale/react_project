import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect, useReducer } from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Table from "./Components/Table"
import { getUsers } from "./api/usersApi";
import { ToastContainer } from "react-toastify";
import { getMovies } from "./api/MoviesApi";
import MoviesDetails from "./Components/MovieCard/MoviesDetails";
import SeatSelection from "./Components/Seatallot/SeatSelection";
import PlayerLists from "./Components/DisplayReducer/PlayerLists/PlayerLists"
import SelectedTeam from "./Components/DisplayReducer/PlayerLists/SelectedTeam";
import DisplayReducer from "./Components/DisplayReducer/DisplayReducer";
import { teamReducer, initialState } from "./Reducer/teamReducer";
function App() {

  const [users, setUsers] = useState([]);
  const [movie, setMovie] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [teamState, dispatch] = useReducer(teamReducer, initialState);

  const loadUsers = async () => {
    const response = await getUsers();
    setUsers(response);
  }
  const loadMovies = async () => {
    const response = await getMovies();
    setMovie(response);
    setFilteredMovies(response);
  }

  useEffect(() => {
    loadUsers();
    loadMovies();
  }, [])

  return (
    <>

      <BrowserRouter>

        {/* <Header movies={movie} setMovies={setMovie}/> */}
        <Header movies={movie}
          filteredMovies={filteredMovies}
          setFilteredMovies={setFilteredMovies} />

        <Routes>
          <Route path="/" element={<Home movies={filteredMovies} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/table" element={<Table />} />
          <Route path="/movie/:id" element={<MoviesDetails movies={movie} />} />
          <Route path="/seatselection" element={<SeatSelection />} />
          <Route path="/display-reducer" element={<DisplayReducer />}>
            <Route index element={<Navigate to="players" replace />} />
            <Route path="players"
              element={<PlayerLists dispatch={dispatch} />} />

            <Route path="selected-team"
              element={<SelectedTeam state={teamState}
                dispatch={dispatch} /> }/>

          </Route>
        </Routes>
        {/* <PlayerLists
          dispatch={dispatch}
        />


        <SelectedTeam state={teamState}
          dispatch={dispatch} /> */}
      </BrowserRouter>
      <ToastContainer position="top-center"
        autoClose={2000}
        closeButton={false} />
    </>
  );
}
export default App;