import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
  TextField,
} from '@material-ui/core';
import useStyles from './styles';
import {createMovie} from '../../api';

const Form = (props) => {
  const { formData, setFormData, isOpen, setIsOpen } = props;
  const classes = useStyles();
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleAdd = async() => {
      await createMovie(formData);
      setIsOpen(false);
  };
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        Add a movie
      </DialogTitle>
      <DialogContent>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
        >
          <TextField
            name="name"
            variant="outlined"
            label="Name"
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          ></TextField>
          <TextField
            name="director"
            variant="outlined"
            label="Director"
            fullWidth
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, director: e.target.value })
            }
          ></TextField>
          <TextField
            name="genres"
            variant="outlined"
            label="Genres"
            fullWidth
            value={formData.genre}
            onChange={(e) =>
              setFormData({ ...formData, genre: e.target.value.split(',') })
            }
          ></TextField>
          <TextField
            name="imdb_score"
            variant="outlined"
            label="imdb Score"
            fullWidth
            value={formData.imdb_score}
            onChange={(e) =>
              setFormData({ ...formData, imdb_score: e.target.value })
            }
          ></TextField>
          <TextField
            name="99popularity"
            variant="outlined"
            label="99popularity"
            fullWidth
            value={formData['99popularity']}
            onChange={(e) =>
              setFormData({ ...formData, '99popularity': e.target.value })
            }
          ></TextField>
        </form>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAdd} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Form;
