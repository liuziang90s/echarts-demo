var charts={
	bar_1:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['市南区','市北区','四方区','李沧区','崂山区','城阳区','黄岛区','即墨市','胶州市','胶南市','平度市','莱西市']
		var yValue=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		]
	
		//echarts样式数据
		var bgData=[];
		$.each(yValue,function(n,val){
			bgData.push({'value':Math.max.apply(null, yValue)+2,'reallyData':val});
		})
	
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			grid: {x: "15%",y: "2%", y2:"2%", x2:"10%",borderWidth:0},
			calculable : true,
			tooltip : {
				trigger: 'axis',
				formatter:'{b1}:{c1}',
			},
			xAxis : [
				{
					show:false,
					type : 'value',
					max : Math.max.apply(null, yValue)+2,
				}
			],
			yAxis : [
				{
					position : 'left',
					type : 'category',
					axisTick : {show: false},
					splitLine: {show:false,},
					splitArea:{show:false,},
					axisLine:{show:false},
					axisLabel: {
						textStyle: {  
							color:"#fff",
							fontSize:fontSize*14,
						},
					},
					data : xData,
				},
				//辅助x轴
				{
					type : 'category',
					axisLine: {show:false},
					axisTick: {show:false},
					axisLabel: {show:false},
					splitArea: {show:false},
					splitLine: {show:false},
					data : xData,
				}
			],
			series : [
				//背景
				{
					name:'',
					type:'bar',
					yAxisIndex:1,
					barWidth: 20,
					//颜色需要有透明度
					itemStyle: {
						normal: {
							color:'rgba(255, 255, 255,0)',
							borderColor:'#3e5371',
							borderWidth:1,
							label:{
								show: true, 
								position: 'right',
								fontSize:fontSize*14,
								color:'#fff',
								distance:10,
								formatter:function(bgData){
									return bgData.data.reallyData;
								},
							}
						}
					},
					//data填你需要的背景的值
					data:bgData,
				},
				{
					name:'',
					type:'bar',
					barWidth: 14,
					stack: 01,//堆栈
					//颜色需要有透明度
					itemStyle: {
						normal: {
							color:'rgba(255, 255, 255,0)',
						}
					},
					//data填你需要的背景的值
					data:[1,1,1,1,1,1,1,1,1,1,1,1]
				},
				{
					z:3,
					name:'各区县分布',
					type:'bar',
					barWidth: 14,
					stack: 01,//堆栈
					data:yValue,
					itemStyle:{
						normal:{
							label : {
								show: false, 
								position: 'right',
							},
							color:function(params){
								var colorList = [
									new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#37ecbb'},{offset:1,color: '#65aacd'}]),
									new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#f1cd77'},{offset:1,color: '#5d7ed1'}]),
									new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#e96f71'},{offset:1,color: '#f5d5ac'}]),
									new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#f16488'},{offset:1,color: '#eb89e0'}]),
									new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#ffab02'},{offset:1,color: '#fff498'}]),
									new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#03cafc'},{offset:1,color: '#a0ffa9'}]),
									new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#01ff5e'},{offset:1,color: '#56f4fd'}]),
									new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#2bc0ff'},{offset:1,color: '#a8fec7'}]),
									new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#ff4a9b'},{offset:1,color: '#ffe788'}]),
									new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#da319c'},{offset:1,color: '#8e8ffe'}]),
									new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#b46efd'},{offset:1,color: '#6badff'}]),
									new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#403aed'},{offset:1,color: '#97a6ff'}]),
								];
								return colorList[params.dataIndex];
							},//柱状图颜色
							// color: new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#403aed'},{offset:1,color: '#97a6ff'}]),
							// barBorderRadius:0,//柱形图圆角，初始化效果
						}
					}
				},
			]
		};
	
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},
	bar_2:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['1-01','1-02','1-03','1-04','1-05','1-06','1-07','1-08','1-09','1-10','1-11','1-12','1-13','1-14','1-15','1-16','1-17','1-18','1-19','1-20','1-21','1-22','1-23','1-24','1-25']
		var yValue1=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		];
		var yValue2=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		];
	
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow', // 默认为直线，可选为：'line' | 'shadow'
					shadowStyle:{
						color:'rgba(8,113,243,0.28)'	
					}
				},
				formatter: function (params) {
					var tar;
					if (params[1].value != '-') {
						tar = params[1];
					}
					else {
						tar = params[0];
					}
					return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
				}
			},
			legend:{
				right:30,
				textStyle:{color:"#fff"},
				data:['数据量']
			},
			grid:{
				left:60,
				right:30,
				top:50,
				bottom:52
			},
			xAxis: {
				type: 'category',
				boundaryGap: true,
				axisTick:{show:false},
				axisLine:{
					show:true,
					lineStyle:{color:'#1c4f9f',width:1}
				},
				axisLabel:{
					color:'#fff',
				},
				data:xData
			},
			yAxis: {
				type: 'value',
				name:'单位/万',
				nameTextStyle:{
					color:'#33aaf0'
				},
				axisTick:{show:false},
				axisLine:{
					show:false
				},
				axisLabel:{
					color:'#fff',
					formatter: function (value, index) {
						return value;
					}
				},
				splitLine:{
					show:true,
					lineStyle:{color:'#1c4f9f',width:1}
				}
			},
			dataZoom: [
				{
					type:'slider',
					show: true,
					bottom:12,
					backgroundColor:'#2a5edc',
					borderColor:'transparent',
					fillerColor:'#65c0fb',
					textStyle:{color:'transparent'},
					handleColor:'#65c0fb',
					handleColor:'transparent',
					handleSize:"200%",
					height:5,
					start: 0,
					end: 40
				},
				{
					 show:true,
					 type: 'inside',
					 height:5,
					 start: 0,
					 end:40
				 }
			],
			series: [
				{
					name: '',
					type: 'bar',
					stack: '总量',
					barWidth:'60%',
					itemStyle: {
						normal: {
							barBorderColor: 'rgba(0,0,0,0)',
							color: 'rgba(0,0,0,0)',
						},
						emphasis: {
							barBorderColor: 'rgba(0,0,0,0)',
							color: 'rgba(0,0,0,0)'
						}
					},
					data:yValue1
				},
				{
					name: '',
					type: 'bar',
					stack: '总量',
					barWidth:'60%',
					itemStyle: {
						normal: {
							barBorderRadius:4,
							color: new echarts.graphic.LinearGradient(
								0, 0, 0, 1,
								[
									{offset: 0, color: '#16fb93'},
									{offset: 1, color: '#2366ff'}
								]
							),
							shadowColor:'#2368fd',
							shadowBlur:15
						}
					},
					data: yValue2
				}
			]
		}
		
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},
	bar_3:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['市南区','市北区','李沧区','黄岛区','即墨区','胶州市','城阳区','崂山区','莱西市','平度市']
		var yValue=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		]
	
		//echarts样式数据
		var piePatternSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVUAAACmCAYAAABqfRwtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOUU0MDBDQTAwMEYxMUU4QTBDQUUwRkZDQUQ4N0ExRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOUU0MDBDQjAwMEYxMUU4QTBDQUUwRkZDQUQ4N0ExRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM5RTQwMEM4MDAwRjExRThBMENBRTBGRkNBRDg3QTFGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5RTQwMEM5MDAwRjExRThBMENBRTBGRkNBRDg3QTFGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uU0OnQAAD3lJREFUeNrsnb+LNEkZ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';
		var img = new Image();
		img.src = piePatternSrc;

		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			tooltip : {
				show:true,
			   trigger: 'axis',
			   axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				   type : 'shadow', // 默认为直线，可选为：'line' | 'shadow'
				   shadowStyle:{
					   color:'rgba(8,113,243,0)'	
				   }
			   },
		   },
		   legend:{
			   right:10,
			   textStyle:{color:"#3bc7ff"},
			   data:['人员数量']
		   },
		   grid:{
			   left:50,
			   top:30,
			   right:10,
			   bottom:52
		   },
		   xAxis: {
			   type: 'category',
			   boundaryGap: true,
			   axisTick:{show:false},
			   axisLine:{
				   show:true,
				   lineStyle:{color:'rgba(3,120,199,0.5)',width:1}
			   },
			   axisLabel:{
				   color:'#fff',
			   },
			   data: xData
		   },
		   yAxis: {
			   type: 'value',
			   nameTextStyle:{
				   color:'#33aaf0'
			   },
			   axisTick:{show:false},
			   axisLine:{
				   show:true,
				   lineStyle:{color:'rgba(3,120,199,0.5)',width:1}
			   },
			   axisLabel:{
				   color:'#fff',
				   formatter: function (value, index) {
					   return value;
				   }
			   },
			   splitLine:{
				   show:true,
				   lineStyle:{color:'rgba(3,120,199,0.66)',width:1}
			   }
		   },
		   dataZoom: [
			   {
				   type:'slider',
				   show: true,
				   bottom:12,
				   backgroundColor:'rgba(52,195,239,0.35)',
				   borderColor:'transparent',
				   fillerColor:'#2f89dc',
				   textStyle:{color:'transparent'},
				   handleColor:'transparent',
				   height:5,
				   start: 0,
				   end: 40
			   },
			   {
					show:true,
					type: 'inside',
					height:5,
					start: 0,
					end:40
				}
		   ],
		   series: [
			   {
				//    name: '人员数量',
				   type: 'bar',
				   stack: '总量',
				   barWidth:15,
				   itemStyle: {
					   normal: {
						  color: {
							   image: img,
							   repeat: 'repeat' 
						   },
					   },
					   emphasis: {
						   shadowColor:'rgba(0,233,245,0.7)',
						   shadowBlur:15
					   }
					   
				   },
				   data: yValue
			   }
		   ]
		};
	
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},
	bar_4:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['1','2','3','4','5','6','7','8']
		var yValue=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		]
	
		//echarts样式数据
		

		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			tooltip : {
			   trigger: 'axis',
			   //backgroundColor:'rgba(0,0,0,0.4)',
			   axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				   type : 'shadow', // 默认为直线，可选为：'line' | 'shadow'
				   shadowStyle:{
					   color:'rgba(8,113,243,0)'	
				   }
			   }
		   },
		   grid:{
			   left:50,
			   right:30,
			   top:10,
			   bottom:32
		   },
		   xAxis: {
			   type: 'category',
			   boundaryGap: true,
			   axisTick:{show:false},
			   axisLine:{
				   show:true,
				   lineStyle:{color:'#1499ee',width:1}
			   },
			   axisLabel:{
				   color:'#fff',
				   formatter: function (value, index) {
					   return value;
				   }
			   },
			   data: xData
		   },
		   yAxis: {
			   type: 'value',
			   axisTick:{show:false},
			   axisLine:{
				   show:true,
				   lineStyle:{color:'#1499ee',width:1}
			   },
			   axisLabel:{
				   color:'#fff',
				   formatter: function (value, index) {
					   return value;
				   }
			   },
			   splitLine:{
				   show:true,
				   lineStyle:{color:'rgba(3,120,199,0.3)',width:1}
			   }
		   },
		   series: [
			   {
				   name: '',
				   type: 'bar',
				   barWidth:20,
				   itemStyle: {
					   normal: {
						   color: new echarts.graphic.LinearGradient(
							   0, 0, 0, 1,
							   [
								   {offset: 0, color: 'rgba(96,245,255,0)'},
								   {offset: 0.2, color: 'rgba(96,245,255,1)'},
								   {offset: 1, color: 'rgba(28,167,255,1)'}
							   ]
						   )
					   },
					   emphasis: {
						   shadowColor:'rgba(0,233,245,0.7)',
						   shadowBlur:15
					   }
				   },
				   data: yValue
			   }
		   ]
		};
	
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},
	bar_5:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['01/15','01/16','01/17','01/18','01/19','01/20','01/21','01/22','01/23','01/24','01/25'];
		var yValue1=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		];
		var yValue2=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		];
		var yValue3=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		];
		var yValue4=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		];
		var yValue5=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		];
		var yValue6=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		];
	
		//echarts样式数据
		

		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			color: ['#9adcff','#ffd01e','#effdb2','#25cd9a','#b886cb','#5497e5'],
			tooltip : {
			   trigger: 'axis',
			   //backgroundColor:'rgba(0,0,0,0.4)',
			   axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				   type : 'shadow', // 默认为直线，可选为：'line' | 'shadow'
				   shadowStyle:{
   //	            	color:'rgba(8,113,243,0.2)'	
				   }
			   }
		   },
		   legend: {
			   data:['抢劫','抢夺','盗窃','诈骗','刑事','治安'],
			   top:10,  //图例组件离顶部的距离
			   x : 'right',   //图例显示在右边		
			   textStyle:{    //图例文字的样式
				   color:'#fff',
				   fontSize:12
			   }
		   },
		   grid:{
			   left:50,
			   right:20,
			   top:50,
			   bottom:45
		   },
		   xAxis: {
			   type: 'category',
			   boundaryGap: true,
			   axisTick:{show:false},
			   axisLine:{
				   show:true,
				   lineStyle:{color:'#1499ee',width:1}
			   },
			   axisLabel:{
				   color:'#fff',
				   formatter: function (value, index) {
					   return value;
				   }
			   },
			   data: xData
		   },
		   yAxis: {
			   type: 'value',
			   axisTick:{show:false},
			   axisLine:{
				   show:true,
				   lineStyle:{color:'#1499ee',width:1}
			   },
			   axisLabel:{
				   color:'#fff',
				   formatter: function (value, index) {
					   return value;
				   }
			   },
			   splitLine:{
				   show:true,
				   lineStyle:{color:'rgba(3,120,199,0.3)',width:1}
			   }
		   },
		   dataZoom: [
			   {
				   type:'slider',
				   show: true,
				   bottom:12,
				   backgroundColor:'#2a5edc',
				   borderColor:'transparent',
				   fillerColor:'#65c0fb',
				   textStyle:{color:'transparent'},
				   handleColor:'#65c0fb',
				   handleColor:'transparent',
				   handleSize:"200%",
				   height:5,
				   start: 0,
				   end: 40
			   },
			   {
					show:true,
					type: 'inside',
					height:5,
					start: 0,
					end:40
				}
		   ],
		   series: [
			{
				name:'抢劫',
				type:'bar',
				stack: '01',
				barWidth : 20,//柱图宽度
				itemStyle: {
					normal: {
						barBorderRadius:4,
					}
				},
				data:yValue1
			},
			{
				name:'抢夺',
				type:'bar',
				stack: '01',
				barWidth : 20,//柱图宽度
				itemStyle: {
					normal: {
						barBorderRadius:4,
					}
				},
				data:yValue2
			},
			   {
				   name:'盗窃',
				   type:'bar',
				   stack: '01',
				   barWidth : 20,//柱图宽度
				   itemStyle: {
					   normal: {
						   barBorderRadius:4,
					   }
				   },
				   data:yValue3
			   },
			   {
				   name:'诈骗',
				   type:'bar',
				   stack: '01',
				   barWidth : 20,//柱图宽度
				   itemStyle: {
					   normal: {
						   barBorderRadius:4,
					   }
				   },
				   data:yValue4
			   },
			   {
				   name:'刑事',
				   type:'bar',
				   stack: '01',
				   barWidth : 20,//柱图宽度
				   itemStyle: {
					   normal: {
						   barBorderRadius:4,
					   }
				   },
				   data:yValue5
			   },
			   {
				   name:'治安',
				   type:'bar',
				   stack: '01',
				   barWidth : 20,//柱图宽度
				   itemStyle: {
					   normal: {
						   barBorderRadius:4,
					   }
				   },
				   data:yValue6
			   }
		   ]
		};
	
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},

	bar_6:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['01/15','01/16','01/17','01/18','01/19','01/20','01/21','01/22','01/23','01/24'];
		var yValue1=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		]
		var yValue2=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		]
	
		//echarts样式数据
		

		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			tooltip : {
			   trigger: 'axis',
			   //backgroundColor:'rgba(0,0,0,0.4)',
			   axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				   type : 'shadow', // 默认为直线，可选为：'line' | 'shadow'
				   shadowStyle:{
   //	            	color:'rgba(8,113,243,0.2)'	
				   }
			   }
		   },
		   legend: {
			   data:['抢劫','抢夺'],
			   top:10,  //图例组件离顶部的距离
			   x : 'right',   //图例显示在右边		
			   textStyle:{    //图例文字的样式
				   color:'#fff',
				   fontSize:12
			   }
		   },
		   grid:{
			   left:50,
			   right:20,
			   top:50,
			   bottom:45
		   },
		   xAxis: {
			   type: 'category',
			   boundaryGap: true,
			   axisTick:{show:false},
			   axisLine:{
				   show:true,
				   lineStyle:{color:'#1499ee',width:1}
			   },
			   axisLabel:{
				   color:'#fff',
				   formatter: function (value, index) {
					   return value;
				   }
			   },
			   data: xData
		   },
		   yAxis: {
			   type: 'value',
			   axisTick:{show:false},
			   axisLine:{
				   show:true,
				   lineStyle:{color:'#1499ee',width:1}
			   },
			   axisLabel:{
				   color:'#fff',
				   formatter: function (value, index) {
					   return value;
				   }
			   },
			   splitLine:{
				   show:true,
				   lineStyle:{color:'rgba(3,120,199,0.3)',width:1}
			   }
		   },
		   dataZoom: [
			   {
				   type:'slider',
				   show: true,
				   bottom:12,
				   backgroundColor:'#2a5edc',
				   borderColor:'transparent',
				   fillerColor:'#65c0fb',
				   textStyle:{color:'transparent'},
				   handleColor:'#65c0fb',
				   handleColor:'transparent',
				   handleSize:"200%",
				   height:5,
				   start: 0,
				   end: 40
			   },
			   {
					show:true,
					type: 'inside',
					height:5,
					start: 0,
					end:40
				}
		   ],
		   series: [
			   {
				   name:'抢劫',
				   type:'bar',
				   barWidth : 20,//柱图宽度
				   itemStyle: {
					   normal: {
						   color: new echarts.graphic.LinearGradient(
							   0, 0, 0, 1,
							   [
								   {offset: 0, color: '#f7e5a5'},
								   {offset: 1, color: '#fce156'}
							   ]
						   ),
					   }
				   },
				   data:yValue1
			   },
			   {
				   name:'抢夺',
				   type:'bar',
				   barWidth : 20,
				   itemStyle: {
					   normal: {
						   color: new echarts.graphic.LinearGradient(
							   0, 0, 0, 1,
							   [
								   {offset: 0, color: '#9fd0f1'},
								   {offset: 1, color: '#2b99fb'}
							   ]
						   ),
					   }
				   },
				   data:yValue2
			   }
		   ]
		};
	
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},

	bar_7:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['南京', '无锡', '徐州', '常州', '苏州', '南通', '连云港', '淮安','盐城','扬州','镇江','泰州','宿迁' ];
		var yValue=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		]
	
		//echarts样式数据
		

		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			grid:{
				left:45,
				right:10,
				top:40,
				bottom:50,
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'none'
				},
				formatter: function (params) {
					return params[0].name + ': ' + params[0].value;
				}
			},
			dataZoom: [
				{
					type:'slider',
					show: true,
					bottom:12,
					backgroundColor:'#2a5edc',
					borderColor:'transparent',
					fillerColor:'#65c0fb',
					textStyle:{color:'transparent'},
					handleColor:'#65c0fb',
					handleColor:'transparent',
					handleSize:"200%",
					height:5,
					start: 0,
					end: 60
				},
				{
					 show:true,
					 type: 'inside',
					 height:5,
					 start: 0,
					 end:40
				 }
			],
			xAxis: {						   
				data:xData,
				axisTick: {show: false},
				axisLine:{
					show:true,
					lineStyle:{color:'rgba(3,120,199,0.5)',width:1}
				},
				axisLabel: {
					textStyle: {
						color: '#fff'
					}
				},
			},
			yAxis: {
				axisTick: {show: false},
				axisLine:{
					show:true,
					lineStyle:{color:'rgba(3,120,199,0.5)',width:1}
				},
				axisLabel: {
					textStyle: {
						color: '#fff'
					}
				},
				splitLine:{
					show:true,
					lineStyle:{color:'rgba(3,120,199,0.3)',width:1}
				}
			},
			color: ['#e54035'],
			series: [{
				name: '',
				type: 'pictorialBar',
				symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
				z: 10,
				itemStyle: {
					normal: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: 'rgba(30,227,206,1)' // 0% 处的颜色
							}, {
								offset: 1, color: 'rgba(30,227,206,0)' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						},
						shadowBlur: 3,
						shadowColor: 'rgba(30,227,206,0.5)',
						shadowOffsetX:0,
						shadowOffsetY: -8,
					   /// opacity: 0.5
					},
					emphasis: {
						opacity: 1
					}
				},
				data:yValue
			}]
		};
	
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},

	bar_8:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['查询服务', '比对服务', '布控服务', '下载服务'];
		var yValue=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		]
	
		//echarts样式数据
		var max=Math.max.apply(null, yValue);
		var dataShadow=[];
		$.each(yValue,function(){
			dataShadow.push(max);
		})
		

		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			grid:{
				left:50,
				right:20,
				top:15,
				bottom:30
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				},
				formatter: function (params) {
					return params[0].name + ': ' + params[0].value;
				}
			},
			xAxis: {
				data: xData,                    
				axisTick: {show: false},
				axisLine:{
					show:true,
					lineStyle:{color:'#004a73',width:1}
				},
				axisLabel: {
					textStyle: {
						color: '#fff'
					}
				},
			},
			yAxis: {
				min:0,
				// max:200,
				axisTick: {show: false},
				axisLine:{
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#fff'
					}
				},
				splitLine:{
					show:true,
					lineStyle:{color:'#004a73',width:1}
				}
			},
			series: [
				{ // For shadow
					type: 'pictorialBar', //bar
					barWidth:'30',
					itemStyle: {
						normal: {color: 'rgba(0,0,0,0.8)'}
					},
					barGap:'-100%',
					barCategoryGap:'40%',
					symbol: 'image://images/bar-bg1.png',
					data: dataShadow,
					animation: false,
					z: 1
				},
				{
					name: '数量',
					type: 'pictorialBar',
					barWidth:'30',
					itemStyle: {
						normal: {
							color: '#50cdf6',
							shadowBlur: 3,
							shadowColor: 'rgba(30,227,206,0.5)'
						},
						emphasis: {
							opacity: 1
						}
					},
					symbol: 'image://images/bar-bg.png',
					data: yValue,
					z: 2
				}
			]
		};
	
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},
	
	bar_9:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['教育局','公安','民政','司法','人社','国土','水利','卫计委','城管','住建'];
		var yValue=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		]
	
		//echarts样式数据
		
		var backgroundData=[];
		$.each(yValue,function(n,val){
			backgroundData.push({'value':Math.max.apply(null, yValue)+2,'reallyData':val});
		})

		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			grid: {x: "12%",y: "1%", y2:"1%", x2:"12%",borderWidth:0},
			calculable : true,
			tooltip : {
				trigger: 'axis',
				formatter:'{b1}:{c1}',
			},
			xAxis : [
				{
					show:false,
					type : 'value',
					max : Math.max.apply(null, yValue)+2,
				}
			],
			yAxis : [
				{
					position : 'left',
					type : 'category',
					axisTick : {show: false},
					splitLine: {show:false,},
					splitArea:{show:false,},
					axisLine:{show:false},
					axisLabel: {
						textStyle: {  
							color:"#fff",
							fontSize:"14",
						},
					},
					data : xData,
				},
				//辅助x轴
				{
					type : 'category',
					axisLine: {show:false},
					axisTick: {show:false},
					axisLabel: {show:false},
					splitArea: {show:false},
					splitLine: {show:false},
					data : xData,
				}
			],
			series : [
				//背景
				{
					name:'',
					type:'bar',
					yAxisIndex:1,
					barWidth: 10,
					//颜色需要有透明度
					itemStyle: {
						normal: {
							color:'rgba(54, 117, 200,0.2)',
							borderColor:'rgba(1,252,146,0.2)',
							borderWidth:1,
							barBorderRadius:5,
							label:{
								show: true, 
								position: 'right',
								color:'#00fffc',
								distance:10,
								formatter:function(backgroundData){
									return backgroundData.data.reallyData;
								},
							}
						}
					},
					//data填你需要的背景的值
					data:backgroundData,
				},
				{
					z:3,
					name:'各区县分布',
					type:'bar',
					barWidth: 10,
					stack: 01,//堆栈
					data:yValue,
					itemStyle:{
						normal:{
							label : {
								show: false, 
								position: 'right',
							},
							color: {
								type: 'linear',
								x: 1,
								y: 1,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0, color: '#2dd3fd' // 0% 处的颜色
								}, {
									offset: 1, color: '#7a80ff' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							},//柱状图颜色
							// color: new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#403aed'},{offset:1,color: '#97a6ff'}]),
							barBorderRadius:5,//柱形图圆角，初始化效果
						}
					}
				},
			]
		};
	
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},

	bar_10:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月'];
		var yValue=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		]
	
		//echarts样式数据
		

		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			grid:{
				left:'11%',
				right:'4%',
				top:'11%',
				bottom:'23%'
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				},
				formatter: function (params) {
					return params[0].name + ': ' + params[0].value;
				}
			},
			xAxis: {
				data: xData,                     
				axisTick: {show: false},
				axisLine:{
					show:true,
					lineStyle:{color:'rgba(0,222,255,.2)',width:1}
				},
				axisLabel: {
					textStyle: {
						color: '#fff',
						fontSize:14
					}
				},
			},
			yAxis: {
				axisTick: {show: false},
				axisLine:{
					show:true,
					lineStyle:{color:'rgba(0,222,255,.2)',width:1}
				},
				axisLabel: {
					textStyle: {
						color: '#fff',
					}
				},
				splitLine:{
					show:true,
					lineStyle:{color:'rgba(0,222,255,.2)',width:1,type:'dashed'}
				}
			},
			dataZoom: [
				{
					type:'slider',
					show: true,
					bottom:'5%',
					backgroundColor:'#022b75',
					borderColor:'transparent',
					fillerColor:'#0165c6',
					textStyle:{color:'transparent'},
					handleColor:'#0165c6',
					handleSize:"200%",
					height:5,
					start: 0,
					end: 50
				},
				{
					 show:true,
					 type: 'inside',
					 height:5,
					 start: 0,
					 end:50
				 }
			],
			series: [
				{
					name: '数量',
					type: 'pictorialBar',
					barWidth:'80%',
					itemStyle: {
						normal: {
							color: '#50cdf6',
							shadowBlur: 3,
							shadowColor: 'rgba(30,227,206,0.5)'
						},
						emphasis: {
							opacity: 1
						}
					},
					symbol: 'image://images/bar-bg01.png',
					data: yValue,
					z: 2
				}
			]
		};
	
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},

	bar_11:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['南昌','九江','赣州','上饶' ,'萍乡','抚州','宜春','新余','吉安','鹰潭','景德镇'];
		var yValue=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		]

		//echarts样式数据
		var backgroundData=[];
		$.each(yValue,function(n,val){
			backgroundData.push(Math.max.apply(null,yValue));
		})

		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			grid:{
				left:'11%',
				right:'4%',
				top:'11%',
				bottom:'20%'
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				},
				formatter: function (params) {
					return params[0].name + ': ' + params[0].value;
				}
			},
			xAxis: {
				data:xData,
				axisTick: {show: false},
				axisLine:{
					show:true,
					lineStyle:{color:'rgba(0,222,255,.2)',width:1}
				},
				axisLabel: {
					interval:0,
					textStyle: {
						color: '#fff',
						fontSize:14
					}
				},
			},
			yAxis: {
				axisTick: {show: false},
				axisLine:{
					show:true,
					lineStyle:{color:'rgba(0,222,255,.2)',width:1}
				},
				axisLabel: {
					textStyle: {
						color: '#fff'
					}
				},
				splitLine:{
					show:true,
					lineStyle:{color:'rgba(0,222,255,.2)',width:1,type:'dashed'}
				}
			},
			series: [
				{ // For shadow
					type: 'bar', //pictorialBar
					barWidth:'36%',
					itemStyle: {
						normal: {
							color: 'rgba(122,140,231,0.15)',
							barBorderRadius:[12,12,0,0]
						}
					},
					barGap:'-100%',
					barCategoryGap:'40%',
					data: backgroundData,
					animation: false,
					z: 1
				},
				{
					name: '数量',
					type: 'bar',
					barWidth:'36%',
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(
								0, 0, 0, 1,
								[
									{offset: 0, color: '#ffe680'},
									{offset: 1, color: '#00bbcb'}
								]
							),
							barBorderRadius:[12,12,0,0]
						},
						emphasis: {
							opacity: 1
						}
					},
					symbol: 'image://images/bar-bg.png',
					data: yValue,
					z: 2
				}
			]
		};
	
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},

	bar_12:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['2013','2014','2015','2016','2017','2018'];
		var yValue1=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		];
		var yValue2=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		];
		var yValue3=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		];
	
		//echarts样式数据
		

		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			color: ['#28e9a7','#ffc64c','#61beff','#ff9181'],
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow', // 默认为直线，可选为：'line' | 'shadow'
					shadowStyle:{}
				}
			},
			legend: {
				data:['一般人员','关注人员','管控人员'],
				top:10,  //图例组件离顶部的距离
				right : '30',   //图例显示在右边		
				textStyle:{    //图例文字的样式
					color:'#fff',
				},
				itemWidth:17,
				itemHeight:9
			},
			grid:{
				left:70,
				right:35,
				top:65,
				bottom:30
			},
			xAxis: {
				type: 'category',
				boundaryGap: true,
				axisTick:{
					show:false
				},
				axisLine:{
					show:true,
					lineStyle:{color:'#01539e',width:1}
				},
				axisLabel:{
					color:'#fff',
					fontSize:14,
					formatter: function (value, index) {
						return value;
					}
				},
				data: xData
			},
			yAxis: {
				name: '变化人数',
				type: 'value',
				splitNumber:6,
				axisTick:{
					show:false
				},
				axisLine:{
					show:true,
					lineStyle:{color:'#2c86e4',width:1}
				},
				axisLabel:{
					color:'#fff',
					fontSize:14,
					formatter: function (value, index) {
						return value;
					}
				},
				splitLine:{
					show:true,
					lineStyle:{color:'#01539e',width:1,type:'dashed'}
				}
			},
			series: [
				{
					name:'一般人员',
					type:'pictorialBar',//bar
					barWidth : 16,//柱图宽度
					barGap:'30%',
					yAxisIndex: 0,
					symbol: 'image://images/bar01.png',
					data:yValue1
				},
				{
					name:'关注人员',
					type:'pictorialBar',//bar
					barWidth : 16,//柱图宽度
					barGap:'30%',
					yAxisIndex: 0,
					symbol: 'image://images/bar02.png',
					data:yValue2
				},
				{
					name:'管控人员',
					type:'pictorialBar',//bar
					barWidth : 16,//柱图宽度
					barGap:'30%',
					yAxisIndex: 0,
					symbol: 'image://images/bar03.png',
					data:yValue3
				}
			]
		};
	
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},

	bar_13:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=[' 深圳发展','上海浦发','平安银行','招商银行 ','交通银行','中国农业银行','中国工商银行','中国银行 '];
		var yValue1=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		];
		var yValue2=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		];
		var yValue3=[
			-parseInt(Math.random()*100),
			-parseInt(Math.random()*100),
			-parseInt(Math.random()*100),
			-parseInt(Math.random()*100),
			-parseInt(Math.random()*100),
			-parseInt(Math.random()*100),
			-parseInt(Math.random()*100),
			-parseInt(Math.random()*100)
		];
	
		//echarts样式数据
		

		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			color:['#747CFB','#4CC57A','#F56A8D'],
			legend: {
				width:'100%',
				right:48,
				itemHeight:15,
				itemWidth:30,
				textStyle:{color:'#fff'},
				data:['流入', '流出', '差额']
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'value',
					inverse:true,
					axisLabel:{
						color:'#fff',
						formatter: function (value, index) {
							return value;
						}
					},
					// splitArea: {show: false}
				}
			],
			yAxis:{
				type : 'category',
				axisTick : {show: false},
				axisLabel:{
					color:'#fff',
					formatter: function (value, index) {
						return value;
					}
				},
				data : xData
			},
			series : [
				{
					name:'差额',
					type:'bar',
					stack:'01',
					label: {
						normal: {
							show: true,
							position: 'inside'
						}
					},
					itemStyle: {
						normal: {  
							barBorderRadius:4,
						}
					},
					data:yValue1
				},
				{
					name:'流入',
					type:'bar',
					stack:'02',
					label: {
						normal: {
							show: true,
							position: 'inside'
						}
					},
					itemStyle: {
						normal: {  
							barBorderRadius:4,
						}
					},
					data:yValue2
				},
				{
					name:'流出',
					type:'bar',
					stack:'02',
					label: {
						normal: {
							show: true,
							position: 'inside'
						}
					},
					itemStyle: {
						normal: {  
							barBorderRadius:4,
						}
					},
					data:yValue3
				}
			]
		};
	
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},


	bar_14:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['定存','理财','基金','好享富']
		var yValue1=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		];
		var yValue2=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		];
	
		//echarts样式数据
		

		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					animation: false,
				}
			},
			legend:{
				textStyle:{
					color:'#3EC7FF',
				},
				x:"50%" ,
				y:'2%',
				data:['产品交易量','产品交易人数']
			},
			grid:[{
				left: 50,
				right: 20,
				top:'12%',
				height: '37%'
			}, {
				left: 50,
				right: 20,
				top: '57%',
	//	        height: '37%',
				bottom:'8%'
			}],
			xAxis: [{
				type: 'category',
				boundaryGap : true,
				axisTick:{show:false},
				axisLine:{
					show:true,
					onZero: true,
					fontSize: 15,
					lineStyle:{color:'#3EC7FF',width:1}
				},
				splitLine:{
					show:true,
					lineStyle:{color:'rgba(62,199,255,0.5)',width:1,type:'dashed'}
				},
				axisLabel:{
					color:'#fff',
					interval:0,
					fontSize: '0.859vw',
					formatter: function (value, index) {
						return value;
					}
				},
				data: xData
			},{
				gridIndex: 1,
				type: 'category',
				boundaryGap: true,
				axisTick:{show:false},
				axisLine:{
					show:true,
					onZero: true,
					lineStyle:{color:'#3EC7FF',width:1}
				},
				axisLabel:{
					show:false,
					color:'#fff',
					interval:0,
					formatter: function (value, index) {
						return value;
					}
				},
				splitLine:{
					show:true,
					lineStyle:{color:'rgba(62,199,255,0.5)',width:1,type:'dashed'}
				},
				data: xData
			}],
			yAxis: [{
				name:'交易量(个)',
				type: 'value',
				splitNumber:5,
				axisTick:{show:false},
				axisLine:{
					show:true,
					lineStyle:{color:'#3EC7FF',width:1}
				},
				axisLabel:{
					color:'#fff',
					formatter: function (value, index) {
						return value;
					}
				},
				splitLine:{
					show:true,
					lineStyle:{color:'rgba(62,199,255,0.5)',width:1,type:'dashed'}
				}
			},{
				gridIndex: 1,
				name:'交易人数(个)',
				type: 'value',
				splitNumber:5,
				inverse: true,
				axisTick:{show:false},
				axisLine:{
					show:true,
					lineStyle:{color:'#3EC7FF',width:1}
				},
				axisLabel:{
					color:'#fff',
					formatter: function (value, index) {
						return value;
					}
				},
				splitLine:{
					show:true,
					lineStyle:{color:'rgba(62,199,255,0.5)',width:1,type:'dashed'}
				}
			}],
			series: [
				{
					name: '产品交易量',
					type: 'bar',
					barWidth:20,
					itemStyle: {
						normal: {  
							borderWidth:1,
							borderColor:'#FAE53A',
							barBorderRadius:4,
							color: new echarts.graphic.LinearGradient(
								0, 0, 0, 1,
								[
									{offset: 0, color: 'rgba(255,168,0,1)'},
									{offset: 0.5, color: 'rgba(236,223,65,1)'},
									{offset: 1, color: 'rgba(80,108,70,1)'}
								]
							)
						},
						emphasis: {
							shadowColor:'rgba(253,255,102,0.7)',
							shadowBlur:15
						}
					},
					data: yValue1
				},
				{
					name:'产品交易人数',
					type: 'bar',
					barWidth:20,
					xAxisIndex: 1,
					yAxisIndex: 1,
					itemStyle: {
						normal: {
							borderWidth:1,
							borderColor:'#FAE53A',
							barBorderRadius:4,
							color: new echarts.graphic.LinearGradient(
								0, 0, 0, 1,
								[
									{offset: 0, color: 'rgba(42,34,106,1)'},
									{offset: 0.5, color: 'rgba(195,77,197,1)'},
									{offset: 1, color: 'rgba(250,192,119,1)'}
								]
							)
						},
						emphasis: {
							shadowColor:'rgba(136,215,89,0.7)',
							shadowBlur:15
						}
					},
					data: yValue2
				}
			]
		};
	
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},


	bar_15:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['1201','1202','1203','1204','1205','1206','1207','1208','1209','1210','1211'];
		var yValue=[
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		]
	
		//echarts样式数据
		var backgroundData=[];
		$.each(yValue,function(i,v){
			backgroundData.push(v+10);
		})
		
		var pointData=[];
		$.each(yValue,function(i,val){
			pointData.push({
				'coord':[xData[i],val+13],
				'symbol':'circle',
				'value':val
			});
		})

		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			grid:{
				left:'8%',
				right:'4%',
				top:'12%',
				bottom:'8%'
			},
			tooltip : {
				trigger: 'axis',
			},
			xAxis: {
				type: 'category',
				boundaryGap: true,
				axisTick:{show:false},
				axisLine:{
					show:true,
					lineStyle:{color:'#1499ee',width:1}
				},
				axisLabel:{
					color:'#fff',
					formatter: function (value, index) {
						return value;
					}
				},          
				data: xData
			},
			yAxis: {
				type: 'value',
				splitNumber:6,
				axisTick:{show:false},
				axisLine:{
					show:true,
					lineStyle:{color:'#1499ee',width:1}
				},
				axisLabel:{
					color:'#fff',
				},
				splitLine:{
					show:true,
					lineStyle:{color:'rgba(3,120,199,0.3)',width:1}
				}
			},
			color: ['#e54035'],
			series: [{
				name: '',
				type: 'pictorialBar',
				barWidth :'55%',
				symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
				itemStyle: {
					normal: {
						color:'#0A4874',
					},
					emphasis: {
						opacity: 1
					}
				},
				data: backgroundData,
				z: 1
			},
			{
				name: '新增机动车',
				type: 'pictorialBar',
				barWidth :'30%',
				barGap:'-78%',
				symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
				markLine: {
					silent: true,
					data: [{
						type: 'average',
						name: ''
					}],
					precision: 0,
					label: {
						normal: {
						formatter: ''
						}
					},
					lineStyle: {
						normal: {
							width:2,
						color: '#00FFFF'
						}
					}
				},
				markPoint:{
					symbol:'pin',
					symbolSize:'10',
					label:{
						normal:{
							show:true,
							color:'#13FF98',
							formatter:function(data){
								return data.data.value;
							},
							offset:[0,-20]
						}
					},
					itemStyle:{
						normal:{
							color:'#13FF98'
						}
					},
					data:pointData,
				},
				itemStyle: {
					normal: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: '#00FED2' // 0% 处的颜色
							}, {
								offset: 1, color: '#3372FD' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						},
					   /// opacity: 0.5
					},
					emphasis: {
						opacity: 1
					}
				},
				data: yValue,
				z: 2
			}]
		};
	
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},

	// bar_:function(divBox){
	// 	//设置字体基础大小，根据不同屏幕，自适应字体缩放
	// 	var fontSize=$(window).width()/1920;
	
	// 	//展示数据
	// 	var xData=['市南区','市北区','李沧区','黄岛区','即墨区','胶州市','城阳区','崂山区','莱西市','平度市']
	// 	var yValue=[
	// 		parseInt(Math.random()*100),
	// 		parseInt(Math.random()*100),
	// 		parseInt(Math.random()*100),
	// 		parseInt(Math.random()*100),
	// 		parseInt(Math.random()*100),
	// 		parseInt(Math.random()*100),
	// 		parseInt(Math.random()*100),
	// 		parseInt(Math.random()*100),
	// 		parseInt(Math.random()*100),
	// 		parseInt(Math.random()*100)
	// 	]
	
	// 	//echarts样式数据
		

	// 	var myChart = echarts.init(document.getElementById(divBox));
	// 	var option = {
			
	// 	};
	
	// 	// 使用刚指定的配置项和数据显示图表。
	// 	$(window).resize(function () {
	// 		myChart.resize();
	// 	})
	// 	// 使用刚指定的配置项和数据显示图表。
	// 	myChart.setOption(option);
	// },
}

charts.bar_1('bar_1');
charts.bar_2('bar_2');
charts.bar_3('bar_3');
charts.bar_4('bar_4');
charts.bar_5('bar_5');
charts.bar_6('bar_6');
charts.bar_7('bar_7');
charts.bar_8('bar_8');
charts.bar_9('bar_9');
charts.bar_10('bar_10');
charts.bar_11('bar_11');
charts.bar_12('bar_12');
charts.bar_13('bar_13');
charts.bar_14('bar_14');
charts.bar_15('bar_15');





