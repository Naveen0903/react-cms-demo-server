// next.config.js
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(withSass({
        cssLoaderOptions: {
            url: false
        },
        publicRuntimeConfig: {
            BACKEND: "http://localhost:5300/api",
            LOG_LEVEL: 'debug'
        }
    })
);
