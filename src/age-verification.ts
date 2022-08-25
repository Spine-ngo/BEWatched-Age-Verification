import { optionsDefault } from "./defaults/options.default";
import { Options } from "./types/options.type";

export class AgeVerification {
  private options: Options;

  constructor(options?: Partial<Options>) {
    this.options = Object.assign(optionsDefault, options) as Options;
    if (this.options.autoStart) {
      this.start();
    }
  }

  start() {
    console.log('Age verification started');
  }

  close() {
    console.log('Age verification closed');
  }
}
