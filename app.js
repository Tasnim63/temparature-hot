const api_key = `e61b0c1c5c25ffa9d1c2ac461d7ac83d`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    // console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
    .then(data => displayTeparature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTeparature = (temparature) => {
    setInnerText('city', temparature.name);
    setInnerText('temperature', temparature.main.temp);
    setInnerText('condition',temparature.weather[0].main)
    console.log(temparature);
    // set weather icon
    const url = `https://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}