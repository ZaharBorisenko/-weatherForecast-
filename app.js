let button = document.querySelector('.button');
let inputCity = document.querySelector('.inputCity');

let cityName = document.querySelector('.content__title');
let description = document.querySelector('.content__description');
let temp = document.querySelector('.content__temp');

let humidityValue = document.querySelector('.humidityValue');
let speedValue = document.querySelector('.speedValue');
let cloudsValue = document.querySelector('.cloudsValue');
let grndValue = document.querySelector('.grndValue')


button.addEventListener('click',function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputCity.value+'&appid=73ff84cc6e2c68d35b171dc50ff6525a&lang=ru')
        .then(response => response.json())
        .then(data => {
            // подставляем данные из json в html
            cityName.innerHTML = data.name;
            description.innerHTML = data.weather[0].description;
            temp.innerHTML = (data.main.temp - 273).toFixed(0) + '&deg;';

            humidityValue.innerHTML = data.main.humidity + '%';
            speedValue.innerHTML = data.wind.speed.toFixed(0) + 'м/с';
            cloudsValue.innerHTML = data.clouds.all + '%';
            grndValue.innerHTML = (data.main.pressure / 1.332).toFixed(0) + ' мм.рт.ст';
        })

        .catch(err => alert('Введите правильное название города!'));
         message(); // очистка инпута
})
//функция очисти инпута
function message(){
    inputCity.value = '';
}


