var map;
var map2;
function initMap() {
    var centerMap = {lat:46.640438, lng: 32.610114};
    var myLatLng4 = {lat:  46.640438, lng: 32.610114}; 
  map = new google.maps.Map(document.getElementById('map1'), {
    center: centerMap,
    zoom: 17
  });
    var marker = new google.maps.Marker({
    position: myLatLng4,
    map: map,
    title: 'Общежитие №4'
  });
    
    
    var centerMap2 = {lat:46.641344, lng: 32.613043};
    var myLatLng3 = {lat:  46.641344, lng: 32.613043}; 
  map2 = new google.maps.Map(document.getElementById('map2'), {
    center: centerMap2,
    zoom: 17
  });
    var marker = new google.maps.Marker({
    position: myLatLng3,
    map: map2,
    title: 'Общежитие №4'
  });
}
