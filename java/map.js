function initMap(){
  var el = document.getElementById('map');
  var iit = new google.maps.LatLng(41.8341216635,-87.623664172);
  var crete = new google.maps.LatLng(41.444481,-87.631432);
//map setting parameters
  var mapOptions = {
    center: new google.maps.LatLng(41.6572562,-87.6800486),
    zoom: 15,
  };
  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: iit,
    map: myMap,
    animation:google.maps.Animation.BOUNCE,
  });

  var marker1 = new google.maps.Marker({
    position: crete,
    map: myMap,
    animation:google.maps.Animation.BOUNCE,
  });

}