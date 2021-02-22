import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { Container } from '@material-ui/core';


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
      minWidth:150
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
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  }


});



export default function Banner() {

     const History = useHistory()
    const MovieSelector = (state)=> state.moviesLoaded
    const movies = useSelector(MovieSelector)

  const classes = useStyles();
console.log('DATOS MOVIES', movies)


const HandleRedirect = (url) =>{
  History.push(`/movie/${url}`)
}
const slice = Math.trunc(movies.length /2)
  return (
    <Container className={classes.containerCard} >
{ movies && movies.slice(0,slice).map((m)=>(
  <Card className={classes.root} >
      <CardActionArea onClick={ () => HandleRedirect(m.imdbID)}>
        <CardContent className={classes.container}>
            <Container className={classes.imgContainer}>

        <img src={m.Poster} className={classes.img} alt='imagen de poster de pelicula'></img>
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

