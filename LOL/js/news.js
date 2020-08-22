define([ "jquery"], function($){
	
	// (1) 下载news.json的数据
	function downNews(){
		$.ajax({
			type:'get',
			url:'../data/news.json',
			success: function (arr) {
				// console.log(arr);
			        var str = ``;
			        for (var i = 0; i < arr.length; i++) {
			          str += `
			          <li>
			          	<span>${arr[i].id}</span>
			          	<a href="">
			          		<em>
			          			${arr[i].content}
			          		</em>
			          	</a>
			          	<i>
			          		${arr[i].time}
			          	</i>
			          </li>`;
			        }
			        $("#news_tab_content_u").html(str);
			},
			error: function (msg) {
				// console.log(msg);
			},
		})
	}
	
	function downNews2(){
		$.ajax({
			type:'get',
			url:'../data/news2.json',
			success: function (arr) {
				// console.log(arr);
			        var str = ``;
			        for (var i = 0; i < arr.length; i++) {
			          str += `
			          <li>
			          	<span>${arr[i].id}</span>
			          	<a href="">
			          		<em>
			          			${arr[i].content}
			          		</em>
			          	</a>
			          	<i>
			          		${arr[i].time}
			          	</i>
			          </li>`;
			        }
			        $("#news_tab_content_u2").html(str);
			},
			error: function (msg) {
				console.log(msg);
			},
		})
	}
	
	function downNews3(){
		$.ajax({
			type:'get',
			url:'../data/news3.json',
			success: function (arr) {
				// console.log(arr);
			        var str = ``;
			        for (var i = 0; i < arr.length; i++) {
			          str += `
			          <li>
			          	<span>${arr[i].id}</span>
			          	<a href="">
			          		<em>
			          			${arr[i].content}
			          		</em>
			          	</a>
			          	<i>
			          		${arr[i].time}
			          	</i>
			          </li>`;
			        }
			        $("#news_tab_content_u3").html(str);
			},
			error: function (msg) {
				console.log(msg);
			},
		})
	}
	
	function downNews4(){
		$.ajax({
			type:'get',
			url:'../data/news4.json',
			success: function (arr) {
				// console.log(arr);
			        var str = ``;
			        for (var i = 0; i < arr.length; i++) {
			          str += `
			          <li>
			          	<span>${arr[i].id}</span>
			          	<a href="">
			          		<em>
			          			${arr[i].content}
			          		</em>
			          	</a>
			          	<i>
			          		${arr[i].time}
			          	</i>
			          </li>`;
			        }
			        $("#news_tab_content_u4").html(str);
			},
			error: function (msg) {
				console.log(msg);
			},
		})
	}
	
	function downNews5(){
		$.ajax({
			type:'get',
			url:'../data/news5.json',
			success: function (arr) {
				// console.log(arr);
			        var str = ``;
			        for (var i = 0; i < arr.length; i++) {
			          str += `
			          <li>
			          	<span>${arr[i].id}</span>
			          	<a href="">
			          		<em>
			          			${arr[i].content}
			          		</em>
			          	</a>
			          	<i>
			          		${arr[i].time}
			          	</i>
			          </li>`;
			        }
			        $("#news_tab_content_u5").html(str);
			},
			error: function (msg) {
				console.log(msg);
			},
		})
	}



	return{
		downNews:downNews,
		downNews2:downNews2,
		downNews3:downNews3,
		downNews4:downNews4,
		downNews5:downNews5,
	}

})