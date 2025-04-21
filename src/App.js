import React, { useState, useEffect } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackChart from './components/FeedbackChart';
import FeedbackAnalysis from './components/FeedbackAnalysis';

function App() {
  const [feedback, setFeedback] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Apply theme and store it
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Show loading when feedback is full
  useEffect(() => {
    if (feedback.length === 5) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  return (
    <div className="App">
      <h1>Feedback Analyzer</h1>

      {/* 🌙 Emoji Theme Toggle */}
      <div className="toggle-wrapper">
        <label className="theme-toggle">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider">
            {darkMode ? '🌙' : '☀️'}
          </span>
        </label>
      </div>

      <FeedbackForm onSubmit={setFeedback} />

      {loading && <div className="loader"></div>}

      {!loading && feedback.length === 5 && (
        <>
          <div className="chart-container">
            <FeedbackChart data={feedback} />
          </div>
          <FeedbackAnalysis data={feedback} />
        </>
      )}
    </div>
  );
}

export default App;
