class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
  }
  async getComments() { // returns all comments from API
    const getComment = await axios.get(
      `${this.baseUrl}comments?api_key=${this.apiKey}`
    );
    return getComment;
  }
  async postComment(commentObj) { // Adds a comment as an object to the array of comments via API
    const addComment = await axios.post(
      `${this.baseUrl}comments?api_key=${this.apiKey}`,
      commentObj
    );
    return addComment;
  }
}
