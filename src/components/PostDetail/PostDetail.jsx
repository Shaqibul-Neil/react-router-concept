import { Link, useLoaderData, useNavigate } from "react-router";

const PostDetail = () => {
  const postDetail = useLoaderData();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  //   console.log(postDetail);
  return (
    <div className="border p-4 w-[350px] mt-20 space-y-4">
      <p className="text-2xl font-semibold text-error">{postDetail.id}</p>
      <p className="text-2xl font-semibold text-warning">{postDetail.title}</p>
      <p className="text-xl">{postDetail.body}</p>
      <button className="btn btn-warning" onClick={handleBack}>
        Back
      </button>
      <Link to="/posts" className="border px-3 py-1 text-success">
        Go back
      </Link>
    </div>
  );
};

export default PostDetail;
