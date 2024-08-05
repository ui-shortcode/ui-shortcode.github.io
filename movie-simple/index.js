const tmdbAPIURL = `https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=${key}`;
const tmdbPopularMovieURL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc&api_key=${key}`;
const moviesContainer = document.getElementById("popular-movie-list");

fetch(tmdbPopularMovieURL)
  .then((response) => response.json())
  .then((data) => {
    const movies = data.results;
    movies.forEach((movie) => {
      console.log(movie);
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie-item");

      const posterPath = movie.poster_path
        ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
        : "https://via.placeholder.com/100x150";
      const movieHTML = `
        <a class="details-link" href="https://www.themoviedb.org/movie/${movie.id}" target="_blank">
          <div class="movie-poster"><img src="${posterPath}" alt="${movie.title}"></div>
          <div class="movie-details">
            <h2 class="movie-title">${movie.title}</h2>
            <p class="movie-overview">${movie.overview}</p>
          </div>
        </a>
      `;
      movieElement.innerHTML = movieHTML;
      moviesContainer.appendChild(movieElement);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
