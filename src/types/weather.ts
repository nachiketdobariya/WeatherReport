export type WeatherTypes = {
	name: string; // City name
	sys: {
		country: string; // Country code
	};
	main: {
		temp: number; // Temperature in Kelvin
		humidity: number; // humidity in %
	};
	wind: {
		speed: number; // Wind speed in meter/sec
	};
	weather: {
		description: string; // Weather condition description
		icon: string; // Weather icon ID
	}[];
};
