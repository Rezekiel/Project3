function initMap(){
  var location=[lat:41.876518,lng:-88.255531}
  var map=new google.maps.Map(document.getElementById("map"),{
    zoom:4,
    center:location
  });
  var marker = new google.maps.Marker({
      position: location,
      map:map
  })
}
