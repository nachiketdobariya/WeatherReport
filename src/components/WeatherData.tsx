import { WeatherTypes } from '@/types/weather';
import React from 'react';

type WeatherDataProps = {
	data: WeatherTypes;
};

const WeatherData = ({ data }: WeatherDataProps) => {
	const { name, sys, main, weather } = data;
	const { description, icon } = weather[0];

	const iconUrl = process.env.NEXT_PUBLIC_API_ICON_URL; // Access the icon URL

	const queryURL = `${iconUrl}/${icon}@2x.png`;

	return (
		<div className="mt-4">
			<h2 className="text-xl font-semibold">
				Weather in {name}, {sys.country}
			</h2>
			<img src={queryURL} alt={description} />
			<p>Temperature: {(main.temp - 273.15).toFixed(2)}°C</p>
			<p className="capitalize">Condition: {weather[0].description}</p>
		</div>
	);
};

export default WeatherData;
