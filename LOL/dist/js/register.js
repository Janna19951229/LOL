
// 一、 email 框判断

// (1) 获取标签
 var oEmail = document.getElementById('username');
 var oPsw = document.querySelectorAll('input')[1];
 var oTel = document.querySelectorAll('input')[2];
 
 var osEmail = document.querySelector('.username_span');
 var osPsw = document.querySelector('.password_span');
 var osTel  = document.querySelector('.tel_span');
 
 
 
 var ovTel = oTel.value;
 
 
// (2) 邮箱输入框设置聚焦事件
oEmail.addEventListener('focus', function(){
	osEmail.style.display = "block";
	osEmail.style.color = "gray";
	osEmail.innerHTML = '6～18个字符，可使用字母、数字、下划线，需要以字母开头';
})
// 邮箱框失去焦点
oEmail.addEventListener('blur', function(){
	// 获取邮箱框输入的内容
	var ovEmail = oEmail.value;
	// 判断 (a) 如果内容为空 则隐藏span的内容
	if (!ovEmail){
		osEmail.style.display = "none";		
	 } else{
		// 否则 (b) 先判断字符是否是 6~18 位
		if(ovEmail.length < 6 || ovEmail.length > 18) {
			osEmail.style.color = 'red';
			osEmail.innerHTML = '！长度应为6～18个字符';
			// (c) 判断首字符是否是字母
		}else if(!isWorld(ovEmail[0])){
			osEmail.style.color = 'red';
			osEmail.innerHTML = '邮箱地址需以字母开头';
			// (d) 判断是否有特殊字符
		}else {
			var isYes = true;   // 假设没有特殊字符
			for(var i = 0; i < ovEmail.length; i++){
				if(!isNormal(ovEmail[i])){
					isYes = false;
					break;
				}
			}
			if(isYes){
				osEmail.style.color = 'green';
				osEmail.innerHTML = '✅恭喜，该邮件地址可以注册';
			}else{
				osEmail.style.color = 'red';
				osEmail.innerHTML = '！只能输入字母、数字、下划线';
			}
		}
	}
})


// 判断字符是否是字母的函数
function isWorld(wd){
	if(wd >= "a" && wd <= "z" || wd >="A" && wd <= "Z"){
		return true;
	}else{
		return false;
	}
}


// 判断字符是否是数字、字母和下划线
function isNormal(wd){
	if(isWorld(wd) || wd >= 0 && wd <= 9 || wd == "_"){
		return true;
	}else{
		return false;
	}
}

// 二、密码框判断

// 获取焦点
oPsw.addEventListener('focus' , function(){
	osPsw.style.display = "block";
	osPsw.style.color = "gray";
	osPsw.innerHTML = '6～16个字符，区分大小写';
})

// 失去焦点
oPsw.addEventListener('blur', function(){
	// 获取输入的内容
	var ovPsw = oPsw.value;
	// (a) 判断是否有内容输入
	if(!ovPsw){
		osPsw.style.display = "none";
		// (b) 判断内容的长度是否符合要求
	}else{		
		if(ovPsw.length < 6 || ovPsw.length >16){
			osPsw.style.color = "red";
			osPsw.innerHTML = "！密码的长度必须是 6~16 位数";
		}else{
			osPsw.style.display = "none";
		}
	}
})

// 三、手机号码框判断

// 获取焦点
oTel.addEventListener('focus', function(){
	osTel.style.display = "block";
	osTel.style.color = "gray";
	osTel.innerHTML = '可通过该手机号找回密码';
})

// 失去焦点
oTel.addEventListener('blur', function(){
	// 获取输入的内容
	var ovTel = oTel.value;
	// (a) 判断内容是否为空
	if(!ovTel){
		osTel.style.display = "none";
		// (b) 判断手机号的长度
	}else{
		if(ovTel.length != 11){
			osTel.style.color = "red";
			osTel.innerHTML = '！请填写正确的手机号';
		}else if(!(isNuber(ovTel))){
			osTel.style.color = "red";
			osTel.innerHTML = '！请填写正确的手机号';
		}else{
		}
	}
})

function isNuber(num){
	if(num >= 0 && num <=9){
		return true;
	}else{
		return false;
	}
}

 // var oEmail = document.getElementById('username');
 // var oPsw = document.querySelectorAll('input')[1];
 // var oTel = document.querySelectorAll('input')[2];

var oBtnn = document.querySelector('.btn')
var osucceed = document.querySelector('.succeed');

oBtnn.onclick = function(){
	console.log(1);
	var oEmailV = oEmail.value;
	var oPswV = oPsw.value;
	var oTelV = oTel.value;
	
	if(oEmailV && oPswV && oTelV){
		// console.log('yes');
		osucceed.style.display = 'block';
		setInterval(function(){
		
		window.location.href = 'http://localhost:8888/pages/shopindex.html';
			
		} , 1000)
		
	}else{
		osucceed.style.display = 'block';
		osucceed.style.color = 'red';
		osucceed.innerHTML = '！请填写正确的注册信息';
	}
	
}

