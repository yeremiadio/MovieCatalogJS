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
    <nav class="navbar navbar-light bg-light shadow-sm">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1"
          ><h3 class="mx-3">Movie Catalog</h3></span
        >
      </div>
    </nav>
  </header>`;
  }
}
customElements.define("app-bar", AppBar);
