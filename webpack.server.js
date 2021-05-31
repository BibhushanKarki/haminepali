const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server/index.js",

  target: "node",

  externals: [nodeExternals()],

  output: {
    path: path.resolve("server-build"),
    filename: "index.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"],
      },

      //   {
      //     test: /\.(jpg|png|gif)$/,
      //     use: [
      //       {
      //         loader: "url-loader",
      //         options: {
      //           // Inline files smaller than 10 kB
      //           limit: 10 * 1024,
      //         },
      //       },
      //       "img-loader",
      //       //   {
      //       //     loader: "image-webpack-loader",
      //       //     options: {
      //       //       disable: true,
      //       //       mozjpeg: {
      //       //         enabled: false,
      //       //         // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
      //       //         // Try enabling it i
      //       //         // Try enabling it in your environment by switching the config to:
      //       //         // enabled: true,
      //       //         // progressive: true,
      //       //       },
      //       //       gifsicle: {
      //       //         interlaced: false,
      //       //       },
      //       //       optipng: {
      //       //         optimizationLevel: 7,
      //       //       },
      //       //       pngquant: {
      //       //         // quality: [0.65, 0.9],
      //       //         speed: 4,
      //       //       },
      //       //     },
      //       //   },
      //     ],
      //   },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },

      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
          },
        },
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: "file-loader",
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
};
