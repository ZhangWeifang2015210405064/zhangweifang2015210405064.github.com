var map = new BMap.Map("myMap");
var point = new BMap.Point(120.148542,30.245341);
map.centerAndZoom(point, 15);
map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
map.enableScrollWheelZoom();
map.setCurrentCity("杭州"); // 设置城市
map.enableScrollWheelZoom(true);
var marker = new BMap.Marker(point); // 创建标注    
map.addOverlay(marker);
marker.enableDragging();

var local = new BMap.LocalSearch(map, {
  renderOptions: {
    map: map,
    panel: "result1",
    autoViewport: true
  }
});
local.searchNearby("宾馆", "西湖区");
    
var markerArr = [];
var transit = new BMap.TransitRoute(map, {
	renderOptions: {
		map: map,
		panel:"results"
	}
});
local.setMarkersSetCallback(function(pois) {
	for (var i = 0; i < pois.length; i++) {
		markerArr[i] = pois[i].marker;
		pois[i].marker.addEventListener("click", function(e) {
			//console.log(this);
			transit.search("杭州师范大学-东南门", e.point);
			transit.clearResults();
		})
	}
})   

var school_info=[
  [120.016976,30.295394,"博文苑1号楼便利超市"],
  [120.015413,30.295005,"博文苑4号楼萌站"],
  [120.017012,30.295566,"博文苑5号楼晨光文具&水果超市&电脑维修"],
  [120.016239,30.295862,"博文苑6号楼仓前图文制作部&菜鸟驿站"],
  [120.014748,30.295831,"博文苑7号楼便利超市&医务室"],
  [120.015745,30.296533,"博文苑9号楼学生事务服务中心"],
  [120.013208,30.29502,"田径场"],
  [120.015355,30.295605,"足球场"],
  [120.017924,30.29573, "恕园7号楼食堂"],
  [120.019406,30.295297,"恕园7号楼彩色玻璃房110服务中心"],
  [120.016945,30.297671,"恕园36号楼图书馆"],
  [120.019127,30.296423,"恕园13号楼一鸣奶吧"],
  [120.02065,30.297554,"恕园16号楼实验楼"],
  [120.01827,30.297499,"恕园23号楼人文学院"],
  [120.019743,30.297148,"恕园17号楼法学院"],
  [120.019527,30.297417,"恕园21号楼经济与管理学院"],
  [120.019976,30.294841,"恕园1号楼阿里巴巴商学院"],
  [120.016527,30.293952,"恕园6号楼经亨颐学院"]
];
var opts = {
  width: 250, // 信息窗口宽度    
  height: 200, // 信息窗口高度    
  title: "信息：",// 信息窗口标题   
}

function schoolmarker(){
	for(var i = 0;i < school_info.length;i++){
		var point= new BMap.Marker(new BMap.Point(school_info[i][0],school_info[i][1]));
		var address = school_info[i][2];
		map.addOverlay(point);
		OnClick(address,point);
	}
}

function OnClick(address,point){
	point.addEventListener("click",function(e){
		var p = e.target;
		var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
		var div=document.createElement("div");
		div.style.width='250px';
		div.style.height='150px';
		var img = document.createElement('img');
		img.style.width='250px';
		img.style.height='150px';
		//img.setAttribute('href','img.jpg')
		div.append(img);
		div.append(address);
		var infoWindow = new BMap.InfoWindow(div,opts); // 创建信息窗口对象 
		map.openInfoWindow(infoWindow,point); // 打开信息窗口
	});
}

schoolmarker();




