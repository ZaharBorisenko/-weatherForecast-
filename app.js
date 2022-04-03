fetch('https://api.openweathermap.org/data/2.5/weather?q=Omsk&appid=73ff84cc6e2c68d35b171dc50ff6525a')
.then(function (resp){return resp.json() })
.then(function (date) {
    console.log(date)
    document.querySelector('.current__city').innerHTML = date.name;
    document.querySelector('.current__description').innerHTML = date.weather[0].description;
    document.querySelector('.current__temp').innerHTML = Math.round(date.main.temp - 273)+'&deg';
    document.getElementById('m/s').innerHTML = date.wind.speed.toFixed(0) + ' м/с';
    document.getElementById('humidity').innerHTML = date.main.humidity + '%';
    //http://openweathermap.org/img/wn/10d@2x.png
    document.getElementById('iconWeather').innerHTML = '<img src="http://openweathermap.org/img/wn/'+date.weather[0].icon+'@2x.png">'
    document.getElementById('pressure').innerHTML = (date.main.pressure / 1.332).toFixed(0) + ' мм. рт. ст';
    document.getElementById('temp__max').innerHTML = (date.main.temp_max - 273).toFixed(0) + '&deg'
})
.catch(function () {
    
});

fetch('https://api.openweathermap.org/data/2.5/forecast?lat=55&lon=73.4&appid=73ff84cc6e2c68d35b171dc50ff6525a')
    .then(function (resp){return resp.json() })
    .then(function (date) {
        console.log(date)
        document.getElementById('time1').innerHTML = date.list[0]['dt_txt'];
        document.getElementById('img1').innerHTML = '<img src="http://openweathermap.org/img/wn/'+date.list[0].weather[0].icon+'@2x.png">'
        document.getElementById('temp1').innerHTML = (date.list[0].main.temp - 273).toFixed(0) + '&deg';

        document.getElementById('time2').innerHTML = date.list[1]['dt_txt'];
        document.getElementById('img2').innerHTML = '<img src="http://openweathermap.org/img/wn/'+date.list[1].weather[0].icon+'@2x.png">'
        document.getElementById('temp2').innerHTML = (date.list[1].main.temp - 273).toFixed(0) + '&deg';

        document.getElementById('time3').innerHTML = date.list[2]['dt_txt'];
        document.getElementById('img3').innerHTML = '<img src="http://openweathermap.org/img/wn/'+date.list[2].weather[0].icon+'@2x.png">'
        document.getElementById('temp3').innerHTML = (date.list[2].main.temp - 273).toFixed(0) + '&deg';

        document.getElementById('time4').innerHTML = date.list[3]['dt_txt'];
        document.getElementById('img4').innerHTML = '<img src="http://openweathermap.org/img/wn/'+date.list[3].weather[0].icon+'@2x.png">'
        document.getElementById('temp4').innerHTML = (date.list[3].main.temp - 273).toFixed(0) + '&deg';
    })
    .catch(function () {

    });