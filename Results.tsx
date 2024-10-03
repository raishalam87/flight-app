// src/components/Results.tsx
import React from 'react';

const Results: React.FC<{ results: string }> = ({ results }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Flight Results</h2>
            <p>{results || 'No results to display.'}</p>
        </div>
    );
};

export default Results;
