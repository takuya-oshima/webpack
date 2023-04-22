export function animation() {
  $(function () {

		//cookie
		$('#js-cookie').show();
		if($.cookie('Flg') == 'on'){
			$('#js-cookie').hide();
		}else{
			$('#js-cookie').show();
		}
		$('#js-close-cookie').click(function(){
			$('#js-cookie').fadeOut();
			$.cookie('Flg', 'on', { expires: 3650,path: '/' });
		});

		//セミナー検索日付クリア
		$('#js-reset-seminar-date').click(function() {
			$('#date-start, #date-end').val('');
		});

		// TOPキャッチスライドイン
		$('.js-top-catch').addClass('is-show-top-catch');

		// ページタイトルスライドイン
		$('.js-page-title').addClass('is-show-page-title');


		//TOPメッセージ表示
		$('#js-show-message').click(function () {
			$('.top-modal-message').addClass('is-show');
			$('html,body').addClass('fiexd');
			$('#js-top-mainvisual').slick('slickPause');
		});
		$('#js-close-messege').click(function () {
			$('.top-modal-message').removeClass('is-show');
			$('html,body').removeClass('fiexd');
			$('#js-top-mainvisual').slick('slickPlay');
		});


		//SPメニュー開
		$('#js-sp-menu').click(function () {
			$(this).toggleClass('open');
			$('.header-globalnavi').slideToggle(300);
			$('html,body').toggleClass('fiexd');
		});


		//SPサブメニュー開
		$('.js-action-menu').click(function () {
			$(this).toggleClass('open');
			$(this).find('.globalnavi-sub-list').slideToggle(300);
		});


		//PCヘッダースクロール(TOP)
		let topHeader = $('#js-header-top');

		$(window).scroll(function () {
			if ($(window).scrollTop() > 10) {
				$(topHeader).addClass('active');
			} else {
				$(topHeader).removeClass('active');
			}
		});


		//PCヘッダーホバー（TOP）
		$(topHeader).hover(
			function () {
				if ($(window).scrollTop() > 10) {
					$(this).addClass('active');
				} else {
					$(this).addClass('active');
				}
			},
			function () {
				if ($(window).scrollTop() == 0) {
					$(this).removeClass('active');
				} else {
					$(this).addClass('active');
				}
			}
		)


		//PCサブメニュー開
		$('.js-action-menu').hover(
			function () {
				$(this).find('.globalnavi-sub-list').addClass('active');
			},
			function () {
				$(this).find('.globalnavi-sub-list').removeClass('active');
			}
		)


		//ページトップ
		$('#js-pagetop').click(function () {
			$('body,html').animate({ scrollTop: 0 }, 200);
			return false;
		});


		// アンカーリンク（スムーススクロール）
		$('a[href^="#"]').click(function () {
			let headerHeight = 150; //ヘッダーの高さ
			let adjust = 0;
			let speed = 200;
			let href = $(this).attr('href');
			let target = $(href == "#" || href == "" ? 'html' : href);
			let position = target.offset().top - headerHeight + adjust;
			$('body,html').animate({ scrollTop: position }, speed, 'swing');
			return false;
		});
		// 別ページの場合
		$(window).on('load', function() {
			let headerHeight = 150; //ヘッダーの高さ
			let urlHash = location.hash;
			if (urlHash) {
				let position = $(urlHash).offset().top - headerHeight;
				$('html, body').animate({ scrollTop: position }, 0);
				let target = $(urlHash == "#" || urlHash == "" ? 'html' : urlHash);
				if(target.hasClass('is-opened')) {
					target.removeClass('is-opened');
				} else {
					target.addClass('is-opened');
				}
				target.next().slideToggle();
			}
		});


		// コンテンツのフェードアップ
		$(window).on('load scroll', function (){
			$('.js-fadeUp').each(function () {
				let position = $(this).offset().top;
				let scroll = $(window).scrollTop();
				let windowHeight = $(window).height();
				if (scroll > position - windowHeight + 200) {
					$(function () {
						$('.js-fadeUp').each(function (i) {
							$(this).delay(i * 200).queue(function () {
								$(this).addClass('is-fadeUp');
							});
						});
					});
				}
			});
		});


		//スクロールアニメーション（ブロック・ボックス）
		$(window).on('load scroll', function (){
			let block = $('.js-box-animation');
			let animated = 'is-box-animated';
			block.each(function(){

				let blockOffset = $(this).offset().top;
				let scrollPos = $(window).scrollTop();
				let wh = $(window).height();

				if(scrollPos > blockOffset - wh + 300 ){
					$(this).addClass(animated);
				}
			});
		});


		//スクロールアニメーション（ステップアップ・スケジュール）
		$(window).on('load scroll', function (){
			let careersCase = $('.js-item-animation');
			let animated = 'is-item-animated';
			careersCase.each(function(){

				let careersCaseOffset = $(this).offset().top;
				let scrollPos = $(window).scrollTop();
				let wh = $(window).height();

				if(scrollPos > careersCaseOffset - wh + 300 ){
					$(this).addClass(animated);
				}
			});
		});


		//アコーディオン
		$('.js-accordion').click(function() {
			let target = $(this);
			if(target.hasClass('is-opened')) {
				target.removeClass('is-opened');
			} else {
				target.addClass('is-opened');
			}
			target.next().slideToggle();
		});

		//地方・海外事務所一覧（SP）エリアクリック後
		$('.accordion-menu-item a').click(function() {
			if($('.accordion-menu-header').hasClass('is-opened')) {
				$('.accordion-menu-header').removeClass('is-opened');
				$('.accordion-menu-list').css('display','none');
			}
		});

		//地方・海外事務所一覧（PC）事務所クリック後アコーディオン開
		$('.area-link-item a').click(function() {
			let href = $(this).attr('href');
			let target = $(href == "#" || href == "" ? 'html' : href);
			if(target.hasClass('is-opened')) {
				target.removeClass('is-opened');
			} else {
				target.addClass('is-opened');
			}
			target.next().slideToggle();
		});

	});
}
