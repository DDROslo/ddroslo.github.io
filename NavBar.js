class NavBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
<nav>
  <ul>
    <li><a href="./main.html"><img src="./assets/arrow.svg" id="logo">Home </a></li>
    <li><a href="./events.html">Events</a></li>
    <li><a href="./guidelines.html">Guidelines</a></li>
    <li><a href="./about.html">About</a></li>
    <li><a href="./join.html">Join Us</a></li>
  </ul>
</nav>
`;
  }
}
// define a custom element called 'nav-bar' using the navBar class
customElements.define("nav-bar", NavBar);
