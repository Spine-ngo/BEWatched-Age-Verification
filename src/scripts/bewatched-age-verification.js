import { version } from '../../package.json';
import Cookies from 'js-cookie';

// eslint-disable-next-line no-unused-vars
window.BWAV = (function(window, BWAV_SETTINGS, undefined) {
  "use strict";

  const MODULE_NAME = 'BWAV';     // added as a prefix to console logs for easy filtering
  const VERSION = `v${version}`;  // get version from package.json to load correct css file 

  // mock MODELS array, can be overwrited in the global settings object (see index.html file)
  const MODELS = BWAV_SETTINGS.models || [];

  // All texts used in this plugin, can be overwritten by using the global settings object (see index.html file)
  const COPY = {
    agecheck: 'This is an <strong>adult-only</strong> website',
    consent: 'By continuing to browse this website, you aggree to our <a href="#">cookie policy</a> and <a href="#">terms and conditions</a>.',
    consentButton: 'I am older than 18',
    agecheckFooter: '<a href="#">More information</a>',

    questionIntro: 'But more important...',
    question: 'Is #G# 18 years or older?',
    yes: 'Yes',
    no: 'No',

    genderX: 'this person',
    genderM: 'he',
    genderF: 'she',

    genderXFull: 'this person',
    genderMFull: 'this boy',
    genderFFull: 'this girl',

    correct: 'Correct, #G# is <strong>underaged</strong>',
    correctContent: 'But you can admit, it\'s not always easy to see if someone is of age. At the moment this picture was taken, #GF# was active as a sex worker.',

    incorrect: 'Unfortunately, #G# is <strong>underaged</strong>',
    incorrectContent: 'As you can see, it\'s not always easy to see if someone is of age. Because at the moment this picture was taken, #GF# was active as a sex worker.',

    info: `<p>We do our best to avoid working with underaged sex workers, but we can never be 100% succesful. In the future, when in doubt, but still want to meet? Try asking for an ID for example. Only then will you be sure to not do anything illegal.</p>
    <p>And if it turns out the sex worker is indeed underaged? Report this anonymously to Child Focus, by calling tollfree to <a href="tel:116 000">116 000</a> or by using <a href="https://childfocus.be/en/child-sexual-abuse-material-reporting-form" target="_blank">this online form</a>. And help us in the combat against sexual exploitation of children.</p>`,

    close: 'Go to the website',

    ...(BWAV_SETTINGS.content || {})
  };

  // Logos used in the footer at the last step
  const LOGOS = BWAV_SETTINGS.logos || [
    {
      url: 'https://europa.eu/',
      image: 'images/logo-eu.png',
    },
    {
      url: 'https://childfocus.be',
      image: 'images/logo-child-focus.png',
    },
  ];

  const SETTINGS = {
    debug: false,                       // enable for logging

    close: false,                       // show a close button at the right-top corner of the overlay

    accentColor: 'green',               // the highlight color used for buttons, links, specific text
    accentTextColor: 'white',           // the text color for buttons
    shadowColor: 'rgba(0,128,0,.25)',   // the shadow color, used for example under the logo/avatar

    logo: 'images/logo.png',            // link to a specific logo, now a placeholder

    ageCheck: true,                     // show an age-check before the survey
    blur: false,                        // blur the main website content when the overlay is shown
    
    modelsURL: '',                      // default url to models array on CDN
    models: MODELS,                     // models array, see above

    cookieAge: 30,                      // amount of days for the cookie lifetime
    cookieName: 'bwav',                 // cookie name
    cookieShowMax: 0,                   // the amount of times the survey can be shown, 0 = always
    
    cdnPrefix: '',                      // a CDN url prefix for the CSS url

    eventPrefix: 'bwav:',               // a prefix for the custom events that are triggered by this plugin

    logosURL: '',                       // default URL to logos array on CDN

    ...(BWAV_SETTINGS || {}),
    
    logos: LOGOS,                       // array of logos, see above
    content: COPY,                      // copy object, see above
  };

  // bundled selectors used troughout the script to avoid typos
  const SELECTORS = {
    target: 'body',
    overlay: '.bwav__overlay',
    wrapper: '.bwav',
    agecheck: '.bwav__agecheck',
    contentAnswer: '.bwav__content--answer',
    exitButton: '.bwav__button--exit',
  };

  // bundled css classes used trouhgout the script to avoid typos
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
    let g = SETTINGS.content.genderX;
    let gFull = SETTINGS.content.genderXFull;

    if (gender === 'f') {
      g = SETTINGS.content.genderF;
      gFull = SETTINGS.content.genderFFull;
    }

    if (gender === 'm') {
      g = SETTINGS.content.genderM;
      gFull = SETTINGS.content.genderMFull;
    }

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
      ${ SETTINGS.close ? '<span class="bwav__close" onclick="BWAV.close()">x</span>' : '' }
      <div class="bwav__step">
        <div class="bwav__avatar bwav__avatar--scaledown${ correct ? ' bwav__avatar--blur' : '' }">
          <div class="bwav__avatar__image--back" style="background-image: url(${ STORE.model.avatar });"></div>
          <div class="bwav__avatar__image" style="background-image: url(${STORE.model.avatar});"></div>
        </div>

        ${ correct ? `
          <p class="bwav__title">${ genderizeSentence(SETTINGS.content.correct, STORE.model.gender) }</p>
        ` : `
            <p class="bwav__title">${ genderizeSentence(SETTINGS.content.incorrect, STORE.model.gender) }</p>
          ` }

        <div class="bwav__content bwav__content--answer">
          ${ correct ? `
          <p class="bwav__intro">${ genderizeSentence(SETTINGS.content.correctContent, STORE.model.gender) }</p>
        ` : `
            <p class="bwav__intro">${ genderizeSentence(SETTINGS.content.incorrectContent, STORE.model.gender) }</p>
          ` }
          ${ SETTINGS.content.info }
        </div>

        <div class="bwav__footer">
          <div class="bwav__actions">
            <button class="bwav__button bwav__button--exit" onclick={BWAV.close()} disabled><span>${SETTINGS.content.close}</span></button>
          </div>
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

    const contentAnswer = STORE.wrapper.querySelector(SELECTORS.contentAnswer);
    const exitButton = STORE.wrapper.querySelector(SELECTORS.exitButton);

    contentAnswer.addEventListener('scroll', function(e) {
      const { target } = e;
      if (target.scrollTop + target.offsetHeight + 5 >= target.scrollHeight) {
        exitButton.removeAttribute('disabled');
      }
    });

  }

  function close() {
    if (SETTINGS.debug) { console.log(`${MODULE_NAME} close`); }
    STORE.target.classList.remove(CLASSES.show);
    STORE.target.classList.remove(CLASSES.blur);
    triggerEvent(`${SETTINGS.eventPrefix}on_close`, { model: STORE.model });

    const cookie = parseInt(Cookies.get(SETTINGS.cookieName) || 0, 10);

    if (cookie < SETTINGS.cookieShowMax && cookie >= 0) {
      Cookies.set(SETTINGS.cookieName, cookie + 1, { expires: SETTINGS.cookieAge });
    }
  }

  /**
   * Public function to start the survey
   */
  function start() {
    const cookie = Cookies.get(SETTINGS.cookieName);

    if (SETTINGS.debug) { console.log(`${MODULE_NAME} start`, STORE.model, 'cookie value:', cookie); }
    triggerEvent(`${SETTINGS.eventPrefix}on_start`, { model: STORE.model, cookie });

    if (cookie && cookie >= SETTINGS.cookieShowMax) { close(); return; }

    // setup html
    const template = `
    <div class="bwav__step">
      <div class="bwav__avatar bwav__avatar--scaleup">
        <div class="bwav__avatar__image--back" style="background-image: url(${ STORE.model.avatar });"></div>
        <div class="bwav__avatar__image" style="background-image: url(${ STORE.model.avatar });"></div>
      </div>

      <div class="bwav__content">
        <p>${SETTINGS.content.questionIntro}</p>
        <p class="bwav__question">${ genderizeSentence(SETTINGS.content.question, STORE.model.gender) }</p>

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
    const cookie = Cookies.get(SETTINGS.cookieName);

    if (cookie && cookie >= SETTINGS.cookieShowMax) { close(); return; }

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