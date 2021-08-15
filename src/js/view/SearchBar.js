class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
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
        .search-container {
          flex-direction: column;
          position: static;
          max-width: 800px;
          box-shadow: 0 2px 1px 2px rgba(0, 0, 0, 0.05);
          padding: 16px;
          border-radius: 5px;
          display: flex;
          position: sticky;
          top: 10px;
          background-color: white;
       }
        
       .search-container > input {
          width: 100%;
          padding: 16px;
          border: 0;
          border-bottom: 1px solid cornflowerblue;
          font-weight: bold;
       }
        
       .search-container > input:focus {
          outline: 0;
          border-bottom: 2px solid cornflowerblue;
       }
        
       .search-container > input:focus::placeholder {
          font-weight: bold;
       }
        
       .search-container >  input::placeholder {
          color: cornflowerblue;
          font-weight: normal;
       }
        
       .search-container > button {
          border-radius: 3px;
          width: 100%;
          cursor: pointer;
          margin-top: 10px;
          padding: 16px;
          background-color: cornflowerblue;
          color: white;
          border: 0;
          text-transform: uppercase;
       }
        
       @media screen and (max-width: 550px){        
          .search-container > input {
              width: 100%;
              margin-bottom: 12px;
          }
        
          .search-container > button {
              width: 100%;
          }
       }
       </style>
          <div id="search-container" class="search-container">
              <input placeholder="Search movie" id="searchElement" type="search">
              <button id="searchButtonElement" type="submit">Search</button>
          </div>
          `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
