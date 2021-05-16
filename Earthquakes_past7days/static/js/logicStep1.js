// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([30,30],2);


// L.circleMarker([34.0522,-118.2437],{
//     radius:300,
//     color:"black",
//     fillColor:"#ffffa1"

// }).addTo(map)

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// Get data from cities.js
// let cityData = cities;

// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
// ]

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line,{color:"yellow"}).addTo(map)

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport,{
//     // pointToLayer method
//     // pointToLayer:function(feature,latlng){
//     //     console.log(feature);
//     //     return L.marker(latlng).bindPopup("<h2>City: " + feature.properties.city + "</h2><hr><h3>Airport: " + feature.properties.name + "</h3>")
//     // }
//     // onEachFeature method
//     onEachFeature:function(feature,layer){
//         console.log(layer);
//         layer.bindPopup("<h2>City: " + feature.properties.city + "</h2><hr><h3>Airport: " + feature.properties.name + "</h3>");
//     }

// }).addTo(map);

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city){
//     console.log(city);
//     L.circleMarker(city.location,{
//         radius:city.population/100000,
//         color:"orange",
//         fillColor:"orange"
//     }
//     ).bindPopup("<h2>" + city.city + ", " + city.state + "</h2><hr><h3>Population " + city.population.toLocaleString() + "</h3>").addTo(map)
// })

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',
            //style options:
            //mapbox/streets-v11
            //mapbox/outdoors-v11
            //mapbox/light-v10
            //mapbox/dark-v10
            //mapbox/satellite-v9
            //mapbox/satellite-streets-v11
        {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            //tileSize: 512,
            //zoomOffset: -1,
            accessToken: API_KEY
        });

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', 
        {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            accessToken: API_KEY
        });
// Create a base layer that holds both maps.
let baseMaps = {
    "Street": streets,
    "Satellite": satelliteStreets
}

let map = L.map("mapid",{
    center:[39.5, -98.5],
    zoom:3,
    layers:[streets]
})

// Pass our map layers into our layers control and add layers control to the map.
L.control.layers(baseMaps).addTo(map);

// streets.addTo(map);
// Then we add our 'graymap' tile layer to the map.

// Accessing the airport GeoJSON URL
//let airportData = "https://raw.githubusercontent.com/ChiefMetDing/Mapping_Earthquakes/main/majorAirports.json";

// Accessing the Toronto airline routes GeoJSON URL.
//let torontoData = "https://raw.githubusercontent.com/ChiefMetDing/Mapping_Earthquakes/main/torontoRoutes.json";

// Accessing the Toronto neighborboods GeoJSON URL.
//let torontoHoods = "https://raw.githubusercontent.com/ChiefMetDing/Mapping_Earthquakes/main/torontoNeighborhoods.json"

let myStyle = {
    color:"blue",
    fillColor:"yellow",
    weight:1
}

// Grabbing our GeoJSON data
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data){
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data).addTo(map)
    // L.geoJSON(data,{
    //             // pointToLayer method
    //             // pointToLayer:function(feature,latlng){
    //             //     return L.marker(latlng).bindPopup("<h2>City: " + feature.properties.city + "</h2><hr><h3>Airport: " + feature.properties.name + "</h3>")
    //             // }
    //             // onEachFeature method
    //             onEachFeature:function(feature,layer){
    //                 layer.bindPopup("<h2>Area Name: " + feature.properties.AREA_NAME + "</h2><hr><h3>Area S CD: " + feature.properties.AREA_S_CD + "</h3>");
    //             },
    //             style: myStyle
    //         }).addTo(map)
})

// Grabbing our GeoJSON data
// d3.json(airportData).then(function(data){
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
//     L.geoJSON(data,{
//         // pointToLayer method
//         // pointToLayer:function(feature,latlng){
//         //     return L.marker(latlng).bindPopup("<h2>City: " + feature.properties.city + "</h2><hr><h3>Airport: " + feature.properties.name + "</h3>")
//         // }
//         // onEachFeature method
//         onEachFeature:function(feature,layer){
//             layer.bindPopup("<h2>City: " + feature.properties.city + "</h2><hr><h3>Airport: " + feature.properties.name + "</h3>");
//         }
//     }).addTo(map)
// })

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport,{
//     // pointToLayer method
//     // pointToLayer:function(feature,latlng){
//     //     console.log(feature);
//     //     return L.marker(latlng).bindPopup("<h2>City: " + feature.properties.city + "</h2><hr><h3>Airport: " + feature.properties.name + "</h3>")
//     // }
//     // onEachFeature method
//     onEachFeature:function(feature,layer){
//         console.log(layer);
//         layer.bindPopup("<h2>City: " + feature.properties.city + "</h2><hr><h3>Airport: " + feature.properties.name + "</h3>");
//     }