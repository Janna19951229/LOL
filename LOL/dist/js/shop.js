define([ "jquery"], function($){
	
	// (1) 下载news.json的数据
	function downShops(){
		$.ajax({
			type:'get',
			url:'../data/shoplist1.json',
			success: function (arr) {
				// console.log(arr);
			        var str = ``;
			        for (var i = 0; i < arr.length; i++) {
			          str += `
			          <li>
						<img src="${arr[i].img}" alt="">
						<p>${arr[i].content}</p>
						<em>${arr[i].price}</em>
					</li>`;
			        }
			        $("#shop-list-u").html(str);
			},
			error: function (msg) {
				// console.log(msg);
			},
		})
	}
    
    // 鼠标滑入
    function hoverShops(){
        // function downShops();
        $('#shop-list-u').on('mouseenter ', 'li', function(){
            console.log(1);	
            var index = $(this).index();
            $.ajax({
                type:'get',
                url:'../data/hoverlist1.json',
                success: arr => {
                    // $(this).attr("src",arr[index].img);

                    $(this).find("img").attr("src",arr[index].img);

                },
                error: function (msg) {
                    console.log(msg);
                },
            })			
        })
    }

    // 鼠标划出
    function hoverLeaveShops(){
        $('#shop-list-u').on('mouseleave', 'li', function(){
            
            console.log(2);	
            var index = $(this).index();
            $.ajax({
                type:'get',
                url:'../data/shoplist1.json',
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
        downShops:downShops,
        hoverShops:hoverShops,
        hoverLeaveShops:hoverLeaveShops,
	}

})