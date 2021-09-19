mapboxgl.accessToken =pk.eyJ1IjoianJtaWxsZXIxNyIsImEiOiJja3JvM3Rwcmw4YThqMndtZmFmMmQ5MWh3In0.peohxW1NmnMgBxqZ6mv61A;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v10', // style URL
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});

new mapboxgl.Marker()
  .setLngLat(campground.geometry.coordinates)
  .setPopup(
      new mapboxgl.Popup({ offset: 25})
      .setHTML(
          `<h3>${campground.title}</h3><p>${campground.location}</p>`
      )
  )
  .addTo(map)
