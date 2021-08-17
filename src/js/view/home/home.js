import "./MovieList.js";
import "./MovieItem.js";
import "../AppBar.js";
import "../HeroSection.js";

const home = () => {
  const movielistElement = document.querySelector("movie-list");
  const searchElement = document.querySelector("search-bar");
  const brandRefreshElement = document.querySelector("app-bar");

  const refreshPage = () => {
    window.location.reload();
  };

  const buttonSearchMovie = async () => {
    try {
      if (searchElement.value === "") {
        movielistElement.getMovies();
      } else {
        movielistElement.searchMovies(searchElement.value);
      }
    } catch (message) {
      movielistElement.renderError(message);
    }
  };

  brandRefreshElement.clickEvent = refreshPage;
  searchElement.clickEvent = buttonSearchMovie;
};

export default home;
