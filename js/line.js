var charts={
	line_1:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['01.01','01.02','01.03','01.04','01.05','01.06','01.07','01.08','01.09','01.10','01.11','01.12','01.13','01.14']
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
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		]

		//此图比较特殊，需要知道对应日期的星期才可实现，因不知具体需要展示哪些日期，不好根据日期计算星期，所以此处直接定义图标日期
		var week=['一','二','三','四','五','六','日','一','二','三','四','五','六','日'];

		//echarts样式数据
		var pointColor=[];
		$.each(week,function(n,val){
			if(val=='一'){pointColor.push('#4a47f0');}
			else if(val=='二'){pointColor.push('#b370fd');}
			else if(val=='三'){pointColor.push('#d8319b');}
			else if(val=='四'){pointColor.push('#2bc1fe');}
			else if(val=='五'){pointColor.push('#e97172');}
			else if(val=='六'){pointColor.push('#feac00');}
			else if(val=='日'){pointColor.push('#f7db31');}
		})
	
		var pointData=[];
		var pointHeight=Math.max.apply(null, yValue)+50;
		$.each(xData,function(n,val){
			pointData.push({
				'coord':[val,pointHeight],
				'symbol':'circle',
				'week':''+week[n]+'',
				'itemStyle':{
					'normal':{
						'color':''+pointColor[n]+'',
					}
				}
			});
		})


		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			grid: {x: "8%",y: "14%", y2:"24%", x2:"8%",borderWidth:0},
			tooltip : {
				trigger: 'axis',
			},
			dataZoom:[
				{   
					type: 'slider',
					show:true,
					height:4,
					xAxisIndex: [0],
					bottom:"10%",
					backgroundColor:'#11244a',
					borderColor:'#0e44ad',
					fillerColor:'#316b96',
					textStyle:{color:'transparent'},
					start: 0,
					end: parseInt(7/xData.length*100),
					zoomLock:true,
					moveOnMouseMove:true,
				}
			],
			xAxis : [
				{
					type : 'category',
					splitLine:{show: false},
					splitArea : {show : false},
					boundaryGap : false,
					axisLabel: {
						show: true,
						interval:0,
						textStyle: {
							color: '#fff',
						fontSize:12
						}
					},
					axisLine:{  
						lineStyle:{  
							color:'rgba(255,255,255,0.2)',  
							width:1
						}  
					},                  
					data : xData,
				}
			],
			yAxis : [
				{
					type : 'value',
					max:pointHeight,
					splitArea : {show : false},
					axisLabel: {show: false},
					axisTick:{show:false},
					splitLine: {  
						show:true,
						lineStyle: {
							// 网格线颜色
							color:'rgba(110,255,243,0.1)',
						}  
					}, 
					axisLine:{  
						show:true,  
						lineStyle:{  
							color:'rgba(110,255,243,0.3)',
						}  
					}
				},
				{
					type : 'value',
					splitArea : {show : false},
					axisLabel: {show: false},
					splitLine: {  
						show:true,
						lineStyle: {
							// 网格线颜色
							color:'rgba(110,255,243,0.1)',
						}  
					}, 
					axisLine:{  
						show:true,  
						lineStyle:{  
							color:'rgba(110,255,243,0.3)',
						}  
					}
				}
			],
			// color:['#fff68d'],
			series : [
				{
					name:'警情趋势分析',
					type:'line',
					smooth:false,
					data:yValue,
					smooth:true,
					markPoint:{
						symbol:'pin',
						symbolSize:'30',
						label:{
							normal:{
								show:true,
								color:'#fff',
								formatter:function(data){
									// console.log(data.data.week);
									return data.data.week;
								},
							}
						},
						itemStyle:{
							normal:{
								color:'#4a47f0'
							}
						},
						data:pointData,
					},
					itemStyle:{
						normal:{
							borderWidth:0,
							borderColor:'#dcff6c',
							color:'#fff'
						}
					},
					lineStyle:{
						normal:{
							width:4,
							color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:'#faf28d'},{offset:1,color: '#9423cb'}]),
							shadowColor:'rgba(0,0,0,0.6)',
							shadowBlur:10,
							shadowOffsetY:6,
						}
					}
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



	line_2:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['理财','基金','保险','储蓄式国债','贵金属','凭证国债','代销基金','存款','其他'];
		var yValue1=[
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
			parseInt(Math.random()*100)
		];
	
		//echarts样式数据
		var barArr1=[],barArr2=[];
		$.each(yValue1,function(i,v){
			if(yValue1[i]>yValue2[i]){
				barArr1.push(yValue2[i]);
				var number=yValue1[i]-yValue2[i];
				barArr2.push({value:number,itemStyle:{normal:{color:'#82DF95'}}})
			}else{
				barArr1.push(yValue1[i]);
				var number=yValue2[i]-yValue1[i];
				barArr2.push({value:number,itemStyle:{normal:{color:'red'}}})
			}
		})

		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			background: '#fff',
			tooltip : {
				trigger: 'axis',
			},
			color:['#F56A8D','#4CC57A'],
			legend: {
				itemHeight:9,
				itemWidth:9,
				right:'30vw',
				textStyle:{fontSize:"1.025vw",color:'#fff'},
				data:[
					{
						name:'流入总额',
						icon:'circle'
					},
					{
						name:'流出总额',
						icon:'circle'
					}
				],
				selectedMode:false
			},
			grid:{
				left:50,
				right:0,
				top:35,
				bottom:35
			},
			xAxis : {
				type: 'category',
				boundaryGap: true,
				axisTick:{
					show:false, 
				},
				axisLine:{
					show:true,
					lineStyle:{color:'rgba(3,120,199,0.5)',width:1}
				},
				splitLine:{
					show:true,
					lineStyle:{color:'rgba(238,238,238,0.1)',width:1}
				},
				axisLabel:{
					color:'#fff',
					fontSize: '1.025vw',
					formatter: function (value, index) {
						return value;
					}
				},
				data : xData
			},
			yAxis: {
				type: 'value',
				splitNumber:8,
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
					lineStyle:{color:'rgba(238,238,238,0.1)',width:1}
				}
			},
			series : [{
				name:'流入总额',
				type:'line',
				smooth:true,
				itemStyle:{
					normal:{
						lineStyle: {
						width:5,
						shadowColor:'rgba(0,0,0,0.5)',
						shadowBlur:15,
						shadowOffsetY:8,
						}
					}
				},
				data:yValue1
			},
			{
				name:'流出总额',
				type:'line',
				smooth:true,
				symbol:'none',
				itemStyle:{
					normal:{
						lineStyle: {
						width:5,
						shadowColor:'rgba(0,0,0,0.5)',
						shadowBlur:15,
						shadowOffsetY:8,
						}
					}
				},
				data:yValue2
			},
			{
				name:'',
				type:'bar',
				stack: '1',
				barWidth: 2,
				itemStyle:{
					normal:{
						color:'rgba(0,0,0,0)'
					},
					emphasis:{
						color:'rgba(0,0,0,0)'
					}
				},
				data:barArr1
			},
			{
				name:'',
				type:'bar',
				stack: '1',
				data:barArr2
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



	line_3:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['18/1 ','18/2','18/3','18/4','18/5','18/6','18/7','18/8','18/9','18/10'];
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
			parseInt(Math.random()*100)
		];
	
		//echarts样式数据
		var pointData1=[];
		$.each(xData,function(n,val){
			pointData1.push({
				'coord':[val,yValue1[n]-14],
				'symbol':'rect',
				'value':yValue1[n]
			});
		})

		var pointData2=[];
		$.each(xData,function(n,val){
			pointData2.push({
				'coord':[val,yValue2[n]-14],
				'symbol':'rect',
				'value':yValue2[n]
			});
		})
		
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			grid:{
				left:'5%',
				right:'1%',
				top:'12%',
				bottom:'8%'
			},
			tooltip : {
				trigger: 'axis',
			},
			legend: {
				data:[
					{
						name:'常住',
						icon:'image://images/i1.png'
					},
					{
						name:'暂住',
						icon:'image://images/i2.png'
					}
				],
				top:'3%',  //图例组件离顶部的距离
				right:'6%',
				// itemWidth:20*fontS,
				// itemHeight:20*fontS,
				itemGap:20,
				textStyle:{    //图例文字的样式
					color:'#fff',
					// fontSize:14*fontS
				}
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
					// fontSize:14*fontS,
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
					// fontSize:14*fontS,
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
					name:'常住',
					type: 'line',
					symbol: 'image://images/i3.png',
					// symbol: 'circle',
					symbolSize:20,
					// symbolOffset: [-1*fontS, -2*fontS],
					lineStyle: {
						normal: {
							width:2,
							color: "#22FBF3"
						}
					},
					label: {
						show: false,
					},
					markPoint:{
						symbol:'rect',
						symbolSize:['2','50'],
						label:{
							normal:{
								show:false,
								color:'#fff',
								offset:[0,-35],
								// formatter:function(data){
								// 	return data.data.week;
								// },
							}
						},
						itemStyle:{
							normal:{
								color:{
									type: 'linear',
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
										offset: 0,
										color: '#22FBF3' // 0% 处的颜色
									}, 
									{
										offset: 1,
										color: 'rgba(255,255,255,0)' // 100% 处的颜色
									}],
									globalCoord: false // 缺省为 false
								},
							}
						},
						data:pointData1,
					},
					areaStyle: {
						normal: {
							color:new echarts.graphic.LinearGradient(
								0, 0, 0, 1,
								[
									{offset: 0, color: 'rgba(34,251,243,0.8)'},
									{offset: 0.5, color: 'rgba(34,251,243,0.5)'},
									{offset: 1, color: 'rgba(34,251,243,0.2)'}
								]
							),
						}
					},
					data:yValue1
				},
				{
					name:'暂住',
					type: 'line',
					symbol: 'image://images/i3.png',
					// symbol: 'circle',
					symbolSize:20,
					// symbolOffset: [-1*fontS, -2*fontS],
					lineStyle: {
						normal: {
							width:2,
							color: "#C7FA20"
						}
					},
					label: {
						show: false,
					},
					markPoint:{
						symbol:'rect',
						symbolSize:['2','50'],
						label:{
							normal:{
								show:false,
								color:'#fff',
								offset:[0,-35],
								// formatter:function(data){
								// 	return data.data.week;
								// },
							}
						},
						itemStyle:{
							normal:{
								color: {
									type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
									colorStops: [
										{offset: 0,color: '#C7FA20'}, 
										{offset: 1,color: 'rgba(255,255,255,0)'}
									],
									globalCoord: false // 缺省为 false
								},
							}
						},
						data:pointData2,
					},
					areaStyle: {
						normal: {
							color:{
								type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
								colorStops: [
									{offset: 0, color: 'rgba(199,250,32,1)'},
									{offset: 0.3, color: 'rgba(199,250,32,0.3)'},
									{offset: 1, color: 'rgba(199,250,32,0)'}
								],
								globalCoord: false // 缺省为 false
							},
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


	line_4:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['市南区','市北区','李沧区','黄岛区','即墨区','胶州市','城阳区','崂山区','莱西市','平度市'];
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
			parseInt(Math.random()*100)
		];
	
		//echarts样式数据
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			color:['#87e14a'],
			tooltip : {
				 show:true,
				trigger: 'axis',
				axisPointer : {
					type : 'line',
					lineStyle:{
						color:'rgba(3,120,199,0.5)'
					}
				},
			},
			legend:{
				right:30,
				textStyle:{color:"#3bc7ff"},
				data:[{name:'人员数量',icon:'roundRect'}]
			},
			grid:{
				left:50,
				right:30,
				top:30,
				bottom:52
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
			xAxis: {
				type: 'category',
				boundaryGap: false,
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
				data: xData
			},
			yAxis: {
				type: 'value',
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
			series: [
				{
					name:'人员数量',
					type:'line',
					smooth:true,
					symbol: 'none',
					sampling: 'average',
					lineStyle: {
						normal: {
							width:5,
							shadowColor:'rgba(0,77,60,0.9)',
							shadowBlur:15,
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#1cdc6f'
							}, {
								offset: 0.5,
								color: '#f4dc00'
							}, {
								offset: 1,
								color: '#1cdc6f'
							}])
						}
					},
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgba(22, 251, 147,0.8)'
							}, {
								offset: 0.3,
								color: 'rgba(22, 251, 248,0.8)'
							}, {
								offset: 0.6,
								color: 'rgba(22, 251, 147,0.6)'
							}, {
								offset: 1,
								color: 'rgba(22, 251, 248,0.1)'
							}])
						}
					},
					data: yValue1
				},
				{
					name:'人员数量',
					type:'line',
					smooth:true,
					symbol: 'none',
					sampling: 'average',
					lineStyle: {
						normal: {
							width:4,
							shadowColor:'rgba(255,55,116,0.3)',
							shadowBlur:15,
							color:{
								type: 'linear',x: 0,y: 0,x2: 0,y2: 1,
								colorStops: [
									{offset: 0,color: '#ff5a9c'}, 
									{offset: 0.5,color: '#ffda5a'}, 
									{offset: 1,color: '#ff5d5d'}
								],
							},
						}
					},
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
								{offset: 0,color: 'rgba(255, 90, 156,0.8)'}, 
								{offset: 1,color: 'rgba(255, 90, 156,0.1)'}
							])
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




	line_5:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['南昌','景德镇','萍乡','九江','新余','鹰潭','赣州','吉安','宜春','抚州','上饶'];
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
	
		//echarts样式数据
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			tooltip : {
			   trigger: 'axis',
			},
			legend: {
				data:['集资诈骗案件趋势图','非法吸收公共存款案件趋势图','非法集资警情趋势图'],				
				top:10,  //图例组件离顶部的距离
				right:'1%',	
				itemGap: 20,
				textStyle:{    //图例文字的样式
					color:'#fff',
					fontSize:14
				}
			},
			grid:{
				left:'5%',
				right:'2%',
				top:44,
				bottom:40
			},
			xAxis: {
				type: 'category',
				boundaryGap: true,
				axisTick:{show:false},
				axisLine:{
					show:true,
					lineStyle:{color:'#0168a9',width:2}
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
				type: 'value',
				axisTick:{show:false},
				axisLine:{
					show:false,
					lineStyle:{color:'#0168a9',width:1}
				},
				axisLabel:{
					color:'#008eda',
					fontSize:14,
					formatter: function (value, index) {
						return value;
					}
				},
				splitLine:{
					show:true,
					lineStyle:{color:'#0168a9',width:1,type:'dashed'}
				}
			},
			series: [
				{
					name:'集资诈骗案件趋势图',
					type:'line',
					symbol: 'image://images/echarts-line-ico01.png',
					symbolSize:15,
					sampling: 'average',
					itemStyle: {
						normal: {
							color: '#2debff'
						}
					},
					areaStyle: {
						normal: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0, color: 'rgba(45,235,255,.5)' // 0% 
								}, {
									offset: 1, color: 'rgba(45,235,255,0)' // 100%
								}]
							}
						}
					},
				   	data:yValue1
			   	},
				{
					name:'非法吸收公共存款案件趋势图',
					type:'line',
					symbol: 'image://images/echarts-line-ico02.png',
					symbolSize:15,
					sampling: 'average',
					itemStyle: {
						normal: {
								color: '#48ff8c'
						}
					},
					areaStyle: {
						normal: {
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
										offset: 0, color: 'rgba(72,255,140,.5)' // 0% 
									}, {
										offset: 1, color: 'rgba(72,255,140,0)' // 100%
									}]
								}
						}
					},
					data:yValue2
				},
				{
					name:'非法集资警情趋势图',
					type:'line',
					symbol: 'image://images/echarts-line-ico03.png',
					symbolSize:15,
					sampling: 'average',
					itemStyle: {
						normal: {
								color: '#ff7c48'
						}
					},
					areaStyle: {
						normal: {
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
										offset: 0, color: 'rgba(255,124,72,.5)' // 0% 
									}, {
										offset: 1, color: 'rgba(255,124,72,0)' // 100%
									}]
								}
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


	line_6:function(divBox){
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
					type: 'line',
					itemStyle: {
						normal: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 1,
								colorStops: [{
									offset: 0, color: '#ff5858' // 0% 处的颜色
								}, {
									offset: 1, color: '#ffc63d' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							}
						},
						shadowColor: 'rgba(0,0,0,.1)',
						shadowOffsetY :7
					},
					label: {
						normal: {
							show: true, //折线上方label控制显示隐藏
							position: 'top',
							color: '#ffc029',
							fontSize: 18,
							fontFamily:'UTM BANQUER',
							backgroundColor: {
								image: 'images/num-bg.png'
							},
							align: 'center',
							width: 71,
							height: 35,
							lineHeight: 25,
//						    padding: [3, 20, 12, 10],
							rich: {
								a: {
//		                            color: '#ffc029',
									lineHeight: 20,
									fontSize: 14,
									align: 'center',
								}
							}
						}
					},
					areaStyle: {
						normal: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 1,
								colorStops: [{
									offset: 0, color: 'rgba(255,88,88,.2)' // 0% 处的颜色
								}, {
									offset: 1, color: 'rgba(255,198,61,.2)' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							}
						}
					},
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


	line_7:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['南京','无锡','徐州','常州','苏州','南通','连云港','淮安','盐城','扬州','镇江','泰州','宿迁'];
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
			tooltip : {
			   trigger: 'axis',
			   //backgroundColor:'rgba(0,0,0,0.4)',
			   axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				   type : 'shadow', // 默认为直线，可选为：'line' | 'shadow'
				   shadowStyle:{
   //	            	color:'rgba(8,113,243,0)'	
				   }
			   }
		   },
		   legend: {
			   orient:'vertical',
			   right : '20',
			   itemWidth:18,
			   itemHeight:10,
   //          itemGap:8,
			   textStyle:{
				   color:'#fff',
				   fontSize: 14
			   },
			   data: ['数量'] 
		   },
		   grid:{
			   left:50,
			   right:20,
			   top:25,
			   bottom:42
		   },
		   xAxis: {
			   type: 'category',
			   boundaryGap: true,
			   axisTick:{show:false},
			   axisLine:{
				   show:true,
				   lineStyle:{color:'#519cff',width:1}
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
				   lineStyle:{color:'#519cff',width:1}
			   },
			   axisLabel:{
				   color:'#fff',
				   formatter: function (value, index) {
					   return value;
				   }
			   },
			   splitLine:{
				   show:true,
				   lineStyle:{color:'rgba(81,156,255,0.4)',width:1,type:'dotted'}
			   }
		   },
		   dataZoom: [
			   {
				   type:'slider',
				   show: true,
				   bottom:10,
				   backgroundColor:'#00368f',
				   borderColor:'transparent',
				   fillerColor:'#00f6ff',
				   textStyle:{color:'transparent'},
				   handleColor:'#00f6ff',
				   handleColor:'transparent',
				   handleSize:"200%",
				   height:6,
				   start: 0,
				   end: 60
			   },
			   {
					show:true,
					type: 'inside',
					height:6,
					start: 0,
					end:60
				}
		   ],
		   series: [
			   {
				   name: '数量',
				   type: 'line',
				   smooth:true,
   //              showSymbol:false,
				   itemStyle: {
					   normal: {
						   color: '#eac829'
					   },
					   emphasis: {
						   shadowColor:'rgba(0,246,255,0.25)',
						   shadowBlur:15
					   }
				   },
				   areaStyle: {
					   normal: {
						   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							   offset: 0,
							   color: 'rgba(237,208,72,.25)'
						   }, {
							   offset: 1,
							   color: 'rgba(237,208,72,.1)'
						   }])
					   }
				   },
				   data:yValue
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


	line_8:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['山西省','辽宁省','吉林省','江苏省','浙江省','安徽省','福建省','江西省','山东省','湖南省','湖北省'];
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
	
		//echarts样式数据
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			color:['#ffa961','#16fbc6'],
			grid:{left:'8%',top:'20%',right:'4%',bottom:'15%'},
			tooltip : {
					show:true,
				trigger: 'axis',
				axisPointer : {
					type : 'line',
					lineStyle:{
						color:'rgba(3,120,199,0.5)'	
					}
				},
			},
			legend:{
				right:30,
				top:10,
				textStyle:{color:"#3bc7ff"},
				data:[
					{name:'人次'},
					{name:'班次'},
				]
			},
			dataZoom:[
				{
					type:'slider',
					show: true,
					bottom:'0%',
					backgroundColor:'rgba(52,195,239,0.35)',
					borderColor:'transparent',
					fillerColor:'#2f89dc',
					textStyle:{color:'transparent'},
					handleColor:'transparent',
					height:5,
					start: 0,
					end: 70
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
				type: 'category',
				boundaryGap: ['10px','10px'],
				axisTick:{show:false},
				axisLine:{
					show:true,
					lineStyle:{color:'rgba(3,120,199,0.5)',width:1}
				},
				axisLabel:{
					color:'#fff',
					interval:0,
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
			series: [
				{
					name: '班次',
					type: 'bar',
					barWidth:20,
					itemStyle: {
						normal: {
							borderColor:'#ffda5b',
							borderWidth:1,
							shadowColor:'rgba(0,0,0,0.5)',
							shadowBlur:6,
							shadowOffsetX:6,
							shadowOffsetY:6,
							color: new echarts.graphic.LinearGradient(
								0, 0, 0, 1,
								[
									{offset: 0, color: '#ffd859'},
									{offset: 1, color: '#ff605d'}
								]
							)
						}
					},
					data: yValue1
				},
				{
					name:'人次',
					type:'line',
					smooth:true,
					symbol: 'none',
					sampling: 'average',
					lineStyle: {
						normal: {
							width:4,
							shadowColor:'rgba(255,55,116,0.3)',
							shadowBlur:15,
							color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
								offset: 0,
								color: '#16fb93'
							}, {
								offset: 0.32,
								color: '#16fbf8'
							}, {
								offset: 0.66,
								color: '#16fb93'
							}, {
								offset: 1,
								color: '#16fbf8'
							}])
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



	line_9:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var xData=['省厅','南京','无锡' ,'徐州','常州','苏州','南通','盐城','扬州','镇江','泰州','宿迁','淮安','连云港'];
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
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100),
			parseInt(Math.random()*100)
		];

		//echarts样式数据
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			backgroundColor:'#fff',
			 color: ['#28e9a7','#ffc64c','#61beff','#ff9181'],
			 tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow', // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			legend: [{
				data:['未审核','无PKI'],
				top:0,  //图例组件离顶部的距离
				left : '30',   //图例显示在右边		
				textStyle:{    //图例文字的样式
					color:'#333',
					fontSize:14
				},
				itemWidth:17,
				itemHeight:9
			},{
				data:['挂起','故障'],
				top:0,  //图例组件离顶部的距离
				right : '30',   //图例显示在右边		
				textStyle:{    //图例文字的样式
					color:'#333',
					fontSize:14
				},
				itemWidth:17,
				itemHeight:9
			},],
			grid:{
				left:40,
				right:50,
				top:45,
				bottom:40
			},
			xAxis: {
				type: 'category',
				boundaryGap: true,
				axisTick:{
					show:true,
					inside:true
				},
				axisLine:{
					show:true,
					lineStyle:{color:'#e0e0e0',width:2}
				},
				axisLabel:{
					color:'#333',
					fontSize:14,
					formatter: function (value, index) {
						return value;
					}
				},
				data: xData
			},
			yAxis: [{
				type: 'value',
				splitNumber:6,
				axisTick:{
					show:false
				},
				axisLine:{
					show:false,
					lineStyle:{color:'#e0e0e0',width:1}
				},
				axisLabel:{
					color:'#333',
					fontSize:14,
					formatter: function (value, index) {
						return value;
					}
				},
				splitLine:{
					show:true,
					lineStyle:{color:'#e0e0e0',width:1}
				}
			},{
				type: 'value',
				splitNumber:6,
				axisTick:{
					show:false
				},
				axisLine:{
					show:false,
					lineStyle:{color:'#e0e0e0',width:1}
				},
				axisLabel:{
					color:'#333',
					fontSize:14,
					formatter: function (value, index) {
						return value;
					}
				},
				splitLine:{
					show:true,
					lineStyle:{color:'#e0e0e0',width:1}
				}
			}],
			series: [
				{
					name:'未审核',
					type:'bar',
					barWidth : 14,//柱图宽度
					itemStyle: {
						normal: {
							barBorderRadius:7,
						}
					},
					yAxisIndex: 0,
					data:yValue1
				},
				{
					name:'无PKI',
					type:'line',
					showSymbol:true,
					itemStyle: {
						normal: {
							borderWidth:4,
						}
					},
					lineStyle:{
						normal:{
							width: 2,
							shadowColor:'#ddd',
							shadowBlur:2,
							shadowOffsetY:10
						}
						
					},
					yAxisIndex: 1,
					data:yValue2
				},
				{
					name:'挂起',
					type:'line',
					showSymbol:true,
					itemStyle: {
						normal: {
							borderWidth:4,
						}
					},
					lineStyle:{
						normal:{
							width: 2,
							shadowColor:'#ddd',
							shadowBlur:2,
							shadowOffsetY:10
						}
						
					},
					yAxisIndex: 1,
					data:yValue3
				},
				{
					name:'故障',
					type:'line',
					showSymbol:true,
					itemStyle: {
						normal: {
							borderWidth:4,
						}
					},
					lineStyle:{
						normal:{
							width: 2,
							shadowColor:'#ddd',
							shadowBlur:2,
							shadowOffsetY:10
						}
						
					},
					yAxisIndex: 1,
					data:yValue4
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
	line_10:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;

		var huanhang = function (params) {
			var newParamsName = "";// 最终拼接成的字符串
			var paramsNameNumber = params.length;// 实际标签的个数
			var provideNumber = 5;// 每行能显示的字的个数
			var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
			/**
			 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
			 */
			// 条件等同于rowNumber>1
			if (paramsNameNumber > provideNumber) {
				/** 循环每一行,p表示行 */
				for (var p = 0; p < rowNumber; p++) {
					var tempStr = "";// 表示每一次截取的字符串
					var start = p * provideNumber;// 开始截取的位置
					var end = start + provideNumber;// 结束截取的位置
					// 此处特殊处理最后一行的索引值
					if (p == rowNumber - 1) {
						// 最后一次不换行
						tempStr = params.substring(start, paramsNameNumber);
					} else {
						// 每一次拼接字符串并换行
						tempStr = params.substring(start, end) + "\n";
					}
					newParamsName += tempStr;// 最终拼成的字符串
				}
	
	
			} else {
				// 将旧标签的值赋给新标签
				newParamsName = params;
			}
			//将最终的字符串返回
			return newParamsName;
		}
	
	
		//展示数据
		var xData = [
			{value:''},
			{value:'08-01 2019',textStyle:{color:'#fff'}},
			{value:''},
			{value:'08-02 2019',textStyle:{color:'#fff'}},
			{value:''},
			{value:'08-03 2019',textStyle:{color:'#fff'}},
			{value:''},
			{value:'08-04 2019',textStyle:{color:'#fff'}},
			{value:''},
			{value:'08-05 2019',textStyle:{color:'#fff'}},
			{value:''},
			{value:'08-06 2019',textStyle:{color:'#fff'}},
			{value:''},
			{value:'08-07 2019',textStyle:{color:'#fff'}},
			{value:''},
		]
	
	
		var yValue = [0, 80, 0, 100, 0, 150, 0, 120, 0, 80, 0, 60, 0,100,0]
		var yValue2 = [0, -80, 0, -80, 0, -120, 0, -100, 0, -80, 0, -60, 0,-100,0];
	
		var yValue3 = [0, 40, 0, 90, 0, 50, 0, 70, 0, 70, 0, 50, 0,60,0]
		var yValue4 = [0, -40, 0, -90, 0, -50, 0, -60, 0, -70, 0, -50, 0,-60,0]
	
	
		var yValue5 = [0, 50, 0, 80, 0, 40, 0, 50, 0, 60, 0, 70, 0,90,0]
		var yValue6 = [0, -50, 0, -50, 0, -20, 0, -50, 0, -60, 0, -70, 0,-80,0]
	
		var yValue7 = [0, 20, 0, 80, 0, 50, 0, 40, 0, 50, 0, 90, 0,40,0]
		var yValue8 = [0, -20, 0, -60, 0, -30, 0, -20, 0, -50, 0, -90, 0,-40,0]
	
		var yValue9 = [0, 40, 0, 50, 0, 80, 0, 40, 0, 30, 0, 20, 0,30,0]
		var yValue10 = [0, -40, 0, -50, 0, -80, 0, -40, 0, -30, 0, -20, 0,-30,0]
		//echarts样式数据

		var myChart = echarts.init(document.getElementById(divBox));
	
		option = {
			color: ['#225bc7', '#02cfda', '#cf9815', '#5b53d7', '#13d5a2'],
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					lineStyle: {
						color: '#777'
					}
				}
			},
			legend: {
				data: ['法轮功邪教组织', '疫苗群体', '象富百货', '失独人员', '个访重点人'],
				top: 10,  //图例组件离顶部的距离
				left: '7%',
				itemWidth: 30,
				itemHeight: 12,
				textStyle: {    //图例文字的样式
					color: '#fff',
					fontSize: fontSize * 14
				}
			},
			xAxis: {
				type: 'category',
	
				boundaryGap: false,
				splitLine: {
					show: false
				},
				axisLabel: {
					interval: 0
				},
				"splitArea": {
					"show": false
				},
				axisLine: {
					show: true,
					lineStyle: { color: '#2c71ba', width: 1 }
				},
				axisLabel: {
					color: "#fff",
					fontSize: fontSize * 14,
					interval: 0,
					formatter: huanhang,
				},
	
				data: xData
			},
			grid: {
				left: '2%',
				right: '4%',
				bottom: '3%',
				top: '18%',
				containLabel: true
			},
			yAxis: {
				type: 'value',
				min: -200,
				max: 200,
				axisLabel: {
					show: false,
					color: "#fff",
					fontSize: fontSize * 14,
				},
				axisLine: {
					show: false
				},
				splitLine: {
					show: true,
					lineStyle: { color: '#2c71ba', width: 1 }
				}
			},
			series: [{
				name: '法轮功邪教组织',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 4,
				showSymbol: false,
				itemStyle: {
					normal: {
						shadowBlur: 6,
						shadowColor: '#49C1B6'
					}
				},
				lineStyle: {
					normal: {
						width: 0
					}
				},
				areaStyle: {
					normal: {
						opacity: "0.6",
					}
				},
				data: yValue
			},
	
			{
				name: '法轮功邪教组织',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 4,
				showSymbol: false, itemStyle: {
					normal: {
						shadowBlur: 6,
						shadowColor: '#FDC20A'
					}
				},
				lineStyle: {
					normal: {
						width: 0
					}
				},
				areaStyle: {
					normal: {
						opacity: "0.6",
					}
				},
				data: yValue2
			},
			{
				name: '疫苗群体',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 4,
				showSymbol: false,
				itemStyle: {
					normal: {
						shadowBlur: 6,
						shadowColor: '#49C1B6'
					}
				},
				lineStyle: {
					normal: {
						width: 0
					}
				},
				areaStyle: {
					normal: {
						opacity: "0.6",
					}
				},
				data: yValue3
			},
	
			{
				name: '疫苗群体',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 4,
				showSymbol: false, itemStyle: {
					normal: {
						shadowBlur: 6,
						shadowColor: '#FDC20A'
					}
				},
				lineStyle: {
					normal: {
						width: 0
					}
				},
				areaStyle: {
					normal: {
						opacity: "0.6",
					}
				},
				data: yValue4
			},
			{
				name: '象富百货',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 4,
				showSymbol: false,
				itemStyle: {
					normal: {
						shadowBlur: 6,
						shadowColor: '#49C1B6'
					}
				},
				lineStyle: {
					normal: {
						width: 0
					}
				},
				areaStyle: {
					normal: {
						opacity: "0.6",
					}
				},
				data: yValue5
			},
	
			{
				name: '象富百货',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 4,
				showSymbol: false, itemStyle: {
					normal: {
						shadowBlur: 6,
						shadowColor: '#FDC20A'
					}
				},
				lineStyle: {
					normal: {
						width: 0
					}
				},
				areaStyle: {
					normal: {
						opacity: "0.6",
					}
				},
				data: yValue6
			},
			{
				name: '失独人员',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 4,
				showSymbol: false,
				itemStyle: {
					normal: {
						shadowBlur: 6,
						shadowColor: '#49C1B6'
					}
				},
				lineStyle: {
					normal: {
						width: 0
					}
				},
				areaStyle: {
					normal: {
						opacity: "0.6",
					}
				},
				data: yValue7
			},
	
			{
				name: '失独人员',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 4,
				showSymbol: false, itemStyle: {
					normal: {
						shadowBlur: 6,
						shadowColor: '#FDC20A'
					}
				},
				lineStyle: {
					normal: {
						width: 0
					}
				},
				areaStyle: {
					normal: {
						opacity: "0.6",
					}
				},
				data: yValue8
			},
			{
				name: '个访重点人',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 4,
				showSymbol: false,
				itemStyle: {
					normal: {
						shadowBlur: 6,
						shadowColor: '#49C1B6'
					}
				},
				lineStyle: {
					normal: {
						width: 0
					}
				},
				areaStyle: {
					normal: {
						opacity: "0.6",
					}
				},
				data: yValue9
			},
	
			{
				name: '个访重点人',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 4,
				showSymbol: false, itemStyle: {
					normal: {
						shadowBlur: 6,
						shadowColor: '#FDC20A'
					}
				},
				lineStyle: {
					normal: {
						width: 0
					}
				},
				areaStyle: {
					normal: {
						opacity: "0.6",
					}
				},
				data: yValue10
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


	// line_:function(divBox){
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

charts.line_1('line_1');
charts.line_2('line_2');
charts.line_3('line_3');
charts.line_4('line_4');
charts.line_5('line_5');
charts.line_6('line_6');
charts.line_7('line_7');
charts.line_8('line_8');
charts.line_9('line_9');
charts.line_10('line_10');


