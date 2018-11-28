function initMap() {
  var map = {
    lat: 41.8348731,
    lng: -87.6270059,
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: map,
  });

  var wishnick = {
    lat: 41.8350991,
    lng: -87.6276149
  };
  var marker1 = new google.maps.Marker({
    position: wishnick,
    icon:'media/book.png',
    map: map,
    animation:google.maps.Animation.BOUNCE,
    title: "Wishnick Hall"
  });

  var rettaliata = {
    lat: 41.8371064,
    lng: -87.6271181
  };
  var marker2 = new google.maps.Marker({
    position: rettaliata,
    icon:'media/book.png',
    map: map,
    animation:google.maps.Animation.BOUNCE,
    title: "Rettaliata Center"
  });

  var perlstein = {
    lat: 41.835470,
    lng: -87.627140
  };
  var marker3 = new google.maps.Marker({
    position: perlstein,
    icon:'media/books.png',
    map: map,
    animation:google.maps.Animation.BOUNCE,
    title: "Perlstein Hall"
  });

  var pritzker = {
    lat: 41.8379345,
    lng: -87.6273769
  };
  var marker4 = new google.maps.Marker({
    position: pritzker,
    icon:'media/books.png',
    map: map,
    animation:google.maps.Animation.BOUNCE,
    title: "Pritzker Hall"
  });
  var infowindow1 = new google.maps.InfoWindow({
    content: "<b>Wishnick Hall: </b>ITMD 421- Data Modeling and Applications"
  });
  marker1.addListener('click', function () {
    infowindow1.open(map, marker1);
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: "<b>Rettaliata Center: </b>PS-329- Environmental Politics/Policy"
  });
  marker2.addListener('click', function () {
    infowindow2.open(map, marker2);
  });

  var infowindow3 = new google.maps.InfoWindow({
    content: "<b>Perlstein Hall: </b>ITM 100-Introduction to Information Technology as a Profession"
  });
  marker3.addListener('click', function () {
    infowindow3.open(map, marker3);
  });

  var infowindow4 = new google.maps.InfoWindow({
    content: "<b>Pritzker Hall: </b>ITMD 361-Fall 2018 Fundamentals of Web Development"
  });
  marker4.addListener('click', function () {
    infowindow4.open(map, marker4);
  });

 
}