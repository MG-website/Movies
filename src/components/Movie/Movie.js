import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../../actions';
import { useParams } from 'react-router-dom';
import { Box, Container } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import Banner from '../MovieBanner/Banner';

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
    padding:'1.5rem',
    display:'flex',
    flexDirection:'row',
    margin:'1rem',
    backgroundColor:'#ffffff17',
    flexWrap: 'wrap'
  },
  containerCard:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    flexWrap: 'wrap',
    maxWidth:'550px',
  }

});

export default function Movie(props) {
  const classes = useStyles();
  const movieDetailSelector = (state) => state.movieDetail;
  const MovieSelector = (state)=> state.moviesLoaded
  const movies = useSelector(MovieSelector)

  const movieDetail = useSelector(movieDetailSelector)
  const Dispatch = useDispatch()
  const {id} = useParams()
  console.log(movieDetail)

  useEffect(()=>{
       Dispatch(getMovieDetail(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])
  return (
 <>
    <Card className={classes.container}>
    <img src={movieDetail.Poster} alt='imagen poster de pelicula'/>
    <Container className={classes.containerCard}>
    <Typography gutterBottom variant="h5" component="h2">
            {movieDetail.Title}
         </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            {movieDetail.Plot}
          </Typography>
         <div>
         <ul className='movie-card'> 
              <li><strong>Director:</strong> {movieDetail.Director}</li> 
              <li> <strong>Reparto:</strong>{movieDetail.Actors}</li>    

           <li> <strong>Origen:</strong>{movieDetail.Country}</li>    
           <li> <strong>Genero:</strong> {movieDetail.Genre}</li>   
           <li> <strong>Idioma:</strong> {movieDetail.Language}</li>  
          <li> <strong>Productora:</strong> {movieDetail.Production}</li>
          <li> <strong>Duracion:</strong> {movieDetail.Runtime}</li>
           <li> <strong>Año:</strong> {movieDetail.Year}</li>         
           <li> <strong>Votos:</strong> {movieDetail.imdbVotes}</li>         

           </ul>
           <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Valoracion</Typography>
        <Rating name="half-rating-read" value={movieDetail.imdbRating/2} precision={0.5} readOnly />
      </Box>
           </div>
    </Container>
    </Card>
    {movies.length > 0 && 
    <Typography component='h6'> Podria interesarte</Typography>
    }
    <Banner></Banner>
    </>
  );
}