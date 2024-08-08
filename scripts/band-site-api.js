class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
  }
  async getComments() {
    // returns all comments from API
    const getComment = await axios.get(
      `${this.baseUrl}comments?api_key=${this.apiKey}`
    );
    return getComment;
  }
  async postComment(commentObj) {
    // Adds a comment as an object to the array of comments via API
    const addComment = await axios.post(
      `${this.baseUrl}comments?api_key=${this.apiKey}`,
      commentObj
    );
    return addComment;
  }
  async getShows() {
    const getShowList = await axios.get(
      `${this.baseUrl}showdates?api_key=${this.apiKey}`
    );
    return getShowList;
  }
  async likeComment(idNumber) {
    const likeComments = await axios.put(
      `${this.baseUrl}comments/${idNumber}/like?api_key=${this.apiKey}`
    );
    return likeComments;
  }
}
