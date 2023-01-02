class AppConfig {
  baseURL = "https://jsonplaceholder.typicode.com";
  todos = this.baseURL + "/todos";
  users = "https://randomuser.me/api/?results=10";
  posts = this.baseURL + "/posts/";
}
const appConfig = new AppConfig();

export default appConfig;
