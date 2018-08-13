// /const outputDirectory = 'client';

var config = {
   entry: './main.js',
    output: {
      path:'/',
      filename: 'index.js',
   },
 //   output: {
 //      path: path.join(__dirname, outputDirectory),
 //      filename: 'index.js',
 //      publicPath: '/'
 // },
   // output: {
   //    path:'__dirname',
   //    filename: 'index.js'
   // },
   devServer: {
      inline: true,
      port: 4444
   },
   node: {
   fs: "empty"
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
module.exports = config;