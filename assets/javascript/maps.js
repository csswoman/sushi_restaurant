function initMap() {
    let map = new google.maps.Map(document.getElementById('mapa'), {
        center: {
            lat: 34.047490,
            lng: -118.239440
        },
        zoom:16,
    })
}

initMap();