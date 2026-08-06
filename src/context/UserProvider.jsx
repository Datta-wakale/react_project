import {useState } from "react";
import { UserContext } from "./userContext";
export const UserProvider = ({children}) => {

    const [loggedInUser, setLoggedInUser]= useState(
        JSON.parse(localStorage.getItem("loggedInUser"))
    );

    return(
            <UserContext.Provider value = {{loggedInUser, setLoggedInUser}}>
                {children}
            </UserContext.Provider>
)
}