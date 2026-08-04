import {Dialog,DialogTitle,DialogContent,DialogActions,Button,DialogContentText} from '@mui/material';

const DeleteDialog = ({open,user, handleDelete, handleClose}) => {

    return(

        <Dialog open= {open} onClose= {handleClose}> 
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
        <DialogContentText>Are you sure you want to delete {user?.name }?</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} variant='outlined'> Cancel </Button>
            <Button onClick={handleDelete} variant='contained' color='error'> Delete </Button>
        </DialogActions>
        </Dialog>
        
    )
}

export default DeleteDialog