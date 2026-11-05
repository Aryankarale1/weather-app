let Cityname = document.getElementById("Cityname");
let tempCard = document.getElementsByClassName("Card")[0];
let humidity = document.getElementsByClassName("Card")[1];
let windy = document.getElementsByClassName("Card")[2];
let index = document.getElementsByClassName("Card")[3];
let press = document.getElementsByClassName("Card")[4];
let visible = document.getElementsByClassName("Card")[5];
async function findWeather() {
    let city = Cityname.value ;
    console.log(city);
    let res = await fetch(
    `/api/weather?city=${encodeURIComponent(city)}`
);

let data = await res.json();

if (!res.ok) {
    alert(data.error || "Something went wrong!");
    return;
}
    let temp = data.current.temp_c;
     tempCard.innerText = `${temp}°C`


    let humid = data.current.humidity;
    humidity.innerText = `${humid}°C`

    let wind = data.current.wind_kph;
    windy.innerText = `${wind} km/h`;

    let uv = data.current.uv;
    index.innerText = `${uv} UV`;


    let pressure = data.current.pressure_mb;
    press.innerText = `${pressure} mb`;


    let visibility = data.current.vis_km;
    visible.innerText = `${visibility} km`;
       

let icon = data.current.condition.icon;

let weatherIcon = document.getElementById("weatherIcon");

weatherIcon.src = "https:" + icon;
let condition = data.current.condition.text;

document.getElementById("weatherCondition").innerText = condition;
}