import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  //   console.log(post);
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/posts/${id}`);
  };
  return (
    <div className="border p-4 h-48 space-y-4">
      <h1>
        <span className="text-success text-2xl font-semibold">{post.id}</span> :
        <span className="text-warning text-2xl font-semibold">
          {post.title}
        </span>
      </h1>
      <Link to={`/posts/${post.id}`}>
        <button className="btn btn-secondary">Show Details</button>
      </Link>
      <button
        className="btn btn-success"
        onClick={() => handleNavigate(post.id)}
      >
        Details of: {post.id}
      </button>
    </div>
  );
};

export default Post;
