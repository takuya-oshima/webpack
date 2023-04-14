const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map', //ソースマップを出力させるオプション
  devServer: {
    watchFiles: ['src'], //watch対象ファイル・ディレクトリの指定
    hot: true,
    open: true, //webpack-dev-sever起動時にブラウザを自動で起動
  },
	watchOptions: {
		ignored: /node_modules/  //正規表現で指定（node_modules を除外）
  },
});
