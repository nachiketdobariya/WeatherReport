import { useEffect, useState } from 'react';
import { fetchWeatherData } from '@/hooks/fetchWeatherData';
import { WeatherTypes } from '@/types/weather';

export const useWeather = () => {
	const [city, setCity] = useState('');
	const [error, setError] = useState('');

	const [weatherData, setWeatherData] = useState<WeatherTypes | null>(null);
	const [weatherHistory, setWeatherHistory] = useState<WeatherTypes[]>([]);

	const handleSearch = async () => {
		try {
			setError('');
			const data = await fetchWeatherData(city);
			setWeatherData(data);
			setWeatherHistory((prevHistory) => {
				const updatedHistory = [...prevHistory, data];
				localStorage.setItem('WeatherHistory', JSON.stringify(updatedHistory));
				return updatedHistory;
			});
		} catch (err) {
			setError('Could not fetch weather data. Please try again.');
		}
	};

	useEffect(() => {
		const storedWeatherHistory = localStorage.getItem('WeatherHistory');
		if (storedWeatherHistory) {
			setWeatherHistory(JSON.parse(storedWeatherHistory));
		}
	}, []);

	return {
		city,
		setCity,
		error,
		weatherData,
		weatherHistory,
		handleSearch,
	};
};
