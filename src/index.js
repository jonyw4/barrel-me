#!/usr/bin/env node
const { lstatSync, readdirSync, writeFile } = require("fs");
const { join, basename } = require("path");
var argv = require("yargs")
  .describe("d", "Directories for generate file")
  .array("d")
  .demandOption(["d"])
  .describe("n", "Name with extension of generated file")
  .default("n", "index.js")
  .describe("q", "Name with extension of generated file")
  .choices('q', ['single', 'double'])
  .default("q", "single")
  .argv;

const isDirectory = (source) => lstatSync(source).isDirectory();
const getDirectories = (source) =>
  readdirSync(source)
    .map((name) => join(source, name))
    .filter(isDirectory);

const quote = argv.q === 'single' ? "'" : '"';

argv.d.forEach(function(directory){
  // @ts-ignore
  const directoryPath = directory;
  const listOfDirectories = getDirectories(directoryPath);

  let contentFile = '';
  listOfDirectories.forEach(function (directory){
    const directoryBaseName = basename(directory);

    contentFile += `export { default as ${directoryBaseName} } from ${quote}./${directoryBaseName}${quote};\n`;
    contentFile += `export * from ${quote}./${directoryBaseName}${quote};\n\n`;
  });

  writeFile(join(directoryPath, argv.n), contentFile, function (err) {
    if (err) console.error("Can't create a index file", err);
    console.log("Create a index file with success in folder: " + directory);
  });
})

