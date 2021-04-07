# BEWatched-Age-Verification

A completely customizable age verification tool with an added survey to create awareness for underaged sex workers.

## Usage
Implementing the basic plugin is as easy as including 2 script tags in your current website. We provide a hosted version of this script here:

```html
<script src="https://link.to.cdn/bewatched-options.v.0.0.1.js"></script>
<script src="https://link.to.cdn/bewatched-age-verification.v.0.0.1.js"></script>
```

To avoid issues when updates are being published to this tool, a versioning system is included in the url. This makes it easy for webmasters to test updates, or to remain on a fixed update.

If you want to host the script yourself, please download the files in the public folder and upload them to a folder on your server. The script tag needs to link to the javascript file on your domain.

## Options
This tool is completely customizable, but provides the default options using the `bewatched-options` file. To personalize it, replace the `bewatched-options` script tag with a new script tag, before the main script, and add a global javascript object called `BWAV_SETTINGS`.

Your code should now look like this:
```html
<script>
  window.BWAV_SETTINGS = {
    // custom options here
  };
</script>
<script src="link/to/bewatched-age-verification.v.0.0.1.js"></script>
```

For this version, the following options are available:

| key | description | default value |
| --- | --- | --- |
| `debug` | (true/false) Enable or disable logging | `false`
| `close` | (true/false) Enable or disable a close button at the top-right corner of the overlay | `false`
| `accentColor` | (hex string) The color used for highlights, buttons, links | `green`
| `accentTextColor` | (hex string) The color used for text in highlighted buttons | `white`
| `shadowColor` | (rgba string) The color used for shadows, for example the shadow underneath the logo / avatar | `rgba(0,128,0,.25)`
| `ageCheck` | (true/false) Enable or disable the age check screen (first screen) | `false`
| `blur` | (true/false) Enable or disable blurring the original site content | `false`
| `modelsURL` | (url) CDN url to models array | `https://URL/TO/CDN`
| `models` | (array) A list of models with own properties (see below for details), overwritten by data from modelsURL if present | `[{ avatar: '', underaged: false, gender: 'f' }]`
| `cookieAge` | (number) The lifetime of the cookie that is set when you close the popup, in days | `30`
| `cookieName` | (string) The name of the cookie that is set | `30`
| `cookieShowMax` | (number) The amount of times the survey will open on load. Setting this to `0` will disable the check. | `0`
| `eventPrefix` | (string) A prefix for the events that are triggered by this tool (see below for details) | `bwav:`
| `content` | (object) A key/value list of all text used in this tool, to customize or translate as you wish (see below for details) | `{ key: 'value' }`
| `brand` | (object) A set of options to add branding, containing the brand `name`, `logo` url and the website `url` | `{ name: '', logo: '', url: '' }`

### Content
As mentioned before in the options, the content is a key/value list (object) that contains a set of words and sentences used in this tool. Here are the default values:

```js
{
  agecheck: 'This is an <strong>adult-only</strong> website',
  consent: 'By continuing to browse this website, you aggree to our <a href="#">cookie policy</a> and <a href="#">terms and conditions</a>.',
  consentButton: 'I am older than 18',
  agecheckFooter: '<a href="#">More information</a>',
  close: 'Go to the website',
}
```
### Models
Each model has the following properties:
| key | description | default value |
| --- | --- | --- |
| `id` | (string/number) An id, can be useful for debugging or tracking, not used in the script | `1`
| `avatar` | (string) Link to an image of the model, used above the question and outcome | `path/to/image.jpg`
| `underaged` | (true/false) A value to indicate if the model in question is underaged or not | `false`
| `gender` | ('x' / 'f' / 'm') The gender of the model, used for adapting the content to represent the correct gender type | `x`

A model object should look something like this
```js
{
    id: 1,                        // can be useful for tracking
    avatar: 'path/to/image.jpg',  // model image
    underaged: false,             // under 18?
    gender: 'x',                  // x = undefined, f = female, m = male
}
```

> Important note: if you want to use your own set of models, make sure to clear the `modelsURL`parameter, because by default, this is being called to get models from the CDN.

### Logos
The logos in the footer are a fixed combination of the `brand` values and the Child Focus logo.

## Events
All valuable interactions with this plugin fire a custom event on the window object. This can be used for reacting to certain events, or for tracking. Here you can find a list of events, and when they fire. Please keep in mind that these events are **prefixed** with the `BWAV_SETTINGS.eventPrefix`.

| event name | description | data passed
| --- | --- | --- |
| `on_init` | Fired just before the tool is initialized, on `DOMContentLoaded` | the complete settings object
| `after_init` | Fired just after the tool is initialized, when the styles are injected, the base HTML is set up and optional classes are added to the body | `null`
| `on_start` | Fired when the survey starts, so after the optional age check is accepted and age verification of the model has started | `{ model: {...}, cookie: 'cookie value' }`
| `on_answer` | Fired when the user answers the age verification question | `{ answer: (true/false), model: {...}, correct: (true/false) }`
| `on_close` | Fired when a user closes the popup, by using the dedicated but optional close button, or by using the 'go to website' button in the last step | `{ model: {...} }`

# Contributing
As the current MIT license states, you are free to use, download, adapt this tool as you wish. This repository contains a taskmanager setup to optimize all files using `Gulp` and `Webpack`. Please see the `taskmanager/README.md` file for more information on how to use the taskmanager and the available commands.

The files in the `src` folder will be optimized and pushed to the `public` folder. Keep in mind that the taskmanager will delete the contents of the public folder when used.

# Attributions
This tool is created by [Wunderman Thompson Antwerp](https://www.wundermanthompson.be) for [Child Focus](https://www.childfocus.be).

# Changelog
## v0.0.1
The beta version used in development of the first version of this plugin.