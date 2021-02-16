import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { addMovieFavorite } from '../../actions'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'

import { Button, Container } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    textAlign:'center',
    marginTop:'1rem'
  },
  table: {
    // minWidth: 50,
  },
  TableContainer:{
    boxShadow:'2px 2px 2px 3px rgba(0, 0, 0, 0.2)',
    marginTop:'7rem'
  },
  img:{
      height: 200,
    
  },
  container:{
    display:'flex',
    flexDirection:'row',
  },
  containerCard:{
    display:'flex',
    flexDirection:'row',
  },
  imgContainer:{
      height:'15%',

  }


});



export default function Banner() {

     const History = useHistory()
    const MovieSelector = (state)=> state.moviesLoaded
    const movies = useSelector(MovieSelector)
    const Dispatch= useDispatch()

  const classes = useStyles();
console.log('DATOS MOVIES', movies)


const HandleRedirect = (url) =>{
  History.push(`/movie/${url}`)
}
const [slice, SetSlice] = useState(Math.trunc(movies.length /2))
  return (
    <Container className={classes.containerCard} >
{ movies && movies.slice(0,slice).map((m)=>(
  <Card className={classes.root} >
      <CardActionArea onClick={ () => HandleRedirect(m.imdbID)}>
        <CardContent className={classes.container}>
            <Container className={classes.imgContainer}>

        <img src={m.Poster} className={classes.img}></img>
            </Container>
        </CardContent>
      </CardActionArea>
      <CardActions>

      </CardActions>
    </Card>

))}

    </Container>


  );
}

// function Item({item})
// {
//     return (
//         item.map(m =>{

//     return    <Paper>
//             <img src={m.Poster} width='150px'/>
//         </Paper>
//         })
//     )
// }
