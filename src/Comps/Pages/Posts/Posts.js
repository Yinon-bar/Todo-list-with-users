import { Route, Routes } from "react-router-dom";
import appConfig from "../../../Config/appConfig";
import useFetch from "../../../Services/useFetch";
import PostSingle from "../../PostsArea/PostSingle/PostSingle";
import PostsList from "../../PostsArea/PostsList/PostsList";
import "./Posts.css";

function Posts() {
  const [posts, error, loading] = useFetch(appConfig.posts);

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
      <Routes>
        <Route path="" element={<PostsList posts={posts} />} />
        <Route path=":id" element={<PostSingle posts={posts} />} />
        <Route path="new" element={<PostSingle />} />
      </Routes>
    </div>
  );
}

export default Posts;
