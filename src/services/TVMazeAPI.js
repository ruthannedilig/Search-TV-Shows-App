const TVMazeAPI = {
  /**
   * Search TV shows via TVMaze API
   * @param {String} searchParameter
   * @returns {Object} movies
   */
  async searchTVShows(searchParameter) {
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchParameter}`);
      const movies = await response.json();
      return movies;
    } catch (error) {
      console.error('Error in searchTVShows', error);
      return null;
    }
  },
};

export default TVMazeAPI;
