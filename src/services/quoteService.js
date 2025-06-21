// quoteService.js - Service to handle quote API requests
import axios from 'axios';

// API endpoint and API key
const QUOTE_API_URL = 'https://api.api-ninjas.com/v1/quotes';
const API_KEY = '7BtVE7lBAJ4pk75JG0xXFQ==CN7Zp4w1bLE3zm1y';

// Service object containing quote-related API calls
const quoteService = {
  // Function to fetch a random quote
  getRandomQuote: async () => {
    try {
      const response = await axios.get(QUOTE_API_URL, {
        headers: { 'X-Api-Key': API_KEY },
        // Optional: specify content type if needed
        // headers: { 'X-Api-Key': API_KEY, 'Content-Type': 'application/json' }
      });
      console.log(response);
      // API Ninjas returns an array of quote objects
      if (response.data && response.data.length > 0) {
        return {
          content: response.data[0].quote,
          author: response.data[0].author
        };
      }

      // Fallback if no quote is received
      return {
        content: 'No quote available.',
        author: 'Unknown'
      };

    } catch (error) {
      console.error('Error fetching quote:', error);
      return {
        content: 'Failed to fetch quote. Please try again.',
        author: 'Error'
      };
    }
  }
};

export default quoteService;
