// Creating UI Class
class UI {
    
    constructor() {
        this.weather = document.getElementById('row');
    }

    showMultiCity(data) {
        this.weather.innerHTML = ''
        openWeatherTitle.innerHTML = 'OPEN WEATHER'
        countryInit.innerHTML = 'SEARCH FOR CURRENT WEATHER DATA'
        for (let i = 0; i < data.multiCity.cnt; i++) {
            let createDiv = document.createElement('div');
            createDiv.setAttribute('class', 'col-lg-3 col-md-3 mx-auto text-center')
            createDiv.setAttribute('id', 'cities')
            createDiv.innerHTML =
                `   
                <img src="assets/${data.multiCity.list[i].weather[0].icon}.png" id="w-icon">
                <h6 id="w-desc">${data.multiCity.list[i].weather[0].description.toUpperCase()}</h6>
                    <ul id="w-details" class="mx-auto">    
                        <li class="list-group-item" id="w-perception">Perception: ${data.multiCity.list[i].clouds.all}%</li>
                        <li class="list-group-item" id="w-humidity">Humidity: ${data.multiCity.list[i].main.humidity}%</li>
                        <li class="list-group-item" id="w-wind">Wind: ${data.multiCity.list[i].wind.speed} km/h</li>
                    </ul>
                <h3 id="w-temp">${Math.floor(data.multiCity.list[i].main.temp)}&deg;C</h3>
                <h5 id="w-location">${data.multiCity.list[i].name.toUpperCase()},${data.multiCity.list[i].sys.country}</h5>
        `
            this.weather.appendChild(createDiv)
        }
    }

    showSingleCity(data, metric) {
        let dateConvertor
        let date = new Date;
        var days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
        weatherInfo.innerHTML = `CURRENT WEATHER TODAY, ${days[date.getDay()]}, ${date.getHours()}:${date.getMinutes()}`;
        if (data.city.cod == 200) {
            openWeatherTitle.innerHTML = data.city.city.name;
            countryInit.innerHTML = data.city.city.country;
        }
        row.innerHTML =
            `
            <div class="col-md-4 col-sm-2" id="currentCityWeatherImg">
            <img src="assets/${data.city.list[0].weather[0].icon}.png" id="w-icon">
            </div>
            <div class="col-md-4 pt-3" id="currentCityWeatherInfo">
                <div class="row">
                    <div class="col-md-12 col-sm-6" id="currentTempMinMax"> 
                        <h3 class="pr-3">${Math.floor(data.city.list[0].main.temp)}&deg;${metric === 'kelvin' ? 'K' : metric ==='imperial' ? 'F' : 'C'}</h3>
                        <span class="d-block ml-3 ">max ${Math.floor(data.city.list[0].main.temp_max)}&deg;</span>
                        <span class="d-block ml-3 ">min ${Math.floor(data.city.list[0].main.temp_min)}&deg;</span>
                    </div>
                     <div class="col-md-12 col-sm-6" id="currentDescInfo">
                        <h6 id="w-desc">${data.city.list[0].weather[0].description.toUpperCase()}</h6>
                            <ul id="w-details" class="list-group">    
                                <li class="list-group-item">Perception: ${data.city.list[0].clouds.all}%</li>
                                <li class="list-group-item">Humidity: ${data.city.list[0].main.humidity}%</li>
                                <li class="list-group-item">Wind: ${data.city.list[0].wind.speed} km/h</li>
                            </ul>
                    </div>             
                </div>
             </div>
            </div>

            <div class="col-md-4" id="currentCityForecast">

                <div class="row m-3" id="dayOne">
                        <div class="col-md-2 dayOneImgDiv"> 
                            <img src="assets/${data.city.list[8].weather[0].icon}.png">
                        </div>
                        <div class="col-md-6 ml-1">
                            <h6 class="m-0 pb-2">${days[dateConvertor = new Date(data.city.list[8].dt * 1000).getDay()]}</h6>
                            <span id="dayOneMax">${Math.floor(data.city.list[8].main.temp_max)}&deg</span>
                            <span id="dayOneMin">${Math.floor(data.city.list[4].main.temp_min)}&deg</span>
                        </div>
                </div>

                <div class="row  m-3" id="dayTwo">
                        <div class="col-md-2 dayOneImgDiv"> 
                            <img src="assets/${data.city.list[16].weather[0].icon}.png" class="">
                        </div>
                        <div class="col-md-6 ml-1">
                            <h6 class="m-0 pb-1">${days[dateConvertor = new Date(data.city.list[16].dt * 1000).getDay()]}</h6>
                            <span id="dayOneMax">${Math.floor(data.city.list[16].main.temp_max)}&deg</span>
                            <span id="dayOneMin">${Math.floor(data.city.list[12].main.temp_min)}&deg</span> 
                        </div>
                 </div> 

                 <div class="row  m-3" id="dayThree">      
                        <div class="col-md-2 dayOneImgDiv"> 
                            <img src="assets/${data.city.list[24].weather[0].icon}.png" class="">
                        </div>
                        <div class="col-md-6 ml-1"> 
                            <h6 class="m-0 pb-1">${days[dateConvertor = new Date(data.city.list[24].dt * 1000).getDay()]}</h6>
                            <span id="dayOneMax">${Math.floor(data.city.list[24].main.temp_max)}&deg</span>
                            <span id="dayOneMin">${Math.floor(data.city.list[20].main.temp_min)}&deg</span>
                        </div>
                 </div> 
            </div>
        `
    }

