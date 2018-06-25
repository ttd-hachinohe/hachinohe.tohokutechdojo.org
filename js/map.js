function initialize() {
 var latlng = new google.maps.LatLng(40.479322, 141.559880);
 var opts = {
 zoom: 12,
 center: latlng,
 scrollwheel: false,
 mapTypeControl: true,
 mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 /* 表示エリアのID名を指定。この場合id="map"のところに出力されます */
 var map = new google.maps.Map(document.getElementById("map"), opts);
 
 /* 地図style */
 var styleOptions = []
 
 //地図の切り替えボタン
 var styledMapOptions = {
 name: 'モノクロ地図'
 }
 var monoType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
 map.mapTypes.set('mono', monoType);
 map.setMapTypeId('mono');
 
 //マーカーの画像パス(相対、絶対どっちでも)
 var image = 'http://aimers.jp/wp-content/uploads/2015/01/cce8f4a8-s.png';
 var Marker = new google.maps.Marker({
 position: latlng,
 map: map
 //icon: image//デフォルトのマーカーを表示する場合は指定無し
 });
 
 //マップのタイトル
 var contentString = '八戸工業大学';
 var infowindow = new google.maps.InfoWindow({
 content: contentString
 });
 //infowindow.open(map, lopanMarker);//初期状態で吹き出しを表示させる場合は有効にする 
 google.maps.event.addListener(Marker, 'click', function() {
 infowindow.open(map, Marker);
 });
}
google.maps.event.addDomListener(window, 'load', initialize);