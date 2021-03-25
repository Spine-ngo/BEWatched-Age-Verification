# BEWatched-Age-Verification

A completely customizable age verification tool with an added survey to create awareness for underaged sex workers.

## Usage
Implementing the basic plugin is as easy as including a script tag in your current website. We provide a hosted version of this script here:

```html
<script src="https://link.to.cdn/bewatched-age-verification.v.0.0.1.js"></script>
```

To avoid issues when updates are being published to this tool, a versioning system is included in the url. This makes it easy for webmasters to test updates, or to remain on a fixed update.

If you want to host the script yourself, please download the files in the public folder and upload them to a folder on your server. The script tag needs to link to the javascript file on your domain.

## Options
This tool is completely customizable. To personalize it, add a script tag before implementing the main script, and add a global javascript object called `BWAV_SETTINGS`.

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
| `logo` | (url string) A relative or absolute path to the logo for the age check | `images/logo.png`
| `ageCheck` | (true/false) Enable or disable the age check screen (first screen) | `true`
| `blur` | (true/false) Enable or disable blurring the original site content | `false`
| `blur` | (array) A list of models with own properties (see below for details) | `[{ avatar: '', underaged: false, gender: 'f' }]`