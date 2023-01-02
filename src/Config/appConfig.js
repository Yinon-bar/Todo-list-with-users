class AppConfig {
  baseURL = "https://jsonplaceholder.typicode.com";
  todos = this.baseURL + "/todos";
  users = "https://randomuser.me/api/?results=10";
}
const appConfig = new AppConfig();

export default appConfig;
