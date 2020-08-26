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
    
                    }
                    
                  
            },
            error: function (msg) {
               console.log(msg);
            },
           })
 }