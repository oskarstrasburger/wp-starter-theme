const path = require('path');
const rules = require('./config/rules');

module.exports = {
  entry: {
    main: './assets/js/main.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../../public'),
  },
}

