'use client';
import ErrorMessage from '@/components/ErrorMessage';
import SearchInput from '@/components/SearchInput';
import WeatherData from '@/components/WeatherData';
import WeatherTable from '@/components/WeatherTable';
import { useWeather } from '@/hooks/useWeather';

export default function Home() {
	const { city, setCity, error, weatherData, weatherHistory, handleSearch } =
		useWeather();

	return (
		<div className="items-center justify-items-center min-h-screen p-8 sm:p-16">
			<main className="flex flex-col gap-8 items-center">
				<h1>Weather Report</h1>

				<SearchInput
					city={city}
					setCity={setCity}
					handleSearch={handleSearch}
				/>

				<ErrorMessage message={error} />

				<WeatherData data={weatherData} />

				<WeatherTable weatherHistory={weatherHistory} />
			</main>
		</div>
	);
}