    showDefault(data) {
        this.weather.innerHTML = ''
        openWeatherTitle.innerHTML = 'OPEN WEATHER'
        countryInit.innerHTML = 'SEARCH FOR CURRENT WEATHER DATA'
        for (let i = 0; i < data.multiCity.cnt; i++) {
            let createDiv = document.createElement('div');
            createDiv.setAttribute('class', 'col-lg-3 mx-auto text-center')
            createDiv.setAttribute('id', 'cities')
            createDiv.innerHTML =
                `   
                <img src="assets/${data.multiCity.list[i].weather[0].icon}.png" id="w-icon">
                <h6 id="w-desc">${data.multiCity.list[i].weather[0].description.toUpperCase()}</h6>
                    <ul id="w-details" class="mx-auto">    
                        <li class="list-group-item" id="w-perception">Perception: ${data.multiCity.list[i].clouds.all}%</li>
                        <li class="list-group-item" id="w-humidity">Humidity: ${data.multiCity.list[i].main.humidity}%</li>
                        <li class="list-group-item" id="w-wind">Wind: ${data.multiCity.list[i].wind.speed} km/h</li>
                    </ul>
                <h3 id="w-temp">${Math.floor(data.multiCity.list[i].main.temp)}&deg;C</h3>
                <h5 id="w-location">${data.multiCity.list[i].name.toUpperCase()},${data.multiCity.list[i].sys.country}</h5>
        `
            this.weather.appendChild(createDiv)
        }
    }

    showMultiCityFahren(data) {
        this.weather.innerHTML = ''
        openWeatherTitle.innerHTML = 'OPEN WEATHER'
        countryInit.innerHTML = 'SEARCH FOR CURRENT WEATHER DATA'
        for (let i = 0; i < data.multiCity.cnt; i++) {
            let createDiv = document.createElement('div');
            createDiv.setAttribute('class', 'col-lg-3 col-md-3 mx-auto text-center')
            createDiv.setAttribute('id', 'cities')
            createDiv.innerHTML =
                `   
                <img src="assets/${data.multiCity.list[i].weather[0].icon}.png" id="w-icon">
                <h6 id="w-desc">${data.multiCity.list[i].weather[0].description.toUpperCase()}</h6>
                    <ul id="w-details" class="mx-auto">    
                        <li class="list-group-item" id="w-perception">Perception: ${data.multiCity.list[i].clouds.all}%</li>
                        <li class="list-group-item" id="w-humidity">Humidity: ${data.multiCity.list[i].main.humidity}%</li>
                        <li class="list-group-item" id="w-wind">Wind: ${data.multiCity.list[i].wind.speed} m/s</li>
                    </ul>
                <h3 id="w-temp">${Math.floor(data.multiCity.list[i].main.temp)}&deg;F</h3>
                <h5 id="w-location">${data.multiCity.list[i].name.toUpperCase()},${data.multiCity.list[i].sys.country}</h5>
        `
            this.weather.appendChild(createDiv)
        }
    }

    showMultiCityKelvin(data) {
        this.weather.innerHTML = ''
        openWeatherTitle.innerHTML = 'OPEN WEATHER'
        countryInit.innerHTML = 'SEARCH FOR CURRENT WEATHER DATA'
        for (let i = 0; i < data.multiCityKelvin.cnt; i++) {
            let createDiv = document.createElement('div');
            createDiv.setAttribute('class', 'col-lg-3 col-md-3 mx-auto text-center')
            createDiv.setAttribute('id', 'cities')
            createDiv.innerHTML =
                `   
                <img src="assets/${data.multiCityKelvin.list[i].weather[0].icon}.png" id="w-icon">
                <h6 id="w-desc">${data.multiCityKelvin.list[i].weather[0].description.toUpperCase()}</h6>
                    <ul id="w-details" class="mx-auto">    
                        <li class="list-group-item" id="w-perception">Perception: ${data.multiCityKelvin.list[i].clouds.all}%</li>
                        <li class="list-group-item" id="w-humidity">Humidity: ${data.multiCityKelvin.list[i].main.humidity}%</li>
                        <li class="list-group-item" id="w-wind">Wind: ${data.multiCityKelvin.list[i].wind.speed} km/h</li>
                    </ul>
                <h3 id="w-temp">${Math.floor(data.multiCityKelvin.list[i].main.temp)}&deg;K</h3>
                <h5 id="w-location">${data.multiCityKelvin.list[i].name.toUpperCase()},${data.multiCityKelvin.list[i].sys.country}</h5>
        `
            this.weather.appendChild(createDiv)
        }
    }


}