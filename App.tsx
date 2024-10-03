// src/App.tsx
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

const App: React.FC = () => {
    const [searchResults, setSearchResults] = useState<string>('');

    const handleSearch = (departure: string, arrival: string) => {
        setSearchResults(`Searching from ${departure} to ${arrival}`);
        // Here you can implement actual search logic
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center mt-6">Good afternoon Brian</h1>
            <SearchBar onSearch={handleSearch} />
            <Results results={searchResults} />
        </div>
    );
};

export default App;
