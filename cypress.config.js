const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    specPattern: "testscripts/*.cy.js",   // test file location
    video: true,                          // enable video recording
    screenshotOnRunFailure: true,         // auto screenshots on failure
    setupNodeEvents(on, config) {
      // add node event listeners only if needed
    }
  }
})
