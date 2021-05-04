import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Button,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from '@material-ui/core';

import { lighten, makeStyles } from '@material-ui/core/styles';

import { Link, useHistory } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Form from '../form/form';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

export default function TableToolbar(props) {
  const classes = useToolbarStyles();
  const { numSelected } = props;
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    director: '',
    '99popularity': '',
    genre: [],
    imdb_score:''
  });

  const user = JSON.parse(localStorage.getItem('profile'));
  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  const handleAddMovie = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography
            className={classes.title}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            className={classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Movies
          </Typography>
        )}
        {!user && (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
            className={classes.signin}
          >
            Log in
          </Button>
        )}
        {user && (
          <Button
            variant="contained"
            color="primary"
            className={classes.signin}
            onClick={logout}
          >
            Log out
          </Button>
        )}
        {user && (
          <Tooltip title="Add movie">
            <IconButton aria-label="add movie" onClick={handleAddMovie}>
              <AddCircleIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
      <Form
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  );
}

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
