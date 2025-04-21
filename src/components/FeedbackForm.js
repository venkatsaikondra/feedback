import React, { useState } from 'react';

const FeedbackForm = ({ onSubmit }) => {
  const [values, setValues] = useState(['', '', '', '', '']);

  const handleChange = (index, event) => {
    const newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values.map(Number));
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Enter Last 5 Feedback Scores (0-10)</h2>
      {values.map((val, i) => (
        <input
          key={i}
          type="number"
          value={val}
          onChange={(e) => handleChange(i, e)}
          min="0"
          max="10"
          required
        />
      ))}
      <button type="submit">Analyze</button>
    </form>
  );
};

export default FeedbackForm;
