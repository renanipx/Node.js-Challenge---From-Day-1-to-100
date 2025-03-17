// controllers/searchController.js

const searchResults = (req, res) => {
    // Accessing query parameters
    const { keyword, page, limit } = req.query;
  
    // 'keyword' validation (it should not be empty)
    if (keyword && keyword.trim() === '') {
      return res.status(400).json({
        error: 'Invalid keyword. It cannot be an empty string.'
      });
    }
  
    // 'page' validation (it should be a positive integer)
    const pageNum = parseInt(page, 10);
    if (page && (isNaN(pageNum) || pageNum <= 0)) {
      return res.status(400).json({
        error: 'Invalid page. It must be a positive integer.'
      });
    }
  
    // 'limit' validation (it should be a positive integer between 1 and 100)
    const limitNum = parseInt(limit, 10);
    if (limit && (isNaN(limitNum) || limitNum <= 0 || limitNum > 100)) {
      return res.status(400).json({
        error: 'Invalid limit. It must be a positive integer between 1 and 100.'
      });
    }
  
    // Default values if parameters are not provided
    const currentPage = pageNum || 1;
    const currentLimit = limitNum || 10;
  
    // Simulating a search response with dummy data
    res.json({
      message: 'Search results',
      keyword: keyword || 'No keyword provided',
      page: currentPage,
      limit: currentLimit,
      data: [
        // Simulated data response
        { id: 1, title: 'Result 1' },
        { id: 2, title: 'Result 2' },
        { id: 3, title: 'Result 3' },
      ].slice((currentPage - 1) * currentLimit, currentPage * currentLimit),
    });
  };
  
  module.exports = { searchResults };
  