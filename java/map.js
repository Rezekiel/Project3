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
           '<p><b>Huntley, IL</b> is a town aproximetly 50 miles N/W of Chicago, just off of the Jane Adams Memorial Toll Way. Originally quite the farm town, it has recently developed into a much larger community with great schools, great people, but all the while keeping the country charm!'+
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