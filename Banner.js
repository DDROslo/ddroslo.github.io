class Banner extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
<div id="banner">
  <img src="assets/images/construction-excavator.svg" />
  <p>This page is under construction</p>
  <img src="assets/images/construction-excavator.svg" />
</div>
`;
  }
}
// define a custom element called 'nav-bar' using the navBar class
customElements.define("top-banner", Banner);
