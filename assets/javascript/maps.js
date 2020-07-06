function initMap() {

    const coords = {
        lat: 34.047490,
        lng: -118.239440
    };

    let map = new google.maps.Map(document.getElementById('mapa'), {
        center: coords,
        zoom:16,
    });

    let marker = new google.maps.Marker({
        position: coords,
        map,
        title: 'Sushi Bar'
    })
}

initMap();