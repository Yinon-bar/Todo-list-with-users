import { Link } from "react-router-dom";
import PostSingle from "../PostSingle/PostSingle";
import "./PostCard.css";

function PostCard({ posts }) {
  return (
    <div className="PostCard">
      <h3>{posts.title}</h3>
      <p>{posts.body}</p>
      <button>
        <Link to={`/posts/${posts.id}`} element={<PostSingle />}>
          Read More...
        </Link>
      </button>
    </div>
  );
}

export default PostCard;
