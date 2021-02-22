import React , {useState}from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../actions';
const useStyles = makeStyles((theme) => ({

NavItem:{
    textDecoration: 'none',
    margin: '50px'
},
  root: {
    flexGrow: 1,
  },
  menuButton: {
  color:'white',
  },
  enlaceButton:{
    textDecoration:'none'

  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(3em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar() {

    const Dispatch = useDispatch()
    const [title, setTitle]= useState('')
  const classes = useStyles();
  const History = useHistory()
  const MovieSelector = (state)=> state.moviesLoaded
  const movies = useSelector(MovieSelector)
  const  handleChange = (event) => {
    setTitle( event.target.value );
  }

 const handleSubmit = (event)=> {
    event.preventDefault();
        console.log(title)
    Dispatch(getMovies(title)) 
    document.getElementById('Search').value = ''
    History.push('/list')
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color='primary'>
        <Toolbar>
 
          <Typography className={classes.title} variant="h6" noWrap>
            App Movies
          </Typography>
                   
        <Typography>
            <NavLink exact to="/"  className={classes.enlaceButton} >
            <Button className={classes.menuButton}>

              Home
            </Button>
              </NavLink>
        </Typography>   
        {movies.length > 0 &&
        <Typography>
        <NavLink exact to="/list"  className={classes.enlaceButton} >
        <Button className={classes.menuButton}>

          Movie List
        </Button>
          </NavLink>
    </Typography> 
        }
        <Typography>
              <NavLink to="/favs" className={classes.enlaceButton} >
            <Button className={classes.menuButton}>

                Favoritas
            </Button>
                </NavLink>
        </Typography>
        <form  onSubmit={(e) => handleSubmit(e)}>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
                <Button type='submit'>

              <SearchIcon />
                </Button>
            </div>
            <InputBase
            id='Search'
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => handleChange(e)}

            />
          </div>
        </form>
        </Toolbar>
      </AppBar>
    </div>
  );
}


