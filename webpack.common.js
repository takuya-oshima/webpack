const path = require('path'); //path モジュールの読み込み
const CopyWebpackPlugin = require('copy-webpack-plugin'); //指定したファイルをコピー
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin'); //画像ファイルを圧縮
const globule = require('globule') //ファイルを取得するプラグイン
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //cssをlinkで出力するプラグイン
const HtmlWebpackPlugin = require('html-webpack-plugin'); //htmlを出力するプラグイン
const TerserPlugin = require('terser-webpack-plugin'); //パッケージのライセンス情報をjsファイルに含める
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //ビルド時に出力先フォルダを削除する


const distPath = path.resolve(__dirname,'dist') //出力先ディレクトリ名を指定


const srcPath = { //入力先ディレクトリ名を指定
  pug:  './src/pug/',
  ejs:  './src/ejs/',
	sass: './src/scss/',
	css:  './src/css/',
  img:  './src/img/',
  js:   './src/js/',
};


const app = {
  entry: './src/js/index.js', //参照元メインJSファイル（エントリーポイント）
  output: {
    path: distPath, //出力先ディレクトリ
    filename: 'js/bundle.js', //出力先ファイル名
  },
  performance: { //パファーマンスサイズに上限設定
    maxEntrypointSize: 500000,
    maxAssetSize: 500000,
  },
	optimization: {
		minimizer: [
			new TerserPlugin({ //パッケージのライセンス情報をjsファイルの中に含める
				extractComments: false,
			}),
		],
	},
  module: {
    rules: [
      { //JS（Babel）
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
      { //scssコンパイル
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
      { //pug
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
      { //ejs
        test: /\.ejs$/i,
        use: [
					{
            loader: 'html-loader',
            options: {
							//ファイルの自動読み込みと圧縮を無効化
							sources: false,
              minimize: false,
            },
          },
          {
            loader: 'template-ejs-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), //build時にdistフォルダを削除
    new CopyWebpackPlugin({ //画像フォルダの構成をコピー
      patterns: [
        {
          from: srcPath.img,
          to: 'img/',
        },
      ]
    }),
    new ImageMinimizerPlugin({ //画像の圧縮
      test: /\.(png|jpe?g|gif)$/i,
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
      generator: [
        {
          type: 'asset',
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ['webp', { quality: 75 }], // webpの設定
            ]
          },
        },
      ],
    }),
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
      inject: 'body', //JSファイルの出力される箇所
			minify: false,
    }),
  )
});

const ejsPaths = globule.find({
  src: ['src/ejs/**/*.ejs', '!src/ejs/**/_*.ejs']
});
ejsPaths.forEach(function(ejsPath) {
  const filename = ejsPath.replace('src/ejs/', '').replace('.ejs', '.html');
  app.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'css/style.min.css', //cssファイル名を指定
    }),
    new HtmlWebpackPlugin({
      template: ejsPath,
      filename,
      inject: 'body', //JSファイルの出力される箇所
			minify: false,
    }),
  )
});

module.exports = app
