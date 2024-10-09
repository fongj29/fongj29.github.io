function initMap() {
  var nyc = { lat: 40.7128, lng: -74.0060 };  // Coordinates for NY state
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: nyc,
    mapId: 'b2e7cf5c4db154fe' // For customized icons
  });

    var redPixelIcon = {
        url: 'images/red-pixel.png', 
        scaledSize: new google.maps.Size(10, 10)
    };

    var greenPixelIcon = {
        url: 'images/green-pixel.png', 
        scaledSize: new google.maps.Size(10, 10)
    };

    // Create an InfoWindow object for each marker
    var inaccessibleInfoWindow = new google.maps.InfoWindow({
        content: '<h2>Inaccessible Door</h2><p>This location has an inaccessible door.</p>'
    });

    var accessibleInfoWindow = new google.maps.InfoWindow({
        content: '<h2>Accessible Door</h2><p>This location has an accessible door.</p>'
    });

    // ADD marker for RED door template:
    var redMarker = new google.maps.Marker({
        position: { lat: 40.730610, lng: -73.935242 },  // TEST location
        map: map,
        icon: redPixelIcon,
        title: 'Inaccessible Door'
    });

    // Click listener for the red to open the InfoWindow
    redMarker.addListener('click', function() {
        inaccessibleInfoWindow.open(map, redMarker);
    });

    // ADD marker for GREEN doors:
    var greenMarker = new google.maps.Marker({
        position: { lat: 40.749933, lng: -73.98633 },  // TEST location
        map: map,
        icon: greenPixelIcon,
        title: 'Accessible Door'
    });

    // Add a click listener for the green marker to open the InfoWindow
    greenMarker.addListener('click', function() {
        accessibleInfoWindow.open(map, greenMarker);
    });

  const marker = new google.maps.marker.AdvancedMarkerElement({
    map: map,
    position: nyc
  });
}

// Function to show modal when the page loads
window.onload = function() {
    var modal = document.getElementById('introModal');
    var span = document.getElementsByClassName('close')[0];
    
    // Show the modal
    modal.style.display = 'block';
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

  console.log ("This is the Point.");
  