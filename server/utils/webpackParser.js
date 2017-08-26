const fs = require('fs');

const sassRule = {
  test: "/\\.scss$/",
  use: [
    { loader: "style-loader" }, 
    { loader: "css-loader" }, 
    { loader: "sass-loader" }
  ],
};

const imageLoaderRule = {
  test: "/\\.(gif|png|jpe?g|svg)$/i",
  loaders: [
    {
      loader: 'file-loader',
      options: {
        name: 'assets/[name].[ext]'
      }
    },
    {
      loader: 'image-webpack-loader',
      options: {
        query: {
          mozjpeg: {
            progressive: true,
          },
          gifsicle: {
            interlaced: true,
          },
          optipng: {
            optimizationLevel: 7,
          },
        }
      },
    }
  ]
};

// OPTIONS: outputFileName: string, useSass: boolean, webpackImageLoader: boolean
// -------------------------------------------------------------------------------

function webpackParser(options) {
  fs.readFile('./server/utils/templates/webpackTemplate.js', 'utf8', (err, data) => {
    if (err) throw err;
    fs.writeFile('./store/test/testDestWebpack.js', data, (writeErr) => {
      if (writeErr) throw writeErr;
      fs.readFile('./server/utils/templates/webpack.json', 'utf8', (err2, data1) => {
        if (err2) throw err;
        const webpackSettings = JSON.parse(data1);
        webpackSettings.output.filename = options.outputFileName || webpackSettings.output.filename;
        if (options.useSass) webpackSettings.module.rules[1] = sassRule;
        if (options.webpackImageLoader) webpackSettings.module.rules.push(imageLoaderRule)
        // TODO: Check out a way to prettify the output. Currently output is not well formatted
        fs.appendFile('./store/test/testDestWebpack.js', JSON.stringify(webpackSettings, null, 1), (err1) => {
          if (err1) throw err1;
          console.log('filelistAsync complete');
        });
      });
    });
  });
}

webpackParser({ useSass: true, webpackImageLoader: true })

module.exports = webpackParser;
