const blue = "#f5f5f5";
const label = "#2C3E50";
const accentRed = "#ff5972";
const green = "#468c56";
const black = "#1f1f21";
const lightBlue = "#6DBCDB";
const roads = "#eadf8f";
const transit = "#d3ba74";

const styles = [
  {elementType: 'geometry', stylers: [{color: blue}]},
  {elementType: 'labels.text.stroke', stylers: [{color: "#ffffff"}]},
  {elementType: 'labels.text.fill', stylers: [{color: label}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: accentRed}]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: label}]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: blue}]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: green}]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: black}]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: lightBlue}]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: label}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: roads}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: roads}]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: transit}]
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: lightBlue}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: label}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: label}]
  }
]

export default styles;
