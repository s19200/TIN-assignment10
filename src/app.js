const temperatureConverter = require("./temperatureConverter");
const distanceConverter = require("./distanceConverter");


window.onload = function(){
    document.getElementById("button").addEventListener("click", temperatureConverter);
    document.getElementById("button1").addEventListener("click", distanceConverter);
}
