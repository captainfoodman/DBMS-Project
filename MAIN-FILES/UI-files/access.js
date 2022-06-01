const zlat1= 13.012511;
const zlong1=80.235641;
let lat=0.233;
let lng=92.33;

function findloc(){
    const success = (position) =>{
        lat = position.coords.latitude;
        lng = position.coords.longitude;
        alert(lat + ' '  + lng);
        check(lat, lng);
    }
    const error =() =>{
        alert("location want not found");
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

function check(lat, lng ){
    //it will check the ditance between the current loc. and the other zones!
    let distance= finddistance(lat, lng, zlat1, zlong1);
    distance = distance*1000;
    //alert("distance: " + distance);
    if(distance >=9){
        //here we will tell the user that they cannot access the bike, because they are out of the zone
        //alert("you are currently outside all the zones. try again when you enter into one");
        //or
        //use css to unhide the map
    }

}

//initmap function for the googlemap api

// function initMap(){
//     var options={
//         zoom: 17,
//         center:{
//             lat: lat,
//             lng: lng
//         }
//     }

//     var map = new google.maps.Map(document.getElementById('map'), options);
// }

function finddistance(lat, long, zlat, zlong) {
    //to calculate the distance
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(zlat-lat);  // deg2rad below
    var dLon = deg2rad(zlong-long); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat)) * Math.cos(deg2rad(zlat)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
}
  
function deg2rad(deg) {
    return deg * (Math.PI/180)
}

// main code.
if(navigator.geolocation){
    document.getElementById('access').addEventListener("click", findloc);
}
else{
    alert("geolocation not supported");
}