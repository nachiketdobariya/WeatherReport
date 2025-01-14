'use client';
import { fetchWeatherData } from '@/hooks/fetchWeatherData';
import { useState } from 'react';

type WeatherData = {
	name: string; // City name
	sys: {
		country: string; // Country code
	};
	main: {
		temp: number; // Temperature in Kelvin
	};
	weather: {
		description: string; // Weather condition description
	}[];
};

export default function Home() {
	const [city, setCity] = useState('');
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [error, setError] = useState('');

	const handleSearch = async () => {
		try {
			setError('');
			const data = await fetchWeatherData(city);
			setWeather(data);
		} catch (err) {
			setError('Could not fetch weather data. Please try again.');
		}
	};

	return (
		<div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h1>Weather Report</h1>

				<div className="mt-4">
					<input
						type="text"
						value={city}
						onChange={(e) => setCity(e.target.value)}
						placeholder="Enter city name"
						className="border p-2 rounded"
					/>
					<button
						onClick={handleSearch}
						className="bg-blue-500 text-white p-2 rounded ml-2"
					>
						Search
					</button>
				</div>

				{error && <p className="text-red-500 mt-2">{error}</p>}

				{weather && (
					<div className="mt-4">
						<h2 className="text-xl font-semibold">
							Weather in {weather.name}, {weather.sys.country}
						</h2>
						<p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
						<p className="capitalize">
							Condition: {weather.weather[0].description}
						</p>
					</div>
				)}
			</main>
		</div>
	);
}
