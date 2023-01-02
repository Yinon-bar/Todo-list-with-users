import PostCard from "../PostCard/PostCard";
import "./PostsList.css";

function PostsList({ posts }) {
  return (
    <div className="PostsList">
      {posts.map((p) => (
        <PostCard key={p.id} posts={p} />
      ))}
    </div>
  );
}

export default PostsList;
