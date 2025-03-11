import { useState, useEffect } from 'react';
import './movies.css'

const Card = ({movie}) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long',day: 'numeric'};
    return new Date(dateString).toLocaleDateString(undefined,options);
  };

  const getGenreNames = (genreIds) => {
    const genreMap = {
      10749: "Romance",
      878: "Science Fiction",
      53: "Thriller",
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10751: "Family",
      10770: "TV Movie",
      37: "Western"
    };
    
    return genreIds.map(id => genreMap[id] || "Unknown").join(", ");
  };

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    // return (
    //   moviesList.length!=0?
    //   <>
    //     <img
    //       src={`https://image.tmdb.org/t/p/w500${moviesList[0].poster_path}`}
    //       alt={moviesList[0].title}
    //       className="movie-poster"
    //     />
    //     <h1>{moviesList[0].title}</h1>
    //     <p>{moviesList[0].overview}</p>
    //   </>
    //   :<>
    //   <h2>No data</h2>
    //   </>
    // );
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt="image" />
        <div className = "movie-rating">
          <span> {movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
      

      <div className='movie-info'>
        <h2>{movie.title}</h2>
        <div className='movie-meta'>
          <span className='release-date'>{formatDate(movie.release_date)}</span>
          <span className='genres'>{getGenreNames(movie.genre_ids)}</span>
        </div>
        <p className='movie-overview'>{movie.overview}</p>
        <div className='movie-stats'>
        <span className="popularity">Popularity: {movie.popularity.toLocaleString()}</span>
        <span className="votes">Votes: {movie.vote_count.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [movies, setMovies] = useState([]); //empty list for initial 
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e8049c19d4f7b3d6b01f7502cd306ce0`);
        const data = await response.json();
        setMovies(data.results);

      } catch(e) {
        console.log("Error fetching data from the API", e);
      }
    };
    
    fetchMovies();
  }, []);


 return (
    <div className="app">
      <header>
        <h1>Popular Movies</h1>
      </header>
      <main>
        {
          <div className="movie-grid">
            {movies.map(movie => (
              <Card key={movie.id} movie={movie} />
            ))}
            {/* <Card key={movies[0].id} movie={movies[0]} /> */}
          </div>
        }
      </main>
    </div>
  );
}



export default App