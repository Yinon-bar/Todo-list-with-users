import { useParams } from "react-router-dom";
import appConfig from "../../../Config/appConfig";
import useFetch from "../../../Services/useFetch";
import "./PostSingle.css";

function PostSingle({ posts }) {
  const { id } = useParams();

  const post = posts.filter((p) => p.id === +id)[0];

  if (!post) {
    return null;
  }
  // const [post, error, loading] = useFetch(appConfig.posts + id);

  return (
    <div className="PostSingle">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostSingle;
