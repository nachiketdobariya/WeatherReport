export const fetchWeatherData = async (city: string) => {
	const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL; // Access the base URL
	const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY; // Access the API key

	try {
		const queryURL = `${baseUrl}/weather?q=${city}&appid=${apiKey}`;
		const response = await fetch(queryURL);
		if (!response.ok) {
			throw new Error('Failed to fetch weather data');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching weather data:', error);
		throw error;
	}
};
