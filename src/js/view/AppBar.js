class AppBar extends HTMLElement {
  constructor() {
    super();
    // this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <nav style="font-family: 'Lato', cursive; background: #032541;" class="navbar navbar-light shadow-sm">
      <div class="container">
        <span id="navbar-brandElement" class="navbar-brand mb-0 h1" style="cursor: pointer;"
          ><h3 style="font-weight: bold;" class="mx-3 text-white">Movie Catalog</h3></span
        >
      </div>
    </nav>
  </header>`;
    this
      .querySelector("#navbar-brandElement")
      .addEventListener("click", this._clickEvent);
  }
}
customElements.define("app-bar", AppBar);
