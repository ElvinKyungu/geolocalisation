
//On a besoin d'un boutton
let key = "10616696340915169606x72298";
const btn = document.querySelector(".btn");

const getPosition = function(){
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition((position) => resolve(position),
        (err) => reject(err)
        );
    });
};

btn.addEventListener("click", function(){

    getPosition().then((position) => {
        const result = position.coords;
        // console.log(result.latitude);
        // console.log(result.longitude);
        fetch(`https://geocode.xyz/${result.latitude},${result.longitude}?geoit=xml&auth=${key}`)
        .then(response => {
            console.log(response);
        })
    });
});
