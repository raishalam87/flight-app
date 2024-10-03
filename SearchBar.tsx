// src/components/SearchBar.tsx
import React, { useState } from 'react';
import { airports } from '../data/airports';

const SearchBar: React.FC<{ onSearch: (departure: string, arrival: string) => void }> = ({ onSearch }) => {
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');

    const handleSearch = () => {
        onSearch(departure, arrival);
    };

    return (
        <div className="flex flex-col space-y-4 p-4">
            <h2 className="text-xl font-bold">Search Flights</h2>
            <div className="flex space-x-4">
                <select 
                    onChange={(e) => setDeparture(e.target.value)} 
                    value={departure} 
                    className="border p-2 rounded"
                >
                    <option value="" disabled>Select Departure Airport</option>
                    {airports.map((airport) => (
                        <option key={airport.code} value={airport.code}>
                            {airport.name} ({airport.code})
                        </option>
                    ))}
                </select>
                <select 
                    onChange={(e) => setArrival(e.target.value)} 
                    value={arrival} 
                    className="border p-2 rounded"
                >
                    <option value="" disabled>Select Arrival Airport</option>
                    {airports.map((airport) => (
                        <option key={airport.code} value={airport.code}>
                            {airport.name} ({airport.code})
                        </option>
                    ))}
                </select>
            </div>
            <button 
                onClick={handleSearch} 
                 className="bg-blue-500 text-white w-[200px] p-2 rounded hover:bg-blue-600"
            >
                Search Flights
            </button>
        </div>
    );
};

export default SearchBar;
