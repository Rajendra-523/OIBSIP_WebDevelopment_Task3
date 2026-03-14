function convertTemp(){

let temp = document.getElementById("temperature").value;
let unit = document.getElementById("unit").value;
let result = document.getElementById("result");

if(temp === "" || isNaN(temp)){
    result.innerHTML = "Please enter a valid number";
    return;
}

temp = Number(temp);

if(unit === "celsius"){
    let f = (temp * 9/5) + 32;
    result.innerHTML = temp + " °C = " + f.toFixed(2) + " °F";
}
else{
    let c = (temp - 32) * 5/9;
    result.innerHTML = temp + " °F = " + c.toFixed(2) + " °C";
}

}