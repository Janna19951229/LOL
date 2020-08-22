	// console.log("加载成功");
	
	//配置引入的文件的路径
	require.config({
	paths: {
		jquery: "jquery-1.11.3",
		// 变量名没有- 可以写成字符串的形式
		"jquery-cookie": "jquery.cookie",
		parabola: "parabola",
		banner:"banner",
		News:'news',
		index: "index",
		shoplist:'shop',
	},
	//jquery-cookie 依赖于jquery
	shim: {
		//设置依赖关系
		// 先加载jquery 再加载"jquery-cookie"
		"jquery-cookie": ["jquery"],
		//某一个模块，不遵从AMD
		// 当正常的js文件引入 不当模块
		// parabola: {
		//   exports: "_",
		// },
	},
	})
	
	
	//调用对应的模块
	require(["banner","News","index","shoplist"], function(banner,News,index,shoplist){
		
	banner.bannerMain();
	News.downNews();
	News.downNews2();
	News.downNews3();
	News.downNews4();
	News.downNews5();
	
	
	index.newsTab();
	index.arrowsMove();
	index.hotMove();
	index.hotTab();
	index.hotArrowsMove();
	index.gameNavMove();
	index.gameArrowsMove();

	shoplist.downShops();
	shoplist.hoverShops();
	shoplist.hoverLeaveShops();
	});
	