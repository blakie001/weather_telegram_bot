import axios from "axios";

export const fetchWeather = async (location) => {

    try {
        // console.log(`fetching ${location}`);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.WEATHER_API_KEY}`;

        const response = await axios.get(url);
        const data = response.data;

        return {
            temp: data.main.temp,
            humidity: data.main.humidity
        }

    } catch (error) {
        if (error.response.status === 404) {
            const invalidLocation = new Error("Location Not Found");
            invalidLocation.status = 404;
            throw invalidLocation;
        }
        console.log("Error Fetching Weather", error);
    }

}