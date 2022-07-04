let key = "10616696340915169606x72298";
var longitude;
var latitude;
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
console.log(longitude + ' ' +latitude) //ça me renvoie undefined :(
function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

fetch(`https://geocode.xyz/${latitude},${longitude}?json=1&auth=${key}`)
.then(response => {
    console.log(response);
}).catch((error) => {
    console.error('Error:', error)
});
