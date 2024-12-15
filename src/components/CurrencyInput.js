import React from 'react';

const CurrencyInput = ({ amount, currency, onAmountChange, onCurrencyChange, currencies }) => {
  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
        placeholder="Enter amount"
      />
      <select value={currency} onChange={(e) => onCurrencyChange(e.target.value)}>
        {currencies.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
