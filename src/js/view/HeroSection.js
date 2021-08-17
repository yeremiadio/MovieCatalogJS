import axios from "axios";
import { discoverUrl } from "../data/instance";

class HeroSection extends HTMLElement {
  constructor() {
    super();
    this.backdrop = "";
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  getMovies() {
    return axios
      .get(discoverUrl)
      .then((response) => {
        const res = response.data.results;
        this.renderPosts(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderPosts(data) {
    for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
      this.backdrop = data[i].backdrop_path;
    }
    this.render();
  }

  connectedCallback() {
    this.getMovies();
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        .banner {
         padding: 30px;
         min-height: 520px;
         display: flex;
         justify-content: center;
         align-items: center;
         background-repeat: no-repeat;
         object-fit: cover;
         background-size: cover;
         background-image: url("https://image.tmdb.org/t/p/original${this.backdrop}");
         position: relative;
        }

        .banner::after {
         content: "";
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         background-image: linear-gradient(to right, #000428, #004e92);
         opacity: .7;
         }

        .search-container {
          flex-direction: row;
          position: static;
          padding: 16px;
          display: flex;
          top: 10px;
          width: 80%;
          background-color: transparent;
       }

       .banner > * {
          z-index: 100;
       }

       .search-container {
         position: relative;
         top: 150px;
       }
        
       .search-container > input {
          width: 100%;
          margin-right: 10px;
          padding: 5px 30px;
          border: 0;
          font-family: 'Nunito', cursive;
          background-color: white;
          border-radius: 50px;
       }
        
       .search-container > input:focus {
          outline: 0;
       }
        
       .search-container > input:focus::placeholder {
          font-weight: bold;
       }
        
       .search-container >  input::placeholder {
          font-weight: normal;
       }
        
       .search-container > button {
          border-radius: 3px;
          cursor: pointer;
          margin-top: 10px;
          padding: 16px 30px;
          font-family: 'Nunito', cursive;
          font-weight: 700;
          background-color: #1c81d5;
          color: white;
          border: 0;
          text-transform: uppercase;
       }
        
       @media screen and (max-width: 550px){ 
          .search-container {
            flex-direction: column;
          }       
          .search-container > input {
              width: 100%;
              padding: 15px 30px;
              margin-bottom: 12px;
          }
        
          .search-container > button {
              width: 100%;
          }
       }
       </style>
          <div class="banner" id="banner-movie">
              <div class="search-container">
                  <input placeholder="Search movie" id="searchElement" type="search">
                  <button id="searchButtonElement" type="submit">Search</button>
              </div>
          </div>
          `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("hero-section", HeroSection);
