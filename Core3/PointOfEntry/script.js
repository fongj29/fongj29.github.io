function initMap() {
    var nyc = { lat: 40.7128, lng: -74.0060 };  // Coordinates for New York City
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: nyc
    });
  
    var marker = new google.maps.Marker({
      position: nyc,
      map: map
    });
  }
  