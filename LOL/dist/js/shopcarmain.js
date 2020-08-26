console.log("加载成功");
	
	//配置引入的文件的路径
	require.config({
        paths: {
            jquery: "jquery-1.11.3",
            // 变量名没有- 可以写成字符串的形式
            "jquery-cookie": "jquery.cookie",
            shopcar: "shopcar",
        },
        //jquery-cookie 依赖于jquery
        shim: {
            //设置依赖关系
            // 先加载jquery 再加载"jquery-cookie"
            "jquery-cookie": ["jquery"],
        },
        })
        
        
        //调用对应的模块
        require(["shopcar"], function(shopcar){
            
            shopcar.goodsDown();

 });