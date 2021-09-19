// load data from api
document.getElementById('search-button').addEventListener('click', function () {
    const city = document.getElementById('city-name').value;
    const API_KEY = `7a475abd85b6f0236a31cd671b5370e3`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemerature(data))
})
// common funtion 
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
// display temperature data 
const displayTemerature = temperature => {
    // if (temperature===null) {
    //     document.getElementById('errorDiv').style.display = 'block'
    // }
        setInnerText('city', temperature.name)
        setInnerText('temperature', temperature.main.temp)
        setInnerText('condition', temperature.weather[0].main)
        // set weather icon
        const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
        const imgIcon = document.getElementById('weather-icon');
        imgIcon.setAttribute('src', url)
}