define(["jquery"],function($){
	// 新闻公告切换
	function newsTab(){
		$('.news_tab_h').on('mouseover', 'li', function(){
			var index = $(this).index();
			$('#news_tab_box #news_tab_content').css('display','none');
			$('#news_tab_box #news_tab_content').eq(index)
			.css('display','block');			
		})
	}

		// 箭头动画
		function arrowsMove(){
	
			$('.moreNews').stop(true).mouseenter(function(){
				// 链式运动
				$('.more-arrow').animate({left:316},150)
				// .delay(2000)
				.animate({left:306}, 150)
				.animate({left:316}, 150)
				.animate({left:306}, 150)
				// .stop(true)
			})	
		}

		// 热门活动交互
		function hotMove(){

			$('.hot-list-u li').hover(function(){
				$(this).animate({top:-10},200)
			},function(){
				$(this).animate({top:0},200)
			})

		
		}

		function hotTab(){
			$('.tab-title').on('mouseover', 'li', function(){
				var index = $(this).index();
				$('.hot-list-u').css('display','none');
				$('.hot-list-u').eq(index)
				.css({
					display:'block',
					"z-index":3
				});					
			})
		}
		
		function hotArrowsMove(){
	
			$('.more,.more_right').stop(true).mouseenter(function(){
				// 链式运动
				$('.more_right').animate({left:805},150)
				// .delay(2000)
				.animate({left:795}, 150)
				.animate({left:805}, 150)
				.animate({left:795}, 150)
				// .stop(true)
			})	
		}

		// gameNav
		function gameNavMove(){

			$('.gameNavMove').on('mouseover', 'i', function(){
				// console.log(10);
				// $('i').css('background-size','cover');
				// $('i').css({
				// 	width:30,
				// 	height:28,
				// 	'background-size':'cover'
				// });
					
			})


		}

		// 版本导航箭头
		function gameArrowsMove(){
	
			$('.week-free').stop(true).mouseenter(function(){
				// 链式运动
				$('.weekFree-center').animate({left:146},150)
				// .delay(2000)
				.animate({left:136}, 150)
				.animate({left:146}, 150)
				.animate({left:136}, 150)
				// .stop(true)
			})	
		}

		// 周边商城 banner切换
		function shopBannerTab(){
			$('.part3-top-tab-u').on('click', 'li', function(){
				var index = $(this).index();
				$('.shop-list1-banner').css('display','none');
				$('.shop-list1-banner').eq(index)
				.css({
					display:'block',
					"z-index":3
				});					
			})
		}

		// 账号登录
		function login(){
			console.log('login');
			$('#user_log').on('click',function(){
				$('#login').css('display','block');
				$('body').css('opacity','0.5');
			})

			$('#login .close').on('click',function(){
				$('#login').css('display','none');
				$('body').css('opacity','1');
			})

			// 判断

			$('.userName').on('blur',function(){
				var userNameV = $('.userName').val();

				if(userNameV.length < 5 || userNameV.length > 15 ){
					strName = `! 请输入正确的账号`;
					$('.nameSpan').html(strName);
					$('.nameSpan').css('display','block');
				}else{
					$('.nameSpan').css('display','none');
				}

			})

			$('.userPwd').on('blur',function(){
				var userPwdV = $('.userPwd').val();

				if(userPwdV.length < 5 || userPwdV .length > 15 ){
					strName = `! 请输入正确的密码`;
					$('.pwdSpan').html(strName);
					$('.pwdSpan').css('display','block');
				}else{
					$('.pwdSpan').css('display','none');
				}

			})


			$('#log_btn').on('click',function(){
				$('#login').css('display','none');
				$('#user_log p').html('你好， 召唤师');
				$('#user_log i').css('display','none');
				$('body').css('opacity','1');
			})

		}

	return{
		newsTab:newsTab,
		arrowsMove:arrowsMove,
		hotMove:hotMove,
		hotTab:hotTab,
		hotArrowsMove:hotArrowsMove,
		gameNavMove:gameNavMove,
		gameArrowsMove:gameArrowsMove,
		shopBannerTab:shopBannerTab,
		login:login,
	}

});