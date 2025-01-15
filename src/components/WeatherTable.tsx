import React from 'react';
import { WeatherTypes } from '@/types/weather';
import Image from 'next/image';

type WeatherTableProps = {
	weatherHistory: WeatherTypes[];
};

const iconUrl = process.env.NEXT_PUBLIC_API_ICON_URL; // Access the icon URL

const WeatherTable = ({ weatherHistory }: WeatherTableProps) => {
	if (weatherHistory.length === 0) {
		return null;
	}

	return (
		<table className="mt-5">
			<thead>
				<tr>
					<th></th>
					<th>City</th>
					<th>Temperature (°C)</th>
					<th>Humidity (%)</th>
					<th>Wind Speed (m/s)</th>
					<th>Description</th>
					<th>Icon</th>
				</tr>
			</thead>
			<tbody>
				{weatherHistory.map((data, index) => {
					const { name, sys, main, wind, weather } = data;

					const queryURL = `${iconUrl}/${weather[0].icon}.png`;

					return (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{`${name}, ${sys.country}`}</td>
							<td>{(main.temp - 273.15).toFixed(2)}</td>
							<td>{main.humidity}</td>
							<td>{wind.speed}</td>
							<td className="capitalize">{weather[0].description}</td>
							<td>
								<Image
									src={queryURL}
									alt={weather[0].description}
									loading="lazy"
								/>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default WeatherTable;
