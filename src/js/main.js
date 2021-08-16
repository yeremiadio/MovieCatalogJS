import "./view/MovieList.js";
import "./view/MovieItem.js";
import './view/AppBar.js'
// import DataSource from "./data/data-source.js";
import "./view/SearchBar.js";

const main = () => {
  const movielistElement = document.querySelector("movie-list");
  const searchElement = document.querySelector("search-bar");
  const brandRefreshElement = document.querySelector("app-bar")

  const refreshPage = () => {
    window.location.reload()
  }

  const buttonSearchMovie = async () => {
    try  {
      if(searchElement.value === '') {
        movielistElement.getMovies()
      }
      else {
        movielistElement.searchMovies(searchElement.value)
      }
    } catch (message) {
      movielistElement.renderError(message);
    }
  };

  brandRefreshElement.clickEvent = refreshPage
  searchElement.clickEvent = buttonSearchMovie;

};

export default main;
