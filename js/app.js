const weather = new Weather
const ui = new UI

const hamburgerDropdown = document.querySelector('#hamburgerIcon');
const hamburgerList = document.querySelector('#nav-sidebar-closed')
const closeHamburger = document.querySelector('#closeHamburger')
const searchWeather = document.querySelector('#searchWeather')
const searchBtn = document.querySelector('#searchBtn')
const weatherDesc = document.querySelector('#w-desc')
const weatherTemp = document.querySelector('#w-temp')
const weatherLocation = document.querySelector('#w-location')
const weatherPerception = document.querySelector('#w-perception')
const weatherHumidity = document.querySelector('#w-humidity')
const weatherWind = document.querySelector('#w-wind')
const weatherIcon = document.querySelector('#w-icon')
const weatherInfo = document.querySelector('#weatherInfo')
const openWeatherTitle = document.querySelector('#openWeatherTitle')
const countryInit = document.querySelector('#countryInit')
const fahren = document.querySelector('#fahren')
const row = document.querySelector('#row')

hamburgerDropdown.addEventListener('click', function () {
    // hamburgerList.className = 'anim-trans';
    hamburgerList.id = 'nav-sidebar-open';
})
closeHamburger.addEventListener('click', function () {
    hamburgerList.id = 'nav-sidebar-closed';
})

window.onload = function () {
    weather.getWeather()
        .then(data => {
            console.log(data)
            ui.showMultiCity(data)
        })
}

searchBtn.addEventListener('click', function () {
    const userText = searchWeather.value
    weather.getWeather(userText)
        .then(data => {
            ui.showSingleCity(data)
        })
})

searchWeather.addEventListener('keydown', function (e) {
    const userText = e.target.value
    if (userText !== '') {
        weather.getWeather(userText)
            .then(data => {
                if (data.city.cod === '404') {
                    ui.showDefault(data)
                } else {
                    ui.showSingleCity(data)
                }

            })
    }
})


// fahren.addEventListener('click', function (e) {

//     let fahren = {}
//     fahren.unit = 'fahren';
//     fahren.display = 'F';

//     weather.temp_unit = fahren;

// })