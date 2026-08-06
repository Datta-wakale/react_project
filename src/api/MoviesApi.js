const moviesUrl = "http://localhost:3000/movies";

// get all movies
export const getMovies= async()=> {

   const response = await fetch(moviesUrl);
   return await response.json()
}

