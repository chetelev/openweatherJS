const hamburgerDropdown = document.querySelector('#hamburgerIcon');
const hamburgerList = document.querySelector('#nav-sidebar-closed')
const closeHamburger = document.querySelector('#closeHamburger')
const searchWeather = document.querySelector('#searchWeather')
const weatherDesc = document.querySelector('#w-desc')
const weatherTemp = document.querySelector('#w-temp')
const weatherLocation = document.querySelector('#w-location')
const weatherPerception = document.querySelector('#w-perception')
const weatherHumidity = document.querySelector('#w-humidity')
const weatherWind = document.querySelector('#w-wind')
const weatherIcon = document.querySelector('#w-icon')
let row = document.querySelector('#row')

hamburgerDropdown.addEventListener('click', function () {
    hamburgerList.className = 'anim-trans';
    hamburgerList.id = 'nav-sidebar-open';
})
closeHamburger.addEventListener('click', function () {
    hamburgerList.id = 'nav-sidebar-closed';
})

function citiesLanding() {
    var key = 'bfac2187b0c99dfe4c3d79e029a91092';
    fetch(`http://api.openweathermap.org/data/2.5/group?id=524901,5222866,703448,2643743&units=metric&appid=${key}`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data)
            for (let i = 0; i < data.cnt; i++) {
                let createDiv = document.createElement('div');
                createDiv.setAttribute('class', 'col-lg-3 mx-auto text-center')
                createDiv.innerHTML = `   
                    <img src="assets/${data.list[i].weather[0].icon}.png" id="w-icon">
                    <h6 id="w-desc">${data.list[i].weather[0].description.toUpperCase()}</h6>
                         <ul id="w-details" class="mx-auto">    
                             <li class="list-group-item" id="w-perception">Perception: ${data.list[i].clouds.all}%</li>
                             <li class="list-group-item" id="w-humidity">Humidity: ${data.list[i].main.humidity}%</li>
                              <li class="list-group-item" id="w-wind">Wind: ${data.list[i].wind.speed} km/h</li>
                        </ul>
                    <h3 id="w-temp">${Math.floor(data.list[i].main.temp)}&deg;C</h3>
                 <h5 id="w-location">${data.list[i].name.toUpperCase()},${data.list[i].sys.country}</h5>
                `
                row.appendChild(createDiv)
            }
        })
        .catch(function (err) {
            console.log(err)
        });
}

window.onload = function () {
    citiesLanding();
}


// TODO 1.add animation to hamburger / 3. language box scrollbar design /