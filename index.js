let key = "10616696340915169606x72298";
let longitude;
let latitude;
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
 
function success(pos) {
    var crd = pos.coords;
    longitude = crd.longitude;
    latitude = crd.latitude;
} 
function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

const result = new Promise((resolve, reject)=>{
    if (resolve) {
        resolve("cool")
    } else {
        reject();
    }
}).then((response) =>{
    console.log(response)
}).catch((err) =>{
    console.log(err);
})
// const result = await fetch(`https://geocode.xyz/${latitude},${longitude}?json=1&auth=${key}`)

