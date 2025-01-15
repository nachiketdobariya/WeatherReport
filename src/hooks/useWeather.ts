import { useState } from 'react';
import { fetchWeatherData } from '@/hooks/fetchWeatherData';
import { WeatherTypes } from '@/types/weather';

export const useWeather = () => {
	const [city, setCity] = useState('');
	const [error, setError] = useState('');

	const [weatherData, setWeatherData] = useState<WeatherTypes | null>(null);

	const handleSearch = async () => {
		try {
			setError('');
			const data = await fetchWeatherData(city);
			setWeatherData(data);
		} catch (err) {
			setError('Could not fetch weather data. Please try again.');
		}
	};
	return {
		city,
		setCity,
		error,
		weatherData,
		handleSearch,
	};
};
