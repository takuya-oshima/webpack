# webpack

Web制作の案件で使うために構築した、webpackの開発環境です。

## 使用技術

webpack / Babel / Sass / PostCSS（Autoprefixer）/ Tailwind CSS / EJS / Pug

## できること

- 開発用と本番用で設定ファイルを分けて管理（`webpack.dev.js` / `webpack.prod.js`）
- BabelによるJavaScriptの変換と、本番ビルド時の圧縮
- Sassのコンパイル、ベンダープレフィックスの付与、CSSファイルの書き出し
- EJS / PugのテンプレートからHTMLを生成
- 画像の圧縮
- webpack-dev-serverによるローカル開発サーバー

## 使い方

```bash
npm install
npm run dev     # 開発サーバーを起動
npm run build   # 本番用にビルド
```
