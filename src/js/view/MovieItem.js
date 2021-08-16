class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = ` 
    <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    .placeholder {
        font-weight: lighter;
        color: rgba(0,0,0,0.5);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    :host {
      margin: 8px;
      box-shadow: 0px 2px 0px 1px rgba(0,0,0,0.05);
      border: 1px solid #d8d8d8;
      border-radius: 10px;
      width: 160px;
      height: auto;
      overflow: hidden;
    }

    .info {
      margin: 5px;
      padding: 10px;
      text-align: center;
      word-wrap: break-word;
      font-family: 'Nunito', cursive;
    }
    .card {
      height: 100%;
      justify-content: space-between;
    }
</style>
    <div class="card">
    <img
      src="https://image.tmdb.org/t/p/original${this._movie.poster_path}"
      style="height: 200px; width: 100%;"
      alt="ExamplePoster"
    />
    <div class="info">
        <h5
          style="font-size: small;"
        >
          ${this._movie.title}
        </h5>
        <p
          style="font-size: small;"
        >
          ${this._movie.vote_average}
        </p>
    </div>
  </div>`;
  }
}
customElements.define("movie-item", MovieItem);
