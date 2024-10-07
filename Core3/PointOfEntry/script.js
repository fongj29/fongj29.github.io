// This function initializes the map
function initMap() {
    var location = { lat: 40.73356628417969, lng: -73.98146057128906 };  // Marker position
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location
    });

    // Create a marker
    var marker = new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: location,
        title: "My Location"
    });
}

  console.log ("This is the Point.");
  