# Getting Started for Developers
- run `git clone https://github.com/Spine-ngo/BEWatched-Age-Verification`
- run `npm install`
- run `npm run watch`
- open the `/index.html` file in your browser <br>
(for WebStorm users, right click the `/index.html` file and select `Open in Browser`)

# Configurations
```javascript
AgeVerification.prompt({
    minimumAge: 18, // minimum age to allow access (default 18)
    disableScrolling: true, // disable scrolling when age verification modal is open (default true)
    backgroundBlur: true, // blur background when age verification modal is open (default true)
    branding: {
        name: "Lorem Ipsum", // name of the website
        logo: "/logo.png", // URL to logo of the website
        links: {
            cookies: "/cookies", // URL to cookies policy page
            termsOfService: "/tos" // URL to terms of service page
        }
    },
    styling: {
        primaryColor: "#ff4444" // primary color of the website
    },
    cookie_ttl: 2592000, // time to live of the cookie in seconds (default 2592000 (30 days))
    country: "NL", // no functionality yet
    primary_language: "NL", // the primary language for the website,
    exit: false // false to disable, (default false)
                // true to clear page,
                // a string to redirect to a URL,
                // a callback function for own handling
});
```
