import React, { useState, useEffect } from 'react';
import Quote from './components/Quote';
import quoteService from './services/quoteService';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  // State variables using React's useState hook:
  // quote: stores the current quote text
  // author: stores the quote's author
  // background: stores the URL for the background image
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [background, setBackground] = useState('');
  const [isLoading, setIsLoading] = useState(true);

// Define a function that takes a URL of an image and preloads it
const preloadImage = (url) => {
  // Return a new Promise so the caller can wait until the image finishes loading
  return new Promise((resolve) => {
    // Create a new Image object (this doesn't show it in the UI, just loads it in memory)
    const img = new Image();

    // When the image has finished loading successfully, resolve the Promise
    img.onload = () => resolve();

    // Start loading the image by assigning the URL to the src property
    img.src = url;
  });
};

  // Function to fetch a new random quote and update the background
  const fetchNewQuote = async () => {
    setIsLoading(true);
    try {
      // Call the quoteService to get a random quote from the API
      const newQuote = await quoteService.getRandomQuote();
      // Update the quote and author state with the new values
      setQuote(newQuote.content);
      setAuthor(newQuote.author);

      // Generate a random number between 1 and 200 for the background image
      const randomNumber = Math.floor(Math.random() * 200) + 1;
      // Create the background URL
      const backgroundUrl = `https://picsum.photos/id/${randomNumber}/1920/1080`;

      // Preload the image before showing content
      await preloadImage(backgroundUrl);
      setBackground(backgroundUrl);
    } catch (error) {
      console.error('Error loading quote or background:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect hook runs when the component first mounts
  // The empty dependency array [] means this only runs once on mount
  useEffect(() => {
    fetchNewQuote();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    // Main app container with dynamic background image
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        {/* Quote component that displays the quote, author, and new quote button */}
        <Quote
          quote={quote}
          author={author}
          onNewQuote={fetchNewQuote} // Pass the fetch function as a prop to allow getting new quotes
        />
      </div>
    </div>
  );
}

export default App;
