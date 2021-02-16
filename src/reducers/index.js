const initialState = {
    movies: [],
    moviesLoaded: [],
    movieDetail: {}
  };

  function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVORITE") {
        return {
          ...state,
          movies: !state.movies.find(movie => movie.id === action.payload.id) ? state.movies.concat(action.payload) : state.movies
        }
    }
    if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }
    if( action.type === 'GET_MOVIES_DETAIL'){
        return{
            ...state,
            movieDetail: action.payload
        };
    }
    if(action.type === 'REMOVE_MOVIE_FAVORITE'){
      console.log(action)
        return {
          ...state,
          movies: state.movies.filter( m => m.id !== action.payload.id)
        }
    }
    return state;
  }
  
  export default rootReducer;