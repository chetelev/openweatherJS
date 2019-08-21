class Weather {
    constructor() {
        this.key = 'bfac2187b0c99dfe4c3d79e029a91092'
    }

    async getWeather(searchCity) {
        const multipleCities = await fetch(`http://api.openweathermap.org/data/2.5/group?id=524901,792680,703448,2643743&units=metric&appid=${this.key}`)
        const targetCity = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&units=metric&appid=${this.key}`)
        const multiCity = await multipleCities.json()
        const city = await targetCity.json()

        return {
            multiCity,
            city
        }
    }
}