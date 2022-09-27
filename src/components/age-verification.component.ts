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

  // public whoa(): void {
  //   console.log('whoa whoa');
  // }
}

customElements.define('bw-age-verification', AgeVerificationComponent);
