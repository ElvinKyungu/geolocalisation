let key = "10616696340915169606x72298";
var longitude, latitude;
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
 
function success(pos) {
    var crd = pos.coords;
    longitude = crd.longitude;
    latitude = crd.latitude;
    console.log(longitude + ' ' +latitude)
}

function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

fetch(`https://geocode.xyz/${latitude},${longitude}?json=1&auth=${key}`)
.then(response => response.json())
.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error('Error:', error)
});
