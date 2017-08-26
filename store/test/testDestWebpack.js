const path = require('path');

module.exports ={
 "context": "./client/index.js",
 "entry": {
  "app": [
   "./index.js"
  ]
 },
 "output": {
  "path": "./build",
  "publicPath": "/assets/",
  "filename": "bundle.js"
 },
 "resolve": {
  "extensions": [
   ".js",
   ".json",
   ".jsx"
  ]
 },
 "module": {
  "rules": [
   {
    "test": "/\\.(js|jsx)$/",
    "loader": "babel-loader",
    "query": {
     "presets": [
      "es2015",
      "react"
     ],
     "plugins": [
      "transform-class-properties"
     ]
    }
   },
   {
    "test": "/\\.scss$/",
    "use": [
     {
      "loader": "style-loader"
     },
     {
      "loader": "css-loader"
     },
     {
      "loader": "sass-loader"
     }
    ]
   },
   {
    "test": "/\\.(gif|png|jpe?g|svg)$/i",
    "loaders": [
     {
      "loader": "file-loader",
      "options": {
       "name": "assets/[name].[ext]"
      }
     },
     {
      "loader": "image-webpack-loader",
      "options": {
       "query": {
        "mozjpeg": {
         "progressive": true
        },
        "gifsicle": {
         "interlaced": true
        },
        "optipng": {
         "optimizationLevel": 7
        }
       }
      }
     }
    ]
   }
  ]
 }
}