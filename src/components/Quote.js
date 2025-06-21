// Quote.js - A React component that renders a quote card with author attribution and a refresh button
import React from 'react';
// Import the associated styles for this component
import '../styles/Quote.scss';

// Quote component accepts three props:
// - quote: The text content of the quote to display
// - author: The name of the quote's author
// - onNewQuote: A callback function to fetch and display a new quote
const Quote = ({ quote, author, onNewQuote }) => {
  return (
    // Main container that centers and positions the quote card
    <div className="quote-container">
      {/* Card element that contains the quote, author, and button */}
      <div className="quote-card">
        {/* Blockquote element for semantic markup of the quote text */}
        {/* Wrapped in quotes for visual presentation */}
        <blockquote className="quote-text">
          "{quote}"
        </blockquote>

        {/* Author attribution with fallback to 'Unknown' if no author provided */}
        <p className="quote-author">
          - {author || 'Unknown'}
        </p>

        {/* Interactive button that triggers the onNewQuote callback */}
        {/* When clicked, it will fetch and display a new random quote */}
        <button
          className="new-quote-btn"
          onClick={onNewQuote}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

// Export the component for use in other parts of the application
export default Quote;