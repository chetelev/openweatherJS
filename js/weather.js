class Weather {
    constructor() {
        this.key = 'bfac2187b0c99dfe4c3d79e029a91092'
        this.celsius = 'metric'
    }

    // Fetching API for multi cities
    async getWeather(metric) {
        const multipleCities = await fetch(`http://api.openweathermap.org/data/2.5/group?id=524901,792680,703448,2643743&units=${metric === undefined ? this.celsius : metric === null ? '' : metric}&appid=${this.key}`)
        const multiCity = await multipleCities.json()
        return {
            multiCity
        }
    }

    // Fetching API for single cities    
    async getSingleWeather(searchCity, metric) {
        const targetCity = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&units=${metric === undefined || metric === 'activeCelsius' ? this.celsius : metric}&appid=${this.key}`)
        const city = await targetCity.json()
        return {
            city
        }
    }
}