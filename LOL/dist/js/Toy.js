define([ "jquery"], function($){

    // 2. 毛绒玩具
	function shopTabTwo(){
        // 1. 下载数据
        $.ajax({
			type:'get',
			url:'../data/shoplist2.json',
			success: function (arr) {
				// console.log(arr);
			        var str = ``;
			        for (var i = 0; i < arr.length; i++) {
			          str += `
                      <li>
                      <a href=${arr[i].url}>
						<img src="${arr[i].img}" alt="">
						<p>${arr[i].content}</p>
                        <em>${arr[i].price}</em>
                        </a>
					</li>`;
			        }
			        $("#shop-list-u").html(str);
			},
			error: function (msg) {
				// console.log(msg);
			},
        })
        
        // 2. 鼠标划入
        $('#shop-list-u').on('mouseenter ', 'li', function(){
            console.log(1);	
            var index = $(this).index();
            $.ajax({
                type:'get',
                url:'../data/hoverlist2.json',
                success: arr => {
                    // $(this).attr("src",arr[index].img);

                    $(this).find("img").attr("src",arr[index].img);

                },
                error: function (msg) {
                    console.log(msg);
                },
            })			
        })

        // 3. 鼠标划出
        $('#shop-list-u').on('mouseleave', 'li', function(){
            
            console.log(2);	
            var index = $(this).index();
            $.ajax({
                type:'get',
                url:'../data/shoplist2.json',
                success: arr => {

                    $(this).find("img").attr("src",arr[index].img);

                },
                error: function (msg) {
                    console.log(msg);
                },
            })			
        })
    }


    return{
        shopTabTwo:shopTabTwo,
        

	}


})