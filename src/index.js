const mapboxgl = require("mapbox-gl");

const buildMarker = require("./marker");



mapboxgl.accessToken = 'pk.eyJ1IjoiamFuZWxncjUiLCJhIjoiY2pkMXVoY3hhMnBxajJxcXNjdnl0amhkNyJ9.dUmC4J2E_KrHhJWmf53iDw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); 

const marker = buildMarker("activities", [-74.009151, 40.705086]);
marker.addTo(map);