import "./view/MovieList.js";
import "./view/MovieItem.js";
import DataSource from "./data/data-source.js";
import "./view/SearchBar.js";

const main = () => {
  const movielistElement = document.querySelector("movie-list");
  const searchElement = document.querySelector("search-bar");

  const buttonGetMovie = async () => {
    try {
      const results = await DataSource.searchMovies(searchElement.value);
      renderResult(results);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    movielistElement.movies = results;
  };

  const fallbackResult = (message) => {
    movielistElement.renderError(message);
  };

  searchElement.clickEvent = buttonGetMovie;
};

export default main;
