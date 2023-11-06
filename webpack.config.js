const path = require("path"); // variavel necessaria para poder utilizar o path.resolve(); | esté estilo é padrão do node const constante = require(); | e o nome da constante é igual ao nome do modulo que você precisa
const miniCssWebpackPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: "development", // modelo
  entry: {
    home: "./src/js/home.js",
    login: "./src/js/login.js",
    search: "./src/js/search.js",
    item: "./src/js/item.js",
    config:  "./src/js/config.js",
    register: "./src/js/register.js"
  }, // o arquivo que eu quero que ele vai tomar como padrão
  output: {
    path: path.resolve(__dirname, "public", "assets", "js"), // _dirname: é referente a este arquivo
    filename: "[name].bundle.js", // informa o nome do arquivo que ele irá criar na rota de cima
  },
  module: {
    rules: [
      {
        // definindo as regras do webpack
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
      {
        exclude: /node_modules/,
        test: /\.css$/i,
        use: [
          {
            loader: miniCssWebpackPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new miniCssWebpackPlugin({
      filename: "../css/[name].style.css",
    }),
  ],
  devtool: "source-map", // ele informa aonde no seu arquivo aconteceu o erro, se você não colocar ele vai apontar o erro no arquivo bundle exemplo tenho 35 arquivo deu um erro em um deles chamado pessoa, ele vai apontar o erro no bundle linha 6981, então vai ter que fazer conta para saber qual dos seus aarquivo que ocorreu o erro
};
