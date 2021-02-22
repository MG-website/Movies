import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL

export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      console.log(API_URL)
      return axios.get(API_URL + " &s=" + titulo)
    
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json.data });
        });
    };
  }
  export function getMovieDetail(id){

/*     return{ type: 'GET_MOVIES_DETAIL', payload}
 */  
return function(dispatch) {
  return fetch(API_URL + " &i=" + id)
    .then(response => response.json())
    .then(json => {
      dispatch({ type: "GET_MOVIES_DETAIL", payload: json });
    });
};


}
  export function removeMovieFavorite(payload){
      return{ type: 'REMOVE_MOVIE_FAVORITE',payload}
  }