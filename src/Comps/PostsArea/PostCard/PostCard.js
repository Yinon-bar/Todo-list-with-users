import "./PostCard.css";

function PostCard({ posts }) {
  return (
    <div className="PostCard">
      <h3>{posts.title}</h3>
      <p>{posts.body}</p>
    </div>
  );
}

export default PostCard;
