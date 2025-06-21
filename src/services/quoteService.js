// quoteService.js - Service to handle quote API requests
import axios from 'axios';

// API endpoint for fetching quotes
const QUOTE_API_URL = 'https://api.quotable.io/random';

// Service object containing quote-related API calls
const quoteService = {
  // Function to fetch a random quote
  getRandomQuote: async () => {
    try {
      // Make API request to get a random quote
      const response = await axios.get(QUOTE_API_URL);
      return response.data;
    } catch (error) {
      // Handle any errors that occur during the API call
      console.error('Error fetching quote:', error);
      return {
        content: 'Failed to fetch quote. Please try again.',
        author: 'Error'
      };
    }
  }
};

export default quoteService;