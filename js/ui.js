// Creating UI Class
class UI {

    constructor() {
        this.weather = document.getElementById('row');
    }

    showMultiCity(data, metric) {
        this.weather.innerHTML = ''
        openWeatherTitle.innerHTML = 'OPEN WEATHER'
        countryInit.innerHTML = 'SEARCH FOR CURRENT WEATHER DATA'
        for (let i = 0; i < data.multiCity.cnt; i++) {
            let createDiv = document.createElement('div');
            createDiv.setAttribute('class', 'col-lg-3 col-md-3 mx-auto text-center')
            createDiv.setAttribute('id', 'cities')
            createDiv.innerHTML =
                `   
                <img src="assets/${data.multiCity.list[i].weather[0].icon}.png" class="img-fluid" id="w-icon">
                <h6 id="w-desc">${data.multiCity.list[i].weather[0].description.toUpperCase()}</h6>
                    <ul id="w-details" class="mx-auto">    
                        <li class="list-group-item" id="w-perception">Perception: ${data.multiCity.list[i].clouds.all}%</li>
                        <li class="list-group-item" id="w-humidity">Humidity: ${data.multiCity.list[i].main.humidity}%</li>
                        <li class="list-group-item" id="w-wind">Wind: ${data.multiCity.list[i].wind.speed} km/h</li>
                    </ul>
                <h3 id="w-temp">${Math.floor(data.multiCity.list[i].main.temp)}&deg;${metric === 'kelvin' ? 'K' : metric ==='imperial' ? 'F' : 'C'}</h3>
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
            <div class="col-lg-4 col-md-3 col-sm-2 d-flex justify-content-center" id="currentCityWeatherImg">
            <img src="assets/${data.city.list[0].weather[0].icon}.png" class="img-fluid">
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6" id="currentCityWeatherInfo"> 
                <div class="row align-items-center">
                    <div class="col-md-8 col-sm-6" id="currentTempMinMax"> 
                        <h3 class="display-6">${Math.floor(data.city.list[0].main.temp)}&deg;${metric === 'kelvin' ? 'K' : metric ==='imperial' ? 'F' : 'C'}</h3>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <p class="mb-0">max ${Math.floor(data.city.list[0].main.temp_max)}&deg;</p>
                        <p class="">min ${Math.floor(data.city.list[0].main.temp_min)}&deg;</p>
                    </div>       
                </div>
                <div class="row">
                        <div class="col-md-6 col-sm-6" id="currentDescInfo">
                            <h6 class="metricStyle">${data.city.list[0].weather[0].description.toUpperCase()}</h6>
                            <ul class="list-group infoStyle">    
                                <li class="list-group-item">Perception: ${data.city.list[0].clouds.all}%</li>
                                <li class="list-group-item">Humidity: ${data.city.list[0].main.humidity}%</li>
                                <li class="list-group-item">Wind: ${data.city.list[0].wind.speed} km/h</li>
                            </ul>
                      </div>    
                    <div class="col-md-4 col-sm-4"> 

                    </div>
                </div>

             </div>
            </div>

            <div class="col-lg-4 col-md-3 col-sm-4" id="currentCityForecast">
                <div class="row align-items-center" id="dayOne">
                        <div class="col-md-4 col-sm-4 dayOneImgDiv"> 
                            <img src="assets/${data.city.list[8].weather[0].icon}.png" class="img-fluid">
                        </div>
                        <div class="col-md-8 col-sm-8">
                            <h6 class="">${days[dateConvertor = new Date(data.city.list[8].dt * 1000).getDay()]}</h6>
                            <span id="dayOneMax">${Math.floor(data.city.list[8].main.temp_max)}&deg</span>
                            <span id="dayOneMin">${Math.floor(data.city.list[4].main.temp_min)}&deg</span>
                        </div>
                </div>

                <div class="row align-items-center" id="dayTwo">
                        <div class="col-md-4 col-sm-4 dayOneImgDiv"> 
                            <img src="assets/${data.city.list[16].weather[0].icon}.png" class="img-fluid">
                        </div>
                        <div class="col-md-8 col-sm-8">
                            <h6 class="">${days[dateConvertor = new Date(data.city.list[16].dt * 1000).getDay()]}</h6>
                            <span id="dayOneMax">${Math.floor(data.city.list[16].main.temp_max)}&deg</span>
                            <span id="dayOneMin">${Math.floor(data.city.list[12].main.temp_min)}&deg</span> 
                        </div>
                 </div> 

                 <div class="row align-items-center" id="dayThree">      
                        <div class="col-md-4 col-sm-4 dayOneImgDiv"> 
                            <img src="assets/${data.city.list[24].weather[0].icon}.png" class="img-fluid">
                        </div>
                        <div class="col-md-8 col-sm-8"> 
                            <h6 class="m-0">${days[dateConvertor = new Date(data.city.list[24].dt * 1000).getDay()]}</h6>
                            <span id="dayOneMax">${Math.floor(data.city.list[24].main.temp_max)}&deg</span>
                            <span id="dayOneMin">${Math.floor(data.city.list[20].main.temp_min)}&deg</span>
                        </div>
                 </div> 
            </div>
        `
    }

}