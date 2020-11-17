import styles from "./maps/styles";

function initMap() {
  const coords = {
    lat: 34.04749,
    lng: -118.23944,
  };

  let map = new google.maps.Map(document.getElementById("mapa"), {
    center: coords,
    zoom: 16,
    styles: styles,
  });

  let marker = new google.maps.Marker({
    position: coords,
    map,
    title: "Sushi Bar",
  });
}

initMap();
