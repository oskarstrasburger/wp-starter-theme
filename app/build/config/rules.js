const ExtractTextPlugin = require('extract-text-webpack-plugin')  ;
const autoprefixer = require('autoprefixer')  ;

module.exports = [
  // JAVASCRIPT
  {
    test: /\.js$/,
    loader: ExtractTextPlugin.extract({
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-es2015']
          }
        }
      ]
    })
  },
  // SASS
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: () => [autoprefixer]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ],
      fallback: 'style-loader'
    })
  }
];
