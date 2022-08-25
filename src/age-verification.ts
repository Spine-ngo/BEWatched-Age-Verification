class AgeVerification {
  constructor(autoStart = false) {
    if (autoStart) {
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

export default AgeVerification;
