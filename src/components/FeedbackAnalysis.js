import React from 'react';

const FeedbackAnalysis = ({ data }) => {
  const average = (data.reduce((a, b) => a + b, 0) / data.length).toFixed(2);
  const trend = data[4] > data[0] ? 'Increasing' : 'Decreasing/Flat';

  return (
    <div>
      <h3>Analysis Summary</h3>
      <p><strong>Average Score:</strong> {average}</p>
      <p><strong>Trend:</strong> {trend}</p>
    </div>
  );
};

export default FeedbackAnalysis;
