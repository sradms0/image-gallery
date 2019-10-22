import axios from 'axios';

export class Data {
  constructor(apiKey, defaultQueries) {
    this.apiKey = apiKey;
    this.defaultQueries = defaultQueries;
    this.queryFound = false;
  }

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

  assert(query) {
    this.queryFound = /search\/\w+$|(\/$)/.test(query) || 
                      this.defaultQueries.includes(query);
    return this.queryFound;
  }

}
