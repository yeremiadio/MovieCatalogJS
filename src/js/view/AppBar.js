class AppBar extends HTMLElement {
  constructor() {
    super();
    // this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <nav style="font-family: 'Lato', cursive;" class="navbar navbar-light bg-light shadow-sm">
      <div class="container">
        <span class="navbar-brand mb-0 h1"
          ><h3 style="font-weight: bold;" class="mx-3">Movie Catalog</h3></span
        >
      </div>
    </nav>
  </header>`;
  }
}
customElements.define("app-bar", AppBar);
