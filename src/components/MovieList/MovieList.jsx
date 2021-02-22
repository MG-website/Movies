import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useHistory } from 'react-router-dom'
import { addMovieFavorite } from '../../actions'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


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
    justifyContent:'space-around',
    flexWrap: 'wrap'
  }


});



export default function MovieList() {

     const History = useHistory()
    const MovieSelector = (state)=> state.moviesLoaded
    const movies = useSelector(MovieSelector)
    const Dispatch= useDispatch()

  const classes = useStyles();
console.log('DATOS MOVIES', movies)


const HandleRedirect = (url) =>{
  History.push(`/movie/${url}`)
}
  return (
    <Container className={classes.containerCard} >
{/* 
{movies.length >0    &&   


    <TableContainer component={Paper} className={classes.TableContainer}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Movie Title</TableCell>
            <TableCell align="right">Add Favorite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { movies && movies.map((m) => (
            <TableRow key={m.name}>
              <TableCell component="th" scope="row">
              <NavLink to={`/movie/${m.imdbID}`} className='a'>
             <p>{m.Title}</p>
             </NavLink>
              </TableCell>
              <TableCell align="right">
                  <Button onClick={() => Dispatch(addMovieFavorite({title: m.Title, id: m.imdbID}))}>
                  Favorite
                  </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
} */}
{ movies && movies.map((m)=>(
  <Card className={classes.root} >
      <CardActionArea onClick={ () => HandleRedirect(m.imdbID)}>
        <CardMedia
          className={classes.media}
          image={m.Poster}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.container}>
        <img src={m.Poster} className={classes.img} alt='poster de la pelicula'></img>
        <div>
          <Typography gutterBottom variant="h5" component="h2">
            {m.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" fullWidth color="primary" 
        onClick={() => Dispatch(addMovieFavorite({title: m.Title, id: m.imdbID}))}
        >
          Add Favorite
        </Button>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>

))}

    </Container>
  );
}


