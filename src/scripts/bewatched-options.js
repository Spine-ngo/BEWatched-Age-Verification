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
};

window.BWAV_SETTINGS = {
  debug: false,                       // enable for logging

  close: true,                       // show a close button at the right-top corner of the overlay

  accentColor: 'green',               // the highlight color used for buttons, links, specific text
  accentTextColor: 'white',           // the text color for buttons
  shadowColor: 'rgba(0,128,0,.25)',   // the shadow color, used for example under the logo/avatar

  logo: 'images/logo.png',            // link to a specific logo, now a placeholder

  ageCheck: true,                     // show an age-check before the survey
  blur: false,                        // blur the main website content when the overlay is shown

  cookieAge: 30,                      // amount of days for the cookie lifetime
  cookieName: 'bwav',                 // cookie name
  cookieShowMax: 0,                   // the amount of times the survey can be shown, 0 = always

  eventPrefix: 'bwav:',               // a prefix for the custom events that are triggered by this plugin

  content: COPY,                      // copy object, see above
};