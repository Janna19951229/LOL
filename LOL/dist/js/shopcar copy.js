


define([ "jquery","jquery-cookie"], function($){

    // 下载购物车商品
    function goodsDown(){

               // 商品加载
               $.ajax({
                type:'get',
                url:'../data/shopCar.json',
                success: function (arr){
                    var cookieArr = JSON.parse($.cookie('goods'));
                    var str = ``;
                    for(let i = 0; i < cookieArr.length; i++){
                        // console.log(cookieArr[i].id);
                        for(let j = 0; j < arr.length; j++){
                            if(arr[j].id == cookieArr[i].id){
                                // console.log('yes');
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
                                    <span>${arr[j].price}</span>
                                </li>
                                <li class="goods_li6">
                                    <span>删除</span>
                                </li>
                            </ul>
                                
                                                               
                                `;
                            }
                        }
                        
                    }
                    // console.log(str);
                    $('.goods_Ubox').html(str);
                },

                error: function (msg) {
                    console.log(msg);
                },
            })
               
        
    }
    
    // 加减效果
    function addSubtract(){
        console.log(2);
        var goods = $('.goods').siblings();
        console.log(goods);
        $('.goods_Ubox ul').on('mouseenter',function(){
            console.log(1);
        })
    }



    return{
        goodsDown:goodsDown,
        addSubtract:addSubtract,
    }
    
})