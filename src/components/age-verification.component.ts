export class AgeVerificationComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const ageVerificationSpan = document.createElement('span');
    ageVerificationSpan.textContent = 'Age Verification';

    if (this.shadowRoot) {
      this.shadowRoot.appendChild(ageVerificationSpan);
    }
  }
}

customElements.define('bw-age-verification', AgeVerificationComponent);
