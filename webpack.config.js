const path = require("path");

module.exports = {
  entry: {
    bundle: "./src/index.tsx",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  target: ["web", "es5"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath: "dist/",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
  },
};
