const path = require('path');

module.exports={
  entry: "./frontend/js/app.js",
  output: {
    path: path.resolve(__dirname)+"/frontend",
    filename: "__bundle.js"
  }
}