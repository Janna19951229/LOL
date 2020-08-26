


define([ "jquery","jquery-cookie"], function($){


// 商品详情下载

   function detailsDown(){
      // 下载数据
      $.ajax({
         type:'get',
         url:'../data/shoplist1.json',
         success: function (arr) {
            // console.log(arr);
               var strTitle = ``;
               var strPrice = ``;
               var strImg="";
               
               arr.forEach( (val,key) => {
                  strTitle =  `<h3>${arr[key].content}</h3>`;
                  
                  strPrice =`<span class="left">现价:</span>
                  <span class="right">${arr[key].price}</span> `;

                  strImg = ` <img src=${arr[key].img} alt="">`;

                  // console.log(key);
                  if(window.location.href == arr[key].url){
                     $(".goods_pic").html(strImg);

                     $('#big').html(strImg);

                     $(".details_box .top").html(strTitle);

                     $(".details_box .price").html(strPrice);
                     
                  }
                  
             
                 
                     

               })    

               // 加入购物车 和 立即购买事件

               $('.car_right').on('click',function(){
                  for(var i = 0; i < arr.length; i++){

                     if(window.location.href == arr[i].url){
                       var arrId = arr[i].id;
                     //   console.log(arrId);
                        
                     var same = false;
                     var cookieArr = JSON.parse($.cookie('goods'));

                     for(var i = 0; i < cookieArr.length; i++){
                        if(cookieArr[i].id == arrId){
                           console.log(1);
                           console.log(cookieArr[i].num);
                           cookieArr[i].num++;
                           same = true;  
                           break;                        
                        }
                        
                     }

                     if(!same){
                        var obj = {id:arrId, num:1};
                        cookieArr.unshift(obj);
                     }

                       $.cookie('goods',JSON.stringify(cookieArr), {
                          expires:30
                       })

                     break;
                     }
                    
                  }
               })
               
               $('.car_left').on('click',function(){
                  console.log(1);
                  for(var i = 0; i < arr.length; i++){

                    
                     if(window.location.href == arr[i].url){
                        var arrId = arr[i].id;
                      //   console.log(arrId);
                         
                      var same = false;
                      var cookieArr = JSON.parse($.cookie('goods'));
 
                      for(var i = 0; i < cookieArr.length; i++){
                         if(cookieArr[i].id == arrId){
                            console.log(1);
                            console.log(cookieArr[i].num);
                            cookieArr[i].num++;
                            same = true;  
                            break;                        
                         }
                         
                      }
 
                      if(!same){
                         var obj = {id:arrId, num:1};
                         cookieArr.unshift(obj);
                      }
 
                        $.cookie('goods',JSON.stringify(cookieArr), {
                           expires:30
                        })
 
                      break;
                      }
                  }
               })


         },
         error: function (msg) {
            // console.log(msg);
         },
      })

      $.ajax({
         type:'get',
         url:'../data/shoplist2.json',
         success: function (arr) {
            // console.log(arr);
               var strTitle = ``;
               var strPrice = ``;
               var strImg="";
               
               arr.forEach( (val,key) => {
                  strTitle =  `<h3>${arr[key].content}</h3>`;
                  
                  strPrice =`<span class="left">现价:</span>
                  <span class="right">${arr[key].price}</span> `;

                  strImg = ` <img src=${arr[key].img} alt="">`;

                  // console.log(key);
                  if(window.location.href == arr[key].url){
                     $(".goods_pic").html(strImg);

                     $('#big').html(strImg);

                     $(".details_box .top").html(strTitle);

                     $(".details_box .price").html(strPrice);
                  }

               })    
               
               
               
               $('.car_right').on('click',function(){
                  for(var i = 0; i < arr.length; i++){

                     
                     if(window.location.href == arr[i].url){
                        var arrId = arr[i].id;
                      //   console.log(arrId);
                         
                      var same = false;
                      var cookieArr = JSON.parse($.cookie('goods'));
 
                      for(var i = 0; i < cookieArr.length; i++){
                         if(cookieArr[i].id == arrId){
                            console.log(1);
                            console.log(cookieArr[i].num);
                            cookieArr[i].num++;
                            same = true;  
                            break;                        
                         }
                         
                      }
 
                      if(!same){
                         var obj = {id:arrId, num:1};
                         cookieArr.unshift(obj);
                      }
 
                        $.cookie('goods',JSON.stringify(cookieArr), {
                           expires:30
                        })
 
                      break;
                      }
                  }
               })
               
               $('.car_left').on('click',function(){
                  console.log(1);
                  for(var i = 0; i < arr.length; i++){

                    
                     if(window.location.href == arr[i].url){
                        var arrId = arr[i].id;
                      //   console.log(arrId);
                         
                      var same = false;
                      var cookieArr = JSON.parse($.cookie('goods'));
 
                      for(var i = 0; i < cookieArr.length; i++){
                         if(cookieArr[i].id == arrId){
                            console.log(1);
                            console.log(cookieArr[i].num);
                            cookieArr[i].num++;
                            same = true;  
                            break;                        
                         }
                         
                      }
 
                      if(!same){
                         var obj = {id:arrId, num:1};
                         cookieArr.unshift(obj);
                      }
 
                        $.cookie('goods',JSON.stringify(cookieArr), {
                           expires:30
                        })
 
                      break;
                      }
                  }
               })
         },
         error: function (msg) {
            // console.log(msg);
         },
      })

      $.ajax({
         type:'get',
         url:'../data/shoplist3.json',
         success: function (arr) {
            // console.log(arr);
               var strTitle = ``;
               var strPrice = ``;
               var strImg="";
               
               arr.forEach( (val,key) => {
                  strTitle =  `<h3>${arr[key].content}</h3>`;
                  
                  strPrice =`<span class="left">现价:</span>
                  <span class="right">${arr[key].price}</span> `;

                  strImg = ` <img src=${arr[key].img} alt="">`;

                  // console.log(key);
                  if(window.location.href == arr[key].url){
                     $(".goods_pic").html(strImg);

                     $('#big').html(strImg);

                     $(".details_box .top").html(strTitle);

                     $(".details_box .price").html(strPrice);
                  }

               })  
               
               
               $('.car_right').on('click',function(){
                  for(var i = 0; i < arr.length; i++){

                    
                     if(window.location.href == arr[i].url){
                        var arrId = arr[i].id;
                      //   console.log(arrId);
                         
                      var same = false;
                      var cookieArr = JSON.parse($.cookie('goods'));
 
                      for(var i = 0; i < cookieArr.length; i++){
                         if(cookieArr[i].id == arrId){
                            console.log(1);
                            console.log(cookieArr[i].num);
                            cookieArr[i].num++;
                            same = true;  
                            break;                        
                         }
                         
                      }
 
                      if(!same){
                         var obj = {id:arrId, num:1};
                         cookieArr.unshift(obj);
                      }
 
                        $.cookie('goods',JSON.stringify(cookieArr), {
                           expires:30
                        })
 
                      break;
                      }
                  }
               })
               
               $('.car_left').on('click',function(){
                  console.log(1);
                  for(var i = 0; i < arr.length; i++){

                    
                     if(window.location.href == arr[i].url){
                        var arrId = arr[i].id;
                      //   console.log(arrId);
                         
                      var same = false;
                      var cookieArr = JSON.parse($.cookie('goods'));
 
                      for(var i = 0; i < cookieArr.length; i++){
                         if(cookieArr[i].id == arrId){
                            console.log(1);
                            console.log(cookieArr[i].num);
                            cookieArr[i].num++;
                            same = true;  
                            break;                        
                         }
                         
                      }
 
                      if(!same){
                         var obj = {id:arrId, num:1};
                         cookieArr.unshift(obj);
                      }
 
                        $.cookie('goods',JSON.stringify(cookieArr), {
                           expires:30
                        })
 
                      break;
                      }
                  }
               })
         },
         error: function (msg) {
            // console.log(msg);
         },
      })



         // 设置购物车的总数量
         var cookieArr = JSON.parse($.cookie('goods'));
                            
         var sum = 0;

         // console.log(cookieArr.length);
         for(let i = 0; i < cookieArr.length; i++){
             sum += cookieArr[i].num;
            //  console.log(sum);

             $('.login_bar em').html(sum);
         }
   }

// 放大镜
   function zoom(){
      
         $("#small").mouseenter(function(){
           $("#mark").add("#big").show();
         }).mouseleave(function(){
           $("#mark").add("#big").hide();
         }).mousemove(function(ev){
             var l = ev.clientX - $(this).offset().left - 100;
             l = Math.max(l, 0);
             l = Math.min(300, l);
             var t = ev.clientY - $(this).offset().top - 100;
             t = Math.max(t, 0);
             t = Math.min(529, t);
           $("#mark").css({
             left: l,
             top: t
           })
           //放大的图片，反方向对应倍数移动
           $("#big img").css({
             left: -2 * l,
             top: -2 * t
           })
         })
     
   }

   return{
        detailsDown:detailsDown,
        zoom:zoom,
      //   topCar:topCar,
	}

})