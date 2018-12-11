const webpack = require('webpack');
const path = require('path');
module.exports = {
    mode:'production',
    entry:'./src/assets/js/app.js',
    output:{
        path:path.resolve(__dirname,'public/js'),
        filename:'app.js',
        publicPath:'./public'
    },
    watch: true,
    module: {
      rules: [
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          loader: "babel-loader" 
        },
        {
          test: /\.scss$/,
          use: [
              "style-loader", // creates style nodes from JS strings
              "css-loader", // translates CSS into CommonJS
              "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
        }
      ]
    },
     devServer: {
      historyApiFallback: true,
      overlay: true
    },
    performance: {
      hints: false
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
      },

      plugins:[]
      
};

if(process.env.NODE_ENV === "production"){
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourcemap:true,
            compress:{
                warnings:false
            }
        })
    );


    module.exports.plugins.push(
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:'production'
            }
        })
    );
}
