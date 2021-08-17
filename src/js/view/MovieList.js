import axios from "axios";
import "./MovieItem.js";
import { discoverUrl, searchUrl } from "../data/instance.js";
import "./loader.js";

class MovieList extends HTMLElement {
  constructor() {
    super();
    this._message = "";
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.loading = true;
    this.getMovies();
  }

  shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  getMovies() {
    return axios
      .get(discoverUrl + `&page=${Math.floor(Math.random() * 500)}`)
      .then((response) => {
        const res = response.data.results;
        this.shuffle(res);
        this.loading = false;
        this.renderPosts(res);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  searchMovies(keyword) {
    return axios
      .get(searchUrl + encodeURIComponent(keyword).replace(/%20/g, "+"))
      .then((response) => {
        const res = response.data.results;
        this.renderPosts(res);
        console.log(res);
      })
      .catch((error) => {
        this.renderError(error);
        console.log(error);
      });
  }

  renderPosts(data) {
    this._movies = data;
    this.render();
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  createLoader() {
    const loaderElement = document.createElement("loader-item");
    return loaderElement;
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    </style>`;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.setAttribute("class", "row justify-content-center");
    this.shadowDOM.innerHTML = `
    <style>
      :host {
        position: relative;
        width: 100%;
        height: 100vh;
        margin: 0 auto;
      }
    </style>
    `;
    if (this.loading) {
      this.shadowDOM.appendChild(this.createLoader());
    } else {
      this._movies.map((movie) => {
        const movieItemElement = document.createElement("movie-item");
        movieItemElement.movie = movie;
        this.shadowDOM.appendChild(movieItemElement);
      });
    }
  }
}
customElements.define("movie-list", MovieList);
