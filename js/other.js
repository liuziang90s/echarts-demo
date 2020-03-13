var charts={
	other_1:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var data_year_rang = ['09:00-10:00','10:00-11:00', '11:00-12:00']
		var data_dd = [{
				'dim_year': '09:00-10:00',
				'radar_indicator': [{
					name: '正北',
					max: 30000
				}, {
					name: '西北',
					max: 30000
				}, {
					name: '正西',
					max: 30000
				}, {
					name: '西南',
					max: 30000
				}, {
					name: '正南',
					max: 30000
				}, {
					name: '东南',
					max: 30000
				}, {
					name: '正东',
					max: 30000
				},{
					name: '东北',
					max: 30000
				}
				],
				'trade_range': [20000, 20000, 12000, 15000, 5000, 20000]
			},
			{
				'dim_year': '10:00-11:00',
				'radar_indicator': [{
					name: '正北',
					max: 30000
				}, {
					name: '西北',
					max: 30000
				}, {
					name: '正西',
					max: 30000
				}, {
					name: '西南',
					max: 30000
				}, {
					name: '正南',
					max: 30000
				}, {
					name: '东南',
					max: 30000
				}, {
					name: '正东',
					max: 30000
				},{
					name: '东北',
					max: 30000
				}
				],
				'trade_range': [28000, 20000, 28000, 15000, 5000, 20000]
			}, {
				'dim_year': '10:00-11:00',
				'radar_indicator': [{
						name: '正北',
					max: 30000
				}, {
					name: '西北',
					max: 30000
				}, {
					name: '正西',
					max: 30000
				}, {
					name: '西南',
					max: 30000
				}, {
					name: '正南',
					max: 30000
				}, {
					name: '东南',
					max: 30000
				}, {
					name: '正东',
					max: 30000
				},{
					name: '东北',
					max: 30000
				}
				],
				'trade_range': [28000, 20000, 28000, 15000, 18000, 20000]
			}
		]	

		//echarts样式数据


		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			baseOption: {
				title: {
					show:false,
				},
				timeline: {
					axisType: 'category',
					autoPlay: true,
					playInterval: 3500,
					bottom:'-7%',
					lineStyle:{
							color:'#57BAFA'
					},
					data: data_year_rang,
					label: {
						normal: {
							show:false,
						}
					},
					checkpointStyle:{
							symbol:'circle',
							symbolSize: 8,
							color: '#57BAFA',
							borderColor:'#57BAFA',
					},
					controlStyle:{
						showPlayBtn:false,
						showPrevBtn:false,
						showNextBtn:false
					}
				},
				series: [{
					name: '',
					type: 'radar', 
					symbol: 'circle',
					symbolSize: 8,
					itemStyle:{
						normal: {
							color: '#92A9C7',
						}
					},
					lineStyle:{
						normal: {
							color: '#00ECD9',
							width: 4 
						}
					},
					areaStyle: {
						normal: {
							color: '#3D80CA'
						}
					}
				}]
			},
			options: [{
					radar: {
						center: ['50%', '46.5%'],
						radius: '70%',
						splitNumber: 4,
						indicator: data_dd[0].radar_indicator,
						axisLine: {
							lineStyle: {
								color: '#446BA5'
							}
						},
						splitLine: {
							lineStyle: {
								color: 'rgba(255, 255, 255,0)'
							}
						},
						name: {
							textStyle: {
								color:'#fff'
							}
						},
						splitArea: {
							areaStyle: {
								color: ['#2A5FA2','#265699', '#224E8F','#1B4383'],
							}
						}
					},
					series: [{
						data: [{
							value: data_dd[0].trade_range,
						}]
					}]
				},
				{
					radar: {
						indicator: data_dd[1].radar_indicator
					},
					series: [{
						data: [{
							value: data_dd[1].trade_range
						}]
					}]
				},
				{
					radar: {
						indicator: data_dd[2].radar_indicator
					},
					series: [{
						data: [{
							value: data_dd[2].trade_range
						}]
					}]
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


	
	other_2:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var gauge_value = 66;
		var center1 = ['50%', '65%'];
		var radius1 = ['85%', '45%', '65%'];
	
		//echarts样式数据
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			title: [{
			  x: "center",
			  top: '76%',
			  text: '146',
			  textStyle: {
				fontFamily: 'FRABK',
				fontSize: 18*fontSize,
				color: "#fff"
			  },
			},{
			  x: "center",
			  top: '85%',
			  text: '每秒服务次数',
			  textStyle: {
				fontWeight: 'normal',
				fontSize: 14*fontSize,
				color: "#00E5E6"
			  },
			}],
			tooltip: {
			  show: true,
			},
			series: [{
			  type: 'gauge',
			  center: center1, // 默认全局居中
			  radius: radius1[0],
			  splitNumber: 10, //刻度数量
			  min: 0,
			  max: 200,
			  startAngle: 200,
			  endAngle: -20,
			  axisLine: {
				show: true,
				lineStyle: {
				  width: 2,
				  shadowBlur: 0,
				  color: [
					[1, '#077086']
				  ]
				}
			  },
			  axisTick: {
				show: true,
				lineStyle: {
				  color: '#077086',
				  width:2
				},
				length:-20*fontSize,
				splitNumber: 8,
			  },
			  splitLine: {
				show: true,
				length:-30*fontSize,
				lineStyle: {
				  color: '#00E9FE',
				  width:3
				}
			  },
			  axisLabel: {
				distance:38*fontSize,
				textStyle: {
				  color: "#fff",
				  fontSize: 12*fontSize,
				  // fontWeight:"bold"
				}
			  },
			  pointer: { //仪表盘指针
				show: 0
			  },
			  detail: {
				formatter: '',
				textStyle: {
				  color: "rgba(0,0,0,0)",
				  fontSize: 14*fontSize,
				  fontWeight: "normal"
				}
			  },
			  data: [{
				name: "",
				value: gauge_value
			  }]
			}, {
			  startAngle: 200,
			  endAngle: -20,
			  name: '',
			  type: 'gauge',
			  center: center1, // 默认全局居中
			  radius: radius1[1],
			  min: 0,
			  max: 100,
			  splitNumber: 0,
			  axisLine: { // 坐标轴线
				lineStyle: {
				  color: [
					[0.66, '#077086'],
					[1, '#077086']
				  ], // 属性lineStyle控制线条样式
				  width: 3
				}
			  },
			  axisLabel: { // 坐标轴小标记
				textStyle: { // 属性lineStyle控制线条样式
				  fontWeight: 'bolder',
				  fontSize: 14*fontSize,
				  color: 'rgba(30,144,255,0)',
				}
			  },
			  splitLine: { // 分隔线
				length:20*fontSize, // 属性length控制线长
				lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
				  width: 0,
				  color: '#077086'
				}
			  },
			  pointer: { // 分隔线 指针
				color: '#077086',
				width: 0,
				length:10*fontSize
			  },
			  detail: {
				show: false
			  },
	
			}, {
			  name: '剩余电量',
			  type: 'gauge',
			  startAngle: 200,
			  endAngle: -20,
			  radius: radius1[2],
			  center: center1, // 默认全局居中
			  min: 0,
			  max: 200,
			  axisLine: {
				show: false,
				lineStyle: {
				  width:15,
				  shadowBlur: 0,
				color: [
				
						[1,
							new echarts.graphic.LinearGradient(0, 0, 1, 0, [

								{
									offset: 0,
									color: '#55DA42'
								},

								{
									offset: 0.2,
									color: '#2CB7C7'
								},

								{
									offset: 0.4,
									color: '#1DB2DD'
								},

								{
									offset: 0.6,
									color: '#2D89ED'
								},

								{
									offset: 0.8,
									color: '#7765B4'
								},

								{
									offset: 1,
									color: '#EC5E29'
								}
							])
						]
					]
				}
			  },
			  axisTick: {
				show: false,
	
			  },
			  splitLine: {
				show: false,
				length:10,
	
			  },
	
			  axisLabel: {
				show: false
			  },
			  pointer: {
				show: true,
				width: 10,
			  },
			  detail: {
				show: false,
				offsetCenter: [0, 0],
				textStyle: {
				  fontSize:14*fontSize,
				  color:'rgba(0,0,0,0)'
				}
			  },
			  itemStyle: {
					normal: {
						color: [
							[1,
								new echarts.graphic.LinearGradient(0, 0, 1, 0, [
									{
										offset: 0,
										color: '#55DA42'
									},
									{
										offset: 0.2,
										color: '#2CB7C7'
									},
									{
										offset: 0.4,
										color: '#1DB2DD'
									},
									{
										offset: 0.6,
										color: '#2D89ED'
									},
									{
										offset: 0.8,
										color: '#7765B4'
									},
									{
										offset: 1,
										color: '#EC5E29'
									}
								])
							]
						],
					}
			  },
			  data: [{
				name: "",
				value: Math.floor(gauge_value)
			  }]
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

	other_3:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var chartData=[
			{name:'',value:parseInt(Math.random()*100),},
		]
		
		//echarts样式数据
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			tooltip : {
				formatter: "{a}:{c}"
			},
			series: [
				{
					name: '',
					type: 'gauge',
					center: ['50%', '80%'], // 默认全局居中
					radius: '125%',
					startAngle:190,
					endAngle:-10,
					detail: {show:false},
					axisLine:{
						show:true,
						lineStyle:{
							width:15,
							color:[[1,'rgba(0,0,0,0)']],
						}
					},
					splitLine:{
						show:true,
						length:3,
						lineStyle:{
							color:'#fff',
						}
					},
					axisTick:{
						show:true,
						length:6,
						lineStyle:{
							color:'#fff',
						}
					},
					axisLabel:{
						color:'#fff',
					},
				},
				{
					name: '本周警情总数',
					type: 'gauge',
					center: ['50%', '80%'], // 默认全局居中
					radius: '141%',
					startAngle:190,
					endAngle:-10,
					detail: {show:false},
					axisLine:{
						show:true,
						lineStyle:{
							width:10,
							borderRadius:4,
							color:[
								[0.33,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#8dc377'},{offset:1,color: '#9671e5'}])],
								[0.66,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#9671e5'},{offset:1,color: '#2791fe'}]),],
								[1,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:'#2791fe'},{offset:1,color: '#c63f6a'}]),]
							],
						}
					},
					splitLine:{
						show:false,
						length:10,
					},
					axisTick:{
						show:false,
					},
					axisLabel:{
						show:false,
						color:'#fff',
					},
					data: chartData,
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

	other_4:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var data=[{name:'钱庄本币分析',category: 1,value: [0,400],symbol:"image://images/13.png",strok:0},
			{name:'钱庄本币分析01',category:2,value:[0.2,700],symbol:"image://images/14.png"},
			{name:'对敲吻合度分析',category:2,value: [0.2,570],symbol:"image://images/19.png"},
			{name:'钱庄交易频次分析',category:2,value: [0.2,430],symbol:"image://images/15.png"},
			{name:'钱庄交易资金量分析',category:2,value: [0.2,300],symbol:"image://images/16.png"},
			{name:'钱庄购汇分析',category:2,value: [0.2,170],symbol:"image://images/17.png"},
			{name:'税票环路跟踪模型',category:2,value: [0.2,40],symbol:"image://images/18.png"},
			{name:'嫌疑主体',category:3,value: [0.4,400],symbol:"image://images/8.png",strok:0},
			{name:'钱庄主体轨迹研判',category:4,value: [0.6,530],symbol:"image://images/20.png"},
			{name:'钱庄主体通讯研判',category:4,value: [0.6,380],symbol:"image://images/21.png"},
			{name:'钱庄主体物流研判',category:4,value: [0.6,220],symbol:"image://images/22.png"},
			{name:'虚开主体嫌疑主体生成',category:5,value: [0.8,400],symbol:"image://images/12.png",strok:0}
		];
		//通过name获取coord值
		var coor;
		function linkda(name){
			for(var i=0;i<data.length;i++){
				if(name==data[i].name){
					if(data[i].strok==0){
						var newcoor=[];
						newcoor.push(data[i].value[0]);
						newcoor.push(data[i].value[1]-20);
						coor=newcoor;
						return coor
					}else{
						coor=data[i].value;
						// console.log(coor);
						return coor
					}
				}	
			}
		};
		var linkData=[{name:'',"coords":[linkda('钱庄本币分析'),linkda('钱庄本币分析01')],lineStyle:{normal:{curveness:0.28}}},
			{name:'',"coords":[linkda('钱庄本币分析'),linkda('对敲吻合度分析')],lineStyle:{normal:{curveness:0.28}}},
			{name:'',"coords":[linkda('钱庄本币分析'),linkda('钱庄交易频次分析')],lineStyle:{normal:{curveness:0.28}}},
			{name:'',"coords":[linkda('钱庄本币分析'),linkda('钱庄交易资金量分析')],lineStyle:{normal:{curveness:-0.28}}},
			{name:'',"coords":[linkda('钱庄本币分析'),linkda('钱庄购汇分析')],lineStyle:{normal:{curveness:-0.28}}},
			{name:'',"coords":[linkda('钱庄本币分析'),linkda('税票环路跟踪模型')],lineStyle:{normal:{curveness:-0.28}}},
			{name:'',"coords":[linkda('嫌疑主体'),linkda('钱庄本币分析01')],lineStyle:{normal:{curveness:-0.28}}},
			{name:'',"coords":[linkda('嫌疑主体'),linkda('对敲吻合度分析')],lineStyle:{normal:{curveness:-0.28}}},
			{name:'',"coords":[linkda('嫌疑主体'),linkda('钱庄交易频次分析')],lineStyle:{normal:{curveness:-0.28}}},
			{name:'',"coords":[linkda('嫌疑主体'),linkda('钱庄交易资金量分析')],lineStyle:{normal:{curveness:0.28}}},
			{name:'',"coords":[linkda('嫌疑主体'),linkda('钱庄购汇分析')],lineStyle:{normal:{curveness:0.28}}},
			{name:'',"coords":[linkda('嫌疑主体'),linkda('税票环路跟踪模型')],lineStyle:{normal:{curveness:0.28}}},
			{name:'',"coords":[linkda('嫌疑主体'),linkda('钱庄主体轨迹研判')],lineStyle:{normal:{curveness:0.28}}},
			{name:'',"coords":[linkda('嫌疑主体'),linkda('钱庄主体通讯研判')],lineStyle:{normal:{curveness:0}}},
			{name:'',"coords":[linkda('嫌疑主体'),linkda('钱庄主体物流研判')],lineStyle:{normal:{curveness:-0.28}}},
			{name:'',"coords":[linkda('虚开主体嫌疑主体生成'),linkda('钱庄主体轨迹研判')],lineStyle:{normal:{curveness:-0.28}}},
			{name:'',"coords":[linkda('虚开主体嫌疑主体生成'),linkda('钱庄主体通讯研判')],lineStyle:{normal:{curveness:0}}},
			{name:'',"coords":[linkda('虚开主体嫌疑主体生成'),linkda('钱庄主体物流研判')],lineStyle:{normal:{curveness:0.28}}}
		];
	
		//echarts样式数据
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			xAxis: {
				show: false,
				type: 'value'
			},
			yAxis: {
				show: false,
				type: 'value'
			},
			series: [{
				type: 'graph',
				layout: 'none',
				symbolSize:[108*fontSize,89*fontSize] ,//图形的大小（示例中的圆的大小）
				roam: true,
				coordinateSystem: 'cartesian2d',
				label: {
					normal: {
						show: true ,  //控制非高亮时节点名称是否显示
						fontSize:12*fontSize,
						color:'#91D6FA',
						margin:5,
						align:'center',
						position: ['50%', '95%'],
						verticalAlign: 'bottom',
						rich: {
						}
					}
				},
				z:5,
				edgeSymbolSize: [4*fontSize, 10*fontSize],
				data: data,      
			}, 
			{
				type: 'lines',
				tooltip: {},
				z:5,
				coordinateSystem: 'cartesian2d',
				effect: {
					show: true,
					type:'dotted',
					trailLength: 0,
					symbol: "circle",
					symbolSize:5*fontSize
				},
				lineStyle: {
					normal: {
						width: 1,
						opacity: 1,
						show:true,
						type:'double',
						color:'#0E628C',
						//贝塞尔曲线度
					}
				},
				data:linkData
			}]
		};
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},


	other_5:function(divBox){
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
			backgroundColor: '#522257',
			color: ['#953f61', '#c14f60', '#d77169','#efbb1a'],
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c}%"
			},
			series: [
				{
					name:'漏斗图',
					type:'funnel',
					left: 'center',
					top: 60,
					bottom: 60,
					width: '50%',
					min: 0,
					max: 100,
					minSize: '0%',
					maxSize: '100%',
					sort: 'descending',
					gap: 0,  //上下间距
					label: {
						normal: {
							show: true,
							position: 'inside'
						},
						emphasis: {
							textStyle: {
								fontSize: 20,  //鼠标放上去字体大小
							}
						}
					},
					labelLine: {
						normal: {
							length: 10,
							lineStyle: {
								width: 1,
								type: 'solid'
							}
						}
					},
					itemStyle: {
						normal: {
							borderWidth: 0,
							shadowBlur: 30,
							shadowOffsetX: 0,
							shadowOffsetY: 10,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					},
					data: [
						{value: 90, name: '定存'},
						{value: 60, name: '理财'},
						{value: 50, name: '基金'},
						{value: 20, name: '票据'}
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


	other_6:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
		var value = parseInt(Math.random()*10000);
		var max=10000;
		var data = [];
		data.push(value/max);
		data.push(value/max);
	
		//echarts样式数据
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			series: [{
				type: 'liquidFill',
				radius: '80%',
				data: data,
				backgroundStyle: {
					// borderWidth: 4,
					// borderColor: '#f28e0a',
					color: 'rgba(217,143,16,0.1)'
				},
				label: {
					normal: {
						formatter: value+'',
						textStyle: {
							color:'#ffa301',
							fontSize: 30,
							fontFamily:'bahnschrift',
							fontWeight:'normal'
						}
					}
				},
				outline: {
					borderDistance: 0,
					itemStyle: {
						borderWidth: 8,
						borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#ed660a'
						}, {
							offset: 0.4,
							color: '#ffce77'
						},{
							offset: 0.5,
							color: '#ffce77'
						},{
							offset: 0.52,
							color: '#ed660a'
						}, {
							offset: 1,
							color: '#ed660a'
						}]),
						shadowBlur: 10,
						shadowColor: 'rgba(180,10,190, 0.4)'
					}
				},
				color: ['rgba(217,143,16,0.6)', 'rgba(95,107,53,0.6)'],
			}]
		};
		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},


	other_7:function(divBox){
		//设置字体基础大小，根据不同屏幕，自适应字体缩放
		var fontSize=$(window).width()/1920;
	
		//展示数据
	
		//echarts样式数据
		
		var myChart = echarts.init(document.getElementById(divBox));
		var option = {
			series: [{
				type: 'liquidFill',
				data: [0.6, 0.35],
				name: 'Liquid Fill',
				backgroundStyle: {
//			            borderWidth: 5,
//			            borderColor: 'rgba(68,25,114,1)',
					color: 'rgba(101,30,133,.5)'
				},
				itemStyle: {
					normal: {
						shadowBlur: 0
					}
				},
				outline: {
					borderDistance: 0,
					itemStyle: {
						borderWidth: 4,
						borderColor: 'rgba(75,35,117,1)',
						shadowBlur: 10,
						shadowColor: 'rgba(180,10,190, 1)'
					}
				},
//                  color: ['rgba(49,159,253,1)', 'rgba(0,198,243,1)','rgba(234,134,211,1)','rgba(224,175,223,1)'],
				color: ['#349bfd', '#f2b8ea'],
				radius: '70%',
				label: {
					position: ['100%', '100%'],
					fontSize: 12,
					color: 'rgba(0,0,0,0.1)',
				},
				amplitude: 15,
//                  outline: {
//                      show: false
//                  }
			}]
		};

		// 使用刚指定的配置项和数据显示图表。
		$(window).resize(function () {
			myChart.resize();
		})
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	},






	
	// other_:function(divBox){
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

charts.other_1('other_1');
charts.other_2('other_2');
charts.other_3('other_3');
charts.other_4('other_4');
charts.other_5('other_5');
charts.other_6('other_6');
charts.other_7('other_7');





