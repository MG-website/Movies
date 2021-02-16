import axios from 'axios'


export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      return axios.get("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
    
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json.data });
        });
    };
  }
  export function getMovieDetail(id){

/*     return{ type: 'GET_MOVIES_DETAIL', payload}
 */  
return function(dispatch) {
  return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
    .then(response => response.json())
    .then(json => {
      dispatch({ type: "GET_MOVIES_DETAIL", payload: json });
    });
};


}
  export function removeMovieFavorite(payload){
      return{ type: 'REMOVE_MOVIE_FAVORITE',payload}
  }