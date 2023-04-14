const path = require('path'); //path モジュールの読み込み
const CopyWebpackPlugin = require('copy-webpack-plugin'); //指定したファイルをコピー
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin'); //画像ファイルを圧縮
const globule = require('globule') //ファイルを取得するプラグイン
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //cssをlinkで出力するプラグイン
const HtmlWebpackPlugin = require('html-webpack-plugin'); //htmlを出力するプラグイン
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const distPath = path.resolve(__dirname,'dist') //出力先ディレクトリ名を指定

const srcPath = { //入力先ディレクトリ名を指定
  pug: './src/pug/',
  ejs: './src/ejs/',
  img: './src/img/',
  js: './src/js/',
  sass: './src/scss/',
};


const app = {
  devtool: 'source-map', //ソースマップの出力
  mode: 'development',  //productionにすると最適化された状態、developmentにするとソースマップ有効でJSファイル出力
  entry: './src/js/main.js', //参照元メインJSファイル（エントリーポイント）
  output: {
    path: distPath, //出力先ディレクトリ
    filename: 'js/bundle.js', //出力先ファイル名
    //assetModuleFilename: 'img/[name][ext]',
  },
  devServer: {
    watchFiles: ['src'], //watch対象ファイル・ディレクトリの指定
    hot: true,
    open: true, //webpack-dev-sever起動時にブラウザを自動で起動
  },
  module: {
    rules: [
      //JS（Babel）
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { 'targets': '> 0.25%, not dead' }],
              ],
            },
          },
        ],
      },
      //scssコンパイル
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, //スタイルを適用させる
          },
          {
            loader: 'css-loader', //cssファイルを読み込む
            options: {
              url: false, // オプションでCSS内のurl()メソッドの取り込みを禁止する
              importLoaders: 2, // 0 => no loaders (default) 1 => postcss-loader 2 => postcss-loader, sass-loader
              sourceMap: true, //ソースマップを有効にする
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer', { grid: true }], // ベンダープレフィックス（Autoprefixer）を有効化
                  ['cssnano', { preset: 'default' }], //cssのminify化
                ],
              },
            },
          },
          {
            loader: 'sass-loader', //sassファイルを読み込む
          },
        ],
      },
      //画像
      {
        test: /\.(gif|png|jpg|svg)$/,
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
            },
          },
        ],
      },
      //pug
      {
        test: /\.pug/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: srcPath.img,
          to: 'img/',
        }
      ]
    }),
    new ImageMinimizerPlugin({
      test: /\.(png|jpe?g)$/i,
      minimizer: {
        implementation: ImageMinimizerPlugin.squooshMinify,
        options: {
          encodeOptions: {
            mozjpeg: {
              quality: 85,
            },
            oxipng: {
              level: 3,
              interlace: false,
            }
          },
        },
      },
    }),
    /* new MiniCssExtractPlugin({
      filename: 'css/style.min.css', //cssファイル名を指定
    }), */
    /* new HtmlWebpackPlugin({
      template: './src/pug/index.pug',
      filename: 'index.html',
    }), */
  ],
};

//PugをHTMLに出力
 const pugPaths = globule.find({
  src: ['src/pug/**/*.pug', '!src/pug/**/_*.pug']
});
pugPaths.forEach(function(pugPath) {
  const filename = pugPath.replace('src/pug/', '').replace('.pug', '.html');
  app.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'css/style.min.css', //cssファイル名を指定
    }),
    new HtmlWebpackPlugin({
      template: pugPath,
      filename,
      inject: 'body',　//JSファイルの出力される箇所
      minify: false,
    }),
  )
});

module.exports = app
