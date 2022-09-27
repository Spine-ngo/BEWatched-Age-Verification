import { AgeVerificationComponent } from './components/age-verification.component';
import { optionsDefault } from './defaults/options.default';
import { Options } from './types/options.type';

export class AgeVerification {
  private options: Options;

  constructor(options?: Partial<Options>) {
    this.options = Object.assign(optionsDefault, options) as Options;
    if (this.options.autoStart) {
      this.start();
    }
  }

  public start(): void {
    console.log('Age verification started');
    this.addModal();
  }

  public close(): void {
    console.log('Age verification closed');
  }

  private addModal(): void {
    console.log('Adding modal');

    const test = customElements.get('bw-age-verification');

    if (test) {
      const component: AgeVerificationComponent = new test();
      document.body.appendChild(component);
    }
  }
}
