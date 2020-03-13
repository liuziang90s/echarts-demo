var charts={
	
	pie_1:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
	
		//echarts样式数据
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				//orient: 'vertical',
				itemWidth:18,
				itemHeight:10,
				left: 'center',
				bottom:10,
				textStyle:{color:'#fff'},
				data: ['不满14','14-16','16-18','18-25','25-36','36-60','60以上']
			},
			series : [
				{
					name: '访问来源',
					type: 'pie',
					selectedMode: 'single',
					radius : '55%',
					center: ['50%', '40%'],
					data:[
						{
							value:parseInt(Math.random()*100), 
							name:'不满14',
							itemStyle:{
								normal:{
									color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
										color: '#811a7e'
									}, {
										offset: 1,
										color: '#ca6abe'
									}])
								}
							}
						},
						{
							value:parseInt(Math.random()*100), 
							name:'14-16',
							itemStyle:{
								normal:{
									color:new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
									offset: 0,
										color: '#1c1fb9'
									}, {
										offset: 1,
										color: '#696ccc'
									}])
								}
							}
						},
						{
							value:parseInt(Math.random()*100), 
							name:'16-18',
							itemStyle:{
								normal:{
									color:new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
									offset: 0,
										color: '#0a8346'
									}, {
										offset: 1,
										color: '#58cf79'
									}])
								}
							}
						},
						{
							value:parseInt(Math.random()*100), 
							name:'18-25',
							itemStyle:{
								normal:{
									color:new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
									offset: 0,
										color: '#1292d4'
									}, {
										offset: 1,
										color: '#d4e0fa'
									}])
								}
							}
						},
						{
							value:parseInt(Math.random()*100), 
							name:'25-36',
							itemStyle:{
								normal:{
									color:new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
									offset: 0,
										color: '#ef9539'
									}, {
										offset: 1,
										color: '#e09035'
									}])
								}
							}
						},
						{
							value:parseInt(Math.random()*100), 
							name:'36-60',
							itemStyle:{
								normal:{
									color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
										color: '#3369ff'
									}, {
										offset: 1,
										color: '#6abafd'
									}])
								}
							}
						},
						{
							value:parseInt(Math.random()*100), 
							name:'60以上',
							selected:true,
							itemStyle:{
								normal:{
									color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
									offset: 0,
										color: '#8022d2'
									}, {
										offset: 1,
										color: '#b04cd5'
									}])
								}
							}
						}
					],
					label: {
						normal: {
							formatter: '{d}%',
							color:'#8dddff'
						}
					},
					labelLine:{
						normal:{
							length:0,
							length2:20
						}
					},
					itemStyle: {
						emphasis: {
							shadowBlur: 30,
							shadowOffsetX: 0,
							shadowColor: 'rgba(44, 33, 164, 0.6)'
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


	pie_2:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
	
		//echarts样式数据
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			color:['#75f8f8','#40d0ff','#fff601','#00ff9c','#aeff00','#1990ff'],
			series: [
				{
					name:'数据量',
					type:'pie',
					selectedMode:'single',
					selectedOffset:5,
					radius: ['48px', '78px'],
					radius: ['40%', '70%'],
					label: {
						normal: {
							formatter: '{a|{b}}\n{hr|}\n{b|{c}}',
							borderColor: '#aaa',
							rich: {
								a: {
									color: '#fff',
									lineHeight: 16,
									align: 'center'
								},
								hr: {
									borderColor: '#0974af',
									width: '100%',
									borderWidth: 0.5,
									height: 0
								},
								b: {
									lineHeight: 16,
									align: 'center',
									color:'#00eaff'
								},
							}
						}
					},
					labelLine:{
						normal:{
							length:5,
							length2:30,
							lineStyle:{color:'#0974af'}
						}
					},
					itemStyle:{
						normal:{
							shadowColor:'rgba(0,0,0,0.8)',
							shadowBlur:15
						}
					},
					data:[
						{value:parseInt(Math.random()*100), name:'市南区'},
		                {value:parseInt(Math.random()*100), name:'市北区'},
		                {value:parseInt(Math.random()*100), name:'李沧区'},
						{value:parseInt(Math.random()*100), name:'黄岛区'},
						{value:parseInt(Math.random()*100), name:'即墨曲'},
						{value:parseInt(Math.random()*100), name:'胶州市',selected:true},
						{value:parseInt(Math.random()*100), name:'城阳区'},
						{value:parseInt(Math.random()*100), name:'崂山区'},
		                {value:parseInt(Math.random()*100), name:'莱西市'},
		                {value:parseInt(Math.random()*100), name:'平度市'}
					]
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


	pie_3:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var chartData=[
			{name:'治安',value:parseInt(Math.random()*100),},
			{name:'交通',value:parseInt(Math.random()*100),},
			{name:'求助',value:parseInt(Math.random()*100),},
			{name:'纠纷',value:parseInt(Math.random()*100),},
			{name:'事件',value:parseInt(Math.random()*100),},
			{name:'举报',value:parseInt(Math.random()*100),},
			{name:'刑事',value:parseInt(Math.random()*100),}
		]
	
		//echarts样式数据
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			color:['#fadb32','#b2ff4d','#23fc94','#1bdcfb','#506ffe','#6728cf','#f3650f',],
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			series: [
				{
					name:'近期警情',
					type:'pie',
					radius: ['47%', '59%'],
					label: {
						normal: {
							formatter: '{b|{b}} {a|{c}}\n\n',
							borderWidth: 20,
							borderRadius: 4,
							padding: [0, -30],
							rich: {
								a: {
									color: '#fff',
									fontSize: 14,
								},
								b: {
									color: '#fff',
									fontSize: 14,
								}
							}
						}
					},
					labelLine: {
						normal: {
							length: 20,
							length2: 30,
						}
					},
					itemStyle:{
						normal:{
						borderWidth:4,
						borderColor:'rgba(0,0,0,1)',
						}
					},
					data:chartData,
				},
				{
					name:'近期警情',
					type:'pie',
					radius: ['34%', '46%'],
					hoverAnimation:false,
					label: {
						normal: {
							show:false,
						}
					},
					labelLine: {
						show:false,
					},
					itemStyle:{
						normal:{
							borderWidth:4,
							borderColor:'#000',
							opacity:0.5,
						}
					},
					data:chartData,
				},
				{
					name:'近期警情',
					type:'pie',
					radius: ['21%', '33%'],
					hoverAnimation:false,
					label: {
						normal: {
							show:false,
						}
					},
					labelLine: {
						show:false,
					},
					itemStyle:{
						normal:{
							borderWidth:4,
							borderColor:'#000',
							opacity:0.3,
						}
					},
					data:chartData,
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

	pie_4:function(divBox){
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
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			backgroundColor:'#053794',
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			color:['#6ef0ff','#fffa6e'],
			title : {
				text : '卡口点分布',
				textStyle: {  
					fontWeight: 'normal',              //标题颜色  
					color: '#fff' ,
					fontSize: 14
				},  
				x:"center" ,
				y:'12',
			},
			calculable : true,
			series : [
				{
					name:'卡口点分布',
					type:'pie',
					radius : [0, 58],
					center : ['50%', '58%'],
					label: {
						normal: {
	//	                    formatter: '{a|{b}}\n{hr|}\n{b|{c}}',
							formatter: '{b}',
							borderColor: '#aaa',
							rich: {
								a: {
									color: '#fff',
									lineHeight: 16,
		            				fontSize: 14,
									align: 'center'
								},
								hr: {
									borderColor: '#0974af',
									width: '100%',
									borderWidth: 0.5,
									height: 0
								},
								b: {
									lineHeight: 16,
									fontSize: 14,
									align: 'center',
									color:'#61bcde'
								},
							},
						}
					},
					itemStyle:{
						normal:{
							shadowColor:'rgba(0,0,0,0.5)',
							shadowBlur:15
						}
					},
					labelLine:{
						normal: {
							length: 3,
							lineStyle:{color:'#0974af'}
						}
					},
					roseType : 'area',
					data:[
						{value:parseInt(Math.random()*100), name:'徐州'},
						{value:parseInt(Math.random()*100), name:'常州'},
						{value:parseInt(Math.random()*100), name:'苏州'},
						{value:parseInt(Math.random()*100), name:'南通'},
						{value:parseInt(Math.random()*100), name:'连云港'},
						{value:parseInt(Math.random()*100), name:'淮安'},
						{value:parseInt(Math.random()*100), name:'盐城'},
						{value:parseInt(Math.random()*100), name:'扬州'},
						{value:parseInt(Math.random()*100), name:'镇江'},
						{value:parseInt(Math.random()*100), name:'泰州'},
						{value:parseInt(Math.random()*100), name:'宿迁'},
						{value:parseInt(Math.random()*100), name:'南京'},
						{value:parseInt(Math.random()*100), name:'无锡'},
					]
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





	pie_5:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		
		//echarts样式数据
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			color:['#544bfc','#b34afc','#fd9c35','#de4444','#5793f3','#3acfff','#a3e25c','#de3d6f','#bd3b47'],
			legend: {
				orient:'vertical',
				right : '30',
				y : 'center',
				itemWidth:17,
				itemHeight:10,
				itemGap:8,
				textStyle:{
					color:'#fff',
					fontSize: 14
				},
				data: ['群体人数','E租宝','泛亚','善林','兵道','爱融汇','联宝','汝康','邮币卡'] 
			},
			series: [
				{
					name:'数据量',
					type:'pie',
					selectedMode:'single',
					selectedOffset:5,
					roseType: 'radius',
					radius: ['26%', '75%'],
					center: ['36%', '50%'],
					label: {
						normal: {
							formatter: [
								'{a|{b}}',
								'{b|{c}}'
							].join('\n'),
							rich: {
								a: {
									color: '#fff',
									lineHeight: 18,
									fontSize: 14,
									align: 'center'
								},
								b: {
									lineHeight: 18,
									fontSize: 20,
									align: 'center',
									fontFamily:'DS-DIGIB'
	//	                            color:'#fff'
								}
							}
						}
					},
					labelLine:{
						normal:{
	//	            		show:false,
							length:10,
							length2:20,
	//	            		lineStyle:{color:'#0974af'}
						}
					},
					itemStyle:{
						normal:{
	//	            		shadowColor:'rgba(0,0,0,0.8)',
	//	            		shadowBlur:15
						}
					},
					data:[
						{value:parseInt(Math.random()*100), name:'群体人数'},
						{value:parseInt(Math.random()*100), name:'E租宝',selected:true},
						{value:parseInt(Math.random()*100), name:'泛亚'},
						{value:parseInt(Math.random()*100), name:'善林'},
						{value:parseInt(Math.random()*100), name:'兵道'},
						{value:parseInt(Math.random()*100), name:'爱融汇'},
						{value:parseInt(Math.random()*100), name:'联宝'},
						{value:parseInt(Math.random()*100), name:'汝康'},
						{value:parseInt(Math.random()*100), name:'邮币卡'}
					]
				},{
					name: '内环',
					type: 'pie',
					silent: true,
					clockWise: true,
					hoverAnimation: false,
					animationType: 'scale',
					radius: ['0', '16%'],
					center: ['36%', '50%'],
					label: {
						normal: {
							position: 'center'
						}
					},
					data: [{
						value: 100,
						itemStyle: {
							normal: {
								color: "#062d82"
							}
						}
					}]
				},{
					name: '线2',
					type: 'pie',
					silent: true,
					clockWise: true,
					hoverAnimation: false,
					animationType: 'scale',
					radius: ['80%', '81%'],
					center: ['36%', '50%'],
					label: {
						normal: {
							position: 'center'
						}
					},
					data: [{
						value: 100,
						itemStyle: {
							normal: {
								color: "rgba(111,209,248,.15)"
							}
						}
					}]
				},{
					name: '线1',
					type: 'pie',
					silent: true,
					clockWise: true,
					hoverAnimation: false,
					animationType: 'scale',
					radius: ['90%', '91%'],
					center: ['36%', '50%'],
					label: {
						normal: {
							position: 'center'
						}
					},
					data: [{
						value: 100,
						itemStyle: {
							normal: {
								color: "#6fd1f8"
							}
						}
					}]
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


	pie_6:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
	
		//echarts样式数据
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)",
				backgroundColor:'rgba(28,96,218,.4)',
				borderWidth:'1',
				borderColor:'rgba(14,205,244,.4)',
				padding:[10,15],
				borderRadius:'0'
			},
			color:['#00c6ff','#fa6843','#ffb20e','#fcfc36'],
			legend: {
	//	    	orient:'vertical',
				x : 'center',
				y : 'bottom',
				itemWidth:17,
				itemHeight:10,
				itemGap:20,
				textStyle:{
					color:'#fff',
					fontSize: 14
				},
				data: ['蓝色企业','红色企业','橙色企业','黄色企业'] 
			},
			series: [
				{
					name:'数据量',
					type:'pie',
					selectedMode:'single',
					selectedOffset:5,
	//              roseType: 'radius',
					radius: ['45%', '70%'],
					center: ['50%', '50%'],
					label: { 
						normal: {
							backgroundColor: {
								image: 'images/echarts-bg02.png'
								// 这里可以是图片的 URL，
								// 或者图片的 dataURI，
								// 或者 HTMLImageElement 对象，
								// 或者 HTMLCanvasElement 对象。
							},
							align: 'center',
							width: 80,
							height: 40,
							padding: [12, 0, 0, 0],
							formatter: [
								'{a|{c}}',
								'{b|{b}}'
							].join('\n'),
							rich: {
								a: {
									// lineHeight: 26,
									fontSize: 16,
									fontFamily:'impact',
									align: 'center'
								},
								b: {
									color: '#fff',
									// lineHeight: 26,
									fontSize: 16,
									align: 'center'
							   },
							}
						}
					},
					labelLine:{
						normal:{
	//	            		show:false,
							// length:10,
							length2:30,
	//	            		lineStyle:{color:'#0974af'}
						}
					},
					itemStyle:{
						normal:{
	//	            		shadowColor:'rgba(0,0,0,0.8)',
	//	            		shadowBlur:15
						}
					},
					data:[
						{
							value:3089,
							name:'蓝色企业',
							itemStyle: {
								normal: {
									color: '#00c6ff'
								}
							}
						},
						{
							value:2014,
							name:'红色企业',
							itemStyle: {
								normal: {
									color: '#fa6843'
								}
							}
						},
						{
							value:2678,
							name:'橙色企业',
							itemStyle: {
								normal: {
									color: '#ffb20e'
								}
							}
						},
						{
							value:1672,
							name:'黄色企业',
							itemStyle: {
								normal: {
									color: '#fcfc36'
								}
							}
						}
					]
				},
				{
					name: '线2',
					type: 'pie',
					silent: true,
					clockWise: true,
					hoverAnimation: false,
					animationType: 'scale',
					radius: ['38%', '39%'],
					center: ['50%', '50%'],
					label: {
						normal: {
							position: 'center'
						}
					},
					data: [{
						value: 100,
						itemStyle: {
							normal: {
								color: "rgba(47,138,255,.45)"
							}
						}
					}]
				},{
					name: '线1',
					type: 'pie',
					silent: true,
					clockWise: true,
					hoverAnimation: false,
					animationType: 'scale',
					radius: ['70%', '80%'],
					center: ['50%', '50%'],
					label: {
						normal: {
							position: 'center'
						}
					},
					data: [{
						value: 100,
						itemStyle: {
							normal: {
								color: "rgba(0,239,254,.1)"
							}
						}
					}]
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

	pie_7:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
	
		//echarts样式数据
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c}万 ({d}%)"
			},
			color:['#fdbd41','#18fece','#fcee79','#b96eff','#4977f2','#4bc8fd','#d1f144','#fb99b4','#b957f1','#56ea7f','#8651dd'],
			legend: {
	//	    	orient:'vertical',
				left : '50',
				right : '100',
				y : 'bottom',
				itemWidth:17,
				itemHeight:10,
				itemGap:8,
				textStyle:{
					color:'#fff',
					fontSize: 14
				},
				data: ['南昌','九江','赣州','上饶','萍乡','抚州','宜春','新余','吉安','鹰潭','景德镇'] 
			},
			series: [
				{
					name:'数据量',
					type:'pie',
					selectedMode:'single',
					selectedOffset:5,
					roseType: 'radius',
					radius: ['20%', '60%'],
					center: ['50%', '42%'],
					label: {
						normal: {
							formatter: '{a|{c}万}',
							rich: {
								a: {
									color: '#19fff1',
									lineHeight: 20,
									fontSize: 14,
									align: 'center',
									borderWidth:1,
									borderColor:'#0f5d9e',
									borderRadius:20,
									padding:[6,10],
									backgroundColor:'#053b95'
								}
							}
						}
					},
					labelLine:{
						normal:{
	//	            		show:false,
	//	            		length:10,
							length2:30,
	//	            		lineStyle:{color:'#0974af'}
						}
					},
					itemStyle:{
						normal:{
	//	            		shadowColor:'rgba(0,0,0,0.8)',
	//	            		shadowBlur:15
						}
					},
					data:[
						{value:parseInt(Math.random()*100), name:'南昌'},
						{value:parseInt(Math.random()*100), name:'九江'},
						{value:parseInt(Math.random()*100), name:'赣州'},
						{value:parseInt(Math.random()*100), name:'上饶'},
						{value:parseInt(Math.random()*100), name:'萍乡'},
						{value:parseInt(Math.random()*100), name:'抚州'},
						{value:parseInt(Math.random()*100), name:'宜春'},
						{value:parseInt(Math.random()*100), name:'新余'},
						{value:parseInt(Math.random()*100), name:'吉安'},
						{value:parseInt(Math.random()*100), name:'鹰潭'},
						{value:parseInt(Math.random()*100), name:'景德镇'}
					]
				},{
					name: '内环',
					type: 'pie',
					silent: true,
					clockWise: true,
					hoverAnimation: false,
					animationType: 'scale',
					radius: ['0', '12%'],
					center: ['50%', '42%'],
					label: {
						normal: {
							position: 'center'
						}
					},
					data: [{
						value: 100,
						itemStyle: {
							normal: {
								color: "rgba(45,236,249,.15)"
							}
						}
					}]
				},{
					name: '内环2',
					type: 'pie',
					silent: true,
					clockWise: true,
					hoverAnimation: false,
					animationType: 'scale',
					radius: ['12%', '15%'],
					center: ['50%', '42%'],
					label: {
						normal: {
							position: 'center'
						}
					},
					data: [{
						value: 100,
						itemStyle: {
							normal: {
								color: "#64f2ff"
							}
						}
					}]
				},{
					name: '线2',
					type: 'pie',
					silent: true,
					clockWise: true,
					hoverAnimation: false,
					animationType: 'scale',
					radius: ['55%', '56%'],
					center: ['50%', '42%'],
					label: {
						normal: {
							position: 'center'
						}
					},
					data: [{
						value: 100,
						itemStyle: {
							normal: {
								color: "rgba(111,209,248,.15)"
							}
						}
					}]
				},{
					name: '线1',
					type: 'pie',
					silent: true,
					clockWise: true,
					hoverAnimation: false,
					animationType: 'scale',
					radius: ['65%', '66%'],
					center: ['50%', '42%'],
					label: {
						normal: {
							position: 'center'
						}
					},
					data: [{
						value: 100,
						itemStyle: {
							normal: {
								color: "#0e8ee4"
							}
						}
					}]
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



	pie_8:function(divBox){
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
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				right : '2%',
				top:'60%',
				itemHeight:10,
				itemWidth:18,
				itemGap:15,
				orient:'vertical',
				textStyle:{
					color:'#fff',
					fontSize: '80%'
				},
				data:['已反馈','未反馈','已签收','未签收']
			},
			color:['#EBFD31','#26B5FF','#F38051','#1990FF'],
			series: [
				{
					name:'',
					type:'pie',
					radius: ['45%', '65%'],
					center:['45.2%','48.2%'],
					label: {
						normal: {
							formatter: '{c|{c}}\n{per|{d}%}',
							rich: {
								c: {
									color: '#fff',
									fontSize:14,
									lineHeight: 18,
									align: 'center'
								},
								d:{
									color: '#BCE030',
									fontSize:18,
									fontFamily:'DS-DIGIB'
								},
								per: {
									color: '#1ec3ff',
									fontSize:24,
									lineHeight: 18,
									fontFamily:'DS-DIGIB'
								}
							}
						}
					},
					data:[
						{value:parseInt(Math.random()*100), name:'已签收',
							itemStyle: {
								normal: {
									color: { // 完成的圆环的颜色
										colorStops: [{
											offset: 0,
											color: '#00effe' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#23baff' // 100% 处的颜色
										}]
									}
								} 
							}
						},
						{value:parseInt(Math.random()*100), name:'未签收',
							itemStyle: {
								normal: {
									color: { // 完成的圆环的颜色
										colorStops: [{
											offset: 0,
											color: '#f6fc34' // 0% 处的颜色
										}, {
											offset: 1,
											color: '#d7fe2b' // 100% 处的颜色
										}]
									}
								} 
							}
						},
					]
				},
				{
					name:'',
					type:'pie',
					selectedMode: 'single',
					radius: [0, '35%'],
					center:['45.2%','48.2%'],
					label: {
						normal: {
							position: 'inner',
							fontSize:12,
							formatter: '{d}%\n{b}',
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
	//	            '#F38051','#1990FF'
					data:[
						{value:parseInt(Math.random()*100), name:'未反馈',
							itemStyle: {
								normal: {
									color: "#F38051"
								} 
							}
						},
						{value:parseInt(Math.random()*100), name:'已反馈',
							itemStyle: {
								normal: {
									color: "#1990FF"
								} 
							}
						},
					]
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



	pie_9:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
			var scaleData = [{
					'name': '警情',
					'value': 10
				},
				{
					'name': '物品',
					'value': 10
				},
				{
					'name': '案件',
					'value': 20
				},
				{
					'name': '车辆',
					'value':10
				},
				{
					'name': '人员',
					'value': 5
				}
			];
	
		//echarts样式数据
		var data = [];
		var color=['#FF7938','#2762E8','#00B8FB','#6E5CF8','#460DC6'];
		$.each(scaleData,function(i,v){
			data.push({
				value: scaleData[i].value,
				name: scaleData[i].name,
				itemStyle: {
					normal: {
						borderWidth: 10*fontSize,
						shadowBlur: 20*fontSize,
						borderColor:color[i],
						shadowColor: color[i]
					}
				}
			},
			{
				value: 2,
				name: '',
				itemStyle: {
					normal: {
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
						color: 'rgba(0, 0, 0, 0)',
						borderColor: 'rgba(0, 0, 0, 0)',
						borderWidth: 0
					}
				}
			}
			);
		})
			
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			tooltip: {
				show: false
			},
			legend: {
				orient: 'vertical',
				show:true,
				x: '76%',
				y:'center',
				itemGap:20*fontSize,
				itemWidth:15*fontSize,
				itemHeight:15*fontSize,
				textStyle:{fontSize:14*fontSize,color:'#fff',padding:[0,10*fontSize,]},
				data:['警情','物品','案件','车辆','人员']
			},
			title: [
				{
					text:'2499',
					left:'center',
					left:'38%',
					top:'42%',
					textStyle:{
						color:'#00FFFF',
						fontSize:'120%',
						fontFamily:'UUSUKKUFI1B',
						align:'center'
					}
				},
				{
					text:'数据种类',
					left:'center',
					top:'50%',
					left:'37.5%',
					textStyle:{
						color:'#fff',
						fontSize:14*fontSize,
						fontFamily:'微软雅黑',
						align:'center'
					}
				},
			],
			color:['#FF7938','#2762E8','#00B8FB','#6E5CF8','#460DC6'],
			series: [{
				name: '',
				type: 'pie',
				clockWise: false,
				radius: ['55%', '60%'],
				center: ['43%', '50%'],
				hoverAnimation: false,
				itemStyle: {
					normal: {
						label: {
							show: true,
							position: 'left',
							color: '#ddd',
							fontSize:14*fontSize,
							formatter: '{b}\n{c}',
							lineHeight: 18*fontSize,
							rich: {
							},
						},
						labelLine: {
							length: 10*fontSize,
							length2:30*fontSize,
							lineStyle:{
								width:1,
							}
						},
					}
				},
				data: data
			},
			{
				name: '线1',
				type: 'pie',
				silent: true,
				clockWise: true,
				hoverAnimation: false,
				animationType: 'scale',
				radius: ['40%', '41%'],
				center: ['43%', '50%'],
				label: {
					normal: {
						position: 'center',
					}
				},
				data: [{
					value: 100,
					itemStyle: {
						normal: {
							color: '#0156F1'
						}
					}
				}]
			}]
		};
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},


	pie_10:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据

		var data = {
			value: 24.2,
			text: '-',
			color:[
				{colorStops: [
					{offset: 0, color: '#1b57e3'},
					{offset: 1, color: '#9cbafe'}
				]},
				{colorStops: [
					{offset: 0, color: '#04bc84'},
					{offset: 1, color: '#73ffd4'}
				]},
				{colorStops: [
					{offset: 0, color: '#29a6fe'},
					{offset: 1, color: '#bbecff'}
				]},
				{colorStops: [
					{offset: 0, color: '#ec584d'},
					{offset: 1, color: '#ffaca6'}
				]},
				{colorStops: [
					{offset: 0, color: '#ffe300'},
					{offset: 1, color: '#fff0bd'}
				]}
			],
			bgColor:[
				'rgba(27,87,227,0.2)',
				'rgba(4,188,132,0.2)',
				'rgba(41,166,254,0.2)',
				'rgba(236,88,77,0.2)',
				'rgba(255,227,0,0.2)'
			],
			xAxis:['交通','求助','纠纷','治安','刑事'],
			values:['76','78','22','62','78'],
		}
		
		var seriesData = []
		var titleData = []
		data.values.forEach(function(item, index) {
			titleData.push({
				text: data.xAxis[index],
				left: 20*(index+0.5)-0.5+'%',
				top: '78%',
				textAlign: 'center',
				textStyle: {
					fontSize: '14',
					color: '#fff',
					// fontWeight: '400',
				},
			})
			seriesData.push({
				type: 'pie',
				radius: ['45%', '60%'],
				center: [20*(index+0.5)+'%', '45%'],
				hoverAnimation: false,
				label: {
					normal: {
						position: 'center',
						fontSize:14,
						color:'#fff'
					},
				},
				data: [{
						value: item,
						name: data.text,
						itemStyle: {
							normal: {
								color: data.color[index],
							}
						},
						label: {
							normal: {
								show: false,
							}
						}
					},
					{
						value: 100 - item,
						name: '占位',
						tooltip: {
							show: false
						},
						itemStyle: {
							normal: {
								// color: '#edf1f4',
								color: data.bgColor[index],
							}
						},
						label: {
							normal: {
								formatter: item + '',
								textStyle: {
									fontSize: 24,
									// color: data.color
								}
							},
	
						}
					}
				]
			})
		})
	
		//echarts样式数据
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			// backgroundColor: '#fff',
			title:titleData,
			series: seriesData
		};
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},



	// pie_:function(divBox){
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

charts.pie_1('pie_1');
charts.pie_2('pie_2');
charts.pie_3('pie_3');
charts.pie_4('pie_4');
charts.pie_5('pie_5');
charts.pie_6('pie_6');
charts.pie_7('pie_7');
charts.pie_8('pie_8');
charts.pie_9('pie_9');
charts.pie_10('pie_10');





