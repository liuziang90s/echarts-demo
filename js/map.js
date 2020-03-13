var charts={
	
	map_1:function(divBox){
		var myChart = echarts.init(document.getElementById(divBox));
		$.get('resource/echarts/map_json/china.json', function (china_geo) {
			echarts.registerMap('china1', china_geo);
			var geoCoordMap = {
				'上海': [121.4648, 31.2891], '东莞': [113.8953, 22.901], '东营': [118.7073, 37.5513], '中山': [113.4229, 22.478], '临汾': [111.4783, 36.1615], '临沂': [118.3118, 35.2936], '丹东': [124.541, 40.4242], '丽水': [119.5642, 28.1854], '乌鲁木齐': [87.9236, 43.5883], '佛山': [112.8955, 23.1097], '保定': [115.0488, 39.0948], '兰州': [103.5901, 36.3043], '包头': [110.3467, 41.4899], '北京': [116.4551, 40.2539], '北海': [109.314, 21.6211], '南京1': [118.8062, 31.9208], '南京2': [118.8062, 31.920800001], '南宁': [108.479, 23.1152], '南昌': [116.0046, 28.6633], '南通': [121.1023, 32.1625], '厦门': [118.1689, 24.6478], '台州': [121.1353, 28.6688], '合肥': [117.29, 32.0581], '呼和浩特': [111.4124, 40.4901], '咸阳': [108.4131, 34.8706], '哈尔滨': [127.9688, 45.368], '唐山': [118.4766, 39.6826], '嘉兴': [120.9155, 30.6354], '大同': [113.7854, 39.8035], '大连': [122.2229, 39.4409], '天津': [117.4219, 39.4189], '太原': [112.3352, 37.9413], '威海': [121.9482, 37.1393], '宁波': [121.5967, 29.6466], '宝鸡': [107.1826, 34.3433], '宿迁': [118.5535, 33.7775], '常州': [119.4543, 31.5582], '广州': [113.5107, 23.2196], '廊坊': [116.521, 39.0509], '延安': [109.1052, 36.4252], '张家口': [115.1477, 40.8527], '徐州': [117.5208, 34.3268], '德州': [116.6858, 37.2107], '惠州': [114.6204, 23.1647], '成都': [103.9526, 30.7617], '扬州': [119.4653, 32.8162], '承德': [117.5757, 41.4075], '拉萨': [91.1865, 30.1465], '无锡': [120.3442, 31.5527], '日照': [119.2786, 35.5023], '昆明': [102.9199, 25.4663], '杭州': [119.5313, 29.8773], '枣庄': [117.323, 34.8926], '柳州': [109.3799, 24.9774], '株洲': [113.5327, 27.0319], '武汉': [114.3896, 30.6628], '汕头': [117.1692, 23.3405], '江门': [112.6318, 22.1484], '沈阳': [123.1238, 42.1216], '沧州': [116.8286, 38.2104], '河源': [114.917, 23.9722], '泉州': [118.3228, 25.1147], '泰安': [117.0264, 36.0516], '泰州': [120.0586, 32.5525], '济南': [117.1582, 36.8701], '济宁': [116.8286, 35.3375], '海口': [110.3893, 19.8516], '淄博': [118.0371, 36.6064], '淮安': [118.927, 33.4039], '深圳': [114.5435, 22.5439], '清远': [112.9175, 24.3292], '温州': [120.498, 27.8119], '渭南': [109.7864, 35.0299], '湖州': [119.8608, 30.7782], '湘潭': [112.5439, 27.7075], '滨州': [117.8174, 37.4963], '潍坊': [119.0918, 36.524], '烟台': [120.7397, 37.5128], '玉溪': [101.9312, 23.8898], '珠海': [113.7305, 22.1155], '南京': [120.2234, 33.5577], '盘锦': [121.9482, 41.0449], '石家庄': [114.4995, 38.1006], '福州': [119.4543, 25.9222], '秦皇岛': [119.2126, 40.0232], '绍兴': [120.564, 29.7565], '聊城': [115.9167, 36.4032], '肇庆': [112.1265, 23.5822], '舟山': [122.2559, 30.2234], '苏州': [120.6519, 31.3989], '莱芜': [117.6526, 36.2714], '菏泽': [115.6201, 35.2057], '营口': [122.4316, 40.4297], '葫芦岛': [120.1575, 40.578], '衡水': [115.8838, 37.7161], '衢州': [118.6853, 28.8666], '西宁': [101.4038, 36.8207], '西安': [109.1162, 34.2004], '贵阳': [106.6992, 26.7682], '连云港': [119.1248, 34.552], '邢台': [114.8071, 37.2821], '邯郸': [114.4775, 36.535], '郑州': [113.4668, 34.6234], '鄂尔多斯': [108.9734, 39.2487], '重庆': [107.7539, 30.1904], '金华': [120.0037, 29.1028], '铜川': [109.0393, 35.1947], '银川': [106.3586, 38.1775], '镇江': [119.4763, 31.9702], '长春': [125.8154, 44.2584], '长沙': [113.0823, 28.2568], '长治': [112.8625, 36.4746], '阳泉': [113.4778, 38.0951], '青岛': [120.4651, 36.3373], '韶关': [113.7964, 24.7028], '平度市': [147.4805,42.4235], '胶州市': [148.8867,33.2846], '黄岛区': [147.6563,25.7999], '即墨市': [158.1152,36.3151], '胶州市': [148.8867,33.2846], '胶州市': [148.8867,33.2846], '内蒙古':[111.670801,40.818311], '云南':[102.712251,25.040609] 
			};
			var BJData1 = [
				[{name:'厦门',value:Math.random()*100}, {name:'南京'}],
				[{name:'西安',value:Math.random()*100}, {name:'南京'}],
				[{name:'北京',value:Math.random()*100}, {name:'南京'}],
				[{name:'重庆',value:Math.random()*100}, {name:'南京'}],
				[{name:'拉萨',value:Math.random()*100}, {name:'南京'}],
				[{name:'韶关',value:Math.random()*100}, {name:'南京'}],
				[{name:'乌鲁木齐',value:Math.random()*100}, {name:'南京'}],
			];
			var BJ02=[
				[{name:'内蒙古',value:Math.random()*100}, {name:'南京'}],
				[{name:'成都',value:Math.random()*100}, {name:'南京'}],
				[{name:'长沙',value:Math.random()*100}, {name:'南京'}],
				[{name:'沈阳',value:Math.random()*100}, {name:'南京'}],
				[{name:'中山',value:Math.random()*100}, {name:'南京'}]
			];
			var convertData = function (data) {
				var res = [];
				for (var i = 0; i < data.length; i++) {
					var dataItem = data[i];
					var fromCoord = geoCoordMap[dataItem[0].name];
					var toCoord = geoCoordMap[dataItem[1].name];
					   if (fromCoord && toCoord) {
						res.push([
							{
								coord:fromCoord,
								value: dataItem[0].value
							},
							{
								coord: toCoord,
							}
						]);
					}
				}
				return res;
			};
			
			var color = ['#208DA2', '#076686', '#08667E'];
			var series = [];
			var BJData= new Array();
			var BJDa02= new Array();
			BJData.push(BJData1);
			BJDa02.push(BJ02);
			var BJDataName= new Array();
			BJDataName.push('南京');
			var BJDataName111= new Array();
			BJDataName111.push('南京');
			for(var i=0; i <BJData.length; i++) {
			  var BJDataTemp = BJData[i];
			  var name = BJDataName[i];
			  [[name, BJDataTemp]].forEach(function (item, i) {
				series.push(
					{
						type: 'lines',
						zlevel: 2,
						effect: {
							show: true,
							period: 2, 
							trailLength: 0.02,
							symbol:'arrow',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
							symbolSize: 8,
							constantSpeed:50 
						},
						lineStyle: {
							normal: {
								width: 2,
								color: '#34FFFD',
								opacity: 0.5,
								curveness: 0.2
							}
						},
						
						data: convertData(item[1])
					},
					{
						type: 'effectScatter',
						coordinateSystem: 'geo',
						zlevel: 2,
						rippleEffect: {
							period:10,
							brushType: 'stroke',
							scale: 10
						},
						label: {
							normal: {
								show: false,
								position: 'right',
								offset:[5, 0],
								formatter: '{b}',
								textStyle: {
									color:"rgba(56,241,250,0)"
								}
							},
							emphasis: {
								show: true
							}
						},
						symbolSize: function (val) {
							return val[1] / 6;
						},
						symbol: 'image://images/y4-1.png',
						itemStyle: {
							normal: {
								show: true,
								color: '#bdcb49'
							}
						},
						data: item[1].map(function (dataItem) {
							return {
								name: dataItem[0].name,
								value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
							};
						}),
					},
					{
						type: 'effectScatter',
						coordinateSystem: 'geo',
						zlevel: 2,
						rippleEffect: {
							period:10,
							brushType: 'stroke',
							scale: 10
						},
						label: {
							normal: {
								show: false,
								position: 'right',
								offset:[5, 0],
								color:'#01EBE7',
								formatter: '{b}',
								textStyle: {
									color:"rgba(56,241,250,0)"
								}
							},
							emphasis: {
								show: true
							}
						},
						symbol: 'image://images/y4.png',
						symbolSize:12,
						itemStyle: {
							normal: {
								show: false,
								color: '#fff'
							}
						},
						data:[{
							name: item[0],
							value: geoCoordMap[item[0]].concat([100]),
						}],
					}
				);
			});
			}
			for(var i=0; i <BJDa02.length; i++) {
				  var BJDataTemp = BJDa02[i];
				  var name = BJDataName111[i];
				  [[name, BJDataTemp]].forEach(function (item, i) {
					series.push(
						{
							type: 'lines',
							zlevel: 2,
							effect: {
								show: true,
								period: 2, 
								trailLength: 0.02,
								symbol:'arrow',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
								symbolSize: 8,
								constantSpeed:50 
							},
							lineStyle: {
								normal: {
									width: 2,
									color: '#FCFF29',
									opacity: 0.5,
									curveness: 0.2
								}
							},
							
							data: convertData(item[1])
						},
						{
							type: 'effectScatter',
							coordinateSystem: 'geo',
							zlevel: 2,
							rippleEffect: {
								period:10,
								brushType: 'stroke',
								scale: 10
							},
							label: {
								normal: {
									show: false,
									position: 'right',
									offset:[5, 0],
									formatter: '{b}',
									textStyle: {
										color:"rgba(56,241,250,0)"
									}
								},
								emphasis: {
									show: true
								}
							},
							symbolSize: function (val) {
								return val[1] / 6;
							},
							symbol: 'image://images/y4-2.png',
							itemStyle: {
								normal: {
									show: true,
									color: '#bdcb49'
								}
							},
							data: item[1].map(function (dataItem) {
								return {
									name: dataItem[0].name,
									value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
								};
							}),
						}
					);
				});
			}
			 
			option = {
				geo: [
					{
						map: 'china1',
						roam: false,//禁止缩放
						label: {
							normal: {
								show: false,
								textStyle: {
									color: '#fff',
									fontSize: 12,
								}
							},
							emphasis: {
								textStyle: {
									color: '#fff',
									fontSize: 12,
								}
							}
						},
						width:'68%',
						z:6,
						left:'8%',
						height:'98%',
						itemStyle: {
							normal: {
								areaColor: '#092650',
								borderColor: 'rgba(1,211,220,1)',
							},
							emphasis: {
								areaColor: '#3FD7FF',
							}
					},
					},
					{
						map: 'china1',
						roam: false,//禁止缩放
						label: {
							normal: {
								show: false,
								textStyle: {
									color: '#fff',
									fontSize: 12,
								}
							},
							emphasis: {
								textStyle: {
									color: '#fff',
									fontSize: 12,
								}
							}
						},
		//	                zoom:'1.5',
						width:'68%',
						left:'8%',
						z:1,
						top:'2%',
						height:'98%',
						itemStyle: {
							normal: {
								areaColor: '#3FD7FF',
								borderColor: 'rgba(1,211,220,0)',
							},
							emphasis: {
								areaColor: '#3FD7FF',
							}
					},		
					}
				],
				visualMap: { //图例值控制
					min: 0,
					max: 100,
					left:'8%',
					bottom:'8%',
					calculable: true,
					show: true,
					itemWidth:18,
					itemHeight:91,
					color: [ '#BFE567','#2DE3D7'],
					textStyle: {
						color: '#105C69',
						// fontSize:14
					}
				},				
				series: series
			};
			$(window).resize(function () {
				myChart.resize();
			})
			myChart.setOption(option);
		});
	},


	map_2:function(divBox){

		var myChart = echarts.init(document.getElementById(divBox));
		$.get('resource/echarts/map_json/dafeng.json', function (china_geo) {
			echarts.registerMap('dafeng', china_geo);
	
			var data = [
				{name: '刘庄镇', value: 125},
				{name: '白驹镇', value: 135},
				{name: '草堰镇', value: 125},
				{name: '万盈镇', value: 122},
				{name: '小海镇', value: 60},
				{name: '西团镇', value: 125},
				{name: '大中街道', value: 40},
				{name: '大丰经济开发区', value: 130},
				{name: '新丰镇', value: 100},
				{name: '丰华街道', value: 99},
				{name: '南阳镇', value: 120},
				{name: '草庙镇', value: 55},
				{name: '大桥镇', value: 130},
				{name: '大丰港经济开发区', value: 130},
				{name: '三龙镇', value: 115},
				{name: '方强农场', value: 115},
				{name: '上海农场', value: 50},
				{name: '农林场圃', value: 70},
				{name: '海丰农场', value: 115},
				{name: '东坝头农场', value: 60},
				{name: '大中农场', value: 80},
				{name: '川东农场', value: 90}
			];
	
			var geoCoordMap = {
				'刘庄镇':[120.2605,33.1536],
				'白驹镇':[120.3497,33.0294],
				'草堰镇':[120.3690,32.9707],
				'万盈镇':[120.5173,32.9914],
				'小海镇':[120.4733,33.0628],
				'西团镇':[120.4088,33.1134],
				'大中街道':[120.4912,33.1732],
				'大丰经济开发区':[120.3964,33.1801],
				'新丰镇':[120.4376,33.3018],
				'丰华街道':[120.5447,33.2192],
				'南阳镇':[120.5557,33.1387],
				'草庙镇':[120.6628,33.0582],
				'大桥镇':[120.6422,32.9879],
				'大丰港经济开发区':[120.7755,33.2249],
				'三龙镇':[120.4857,33.4154],
				'方强农场':[	120.5035,3.4624],
				'上海农场':[120.5969,33.3259],
				'农林场圃':[120.7013,33.3753],
				'海丰农场':[120.6244,33.2651],
				'东坝头农场':[120.6230,33.1962],
				'大中农场':[120.6848,33.1307],
				'川东农场':[120.7672,33.0236]
			};
	
			var convertData = function (data) {
				var res = [];
				for (var i = 0; i < data.length; i++) {
					var geoCoord = geoCoordMap[data[i].name];
					if (geoCoord) {
						res.push({
							name: data[i].name,
							value: geoCoord.concat(data[i].value)
						});
					}
				}
				return res;
			};
	
			option = {
				color: ['#f0ff00','#ffb361'],
				tooltip : {
					trigger: 'item',
					formatter: function (params) {
						return params.name + ' : ' + params.value[2];
					}
				},
				visualMap: {
	//			    type:'piecewise',
					show: true,
					min: 0,
					max: 200,
					calculable: true,
					width:'100%',
					textStyle: {
						color: '#fff'
					},
					inRange: {
						color: ['#e3b139','#c0e567', '#49c552','#29edff'] // 蓝绿
					}
				},
				geo: [
					{
						map: 'dafeng',
						zoom: 0.7,
						layoutCenter: ['51%', '51%'],
						layoutSize: '130%',
						roam: false,//禁止缩放
						label: {
							normal: {
								show: false,
							}
						},
						itemStyle: {
							normal: {
								areaColor: '#43DAFF',
								borderColor:'rgba(0,0,0,0)',
								shadowColor: '#1A5B78',
								shadowBlur: 20,
								shadowOffsetX: 0,
								shadowOffsetY: -20,
								// borderWidth:20
							},
							emphasis: {
								areaColor: 'rgba(0,0,0,0)',
							}
						},
					},
					{
						map: 'dafeng',
						zoom: 0.7,
						layoutCenter: ['50%', '50%'],
						layoutSize: '130%',
						roam: false,//禁止缩放
						width:'100%',
						label: {
							emphasis: {
								show: true
							}
						},
						itemStyle: {
							normal: {
								areaColor: '#041F4E',
								borderColor: 'rgba(69,220,255,0.5)',
								borderWidth: '1.1'
							},
							emphasis: {
								areaColor: 'rgba(1,120,213,.6)'
							}
						},
						regions: []
					}
				],
				series : [
					{
						name: '群体人员分布',
						type: 'effectScatter',
						coordinateSystem: 'geo',
						data: convertData(data),
						symbolSize: function (val) {
							return val[2] / 10;
						},
						label: {
							normal: {
								formatter: '{b}',
								position: 'right',
								color: '#fff',
								fontSize: 9,
								show: true
							},
							emphasis: {
								show: true
							}
						},
						rippleEffect: {
							period:6,
							scale: 3,
							brushType: 'fill'
						},
						itemStyle: {
							normal: {
								color: '#f0ff00',
							}
						}
					},
				]
			};
			$(window).resize(function () {
				myChart.resize();
			})
			myChart.setOption(option)
	
		});
	
	},



	map_3:function(divBox){

	    var myChart = echarts.init(document.getElementById(divBox));
	    $.get('resource/echarts/map_json/china.json', function (china_geo) {
	        echarts.registerMap('china1', china_geo);
	        var geoCoordMap = {
	            '上海': [121.4648, 31.2891], '东莞': [113.8953, 22.901], '东营': [118.7073, 37.5513], '中山': [113.4229, 22.478], '临汾': [111.4783, 36.1615], '临沂': [118.3118, 35.2936], '丹东': [124.541, 40.4242], '丽水': [119.5642, 28.1854], '乌鲁木齐': [87.9236, 43.5883], '佛山': [112.8955, 23.1097], '保定': [115.0488, 39.0948], '兰州': [103.5901, 36.3043], '包头': [110.3467, 41.4899], '北京': [116.4551, 40.2539], '北海': [109.314, 21.6211], '南京1': [118.8062, 31.9208], '南京2': [118.8062, 31.920800001], '南宁': [108.479, 23.1152], '南昌': [116.0046, 28.6633], '南通': [121.1023, 32.1625], '厦门': [118.1689, 24.6478], '台州': [121.1353, 28.6688], '合肥': [117.29, 32.0581], '呼和浩特': [111.4124, 40.4901], '咸阳': [108.4131, 34.8706], '哈尔滨': [127.9688, 45.368], '唐山': [118.4766, 39.6826], '嘉兴': [120.9155, 30.6354], '大同': [113.7854, 39.8035], '大连': [122.2229, 39.4409], '天津': [117.4219, 39.4189], '太原': [112.3352, 37.9413], '威海': [121.9482, 37.1393], '宁波': [121.5967, 29.6466], '宝鸡': [107.1826, 34.3433], '宿迁': [118.5535, 33.7775], '常州': [119.4543, 31.5582], '广州': [113.5107, 23.2196], '廊坊': [116.521, 39.0509], '延安': [109.1052, 36.4252], '张家口': [115.1477, 40.8527], '徐州': [117.5208, 34.3268], '德州': [116.6858, 37.2107], '惠州': [114.6204, 23.1647], '成都': [103.9526, 30.7617], '扬州': [119.4653, 32.8162], '承德': [117.5757, 41.4075], '拉萨': [91.1865, 30.1465], '无锡': [120.3442, 31.5527], '日照': [119.2786, 35.5023], '昆明': [102.9199, 25.4663], '杭州': [119.5313, 29.8773], '枣庄': [117.323, 34.8926], '柳州': [109.3799, 24.9774], '株洲': [113.5327, 27.0319], '武汉': [114.3896, 30.6628], '汕头': [117.1692, 23.3405], '江门': [112.6318, 22.1484], '沈阳': [123.1238, 42.1216], '沧州': [116.8286, 38.2104], '河源': [114.917, 23.9722], '泉州': [118.3228, 25.1147], '泰安': [117.0264, 36.0516], '泰州': [120.0586, 32.5525], '济南': [117.1582, 36.8701], '济宁': [116.8286, 35.3375], '海口': [110.3893, 19.8516], '淄博': [118.0371, 36.6064], '淮安': [118.927, 33.4039], '深圳': [114.5435, 22.5439], '清远': [112.9175, 24.3292], '温州': [120.498, 27.8119], '渭南': [109.7864, 35.0299], '湖州': [119.8608, 30.7782], '湘潭': [112.5439, 27.7075], '滨州': [117.8174, 37.4963], '潍坊': [119.0918, 36.524], '烟台': [120.7397, 37.5128], '玉溪': [101.9312, 23.8898], '珠海': [113.7305, 22.1155], '南京': [120.2234, 33.5577], '盘锦': [121.9482, 41.0449], '石家庄': [114.4995, 38.1006], '福州': [119.4543, 25.9222], '秦皇岛': [119.2126, 40.0232], '绍兴': [120.564, 29.7565], '聊城': [115.9167, 36.4032], '肇庆': [112.1265, 23.5822], '舟山': [122.2559, 30.2234], '苏州': [120.6519, 31.3989], '莱芜': [117.6526, 36.2714], '菏泽': [115.6201, 35.2057], '营口': [122.4316, 40.4297], '葫芦岛': [120.1575, 40.578], '衡水': [115.8838, 37.7161], '衢州': [118.6853, 28.8666], '西宁': [101.4038, 36.8207], '西安': [109.1162, 34.2004], '贵阳': [106.6992, 26.7682], '连云港': [119.1248, 34.552], '邢台': [114.8071, 37.2821], '邯郸': [114.4775, 36.535], '郑州': [113.4668, 34.6234], '鄂尔多斯': [108.9734, 39.2487], '重庆': [107.7539, 30.1904], '金华': [120.0037, 29.1028], '铜川': [109.0393, 35.1947], '银川': [106.3586, 38.1775], '镇江': [119.4763, 31.9702], '长春': [125.8154, 44.2584], '长沙': [113.0823, 28.2568], '长治': [112.8625, 36.4746], '阳泉': [113.4778, 38.0951], '青岛': [120.4651, 36.3373], '韶关': [113.7964, 24.7028], '平度市': [147.4805,42.4235], '胶州市': [148.8867,33.2846], '黄岛区': [147.6563,25.7999], '即墨市': [158.1152,36.3151], '胶州市': [148.8867,33.2846], '胶州市': [148.8867,33.2846], '内蒙古':[111.670801,40.818311], '云南':[102.712251,25.040609] 
	        };
	        var BJData1 = [
	            [{name:'厦门',value:Math.random()*100}, {name:'南京1'}],
	            [{name:'广州',value:Math.random()*100}, {name:'南京1'}],
	            [{name:'云南',value:Math.random()*100}, {name:'南京1'}],
	            [{name:'西安',value:Math.random()*100}, {name:'南京1'}],
			];
	        var BJData2 = [
	            [{name:'北京',value:Math.random()*100}, {name:'南京1'}],
	            [{name:'重庆',value:Math.random()*100}, {name:'南京1'}],
	            [{name:'拉萨',value:Math.random()*100}, {name:'南京1'}],
			];
	        var BJData3 = [
	            [{name:'韶关',value:Math.random()*100}, {name:'南京1'}],
	            [{name:'乌鲁木齐',value:Math.random()*100}, {name:'南京1'}],
	            [{name:'南京2',value:Math.random()*100}, {name:'南京1'}]
			];
			
			//飞机路径
			var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
			//火车路径
			var trainPath ='path://M24.000,47.000 L24.000,5.000 L20.000,5.000 L20.000,46.000 L12.000,23.000 L7.000,23.000 L19.000,46.000 L20.000,46.000 C20.000,46.000 19.133,48.130 17.000,46.000 L2.000,21.000 C2.000,21.000 -1.613,13.569 2.000,8.000 C2.000,8.000 6.971,2.397 12.000,3.000 C12.000,3.000 16.868,-3.774 20.000,3.000 L20.000,4.000 L24.000,4.000 L26.000,4.000 L26.000,5.000 L26.000,47.000 L24.000,47.000 ZM11.000,5.000 C11.000,5.000 0.766,6.524 5.000,17.000 L11.000,16.000 L11.000,5.000 Z'
			//汽车路径
			var carPath='path://M24.078,12.185 C21.919,12.185 20.157,10.454 20.157,8.307 C20.157,6.159 21.907,4.428 24.078,4.428 C26.246,4.432 28.000,6.167 28.000,8.307 C28.000,10.442 26.249,12.185 24.078,12.185 ZM17.921,8.863 C17.921,11.757 20.388,14.097 23.523,14.349 L23.523,27.757 C23.337,27.737 23.159,27.701 22.964,27.701 C20.181,27.701 17.921,29.937 17.921,32.689 C17.921,35.442 20.181,37.678 22.964,37.678 C23.159,37.678 23.337,37.642 23.523,37.622 L23.523,38.784 C23.523,40.006 22.523,41.000 21.283,41.000 L2.240,41.000 C1.001,41.000 0.000,40.006 0.000,38.784 L0.000,5.722 L9.467,0.000 L21.283,0.000 C22.523,0.000 23.523,0.994 23.523,2.216 L23.523,3.378 C20.388,3.634 17.921,5.982 17.921,8.863 ZM12.323,5.542 C12.323,4.929 11.821,4.436 11.205,4.436 L7.835,4.436 C7.381,4.676 7.178,4.752 6.972,4.860 L3.358,6.652 L3.358,12.193 C3.358,12.810 3.865,13.303 4.480,13.303 L11.205,13.303 C11.825,13.303 12.323,12.802 12.323,12.193 L12.323,5.542 ZM12.323,16.625 C12.323,16.008 11.821,15.515 11.205,15.515 L4.480,15.515 C3.857,15.511 3.358,16.008 3.358,16.617 L3.358,24.379 C3.358,24.992 3.865,25.485 4.480,25.485 L11.205,25.485 C11.825,25.485 12.323,24.988 12.323,24.379 L12.323,16.625 ZM12.323,28.811 C12.323,28.194 11.821,27.701 11.205,27.701 L11.205,27.693 L4.480,27.693 C3.857,27.693 3.358,28.194 3.358,28.803 L3.358,36.560 C3.358,37.177 3.865,37.670 4.480,37.670 L11.205,37.670 C11.825,37.670 12.323,37.169 12.323,36.560 L12.323,28.811 ZM20.157,32.689 C20.157,30.554 21.907,28.807 24.078,28.811 C26.246,28.811 28.000,30.546 28.000,32.689 C28.000,34.833 26.249,36.568 24.078,36.568 C21.919,36.568 20.157,34.837 20.157,32.689 Z'

			var convertData = function (data) {
	            var res = [];
	            for (var i = 0; i < data.length; i++) {
	                var dataItem = data[i];
	                var fromCoord = geoCoordMap[dataItem[0].name];
	                var toCoord = geoCoordMap[dataItem[1].name];
	                   if (fromCoord && toCoord) {
	                    res.push([
	                        {
	                            coord:fromCoord,
	                            value: dataItem[0].value
	                        },
	                        {
	                            coord: toCoord,
	                        }
	                    ]);
	                }
	            }
	            return res;
	        };

	        var color = ['#208DA2', '#076686', '#08667E'];
	        var series = [];
	        var BJDataName= new Array();
			BJDataName.push('南京1');

	        var BJDataA= new Array();
			BJDataA.push(BJData1);
	        for(var i=0; i <BJDataA.length; i++) {
	          var BJDataTemp = BJDataA[i];
	          var name = BJDataName[i];
	          [[name, BJDataTemp]].forEach(function (item, i) {
	            series.push(
	                {
	                    type: 'lines',
						zlevel: 2,
						effect: {
							show: true,
							period: 6,
							trailLength: 0,
							symbol: planePath,//飞机
							symbolSize: 20
						},
	                    lineStyle: {
	                        normal: {
	                            width: 2,
	                            color: '#edc920',
	                            opacity: 0.5,
	                            curveness: 0.2
	                        }
	                    },
	                    data: convertData(item[1])
	                },
	                {
	                    type: 'effectScatter',
	                    coordinateSystem: 'geo',
	                    zlevel: 2,
	                    rippleEffect: {
	                        period:10,
	                        brushType: 'stroke',
	                        scale: 10
	                    },
	                    label: {
	                        normal: {
	                            show: false,
	                            position: 'right',
	                            offset:[5, 0],
	                            formatter: '{b}',
	                            textStyle: {
	                                color:"rgba(56,241,250,0)"
	                            }
	                        },
	                        emphasis: {
	                            show: true
	                        }
	                    },
	                    symbolSize: function (val) {
			                return val[1] / 6;
			            },
//			            symbol: 'image://images/index_glx/h2.png',
	                    itemStyle: {
	                        normal: {
	                            show: true,
	                            color: '#bdcb49'
	                        }
	                    },
	                    data: item[1].map(function (dataItem) {
	                        return {
	                            name: dataItem[0].name,
	                            value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
	                        };
	                    }),
	                },
	                {
	                    type: 'effectScatter',
	                    coordinateSystem: 'geo',
	                    zlevel: 2,
	                    rippleEffect: {
	                        period:10,
	                        brushType: 'stroke',
	                        scale: 10
	                    },
	                    label: {
	                        normal: {
	                            show: false,
	                            position: 'right',
	                            offset:[5, 0],
	                            color:'#01EBE7',
	                            formatter: '{b}',
	                            textStyle: {
	                                color:"rgba(56,241,250,0)"
	                            }
	                        },
	                        emphasis: {
	                            show: true
	                        }
	                    },
	                    symbol: 'image://images/y4.png',
	                    symbolSize:15,
	                    itemStyle: {
	                        normal: {
	                            show: false,
	                            color: '#fff'
	                        }
	                    },
	                    data:[{
	                        name: item[0],
	                        value: geoCoordMap[item[0]].concat([100]),
	                    }],
	                }
	            );
	        });
			}
	        var BJDataB= new Array();
	        BJDataB.push(BJData2);
	        for(var i=0; i <BJDataB.length; i++) {
	          var BJDataTemp = BJDataB[i];
	          var name = BJDataName[i];
	          [[name, BJDataTemp]].forEach(function (item, i) {
	            series.push(
	                {
	                    type: 'lines',
						zlevel: 2,
						effect: {
							show: true,
							period: 6,
							trailLength: 0,
							symbol: trainPath,//火车
							symbolSize: [13,30],
						},
	                    lineStyle: {
	                        normal: {
	                            width: 2,
								color: '#34FFFD',
	                            opacity: 0.5,
	                            curveness: 0.2
	                        }
	                    },
	                    data: convertData(item[1])
	                },
	                {
	                    type: 'effectScatter',
	                    coordinateSystem: 'geo',
	                    zlevel: 2,
	                    rippleEffect: {
	                        period:10,
	                        brushType: 'stroke',
	                        scale: 10
	                    },
	                    label: {
	                        normal: {
	                            show: false,
	                            position: 'right',
	                            offset:[5, 0],
	                            formatter: '{b}',
	                            textStyle: {
	                                color:"rgba(56,241,250,0)"
	                            }
	                        },
	                        emphasis: {
	                            show: true
	                        }
	                    },
	                    symbolSize: function (val) {
			                return val[1] / 6;
			            },
//			            symbol: 'image://images/index_glx/h2.png',
	                    itemStyle: {
	                        normal: {
	                            show: true,
	                            color: '#34FFFD'
	                        }
	                    },
	                    data: item[1].map(function (dataItem) {
	                        return {
	                            name: dataItem[0].name,
	                            value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
	                        };
	                    }),
	                }
	            );
	        });
			}
	        var BJDataC= new Array();
	        BJDataC.push(BJData3);
	        for(var i=0; i <BJDataC.length; i++) {
	          var BJDataTemp = BJDataC[i];
	          var name = BJDataName[i];
	          [[name, BJDataTemp]].forEach(function (item, i) {
	            series.push(
	                {
	                    type: 'lines',
						zlevel: 2,
						effect: {
							show: true,
							period: 6,
							trailLength: 0,
							symbol: carPath,
							symbolSize: [12,20],//汽车
						},
	                    lineStyle: {
	                        normal: {
	                            width: 2,
								color: '#4fc753',
	                            opacity: 0.5,
	                            curveness: 0.2
	                        }
	                    },
	                    data: convertData(item[1])
	                },
	                {
	                    type: 'effectScatter',
	                    coordinateSystem: 'geo',
	                    zlevel: 2,
	                    rippleEffect: {
	                        period:10,
	                        brushType: 'stroke',
	                        scale: 10
	                    },
	                    label: {
	                        normal: {
	                            show: false,
	                            position: 'right',
	                            offset:[5, 0],
	                            formatter: '{b}',
	                            textStyle: {
	                                color:"rgba(56,241,250,0)"
	                            }
	                        },
	                        emphasis: {
	                            show: true
	                        }
	                    },
	                    symbolSize: function (val) {
			                return val[1] / 6;
			            },
//			            symbol: 'image://images/index_glx/h2.png',
	                    itemStyle: {
	                        normal: {
	                            show: true,
	                            color: '#4fc753'
	                        }
	                    },
	                    data: item[1].map(function (dataItem) {
	                        return {
	                            name: dataItem[0].name,
	                            value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
	                        };
	                    }),
	                }
	            );
	        });
			}
			
			option = {
				geo: [
					{
						map: 'china1',
						roam: false,//禁止缩放
						label: {
							normal: {
								show: false,
								textStyle: {
									color: '#fff',
									fontSize: 12,
								}
							},
							emphasis: {
								textStyle: {
									color: '#fff',
									fontSize: 12,
								}
							}
						},
	//	                zoom:'1.5',
						// width:'100%',
						// height:'100%',
						layoutCenter: ['50%', '50%'],
						layoutSize: '130%',
						itemStyle: {
							normal: {
								areaColor: 'rgba(2,99,172,0)',
								borderColor: 'rgba(1,211,220,0.5)',
							},
							emphasis: {
								areaColor: 'rgba(4,101,129,0.3)',
							}
						},
					},
				],
				series: series
			};
			
			$(window).resize(function () {
				myChart.resize();
			})
			myChart.setOption(option);
		});
	},




	
	// map_:function(divBox){
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

charts.map_1('map_1');
charts.map_2('map_2');
charts.map_3('map_3');





