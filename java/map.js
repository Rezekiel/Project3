function initMap(){
  var iit = document.getElementById('map');
  var wishnick = new google.maps.LatLng(41.8350991,-87.6276149);
  var  rettaliata = new google.maps.LatLng(41.8371064,-87.6271181)
//map setting parameters
  var mapOptions = {
    center: new google.maps.LatLng(41.876518,-88.255531),
    zoom: 12,
  };
  var map = new google.maps.Map(iit, mapOptions);

  var marker = new google.maps.Marker({
    position: wishnick,
    map: map,
    animation:google.maps.Animation.BOUNCE,
  });

  var marker1 = new google.maps.Marker({
    position: rettaliata,
    map: map,
    animation:google.maps.Animation.BOUNCE,
  });
