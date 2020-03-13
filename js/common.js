$(document).ready(function(){
	layui.use('layer', function(){ //独立版的layer无需执行这一句
		layer = layui.layer; //独立版的layer无需执行这一句

	})
	$(".copy-btn").click(function(){
		var echartsId=$(this).parent().find(".name strong").html();
		var str=charts[echartsId].toString();
		var chartsStr='setEcharts("");\nfunction setEcharts'+str.slice(8);
		var container = document.getElementById("container");
		container.value=chartsStr;
		container.select();
		document.execCommand("copy");
		layer.msg('复制成功!');
	})


});




