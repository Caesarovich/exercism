#!/usr/bin/env node

// The above line is a shebang. On Unix-like operating systems, or environments,
// this will allow the script to be run by node, and thus turn this JavaScript
// file into an executable. In other words, to execute this file, you may run
// the following from your terminal:
//
// ./grep.js args
//
// If you don't have a Unix-like operating system or environment, for example
// Windows without WSL, you can use the following inside a window terminal,
// such as cmd.exe:
//
// node grep.js args
//
// Read more about shebangs here: https://en.wikipedia.org/wiki/Shebang_(Unix)

const fs = require('fs');
const path = require('path');

/**
 * Reads the given file and returns lines.
 *
 * This function works regardless of POSIX (LF) or windows (CRLF) encoding.
 *
 * @param {string} file path to file
 * @returns {string[]} the lines
 */
function readLines(file) {
  const data = fs.readFileSync(path.resolve(file), { encoding: 'utf-8' });
  return data.split(/\r?\n/);
}

const VALID_OPTIONS = [
  'n', // add line numbers
  'l', // print file names where pattern is found
  'i', // ignore case
  'v', // reverse files results
  'x', // match entire line
];

const ARGS = process.argv.slice(2);

//
// This is only a SKELETON file for the 'Grep' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// This file should *not* export a function. Use ARGS to determine what to grep
// and use console.log(output) to write to the standard output.

const linesFound = [];

const flags = new Set()

while (ARGS[0]?.startsWith('-')) {
  const flag = ARGS.shift();

  if (!VALID_OPTIONS.includes(flag[1])) continue;

  flags.add(flag[1]);
}

const pattern = flags.has('i') ?  ARGS.shift().toLowerCase() : ARGS.shift();

const files = [...ARGS];

const isMultipleFiles = files.length > 1;

const grepFile = (filePath) =>  {
  const lines = readLines(filePath);

  for (const lineNumber in lines) {
    const line = lines[lineNumber];

    const matchLine = flags.has('i') ? line.toLowerCase() : line;
    const isMatch = matchLine === pattern || (!flags.has('x') && matchLine.includes(pattern))

    if ((flags.has('v') && !isMatch) || (isMatch && !flags.has('v'))) {
      linesFound.push({line, lineNumber: parseInt(lineNumber) + 1, filePath});
    }
  }
}

for (const file of files) {
  grepFile(file);
}

const printedFilePaths = new Set()

for (const {line, lineNumber, filePath} of linesFound) {
  let result = '';

  if (isMultipleFiles && !flags.has('l')) {
    result += filePath + ':'
  }

  if (flags.has('l')) {
    if (printedFilePaths.has(filePath))
      continue;
    result += filePath;
    printedFilePaths.add(filePath);
  } else if (flags.has('n')) {
    result += lineNumber + ':' + line;
  } else{
    result += line;
  }

  console.log(result);
}