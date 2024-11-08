const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point for the React app
  output: {
    path: path.resolve(__dirname, "dist"), // Output folder for the production build
    filename: "bundle.js", // Output file
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/, // Match JS and JSX files
        exclude: /node_modules/, // Don't transpile code in node_modules
        use: {
          loader: "babel-loader", // Use Babel for transpiling
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Use env and react presets
          },
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: ["style-loader", "css-loader"], // Inject CSS into the DOM and process CSS
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve JS and JSX extensions
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // Serve static files from the 'public' folder
    },
    hot: true, // Enable Hot Module Replacement (HMR)
    open: false, // Open the browser when the server starts
    port: 8080, // Port number for the dev server
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Template HTML file for React app
    }),
  ],
};
