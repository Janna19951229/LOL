


define([ "jquery","jquery-cookie"], function($){

    function test(){

        var cookieArr = JSON.parse($.cookie('goods'));
        for(let i = 0; i < cookieArr.length; i++){

               // 商品加载
            $.ajax({
                type:'get',
                url:'../data/shoplist1.json',
                success: function (arr){
                var str = ``;
                for(var j = 0; j < arr.length; j++){
                    if(cookieArr[i].id == arr[j].id){
                        console.log(arr[j].id);
                        str += `
                        <ul class="goods">
                        <li class="goods_li1"><input type="checkbox"></li>
                        <li class="goods_li2">
                            <!-- img -->
                            <div class="li2_pic"><img src="${arr[j].img}" alt=""></div>
                            <!-- title -->
                            <div class="li2_center">
                                <span>${arr[j].content}</span>
                            </div>
                        </li>
                        <!-- price -->
                        <li class="goods_li3">
                            <span>${arr[j].price}</span>
                        </li>
                        <li class="goods_li4">
                            <i class="li4_left"><img src="https://js01.daoju.qq.com/zb/lolriotmall/ht/buy_jian.jpg" alt=""></i>
                            <span class="li4_center">0</span>
                            <span class="li4_right"><img src="https://js01.daoju.qq.com/zb/lolriotmall/ht/buy_jia.jpg" alt=""></span>
                        </li>
                        <li class="goods_li5">
                            <span>￥268.00元</span>
                        </li>
                        <li class="goods_li6">
                            <span>删除</span>
                        </li>
                    </ul>`     
                    }                  
                }
                $('.goods_Ubox').html(str);
                
                },
                error: function (msg) {
                    console.log(msg);
                },
            })





            // console.log(cookieArr[i].id);
        }

     

    }
  
    
    
       return{
         test:test,
    
        }
    
})