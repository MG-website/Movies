import React from "react";
 import { useDispatch, useSelector } from "react-redux";
 import { removeMovieFavorite } from "../../actions/index";
 import { NavLink } from 'react-router-dom';
 import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './Favorites.css';
import { Button, makeStyles, Paper } from "@material-ui/core";



const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    textAlign:'center',
    marginTop:'1rem'
  },
  table: {
    // minWidth: 50,
  },
  Button:{
    backgroundColor: 'red'
  },
  TableContainer:{
    boxShadow:'2px 2px 2px 3px rgba(0, 0, 0, 0.2)',
    marginTop:'4rem'
  },
  img:{
      height: 200,
    
  },
  container:{
    display:'flex',
    flexDirection:'row'
  },
  containerCard:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    flexWrap: 'wrap'
  }


});


function Favorites() {
  const  favoritasSelector = (state) => state.movies
  const favoritas =  useSelector(favoritasSelector)
  const classes = useStyles();
  const Dispatch = useDispatch()
  if(favoritas.length >0){
  return (
     <TableContainer component={Paper} className={classes.TableContainer}>
<Table className={classes.table} size="small" aria-label="a dense table">
  <TableHead>
    <TableRow>
      <TableCell>Movie Title</TableCell>
      <TableCell align="right">Delete Favorite</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    { favoritas && favoritas.map((m) => (
      <TableRow key={m.name}>
        {console.log(m)}
        <TableCell component="th" scope="row">
        <NavLink to={`/movie/${m.id}`} className='a'>
       <p>{m.title}</p>
       </NavLink>
        </TableCell>
        <TableCell align="right">
            <Button color='secondary' onClick={ (e)=> Dispatch( removeMovieFavorite(m))} >
            Delete
            </Button></TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer> 
  )}else{
    return <h1>No tienes peliculas favoritas</h1>
  }
}

export default Favorites



