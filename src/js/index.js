//scssの読み込み
import '../sass/style.scss';

//jQueryの読み込み
import jQuery from 'jquery';


//バンドルしたいjsファイルを下記に記載
//import { 関数名 } from "./ファイル名.js";
//関数名();

//slick-custom.jsの読み込み
import { slickCustom } from "./slick-custom.js";
slickCustom();

//animation.jsの読み込み
import { animation } from "./animation.js";
animation();

//form.jsの読み込み
import { form } from "./form.js";
form();

//common.jsの読み込み
import { common } from "./common.js";
common();

