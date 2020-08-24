
// 轮播图

//点击按钮的时候，可以切换到对应的图片
define(["jquery"], function($) {
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
        }
    
     return {
        shopBanner: shopBanner,
      }
    });
  