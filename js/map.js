mapboxgl.accessToken =
  "pk.eyJ1IjoibXVrdW5kaGJodXNoYW4iLCJhIjoiY2s2eG5jOGVrMG94ODNlbWdqZXRlaW82aCJ9.K0j0BpmEyAu1HTGZivjKCA";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [77.7596861, 13.005539],
  zoom: 13
});

map.on("load", function() {
  map.loadImage("./assets/marker.png", function(error, image) {
    if (error) throw error;
    map.addImage("marker", image);
    map.addSource("point", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [77.7596861, 13.005539]
            }
          }
        ]
      }
    });
    map.addLayer({
      id: "points",
      type: "symbol",
      source: "point",
      layout: {
        "icon-image": "marker",
        "icon-size": 0.9
      }
    });
  });
});
