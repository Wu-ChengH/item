$("#header").load("../html/external/index_head.html");

//读取登录用户cookie
$.cookie.json = true; // 设置将字符串自动解析转换JS值
var _username = $.cookie("username") || [];
if (_username.length != 0) {
	$(".head-register").children('a,b').hide();
	$(".wcom").show().children('a').text(_username[0].name);
}


// 从cookie中读取保存选购商品的存储结构
var _goods = $.cookie("goods") || [];
if(_goods != ''){
	$(".goods").show();
	$("#fixation").find(".i2").children('b').text(_goods[0].amount);
	// console.log(_goods[0])
	// console.log(zj)
	
	$(".goods-info li:first-child").children('img').attr("src",_goods[0]._goodsImg);
	var goodName = $(".goods-info li:first-child").children('span')[0],
		goodNorms = $(".goods-info li:first-child").children('span')[1];
	$(goodName).text(_goods[0]._goodName)
	$(goodNorms).text(_goods[0]._goodNorms)
	$(".goods-info li:nth-child(2)").children('span').text(_goods[0]._goodPrice)
	$(".goods-info li:nth-child(3)").children('span').text(_goods[0].amount)
	var zj = _goods[0]._goodPrice * _goods[0].amount;
	$(".goods-info li:nth-child(4)").children('span').text(zj)
} else{
	$(".goods").hide();
	$(".car-content").show();
}


//鼠标移入网站导航显示
$(".head").on("mouseenter","#nav,.sub-nav", function() {
	$("#nav").css({"color":"#0cb95f"});
	$(".sub-nav").show();
	$(".nav").css({"backgroundPosition":"-136px 1px"});
	$(".li_nav").css({
		"backgroundColor":"#fff",
		"borderLeft":"1px solid #ccc",
		"borderRight":"1px solid #ccc",
		"width":"79px",
		"paddingLeft":"19px",
		"height":"41px"
	});
});

//鼠标移出网站导航隐藏
$(".head").on("mouseleave",".li_nav", function() {
	$("#nav").css({"color":"#333"});
	$(".sub-nav").hide();
	$(".nav").css({"backgroundPosition":"-121px 1px"});
	$(".li_nav").css({
		"backgroundColor":"#f4f4f4",
		"border":"none",
		"width":"80px",
		"paddingLeft":"20px",
		"height":"40px"
	});
})

//鼠标移入个人中心次级目录显示
$(".head").on("mouseenter",".head-gr", function() {
	$(".gr").css({"backgroundPosition":"-136px 1px"});
	$(".grzx").css({"color":"#0cb95f"});
	$(".head-gr").css({
		"border": "1px solid #ccc",
		"borderTop": "0",
		"width":"93px",
		"paddingRight":"1px",
		"marginLeft":"-1px",
		"background":"#fff"
	});
	$(".hide-gr").show();
	$(".head-gr s").hide();
});

//鼠标移出个人中心次级目录隐藏
$(".head").on("mouseleave",".head-gr", function() {
	$(".gr").css({"backgroundPosition":"-121px 1px"});
	$(".grzx").css({"color":"#666"});
	$(".head-gr").css({
		"border": "0",
		"width":"95px",
		"paddingRight":"0",
		"marginLeft":"0",
		"background":"#f4f4f4"
	});
	$(".hide-gr").hide();
	$(".head-gr s").show();
})

//鼠标移入微信查价显示
$(".head").on("mouseenter",".head-wx", function() {
	$(".left-WX").show();
})

//鼠标移出微信查价隐藏
$(".head").on("mouseleave",".head-wx", function() {
	$(".left-WX").hide(100);
})

//鼠标移入手机APP显示
$(".head").on("mouseenter",".head-App", function() {
	$(".left-APP").show();
})

//鼠标移出手机APP隐藏
$(".head").on("mouseleave",".head-App", function() {
	$(".left-APP").hide(100);
})


$("#all").click(function() {
	var ck = $("#all").prop("checked");
	$(".goods-all").find("input").prop("checked",ck)
	// console.log($(".goods-all").find("input").css("chexked",true))
});

/* 删除所在行数据 */
$(".goods-remove").click(function(){
	// 获取待删除的商品对象
	var _good = $(".goods-all").find("input:checkbox[name='yes']:checked").parent().children(".first-span").text();
	
	// 获取删除的商品对象在数组中的索引
	var index = $.inArray(_good, _goods[0]._goodName);
	
	// 从数组中删除商品
	if (_good == _goods[0]._goodName) {
		_goods.splice(_good, 1);
		// 覆盖保存回cookie中
		$.cookie("goods", _goods, {expires:7, path:"/"});

		// 将页面当前行删除
		$(this).parents(".goods-all").remove();
		$(".goods").hide();
		$(".car-content").show();
	}

	return false; // 阻止事件冒泡与阻止默认行为
});

$(".goods-goBuy").click(function() {
	// 从cookie中读取保存选购商品的存储结构
	var _goods = $.cookie("goods") || [];
	if(_goods != ''){
		window.location = "Clearing.html";
	}
});

$(".quit").click(function() {
	console.log(8)
	var _username = $.cookie("username") || [];
	// 删除cookie
	_username.splice(_username, 1);
	// 覆盖保存回cookie中
	$.cookie("username", _username, {expires:7, path:"/"});
	// 配置读取或保存cookie时使用JSON格式
	$.cookie.json = true;
	
	// 将数据存入cookie 
	$.cookie("username", _username, {expires:7, path:"/"});

	window.location = "index.html"
});