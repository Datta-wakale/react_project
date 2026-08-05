import {useState, createContext} from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [loggedInUser, setLoggedInUser]= useState(
        JSON.parse(localStorage.getItem("loggedInUser"))
    );

    return(
      
    )
}