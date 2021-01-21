function kilometersToMiles(){
   let kilometers =  document.getElementById("kilometers").value;
   document.getElementById("miles").value = kilometers*0.62137;
}

function milesToKilometers(){
    let miles = document.getElementById("miles").value;
    document.getElementById("kilometers").value = miles/0.62137;
}

function convertDistance(){
    let kilometers =  document.getElementById("kilometers").value;
    let miles = document.getElementById("miles").value;
    if((kilometers!=="")&&(miles==="")){
        kilometersToMiles();
    }
    else if((miles!=="")&&(kilometers==="")){
        milesToKilometers();
    }
}



module.exports = convertDistance;