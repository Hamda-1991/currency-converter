import React, { useState, useEffect } from 'react';
import CurrencyInput from './components/CurrencyInput';
import ResultDisplay from './components/ResultDisplay';
import Header from './components/Header';

const App = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [conversionRate, setConversionRate] = useState(0);
  const [result, setResult] = useState(0);

  const currencies = ['USD', 'EUR', 'GBP', 'INR', 'JPY'];

  useEffect(() => {
    // Simulate fetching conversion rates (e.g., via an API like exchange-rates.io)
    const rates = {
      USD: { EUR: 0.85, GBP: 0.75, INR: 75, JPY: 110 },
      EUR: { USD: 1.18, GBP: 0.88, INR: 88, JPY: 130 },
      // Add more rates as needed
    };

    const rate = rates[fromCurrency]?.[toCurrency] || 1;
    setConversionRate(rate);
    setResult(amount * rate);
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div>
      <Header />
      <CurrencyInput
        amount={amount}
        currency={fromCurrency}
        onAmountChange={setAmount}
        onCurrencyChange={setFromCurrency}
        currencies={currencies}
      />
      <CurrencyInput
        amount={result.toFixed(2)}
        currency={toCurrency}
        onAmountChange={() => {}}
        onCurrencyChange={setToCurrency}
        currencies={currencies}
      />
      <ResultDisplay result={result} />
    </div>
  );
};

export default App;
