let longitude = document.getElementById('longitude')
    latitude = document.getElementById('latitude');
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
 
function success(pos) {
    console.log(pos);
    var crd = pos.coords;
    longitude.insertAdjacentText('beforeend', crd.longitude);
    latitude.insertAdjacentText('beforeend', crd.latitude);
    // console.log('Votre position actuelle est :');
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude : ${crd.longitude}`);
    // console.log(`La précision est de ${crd.accuracy} mètres.`);
}
  
function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
}
  
navigator.geolocation.getCurrentPosition(success, error, options);

const get = function (url) {
    return new Promise(function (resolve, reject){
        var xhr = new window.XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4){
                if (xhr.status == 200) {
                    resolve("La reponse est bel et bien arrivée ! " +xhr.responseText);
                } else {
                    reject("Oups! il y a un problème "+xhr)
                } 
            }
        }
        xhr.open('GET', url, true);
        xhr.send();
    })
}

var getPosts = async function (){
    let data = await get('https://geocode.xyz/41.3189957000,2.0746469000?json=1&auth=10616696340915169606x72298');
    let resultParsed = JSON.parse(data);
    return resultParsed

}
getPosts().then(function (result){
    console.log(result);
}).catch(function(error){
    console.log(error);
}).then(function(){
    console.log('coucou');
})