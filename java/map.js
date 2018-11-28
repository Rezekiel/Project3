function initMap() {
  var map = {
    lat: 41.8348731,
    lng: -87.6270059,
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4.5,
    center: map
  });

  var wishnick = {
    lat: 41.8350991,
    lng: -87.6276149
  };
  var marker1 = new google.maps.Marker({
    position: wishnick,
    map: map,
    title: "Wishnick Hall"
  });

  var rettaliata = {
    lat: 41.8371064,
    lng: -87.6271181
  };
  var marker2 = new google.maps.Marker({
    position: rettaliata,
    map: map,
    title: "Rettaliata Center"
  });

  var perlstein = {
    lat: 44.4097,
    lng: -103.5091
  };
  var marker3 = new google.maps.Marker({
    position: perlstein,
    map: map,
    title: "Perlstein Hall"
  });

  var pritzker = {
    lat: 41.8379345,
    lng: -87.6273769
  };
  var marker4 = new google.maps.Marker({
    position: pritzker,
    map: map,
    title: "Pritzker Hall"
  });



  var infowindow1 = new google.maps.InfoWindow({
    content: "ITMD 421: Data Modeling and Applications"
  });
  marker1.addListener('click', function () {
    infowindow1.open(map, marker1);
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: "PS-329: Environmental Politics/Policy"
  });
  marker2.addListener('click', function () {
    infowindow2.open(map, marker2);
  });

  var infowindow3 = new google.maps.InfoWindow({
    content: "ITM 100 Introduction to Information Technology as a Profession"
  });
  marker3.addListener('click', function () {
    infowindow3.open(map, marker3);
  });

  var infowindow4 = new google.maps.InfoWindow({
    content: "ITMD 361: Fall 2018 Fundamentals of Web Development"
  });
  marker4.addListener('click', function () {
    infowindow4.open(map, marker4);
  });

 
}