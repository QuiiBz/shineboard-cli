#!/usr/bin/env node


// Require the esm module to get
// ES6 modules
require = require('esm')(module);

// Require the entry point of the
// CLI application
const cli = require('../src/cli');

// Launch the CLI application
cli.cli(process.argv);
