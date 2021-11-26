// vite.config.js
const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        chunkSizeWarningLimit: 1000,
    }
  })

