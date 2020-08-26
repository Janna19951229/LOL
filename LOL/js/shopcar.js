


define([ "jquery","jquery-cookie"], function($){

    // 下载购物车商品
    function goodsDown(){

               // (1) 商品加载
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
                                <span>￥ <i>${arr[j].price}</i> 元</span>
                                </li>
                                <li class="goods_li4">
                                    <i class="li4_left" id='${arr[j].id}' ><img src="https://js01.daoju.qq.com/zb/lolriotmall/ht/buy_jian.jpg" alt=""></i>
                                    <span class="li4_center" count="1">${cookieArr[i].num}</span>
                                    <span class="li4_right" id='${arr[j].id}'><img src="https://js01.daoju.qq.com/zb/lolriotmall/ht/buy_jia.jpg" alt=""></span>
                                </li>
                                <li class="goods_li5">
                                <span >￥ <i index='${arr[j].id}'>${arr[j].price}</i> 元</span>

                                    
                                </li>
                                <li class="goods_li6" id='${arr[j].id}'>
                                    <span>删除</span>
                                </li>
                            </ul> `;
                            }
                        }
                        
                    }
                    // console.log(str);
                    $('.goods_Ubox').html(str);
                   
                    // (2) 商品数量加减效果

                    var count = 1;
                    $('.goods_Ubox').on('click','.li4_left',function(){
                        
                    // (3) 设置cookie
                    var cookieArr = JSON.parse($.cookie('goods'));
                    // console.log(cookieArr);
                    var id = $(this).attr('id') - 0;
                    for(var a = 0; a < cookieArr.length; a++){
                        if(cookieArr[a].id == id){
                            // console.log(a);
                            cookieArr[a].num --;
                            if(cookieArr[a].num < 0){
                                cookieArr[a].num = 0;
                            }
                            $(this).siblings('.li4_center').html(cookieArr[a].num);
                            // console.log(cookieArr[a].num);
                            $.cookie('goods',JSON.stringify(cookieArr),{
                                expires:30
                            })                       
                        } 
                    }
                    })

                    $('.goods_Ubox').on('click','.li4_right',function(){
                        
                    // (3) 设置cookie
                    var cookieArr = JSON.parse($.cookie('goods'));
                    console.log(cookieArr);
                    var id = $(this).attr('id') - 0;
                    for(var a = 0; a < cookieArr.length; a++){
                        if(cookieArr[a].id == id){
                            console.log(a);
                            cookieArr[a].num ++;
                            // console.log(cookieArr[a].num);
                            $(this).siblings('.li4_center').html(cookieArr[a].num);

                            $.cookie('goods',JSON.stringify(cookieArr),{
                                expires:30
                            })

                        } 
                    }
                        
                    })

                    // (3) 删除效果

                    $('.goods_Ubox').on('click','.goods_li6',function(){
                        
                        var parents = $(this).parentsUntil('.goods_Ubox'); 

                        console.log(parents);

                        parents.remove();

                        // 删除cookie中的此节点
                        var cookieArr = JSON.parse($.cookie('goods'));
                        for(var i = 0; i < cookieArr.length; i++){
                            if(cookieArr[i].id == $(this).attr('id')){
                                console.log(i);
                                cookieArr.splice(i,1);
                                console.log(cookieArr);

                                $.cookie('goods',JSON.stringify(cookieArr),{
                                    expires:30
                                })


                            }
                        }
                    })


                        //  设置购物车的总数量
                        var cookieArr = JSON.parse($.cookie('goods'));
                            
                        var sum = 0;

                        // console.log(cookieArr.length);
                        for(let i = 0; i < cookieArr.length; i++){
                            sum += cookieArr[i].num;
                            // console.log(sum);

                            $('.login_bar em').html(sum);
                        }
                        
                        // 全选效果
                        var count = 1;
                        $('.chooseAll').on('click',function(){
                           count ++;
                           if(count % 2 == 0){
                               $('.goods_li1 input').attr('checked','true');
                           }else{
                               var str = `<input type="checkbox">`;
                               
                            $('.goods_li1').html(str);
                           }
                        })  

                        //  价格 小计
                        var cookieArr = JSON.parse($.cookie('goods'));
                        var arri = document.querySelectorAll('.goods_Ubox .goods_li5 i');
                        var sum = 0;
                        for(let h = 0; h < cookieArr.length; h++){
                                                        
                            for(var c = 0; c < arri.length; c++){
                               
                                var index = arri[c].getAttribute('index')
                                if(index == cookieArr[h].id){
                                    console.log(arri[c]);
                                    
                                    console.log(cookieArr[h].num);
                                    for(var b = 0; b < arr.length; b++){
                                        if(arr[b].id == index){
                                            console.log(1);
                                            
                                            var num = arr[b].price * cookieArr[h].num;

                                            sum += num;
                                            console.log(sum);
                                            arri[c].innerHTML= num;

                                            var strSum = `￥ <i>${sum}</i>元`;
                                            $('.goods_settlement .center').html(strSum);
                                            console.log(num);
                                        }
                                    }
                                    
                                }
                            }
                        }

                        // 价格 总计
                        var arri = document.querySelectorAll('.goods_Ubox .goods_li5 i');
                       
                },

                error: function (msg) {
                    console.log(msg);
                },
            })
               
        
    }



    return{
        goodsDown:goodsDown,
    }
    
})