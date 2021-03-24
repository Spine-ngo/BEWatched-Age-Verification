import { version } from '../../package.json';

// eslint-disable-next-line no-unused-vars
window.BWAV = (function(window, BWAV_SETTINGS, undefined) {
  "use strict";

  const MODULE_NAME = 'BWAV';
  const VERSION = `v${version}`;

  const MODELS = [
    {
      id: 1,
      avatar: 'images/model-1.jpg',
      underaged: false,
      gender: 'f',
    },
    {
      id: 2,
      avatar: 'images/model-2.jpg',
      underaged: true,
      gender: 'm',
    },
    {
      id: 3,
      avatar: 'images/model-3.jpg',
      underaged: false,
      gender: 'f',
    }
  ];

  const COPY = {
    agecheck: 'This is an <strong>adult-only</strong> website',
    consent: 'By continuing to browse this website, you aggree to our <a href="#">cookie policy</a> and <a href="#">terms and conditions</a>.',
    consentButton: 'I am older than 18',
    agecheckFooter: '<a href="#">More information</a>',

    questionIntro: 'But more important...',
    question: 'Is #G# 18 years or older?',
    yes: 'Yes',
    no: 'No',

    genderM: 'he',
    genderF: 'she',

    genderMFull: 'this boy',
    genderFFull: 'this girl',

    correct: 'Correct, #G# is <strong>underaged</strong>',
    correctContent: 'But you can admit, it\'s not always easy to see if someone is of age. At the moment this picture was taken, #GF# was active as a sex worker.',

    incorrect: 'Unfortunately, #G# is <strong>underaged</strong>',
    incorrectContent: 'As you can see, it\'s not always easy to see if someone is of age. Because at the moment this picture was taken, #GF# was active as a sex worker.',

    info: `<p>We do our best to avoid working with underaged sex workers, but we can never be 100% succesful. In the future, when in doubt, but still want to meet? Try asking for an ID for example. Only then will you be sure to not do anything illegal.</p>
    <p>And if it turns out the sex worker is indeed underaged? Report this anonymously to Child Focus, by calling tollfree to <a href="tel:116 000">116 000</a> or by using <a href="#">this online form</a>. And help us in the combat against sexual exploitation of children.</p>`,

    close: 'Go to the website',

    ...(BWAV_SETTINGS.content || {})
  };

  const SETTINGS = {
    debug: false,

    close: false,

    accentColor: 'green',
    accentTextColor: 'white',
    shadowColor: 'rgba(0,128,0,.25)',

    logo: 'logo.png',

    ageCheck: true,
    blur: false,
    models: MODELS,

    cdnPrefix: '',

    cookieAge: 30,
    cookieName: 'bwav',

    eventPrefix: 'bwav:',

    logos: [
      {
        url: 'https://google.com',
        image: 'images/logo-eu.png',
      },
      {
        url: 'https://childfocus.be',
        image: 'images/logo-child-focus.png',
      }
    ],

    ...(BWAV_SETTINGS || {}),

    content: COPY,
  };

  const SELECTORS = {
    target: 'body',
    overlay: '.bwav__overlay',
    wrapper: '.bwav',
    agecheck: '.bwav__agecheck',
  };

  const CLASSES = {
    blur: 'bwav--blur',
    show: 'bwav--shown',
  };

  const STORE = {};

  /**
   * Select a random model from the models array
   * @returns {object} model record
   */
  function selectModel() {
    return SETTINGS.models[Math.floor(Math.random() * SETTINGS.models.length)];
  };

  /**
   * Replace #G# and #GF# with the correct genderized words
   * @param {string} sentence 
   * @param {string} gender 
   * @returns 
   */
  function genderizeSentence(sentence, gender) {
    const g = gender === 'f' ? SETTINGS.content.genderF : SETTINGS.content.genderM;
    const gFull = gender === 'f' ? SETTINGS.content.genderFFull : SETTINGS.content.genderMFull;

    return sentence.replace('#G#', g).replace('#GF#', gFull);
  }

  /**
   * Check answer and show correct information
   * @param {boolean} answer 
   */
  function answerQuestion(answer) {
    if (SETTINGS.debug) { console.log(`${MODULE_NAME} answer question`, answer); }
    
    // validate
    const correct = STORE.model.underaged !== answer;

    triggerEvent(`${SETTINGS.eventPrefix}on_answer`, { answer, model: STORE.model, correct });

    // setup html
    const template = `
      <div class="bwav__step">
        <div class="bwav__avatar bwav__avatar--scaledown${ correct ? ' bwav__avatar--blur' : '' }">
          <div class="bwav__avatar__image" style="background-image: url(${STORE.model.avatar});"></div>
        </div>

        ${ correct ? `
          <p class="bwav__title">${ genderizeSentence(SETTINGS.content.correct, STORE.model.gender) }</p>
        ` : `
            <p class="bwav__title">${ genderizeSentence(SETTINGS.content.incorrect, STORE.model.gender) }</p>
          ` }

        <div class="bwav__content">
          ${ correct ? `
          <p class="bwav__intro">${ genderizeSentence(SETTINGS.content.correctContent, STORE.model.gender) }</p>
        ` : `
            <p class="bwav__intro">${ genderizeSentence(SETTINGS.content.incorrectContent, STORE.model.gender) }</p>
          ` }
          ${ SETTINGS.content.info }

          <div class="bwav__actions">
            <button class="bwav__button" onclick={BWAV.close()}><span>${SETTINGS.content.close}</span></button>
          </div>
        </div>

        <div class="bwav__footer">
          <div class="bwav__footer__logos">
            ${ SETTINGS.logos.map((logo) => (`
            <div class="bwav__footer__logo">
              <a href="${ logo.url }">
                <img src="${ logo.image }" />
              </a>
            </div>
            `)).join('') }
          </div>
        </div>
      </div>
    `;

    STORE.wrapper.innerHTML = template;
  }

  function close() {
    if (SETTINGS.debug) { console.log(`${MODULE_NAME} close`); }
    STORE.target.classList.remove(CLASSES.show);
    STORE.target.classList.remove(CLASSES.blur);
    triggerEvent(`${SETTINGS.eventPrefix}on_close`, { model: STORE.model });
  }

  /**
   * Public function to start the survey
   */
  function start() {
    if (SETTINGS.debug) { console.log(`${MODULE_NAME} start`, STORE.model); }
    triggerEvent(`${SETTINGS.eventPrefix}on_start`, { model: STORE.model });

    // setup html
    const template = `
    <div class="bwav__step">
      <div class="bwav__avatar bwav__avatar--scaleup">
        <div class="bwav__avatar__image" style="background-image: url(${ STORE.model.avatar });"></div>
      </div>

      <div class="bwav__content">
        <p>${SETTINGS.content.questionIntro}</p>
        <p class="bwav__question">${SETTINGS.content.question}</p>

        <div class="bwav__actions">
          <button class="bwav__button" onclick={BWAV.answer(true)}><span>${SETTINGS.content.yes}</span></button>
          <button class="bwav__button" onclick={BWAV.answer(false)}><span>${SETTINGS.content.no}</span></button>
        </div>
      </div>
    </div>
    `;

    STORE.wrapper.innerHTML = template;

    if (SETTINGS.blur) {
      document.body.classList.add(CLASSES.blur);
    }

    STORE.target.classList.add(CLASSES.show);
  }

  /**
   * Render age check
   */
  function ageCheck() {
    const template = `
    <div class="bwav__agecheck">
      <div class="bwav__avatar">
        <div class="bwav__avatar__image" style="background-image: url(${SETTINGS.logo});"></div>
      </div>

      <div class="bwav__content">
        <p>${SETTINGS.content.agecheck}</p>
        <div class="bwav__agecheck__consent">${SETTINGS.content.consent}</div>

        <button class="bwav__button" onclick="BWAV.start()"><span>${SETTINGS.content.consentButton}</span></button>
      </div>

      <div class="bwav__footer">
        ${ SETTINGS.content.agecheckFooter }
      </div>
    </div>
    `;

    STORE.wrapper.innerHTML = template;
  }

  /**
   * Prepare HTML overlay and wrapper
   */
  function setupHTML() {
    if (SETTINGS.debug) { console.log(`${MODULE_NAME} setup HTML`); }
    const target = document.querySelector(SELECTORS.target);

    try {
      const scaffold = `
        <div class="bwav__overlay">
          <div class="bwav__wrapper">
            ${ SETTINGS.close ? '<span class="bwav__close" onclick="BWAV.close()">x</span>' : '' }
            <div class="bwav"></div>
          </div>
        </div>
      `;
      
      const temp = document.createElement('div');
      temp.innerHTML = scaffold;

      
      STORE.target = target;
      STORE.overlay = temp.querySelector(SELECTORS.overlay);
      STORE.wrapper = temp.querySelector(SELECTORS.wrapper);

      target.appendChild(STORE.overlay);

      if (SETTINGS.debug) { console.log(`${MODULE_NAME} HTML setup done`); }
    } catch(e) {
      if (SETTINGS.debug) {
        console.warn(`${MODULE_NAME} HTML setup failed`);
        console.error(e);
      }
    }
    
  }

  /**
   * Trigger an event to notify the website of certain actions
   * @param {string} eventName 
   * @param {object} payload 
   */
  function triggerEvent(eventName = '', payload = {}) {
    if (SETTINGS.debug) { console.log(`${MODULE_NAME} trigger event:`, eventName, payload); }
    
    try {
      if (!eventName) {
        throw new Error('triggerEvent needs an eventName');
      }

      const event = new CustomEvent(eventName, payload);
      window.dispatchEvent(event);
      if (SETTINGS.debug) { console.log(`${MODULE_NAME} event triggered:`, eventName, payload); }
    } catch(e) {
      if (SETTINGS.debug) {
        console.warn(`${MODULE_NAME} - trigger event failed:`, eventName, payload);
        console.error(e);
      }
    }
  }

  /**
   * Add classes to necessary items
   */
  function addClasses() {
    if (SETTINGS.ageCheck) {
      STORE.target.classList.add(CLASSES.show);

      if (SETTINGS.blur) {
        document.body.classList.add(CLASSES.blur);
      }
    }
  }

  /**
   * Inject stylesheet and custom CSS properties
   */
  function addStyles() {
    if (SETTINGS.debug) { console.log(`${MODULE_NAME} adding styles`); }

    try {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `${SETTINGS.cdnPrefix}/bewatched-age-verification.${VERSION}.css`;

      document.head.appendChild(link);

      if (SETTINGS.debug) { console.log(`${MODULE_NAME} stylesheet added`); }

      document.documentElement.style.setProperty('--bwav-color--primary', SETTINGS.accentColor);
      document.documentElement.style.setProperty('--bwav-color--primary-text', SETTINGS.accentTextColor);
      document.documentElement.style.setProperty('--bwav-color--primary-shadow', SETTINGS.shadowColor);

      if (SETTINGS.debug) { console.log(`${MODULE_NAME} custom css properties added to :root`); }

    } catch(e) {
      if (SETTINGS.debug) {
        console.warn(`${MODULE_NAME} - addStyles failed`);
        console.error(e);
      }
    }
  }

  /**
   * Initialize plugin, prepare DOM and inject necessary resources
   */
  function init() {
    if (SETTINGS.debug) { console.log(`${MODULE_NAME} init`); }
    triggerEvent(`${SETTINGS.eventPrefix}on_init`, SETTINGS);
  
    addStyles();
    setupHTML();
    addClasses();

    if (SETTINGS.ageCheck) {
      ageCheck();
    }

    // select model
    STORE.model = selectModel();

    if (SETTINGS.debug) { console.log(`${MODULE_NAME} initialisation finished`); }
    triggerEvent(`${SETTINGS.eventPrefix}after_init`);
  };

  document.addEventListener('DOMContentLoaded', init);

  return {
    start,
    answer: answerQuestion,
    close,
  };
}(window, window.BWAV_SETTINGS || {}));