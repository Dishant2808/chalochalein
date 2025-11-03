'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WiDaySunny, WiRain, WiSnow, WiThunderstorm, WiCloudy } from 'react-icons/wi';
import styles from '../../styles/pages/destination.module.scss'

const WeatherWidget = ({ city, latitude, longitude, apiKey }) => {
    const todayDate = new Date();
    const [weatherData, setWeatherData] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                if (!city) {
                    console.error('Invalid WeatherWidget configuration: City is required.');
                    return;
                }

                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
                const response = await axios.get(apiUrl);

                setWeatherData(response.data);
                setLastUpdated(new Date());
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeather();
    }, [city, latitude, longitude, apiKey]);

    const getWeatherIcon = (weatherCode) => {
        // Map OpenWeatherMap weather codes to corresponding Weather Icons
        switch (weatherCode) {
            case '01d':
                return <WiDaySunny />;
            case '01n':
                return <WiDaySunny />;
            case '02d':
                return <WiCloudy />;
            case '02n':
                return <WiCloudy />;
            case '03d':
            case '03n':
                return <WiCloudy />;
            case '04d':
            case '04n':
                return <WiCloudy />;
            case '09d':
            case '09n':
                return <WiRain />;
            case '10d':
            case '10n':
                return <WiRain />;
            case '11d':
            case '11n':
                return <WiThunderstorm />;
            case '13d':
            case '13n':
                return <WiSnow />;
            default:
                return <WiDaySunny />;
        }
    };
    console.log(weatherData);
    return (
        <div>
            {weatherData && (
                <div className={styles.weather_information}>
                    {/* <h3>Weather Information: </h3> */}
                    <div className={styles.weather_icon}>{getWeatherIcon(weatherData.weather[0].icon)}</div>
                    <h4>{weatherData.name} Weather</h4>
                    {/* <p>{todayDate}</p> */}
                    <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Last Updated: {lastUpdated && lastUpdated.toLocaleString()}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherWidget;