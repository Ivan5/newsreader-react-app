const { RESTDataSource } = require("apollo-datasource-rest");

export class HackerNewsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://hacker-news.firebaseio.com/v0/";
  }

  async getAllArticleIds() {
    const result = await this.get("topstroies.json");
    return result;
  }

  async getArticle(articleId) {
    const result = await this.get(`item/${articleId}.json`);
    return this.articleReducer(result);
  }

  getArticlesByIds(articleIds) {
    return Promise.all(
      articleIds.map((articleId) => this.getAllArticle(articleId))
    );
  }
}
