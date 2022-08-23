// All texts used in this plugin, can be overwritten by using the global settings object (see index.html file)
const COPY = {
  agecheck: 'This is an <strong>adult-only</strong> website',
  consent: 'By continuing to browse this website, you agree to our <a href="#">cookie policy</a> and <a href="#">terms and conditions</a>.',
  consentButton: 'I am older than 18',
  agecheckFooter: '<a href="#">More information</a>',

  close: 'Go to the website',
};

window.BWAV_SETTINGS = {
  debug: true,                       // enable for logging

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

  brand: {                           // the info that will be used for branding of the popup
    name: 'this website',
    logo: 'https://via.placeholder.com/180',
    url: 'https://www.google.com',
  },
};