import React, { useState, useEffect } from 'react';

function QuoteDisplay() {
  const quotes = [
    "The greatest threat to our planet is the belief that someone else will save it.",
    "We don’t inherit the earth from our ancestors; we borrow it from our children.",
    "A clean planet is a happy planet!",
    "Act now, save tomorrow."
  ];

  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className="card p-3 mb-4 text-center bg-success text-white">
      <h3>{quote}</h3>
    </div>
  );
}

export default QuoteDisplay;
