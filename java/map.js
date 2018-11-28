function initMap() {
       var iit = {lat:41.8350991, lng:-87.6276149};
       var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 10,
         center: iit
       });

       var contentString = '<div id="content">'+
           '<div id="siteNotice">'+
           '</div>'+
           '<h1 id="firstHeading" class="firstHeading">IIT</h1>'+
           '<div id="bodyContent">'+
           '<p><b>Wishnick Hall</b>ITMD 421: Data Modeling and Applications'+
           '</div>'+
           '</div>';

       var infowindow = new google.maps.InfoWindow({
         content: contentString
       });

       var marker = new google.maps.Marker({
         position: iit,
         map: map,
         title: 'IIT'
       });
       marker.addListener('click', function() {
         infowindow.open(map, marker);
       });
     }