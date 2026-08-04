import { useEffect, useState } from "react";
import {Dialog, DialogTitle,DialogContent, DialogActions, Button,TextField,} from "@mui/material";

const EditDialog = ({ open, user, handleSave, handleClose }) => {
  const [editUser, setEditUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // Load selected user into the form
  useEffect(() => {
    if (user) {
      setEditUser(user);
    }
  }, [user]);

  // Handle input changes
  const handleChange = (event) => {
    setEditUser({
      ...editUser,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Dialog open={open} onClose={handleClose} >
      <DialogTitle>Edit User</DialogTitle>

      <DialogContent>
        <TextField margin="normal"  label="Name"
          name="name" value={editUser.name}
          onChange={handleChange} />

        <TextField margin="normal"  label="Phone"
          name="phone" value={editUser.phone}
          onChange={handleChange} 
          sx={{display: "block"}} />

        <TextField margin="normal"  label="Email"
          name="email"  value={editUser.email}
          InputProps={{
            readOnly: true,
          }} />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          Cancel
        </Button>

        <Button
          onClick={() => handleSave(editUser)}
          variant="contained" >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;