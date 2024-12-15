import React from 'react';

const ResultDisplay = ({ result }) => {
  return (
    <div>
      <h2>Converted Amount:</h2>
      <p>{result ? `${result.toFixed(2)}` : 'Enter values to convert.'}</p>
    </div>
  );
};

export default ResultDisplay;
