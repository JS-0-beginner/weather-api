console.log("Let's check today's weather.");

const  API_KEY = `688513c96a811049ddada3db59014d4a`;

const searchTemp = () =>
{
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    // console.log(url);

    fetch(url)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => displayTemp(data))
}

const setInnerText = (id, text) =>
{
    document.getElementById(id).innerText = text;
}

const displayTemp = temp =>
{
    // console.log(temp);
    setInnerText('city-name', temp.name);
    setInnerText('temp-degree', temp.main.temp_max);
    setInnerText('cloud', temp.weather[0].main);
    // Weather icon
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById('weather-icons');
    weatherIcon.setAttribute('src', url);

}

/* 
-error handling
-change background
 */