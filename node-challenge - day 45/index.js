const axios = require('axios');
const cheerio = require('cheerio');

const URL = 'https://quotes.toscrape.com/';

async function scrapeQuotes() {
  try {
    const { data } = await axios.get(URL);
    const $ = cheerio.load(data);

    const quotes = [];

    $('.quote').each((i, el) => {
      const text = $(el).find('.text').text();
      const author = $(el).find('.author').text();
      quotes.push({ text, author });
    });

    console.log('Scraped Quotes:', quotes);
  } catch (err) {
    console.error('Error fetching data:', err);
  }
}

scrapeQuotes();
