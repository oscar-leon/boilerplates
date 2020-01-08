const path = require("path");

module.exports = {
  root: path.resolve(__dirname, "../"),
  outputPath: path.resolve(__dirname, "../", "build"),
  entryPath: path.resolve(__dirname, "../", "src/index.js"),
  templatePath: path.resolve(__dirname, "../", "src/templates/index.html"),
  jsFolder: "js",
  cssFolder: "css",
  imagesFolder: "images",
  fontsFolder: "fonts"
};
