const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9j25yf',

  "pageLoadTimeout": 100000,
  "chromeWebSecurity": true,
  e2e: {
    baseUrl: 'https://192.168.0.101/',
    experimentalSessionAndOrigin: true,
    testIsolation: false,
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
      
    },
  },
});
