function initMap() {
    var myLatLng = {lat: 28.621309, lng: 77.365471};
  
    var map = new google.maps.Map(document.querySelector('.map'), {
      zoom: 4,
      center: myLatLng
    });
  
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map
    });
  }

