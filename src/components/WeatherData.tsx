import { WeatherTypes } from '@/types/weather';
import Image from 'next/image';

type WeatherDataProps = {
	data: WeatherTypes | null;
};

const WeatherData = ({ data }: WeatherDataProps) => {
	if (!data) {
		return null;
	}

	const { name, sys, main, weather } = data;
	const { description, icon } = weather[0];

	const iconUrl = process.env.NEXT_PUBLIC_API_ICON_URL; // Access the icon URL

	const queryURL = `${iconUrl}/${icon}@2x.png`;

	return (
		<div className="flex flex-col items-center">
			<h2 className="text-xl font-semibold">
				Weather in {name}, {sys.country}
			</h2>
			<Image
				width={64}
				height={64}
				src={queryURL}
				alt={description}
				loading="lazy"
			/>
			<p>Temperature: {(main.temp - 273.15).toFixed(2)}°C</p>
			<p className="capitalize">Condition: {weather[0].description}</p>
		</div>
	);
};

export default WeatherData;
