const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "./js/dashboard_main.js"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    // Corrected from "modules" to "module"
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,  // Optimize images
        loader: "image-webpack-loader",
        enforce: "pre",
        options: {
          bypassOnDebug: true,
          disable: true,
        },
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
