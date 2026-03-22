class EventCalendar extends HTMLElement {
  constructor() {
    super();
    this.navBar = document.createElement("div");
    this.navBar.innerHTML = `
    This will be a calendar
`;
    this.appendChild(this.navBar);
  }
}
// define a custom element called 'nav-bar' using the navBar class
customElements.define("event-calendar", EventCalendar);
