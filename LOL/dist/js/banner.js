
//点击按钮的时候，可以切换到对应的图片
    define(["jquery"], function($) {
		function bannerMain(){
			var aBtns = $("#main_looper").find("ol li");
			var oUl = $("#main_looper").find("ul");
			var iNow = 0; //记录要显示的图片的下标
			var timer = null; //轮播效果的定时器
			
			//给整个轮播图加一个移入移出
			$("#main_looper")
			  .mouseenter(function () {
			    clearInterval(timer);
			  })
			  .mouseleave(function () {
			    timer = setInterval(function () {
			      iNow++;
			      tab();
			    }, 2000);
			  });
			
			timer = setInterval(function () {
			  iNow++;
			  tab();
			}, 2000);
			
			// 给所有的按钮添加点击
			aBtns.mouseenter(function () {
			  iNow = $(this).index();
			  tab();
			});
		
			
			function tab() {
			  aBtns.removeClass("active").eq(iNow).addClass("active");
			  if (iNow == 5) {
			    aBtns.eq(0).addClass("active");
			  }
			
			  oUl.animate({ left: -820 * iNow }, 500, function () {
			    if (iNow == 5) {
			      iNow = 0;
			      oUl.css("left", 0);
			    }
			  });
			}			
			}
		
		 return {
		    bannerMain: bannerMain
		  }
		});
	  