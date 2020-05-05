const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const isProductionBuild = argv.mode === "production";
  const publicPath = '/final-project/';                               // указывает где должен лежать проект. если папка dist лежит еще где то, то необходимио будет изменить адрес

  const pcss = {
    test: /\.(p|post|)css$/,          // проверяет если в конце файла будет стоять . p post css то выполнит инструкции
    use: [
      isProductionBuild ? MiniCssExtractPlugin.loader : "vue-style-loader",   // если сборка для разработки, то выполнить все снизу вверх. верх - добавить путь в .html для подключения css
      "css-loader",         //склеить файлы в css
      "postcss-loader"        // преобразовать файлы из postcss в css
    ]
  };

  const vue = {
    test: /\.vue$/,
    loader: "vue-loader"
  };

  const js = {
    test: /\.js$/,
    loader: "babel-loader",
    exclude: /node_modules/,
    options: {
      presets: ['@babel/preset-env'],
      plugins: ["@babel/plugin-syntax-dynamic-import"]
    }
  };

  const files = {
    test: /\.(png|jpe?g|gif|woff2?)$/i,
    loader: "file-loader",
    options: {
      name: "[hash].[ext]"
    }
  };

  const svg = {
    test: /\.svg$/,
    use: [
      {
        loader: "svg-sprite-loader",
        options: {
          extract: true,
          spriteFilename: svgPath => `sprite${svgPath.substr(-4)}`
        }
      },
      "svg-transform-loader",
      {
        loader: "svgo-loader",
        options: {
          plugins: [
            { removeTitle: true },
            {
              removeAttrs: {
                attrs: "(fill|stroke)"
              }
            }
          ]
        }
      }
    ]
  };

  const pug = {
    test: /\.pug$/,
    oneOf: [
      {
        resourceQuery: /^\?vue/,
        use: ["pug-plain-loader"]
      },
      {
        use: ["pug-loader"]
      }
    ]
  };

  const config = {
    entry: {
      main: "./src/main.js",                    // пути за которыми нужно следить основной файл
      admin: "./src/admin/main.js"              // админка
    },
    output: {
      path: path.resolve(__dirname, "./dist"),        // куда ложить готовые файлы. path.resolve - модуль для работы с путями
      filename: "[name].[hash].build.js",               // порядок формирования имени конечного файла
      publicPath: isProductionBuild ? publicPath : "",
      chunkFilename: "[chunkhash].js"               // как будет называться файл для зависимостей (vue, jquery и т.п.)
    },
    module: {
      rules: [pcss, vue, js, files, svg, pug]     // правила для обработки зависимостей
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",                      // если будет где нибудь будет прописано подключение vue то будет подключен именно указанный путь
        images: path.resolve(__dirname, "src/images")     // для удобства нужно указать будет только папку и название файла
      },
      extensions: ["*", ".js", ".vue", ".json"]     // если прописать IMPORT "././" ТО БУдет искать файлы с указанными расширениями
    },
    devServer: {
      historyApiFallback: true,
      noInfo: false,
      overlay: true,
    },
    performance: {
      hints: false        // подсказки webpack
    },
    plugins: [
      new HtmlWebpackPlugin({           // плагин для сборки html
        template: "src/index.pug",      // какой файл взять для сборки html
        chunks: ["main"]                // какой файл подключить в index.pug
      }),
      new HtmlWebpackPlugin({
        template: "src/admin/index.pug",
        filename: "admin/index.html",
        chunks: ["admin"]
      }),
      new SpriteLoaderPlugin({ plainSprite: true }),      // собирает файл спрайта, без его спрайт будет подключен прямо в html
      new VueLoaderPlugin()
    ],
    devtool: "#eval-source-map"         //сорсмапы
  };

  if (isProductionBuild) {          // проверка на продакщн или девелопер
    config.devtool = "none";
    config.plugins = (config.plugins || []).concat([
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: '"production"'
        }
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
        chunkFilename: "[contenthash].css"
      })
    ]);

    config.optimization = {};

    config.optimization.minimizer = [
      new TerserPlugin({                  // сжатие js
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})       //сжатие css
    ];
  }

  return config;
};
