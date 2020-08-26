define([ "jquery"], function($){

    function download(){
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

    // 1. 塑料手办
    function shopTabOne(){
        // 1. 下载数据
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
        
        // 2. 鼠标划入
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

        // 3. 鼠标划出
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

    // 3. 生活周边
    function shopTabThree(){
        // 1. 下载数据
        $.ajax({
			type:'get',
			url:'../data/shoplist3.json',
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
        
        // 2. 鼠标划入
        $('#shop-list-u').on('mouseenter ', 'li', function(){
            console.log(1);	
            var index = $(this).index();
            $.ajax({
                type:'get',
                url:'../data/hoverlist3.json',
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
                url:'../data/shoplist3.json',
                success: arr => {

                    $(this).find("img").attr("src",arr[index].img);

                },
                error: function (msg) {
                    console.log(msg);
                },
            })			
        })
    }
   
    // 商城分类切换

    function shopTab(){

        $('.part3-top-tab-u').on('click ', 'li', function(){
            //  console.log(1);
            var index = $(this).index();	
            // 设置鼠标划入的样式
            $('.part3-top-tab-u li').attr('id','');
            
            $(this).attr('id',"active");

            switch(index){
                case 0:
                    shopTabOne()
                    break;
                case 1:
                    shopTabTwo()
                    break;
                case 2:
                    shopTabThree()
                    break;
                    
                default:
                    shopTabOne()
                    break;		
            }
            		
        })

       
    }

	return{
        shopTabOne:shopTabOne,
        // downShops:downShops,
        // hoverShops:hoverShops,
        // hoverLeaveShops:hoverLeaveShops,
        shopTab:shopTab,
        

	}

})  
