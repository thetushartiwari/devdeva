// Initial movie array
let movies = [
    { id: 1, title: "Parasite", genre: "Thriller", year: 2019, rating: 8.6, watched: true },
    { id: 2, title: "Spirited Away", genre: "Animation", year: 2001, rating: 8.6, watched: false },
  ];
  
  let nextId = 3;
  
  // Get current movie list
  export function getMovies() {
    return movies;
  }
  
  // Add a new movie
  export function addMovie({ title, genre, year, rating }) {
    movies.push({ id: nextId++, title, genre, year, rating, watched: false });
  }
  
  // Remove movie by ID
  export function deleteMovie(id) {
    movies = movies.filter(movie => movie.id !== id);
  }
  
  // Toggle watched status
  export function toggleWatched(id) {
    const movie = movies.find(m => m.id === id);
    if (movie) movie.watched = !movie.watched;
  }
  
  // Update movie details
  export function updateMovie(id, { title, genre, year, rating }) {
    const movie = movies.find(m => m.id === id);
    if (movie) {
      movie.title = title;
      movie.genre = genre;
      movie.year = year;
      movie.rating = rating;
    }
  }
  