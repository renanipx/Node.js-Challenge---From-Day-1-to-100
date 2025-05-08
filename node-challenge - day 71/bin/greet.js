#!/usr/bin/env node

const greet = require('../lib/greet');

// Get the name argument
const args = process.argv.slice(2);
const name = args[0];

if (!name) {
  console.log("Usage: greet <name>");
  process.exit(1);
}

greet(name);
