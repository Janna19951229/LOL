
// 轮播图

//点击按钮的时候，可以切换到对应的图片
define(["jquery" ,"jquery-cookie"], function($) {
    function shopBanner(){
        var aBtns = $("#main_looper").find("ol li");
        var oUl = $("#main_looper").find("ul");
        var iNow = 0; //记录要显示的图片的下标
        var timer = null; //轮播效果的定时器

        
        timer = setInterval(function () {
          iNow++;
          tab();
        }, 3000);
        
        // 给所有的按钮添加点击
        aBtns.click(function () {
          iNow = $(this).index();
          tab();
        });
    
        
        function tab() {
          aBtns.removeClass("active").eq(iNow).addClass("active");
          if (iNow == 4) {
            aBtns.eq(0).addClass("active");
          }
        
          oUl.animate({ top: -636 * iNow }, 0, function () {
            if (iNow == 4) {
              iNow = 0;
              oUl.css("top", 0);
            }
          });
        }		
        
        
           // 设置购物车的总数量
           var cookieArr = JSON.parse($.cookie('goods'));
                            
           var sum = 0;
  
          //  console.log(cookieArr.length);
           for(let i = 0; i < cookieArr.length; i++){
               sum += cookieArr[i].num;
              //  console.log(sum);
  
               $('.login_bar em').html(sum);
           }
        }

    		// 账号登录
		function login(){
			console.log('login');
			$('.loginqq').on('click',function(){
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
        $('.loginqq .mtxt').html('你好， 召唤师');
        $('.loginqq .mtxt').css('color','#fff');
				$('#user_log i').css('display','none');
				$('body').css('opacity','1');
      })
      
      

		}

    
     return {
        shopBanner: shopBanner,
        login:login,
      }
    });
  