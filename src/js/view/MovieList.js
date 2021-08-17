import axios from "axios";
import "./MovieItem.js";
import { discoverUrl, searchUrl } from "../data/instance.js";
import "./loader.js";

class MovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.getMovies();
  }

  getMovies() {
    return axios
      .get(discoverUrl)
      .then((response) => {
        const res = response.data.results;
        this.renderPosts(res);
        console.log(res);
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
    if (this._movies) {
      this._movies.map((movie) => {
        const movieItemElement = document.createElement("movie-item");
        movieItemElement.movie = movie;
        this.shadowDOM.appendChild(movieItemElement);
      });
    } else {
      this.shadowDOM.appendChild(this.createLoader());
    }
  }
}
customElements.define("movie-list", MovieList);
