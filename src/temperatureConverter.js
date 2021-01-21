// let celsius = document.getElementById("celsius").value;
// let fahrenheit = document.getElementById("fahrenheit").value;
// let kelvin = document.getElementById("kelvin").value;

function fromCelsius(){
    let celsius = document.getElementById("celsius").value;
    document.getElementById("fahrenheit").value = celsius * 9 / 5 + 32;
    document.getElementById("kelvin").value = parseFloat(celsius) + 273.15;
}

function fromFahrenheit(){
    let fahrenheit = document.getElementById("fahrenheit").value;
    document.getElementById("celsius").value = (fahrenheit - 32)/(9/5);
    document.getElementById("kelvin").value = (fahrenheit-32)/1.8+273.15;
}

function fromKelvin(){
    let kelvin = document.getElementById("kelvin").value;
    document.getElementById("celsius").value = kelvin-273.15;
    document.getElementById("fahrenheit").value = 1.8*(kelvin-273.15)+32;
}

function convert(){
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = document.getElementById("fahrenheit").value;
    let kelvin = document.getElementById("kelvin").value;
    if((celsius !== "")&&(fahrenheit==="")&&(kelvin==="")){
        fromCelsius();
    }
    else if((fahrenheit!=="")&&(kelvin==="")&&(celsius==="")){
        fromFahrenheit();
    }
    else if((kelvin!=="")&&(celsius==="")&&(fahrenheit==="")){
        fromKelvin();
    }
    return false;
}


module.exports = convert;