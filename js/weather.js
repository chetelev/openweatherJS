class Weather {
    constructor() {
        this.key = 'b1cbd2549e4f7f5e852719b6c3e27b81'
        this.celsius = 'metric'
    }

    // Fetching API for multi cities
    async getWeather(metric) {
        const multipleCities = await fetch(`http://api.openweathermap.org/data/2.5/group?id=524901,792680,703448,2643743&units=${metric === undefined ? this.celsius : metric === null ? '' : metric}&APPID=${this.key}`)
        const multiCity = await multipleCities.json()
        return {
            multiCity
        }
    }

    // Fetching API for single cities    
    async getSingleWeather(searchCity, metric) {
        const targetCity = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&units=${metric === undefined || metric === 'activeCelsius' ? this.celsius : metric}&APPID=${this.key}`)
        const city = await targetCity.json()
        return {
            city
        }
    }
}