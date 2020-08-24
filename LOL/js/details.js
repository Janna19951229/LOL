


define([ "jquery","jquery-cookie"], function($){

// 购物车加减效果
   function addSubtract(){
        var count = 0;
    // 加
       $('.shopCar .add').on('click',function(){
          count--;
          if(count < 0){
              count = 0;
              window.alert('不能再减了');
          }
          $('.goodsNum').html(count);
       })

    // 减
       $('.shopCar .subtract').on('click',function(){
            count++; 
            $('.goodsNum').html(count);
       })
    
    // 加入购物车
       $('.shopCar .car_right').on('click',function(){
        count++; 
        $('.goodsNum').html(count);
        })
   }

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

                     $(".details_box .top").html(strTitle);

                     $(".details_box .price").html(strPrice);
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

                     $(".details_box .top").html(strTitle);

                     $(".details_box .price").html(strPrice);
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

                     $(".details_box .top").html(strTitle);

                     $(".details_box .price").html(strPrice);
                  }

               })             
         },
         error: function (msg) {
            // console.log(msg);
         },
      })
   }

// 顶部购物车同步问题
//  cookie
   function topCar(){	
      
     
        // 1. 下载数据
        $.ajax({
			type:'get',
			url:'../data/shoplist1.json',
			success: function (arr) {
              
               // 遍历数组获取商品的id
			        for(let i = 0; i < arr.length; i++) {

                  $('.shopCar .car_right').on('click', function(){
                     if(window.location.href == arr[i].url){
                       var arrId = arr[i].id;
                     //   console.log(arrId);
                    
                     //  判断是否设置了cookie
                     var first = $.cookie('goods') == null ? true : false;
                     if(first){
                        var Arr = [{id:arrId,num:1}];

                        $.cookie('goods',JSON.stringify(Arr),{
                           expires:30
                        })
                     }else{
                        var same = false;
                        var cookieArr = JSON.parse($.cookie('goods'));
                        for(let i = 0; i < cookieArr.length; i++){
                           if(cookieArr[i].id === arrId){
                              cookieArr[i].num++;
                              same = true;
                              console.log(cookieArr[i].num);
                              break;
                           }
                        }

                        if(!same){
                           var obj = {id:arrId,num:1};
                           cookieArr.push(obj);
                        }

                        for(let i =0; i < cookieArr.length; i++){
                           var sum = 0;
                           sum += cookieArr[i].num;
                           console.log(sum);
                           $('.login_bar .menu-cart em').html(sum);
                        }

                       
                        $.cookie('goods',JSON.stringify(cookieArr), {
                           expires:30
                        })
                     }

                     }
                  })


                  // 计算购物车中商品的数量
                  var cookieArr = JSON.parse($.cookie('goods'));
                  for(let i = 0; i < cookieArr.length; i++){
                     var sum = 0;
                     sum += cookieArr[i].num;
                     console.log(sum);
                     $('.login_bar .menu-cart em').html(sum);
                  }

                 }
                 
               
			},
			error: function (msg) {
				console.log(msg);
			},
        })

          // 1. 下载数据
          $.ajax({
            type:'get',
            url:'../data/shoplist2.json',
            success: function (arr) {
                 
                  // 遍历数组获取商品的id
                    for(let i = 0; i < arr.length; i++) {
   
                     $('.shopCar .car_right').on('click', function(){
                        if(window.location.href == arr[i].url){
                          var arrId = arr[i].id;
                        //   console.log(arrId);
                       
                        //  判断是否设置了cookie
                        var first = $.cookie('goods') == null ? true : false;
                        if(first){
                           var Arr = [{id:arrId,num:1}];
   
                           $.cookie('goods',JSON.stringify(Arr),{
                              expires:30
                           })
                        }else{
                           var same = false;
                           var cookieArr = JSON.parse($.cookie('goods'));
                           for(let i = 0; i < cookieArr.length; i++){
                              if(cookieArr[i].id === arrId){
                                 cookieArr[i].num++;
                                 same = true;
                                 console.log(cookieArr[i].num);
                                 break;
                              }
                           }
   
                           if(!same){
                              var obj = {id:arrId,num:1};
                              cookieArr.push(obj);
                           }
   
                           for(let i =0; i < cookieArr.length; i++){
                              var sum = 0;
                              sum += cookieArr[i].num;
                              console.log(sum);
                              $('.login_bar .menu-cart em').html(sum);
                           }
   
                          
                           $.cookie('goods',JSON.stringify(cookieArr), {
                              expires:30
                           })
                        }
   
                        }
                     })
   
   
                     // 计算购物车中商品的数量
                     var cookieArr = JSON.parse($.cookie('goods'));
                     for(let i = 0; i < cookieArr.length; i++){
                        var sum = 0;
                        sum += cookieArr[i].num;
                        console.log(sum);
                        $('.login_bar .menu-cart em').html(sum);
                     }
   
                    }
                    
                  
            },
            error: function (msg) {
               console.log(msg);
            },
           })


             // 1. 下载数据
        $.ajax({
			type:'get',
			url:'../data/shoplist3.json',
			success: function (arr) {
              
               // 遍历数组获取商品的id
			        for(let i = 0; i < arr.length; i++) {

                  $('.shopCar .car_right').on('click', function(){
                     if(window.location.href == arr[i].url){
                       var arrId = arr[i].id;
                     //   console.log(arrId);
                    
                     //  判断是否设置了cookie
                     var first = $.cookie('goods') == null ? true : false;
                     if(first){
                        var Arr = [{id:arrId,num:1}];

                        $.cookie('goods',JSON.stringify(Arr),{
                           expires:30
                        })
                     }else{
                        var same = false;
                        var cookieArr = JSON.parse($.cookie('goods'));
                        for(let i = 0; i < cookieArr.length; i++){
                           if(cookieArr[i].id === arrId){
                              cookieArr[i].num++;
                              same = true;
                              console.log(cookieArr[i].num);
                              break;
                           }
                        }

                        if(!same){
                           var obj = {id:arrId,num:1};
                           cookieArr.push(obj);
                        }

                        for(let i =0; i < cookieArr.length; i++){
                           var sum = 0;
                           sum += cookieArr[i].num;
                           console.log(sum);
                           $('.login_bar .menu-cart em').html(sum);
                        }

                       
                        $.cookie('goods',JSON.stringify(cookieArr), {
                           expires:30
                        })
                     }

                     }
                  })


                  // 计算购物车中商品的数量
                  var cookieArr = JSON.parse($.cookie('goods'));
                  for(let i = 0; i < cookieArr.length; i++){
                     var sum = 0;
                     sum += cookieArr[i].num;
                     console.log(sum);
                     $('.login_bar .menu-cart em').html(sum);
                  }

                 }
                 
               
			},
			error: function (msg) {
				console.log(msg);
			},
        })

        
      
   }



   return{
        addSubtract:addSubtract,
        detailsDown:detailsDown,
        topCar:topCar

	}

})