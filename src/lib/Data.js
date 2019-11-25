import axios from 'axios';

/**
 * A helper class to fetch, parse, and modify data.
 *
 * @class
 */
export class Data {
  /**
   * Create Data helper.
   *
   * @param {string} apiKey - Key for fetching image-data from api
   * @param {string[]} defaultQueries - Defaul query strings 
   */
  constructor(apiKey, defaultQueries) {
    this.apiKey = apiKey;
    this.defaultQueries = defaultQueries;
    this.queryFound = false;
  }

  /**
   * Searches api for image-data
   *
   * @async
   * @param {string} query - Type of images to search for
   * @return {array} Array of JSON image-data
   */
  async search(query) {
    try {
      return await 
        axios.get(`https://api.flickr.com/services/rest/?
          method=flickr.photos.search&
          api_key=${this.apiKey}&
          tags=${query}&
          per_page=24&
          format=json&
          nojsoncallback=1`
        );
    } catch(err) {
      return err;
    }
  }

  /**
   * Checks that a query is valid pertaining to default routes, or for specific searching
   *
   * @param {string} query - Type of images to search for (in defaultQueries or specific search)
   * @return {boolean} True if the query parameter is valid
   */
  assert(query) {
    this.queryFound = /^search\/[^/]+\/?$/.test(query) || 
                      this.defaultQueries.includes(query);
    return this.queryFound;
  }

}
