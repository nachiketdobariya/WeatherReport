import React from 'react';

interface SearchInputProps {
	city: string;
	setCity: (city: string) => void;
	handleSearch: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
	city,
	setCity,
	handleSearch,
}) => {
	return (
		<div className="mt-4">
			<input
				id="city-input"
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
	);
};

export default SearchInput;
