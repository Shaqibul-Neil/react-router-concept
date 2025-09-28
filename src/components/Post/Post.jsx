import { Link } from "react-router";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="border p-4 h-48">
      <h1 className="mb-8">
        <span className="text-success text-2xl font-semibold">{post.id}</span> :{" "}
        <span className="text-warning text-2xl font-semibold">
          {post.title}
        </span>
      </h1>
      <Link to={`/posts/${post.id}`} className="text-secondary border p-4">
        Show Details
      </Link>
    </div>
  );
};

export default Post;
