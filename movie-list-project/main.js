// Import all the functions that handle movie operations like add, delete, update, etc.
import { getMovies, addMovie, deleteMovie, toggleWatched, updateMovie } from './movieOperations.js';

// Grabbing DOM elements from the HTML to use them in JS
const form = document.getElementById('movieForm');
const movieList = document.getElementById('movieList');
const filterGenre = document.getElementById('filterGenre');
const filterStatus = document.getElementById('filterStatus');

// When the user submits the form (to add or update a movie)
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the page from refreshing

  // Get values from the form inputs
  const id = document.getElementById('movieId').value;
  const title = document.getElementById('title').value;
  const genre = document.getElementById('genre').value;
  const year = parseInt(document.getElementById('year').value);
  const rating = parseFloat(document.getElementById('rating').value);

  // If movieId exists, it's an edit operation
  if (id) {
    updateMovie(parseInt(id), { title, genre, year, rating });
  } else {
    // Otherwise, it's a new movie addition
    addMovie({ title, genre, year, rating });
  }

  // Clear the form
  form.reset();

  // Re-render the updated movie list
  render();
});

// Update the movie list whenever filter changes
filterGenre.addEventListener('change', render);
filterStatus.addEventListener('change', render);

// Render movie list and filters
function render() {
  const movies = getMovies(); // Get all movies
  const genreFilter = filterGenre.value;
  const statusFilter = filterStatus.value;

  // Create a unique list of genres from all movies
  const genres = [...new Set(movies.map(m => m.genre))];
  // Populate genre dropdown
  filterGenre.innerHTML = '<option value="">All Genres</option>' +
    genres.map(g => `<option value="${g}">${g}</option>`).join('');

  // Start with all movies
  let filtered = [...movies];

  // Apply genre filter
  if (genreFilter) {
    filtered = filtered.filter(m => m.genre === genreFilter);
  }

  // Apply watched/unwatched filter
  if (statusFilter === 'watched') {
    filtered = filtered.filter(m => m.watched);
  } else if (statusFilter === 'unwatched') {
    filtered = filtered.filter(m => !m.watched);
  }

  // Clear previous list
  movieList.innerHTML = '';

  // Loop through and show each filtered movie
  filtered.forEach(movie => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${movie.title} (${movie.year}) - ${movie.genre} - ${movie.rating}/10
      [${movie.watched ? '✅ Watched' : '⏳ Not Watched'}]
      <button onclick="editMovie(${movie.id})">✏️ Edit</button>
      <button onclick="removeMovie(${movie.id})">🗑 Delete</button>
      <button onclick="markWatched(${movie.id})">Toggle Watched</button>
    `;
    movieList.appendChild(li);
  });
}

// These are window-scoped functions so they can be called from the HTML buttons

// Deletes the movie
window.removeMovie = (id) => {
  deleteMovie(id);
  render();
};

// Pre-fills the form for editing a movie
window.editMovie = (id) => {
  const movie = getMovies().find(m => m.id === id);
  document.getElementById('movieId').value = movie.id;
  document.getElementById('title').value = movie.title;
  document.getElementById('genre').value = movie.genre;
  document.getElementById('year').value = movie.year;
  document.getElementById('rating').value = movie.rating;
};

// Toggles the "watched" status
window.markWatched = (id) => {
  toggleWatched(id);
  render();
};

// Initial render on page load
render();
