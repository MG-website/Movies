// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { NavLink } from 'react-router-dom';
// import { getMovies, addMovieFavorite } from "../../actions";
// import './Buscador.css';



// export class Buscador extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: ""
//     };
//   }
//   handleChange(event) {
//     this.setState({ title: event.target.value });
//   }
//   handleSubmit(event) {
//     event.preventDefault();

// this.props.getMovies(this.state.title)
//   }

//   render() {
//     const { title } = this.state;
//     return (
//       <div>
//         <h2>Buscador</h2>
//         <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
//           <div>
//             <label className="label" htmlFor="title">Película: </label>
//             <input
//               type="text"
//               id="title"
//               autoComplete="off"
//               value={title}
//               onChange={(e) => this.handleChange(e)}
//             />
//           </div>
//           <button type="submit">BUSCAR</button>
//         </form>
//         <ul>

//           {this.props.movies && this.props.movies.map(m => {
//             console.log(m)
//             return(
              
//               <li key={m.imdbID} className='contenedorBtn'>
                
//             <NavLink to={`/movie/${m.imdbID}`} className='a'>
//             <p>{m.Title}</p>
//             </NavLink>
//               <button className='btn' onClick={() => this.props.addMovieFavorite({title: m.Title, id: m.imdbID})}> Favorito</button>

//               </li>
    
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

//  export function mapStateToProps(state) {
//   return {
//     movies: state.moviesLoaded,
//     favorites: state.movies
//   };
// }

// /*  export function mapDispatchToProps(dispatch) {
//   return {
//     addMovieFavorite: movie => dispatch(this.addMovieFavorite(movie)),
//     getMovies: title => dispatch(this.getMovies(title))
//   };
// } */

// export default connect(mapStateToProps,{getMovies,addMovieFavorite})(Buscador); 
// // despacho getMovies y addMovieFavorite, y se la paso como props a Buscador

import React from 'react'
import MovieList from '../MovieList/MovieList'

function Buscador() {
  return (
    <div>
      <MovieList></MovieList>
    </div>
  )
}

export default Buscador
