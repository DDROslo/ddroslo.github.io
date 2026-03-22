class SignalQR extends HTMLElement {
  constructor() {
    super();
    this.signalQr = document.createElement("div");
    this.signalQr.innerHTML = `
    This will be the Signal QR code 
`;
    this.appendChild(this.signalQr);
  }
}
// define a custom element called 'nav-bar' using the navBar class
customElements.define("signal-qr", SignalQR);
