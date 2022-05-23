const Utils = {
  filters: {
    /**
     * Removes the html tags from the string
     * (Didn't use the v-html for security purposes)
     */
    strippedContent: function (string) {
      return string.replace(/<\/?[^>]+>/gi, ' ');
    },
  },
  methods: {
    /**
     * Get the image source of the tv show
     * @param {Object} tvShow
     * @returns {String}
     */
    getImageSource(tvShow) {
      const noImageURL = 'no-image-available.webp';
      return tvShow.show.image?.medium || noImageURL;
    },

    /**
     * Get the rating of the tv show
     * @param {Object} tvShow
     * @returns {String}
     */
    getTVShowRating(tvShow) {
      const noRating = 'No rating yet';
      return tvShow.show.rating?.average || noRating;
    },
  },
};

export default Utils;
