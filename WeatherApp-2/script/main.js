const CLEFAPI = '4104870f483b1956af8043d332b82491';

let resultatsAPI;

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{

        //console.log(position);
        let lat = position.coords.altitude;
        let lon = position.coords.longitude;
        callAPI(lon, lat);

    }, () => {
        alert(`Vous avez refusé la geolocation, l'application ne peut pas fonctionner, veuillez l'activer!.`);
    })
}

function callAPI(lon, lat) {
    //console.log(long, lat);

    fetch(`pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${CLEFAPI}`)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>
    console.log(data))
}

