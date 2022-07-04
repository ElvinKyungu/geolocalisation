const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
 
function success(pos) {
    var crd = pos.coords;
    console.log(crd)
}
function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
}
  
navigator.geolocation.getCurrentPosition(success, error, options);

// let data = await get(`https://geocode.xyz/${success.longitudeUser},${this.crd.latitude}?json=1&auth=10616696340915169606x72298`);
// let resultParsed = JSON.parse(data);
