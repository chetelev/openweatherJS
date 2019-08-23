// Init Weather class
const weather = new Weather

// Init UI class
const ui = new UI

// Collecting elements from html
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
const row = document.querySelector('#row')
let metric = document.querySelector('#metricListener')
let metricMobile = document.querySelector('#metricListenerMobile')
let metricTypeGlobal = 'activeCelsius';

//Getting the metric global
metric.addEventListener('click', function (e) {
    metricTypeGlobal = e.target.id
});

// Getting the metric global for mobile
metricMobile.addEventListener('click', function (e) {
    let output = '';
    metricTypeGlobal = e.target.id
    if (metricTypeGlobal === 'kelvinMobile') {
        output += 'kelvin'
    } else if (metricTypeGlobal === 'imperialMobile') {
        output += 'imperial'
    } else {
        output += 'activeCelsius'
    }
    metricTypeGlobal = output;
    searchWeather.value = ''
    listCities(metricTypeGlobal)
    hamburgerList.id = 'nav-sidebar-closed';
});

// Hamburger button class trigger
hamburgerDropdown.addEventListener('click', function () {
    hamburgerList.id = 'nav-sidebar-open';
})

// Hamburger button class trigger
closeHamburger.addEventListener('click', function () {
    hamburgerList.id = 'nav-sidebar-closed';
})

// On page load show cities
window.onload = function () {
    weather.getWeather()
        .then(data => {
            ui.showMultiCity(data)
        })
}

// Button event listener calling input search city
searchBtn.addEventListener('click', function () {
    singleCity(metricTypeGlobal)
})

// Event listener for metric changer and adding and removing style classes
metric.addEventListener('click', function (e) {
    let metricChanger = document.querySelectorAll("#metricListener li a")
    metricChanger.forEach(function (x) {
        x.classList.remove('activeMetric')
    })
    e.target.classList.add('activeMetric')
    listCities(e.target.id)
    searchWeather.value = ''
})

// List the cities in specific metric type
function listCities(metricType) {
    if (metricType == 'activeCelsius') {
        weather.getWeather()
            .then(data => {
                ui.showMultiCity(data)
            })
    } else if (metricType == 'imperial') {
        weather.getWeather('imperial')
            .then(data => {
                ui.showMultiCityFahren(data)
            })
    } else {
        weather.getWeather()
            .then(data => {
                ui.showMultiCityKelvin(data)
            })
    }
}

// List singleCity with specific metric type
function singleCity(metricTypeGlobal) {
    const userText = searchWeather.value
    weather.getSingleWeather(userText, metricTypeGlobal)
        .then(data => {
            ui.showSingleCity(data, metricTypeGlobal)
        }).catch(error => {
            $('#modal').modal('show')


        })
    searchWeather.value = ''
}

// Input keyCode enter functionality
searchWeather.addEventListener('keyup', function (e) {
    console.log(e.keyCode)

    if (e.keyCode === 13) {
        singleCity(metricTypeGlobal)
    }
})


/*  // keyboard press functionality, search city on evry keyup
searchWeather.addEventListener('keyup', function (e) {
    const userText = e.target.value
    if (userText !== '') {
        weather.getSingleWeather(userText)
            .then(data => {
                if (data.city.cod === '404') {
                    weather.getWeather()
                        .then(data => {
                            ui.showDefault(data)
                        })
                } else {
                    ui.showSingleCity(data)
                }

            })
    }
})  
*/ 