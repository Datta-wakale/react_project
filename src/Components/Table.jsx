import React, {useState,useEffect} from "react"
import { deleteUser, getUsers } from "../api/usersApi";
import "../Components/Table.css"
const Table =()=> {

    const [users, setUsers] = useState([]);

    const loadUsers= async()=> {
        // call the api method getUsers
        const result = await getUsers();
        setUsers(result); // set users 
    }
    
    // use useEffect so that only one time api call happen
    useEffect(()=> {
        loadUsers(); // call the async function to get users data
    },[]);
    console.log("users", users);

    return(
        <>
        <table className="container">
            <thead className="columns-header">
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className="table-data">
                {users.map((user,index)=> {
                    const {id,name,phone,email} = user;
                    return(
                     <tr key={id}>
                        <td>{name}</td>
                        <td> {phone}</td>
                        <td>{email}</td>
                        <td>
                            <button className="view-btn" >View</button>
                            <button className="delete-btn" onClick={()=>deleteUser(id)}>Delete</button>
                        </td>
                    </tr>
                    )
                    
                })}
            </tbody>
        </table>
        </>
    )
}

export default Table