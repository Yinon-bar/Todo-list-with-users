import appConfig from "../../../Config/appConfig";
import useFetch from "../../../Services/useFetch";
import PostsList from "../../PostsArea/PostsList/PostsList";
import "./Posts.css";

function Posts() {
  const [posts, error, loading] = useFetch(appConfig.posts);

  console.log(posts);

  if (error) {
    return (
      <>
        <h1>Canno't get the data from the server 😕</h1>
        <h2>Please try again later</h2>
      </>
    );
  }
  if (loading) {
    return (
      <>
        <h2>Loading... 💿💿💿</h2>
      </>
    );
  }

  return (
    <div className="Posts">
      <h1>Posts</h1>
      <hr />
      <PostsList posts={posts} />
    </div>
  );
}

export default Posts;
