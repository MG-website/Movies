// import React from 'react';
// import { connect } from 'react-redux';
// import { getMovieDetail  } from '../../actions/index';

// import './Movie.css';


// class Movie extends React.Component {


//    componentDidMount(){ // se pone este componente para primero obtener los datos
//     const movieId = this.props.match.params.id;
//     this.props.getMovieDetail(movieId);
//    }

//     render() {
//         if(!this.props.detail)return <h1>Cargando...</h1>
//         return (
//             <div className="container">                
//                 <h1 className='title'>{this.props.detail.Title} <span>R</span></h1>
//                 <p className='description'>{this.props.detail.Plot}</p>
//                 <div className='columnas'>
//                     <div className='img'>
//                     <img src={this.props.detail.Poster} alt='imagen de pelicula'></img>
//                     </div>
//                 <div>
//                 <ul className='movie-card'>
//                 <h4>{this.props.detail.Director}</h4>
//                 <li> <strong>Origen:</strong>{this.props.detail.Country}</li>
//                 <li> <strong>Genero:</strong> {this.props.detail.Genre}</li>
//                 <li> <strong>Idioma:</strong> {this.props.detail.Language}</li>
//                 <li> <strong>Productora:</strong> {this.props.detail.Production}</li>
//                 <li> <strong>Año:</strong> {this.props.detail.Year}</li>
//                 </ul>

//                 </div>
//                 </div>
             
                
//             </div>
//         );
//     }
// }


// /* export default (Movie); */
// function mapStateToProps(state){
//     return {
//       detail: state.movieDetail
//     }
//   }
  
//   export default connect(mapStateToProps,{getMovieDetail})(Movie);
  
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
    backgroundColor:'#ffffff17'
  },
  containerCard:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    flexWrap: 'wrap'
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
  },[id])
  return (
 <>
    <Card className={classes.container}>
    <img src={movieDetail.Poster}/>
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