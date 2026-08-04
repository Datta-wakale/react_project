import React, { useState, useEffect } from "react";
import { getUsers, deleteUser, updateUser } from "../api/usersApi";
import "../Components/Table.css";
import DeleteDialog from "./DeleteDialog";
import EditDialog from "./EditDialog";
import { toast } from "react-toastify";
import Register from "../Pages/Register";
const Table = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editIsOpen, setEditIsOpen] = useState(false);
    const [addUser, setAddUser] = useState(false);
    // Load all users
    const loadUsers = async () => {
        const result = await getUsers();
        setUsers(result);
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const openDeleteDialog = (user) => {
        setSelectedUser(user);
        setIsDialogOpen(true);
    }
    const handleCancel = () => {
        setIsDialogOpen(false);
        setSelectedUser(null);
    }
    const openEditDialog = (user) => {
        setSelectedUser(user);
        setEditIsOpen(true);
    }
    const handleEditCancel = () => {
        setSelectedUser(null);
        setEditIsOpen(false);
    }
    // Delete user
    const handleDelete = async () => {
        try {
            await deleteUser(selectedUser.id); // Wait until user is deleted
            await loadUsers();    // Refresh the table
            setIsDialogOpen(false); // close the dialog after deletion
            setSelectedUser(null); // clear the selected user after deletion
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleSave = async (updatedUser) => {
        try {
            await updateUser(updatedUser.id, updatedUser);
            await loadUsers();
            toast.success("User updated successfully");
            setEditIsOpen(false);
            setSelectedUser(null);

        } catch (error) {
            console.log("Error when trying to edit user", error);
        }
    };
    const handleAddUser = () => {

        setAddUser(true);
    }
    const addUserCancel = () => {
        setAddUser(false);
    }
    return (
        <>
            <button className="add-user-btn" onClick={handleAddUser}> addUser</button>
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
                    {users.map((user) => {
                        const { id, name, phone, email } = user;

                        return (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{phone}</td>
                                <td>{email}</td>
                                <td>
                                    <button className="edit-btn" onClick={() => openEditDialog(user)}>
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() => openDeleteDialog(user)} >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <DeleteDialog
                open={isDialogOpen}
                user={selectedUser}
                handleDelete={handleDelete}
                handleClose={handleCancel}

            />
            <EditDialog open={editIsOpen}
                user={selectedUser}
                handleSave={handleSave}
                handleClose={handleEditCancel}
            />
            {/* <Dialog
                open={addOpen}
                onClose={addUserCancel}
            >
                <DialogContent>
                    <Register title="Add User" />
                </DialogContent>
            </Dialog> */}
        </>
    );
};

export default Table;