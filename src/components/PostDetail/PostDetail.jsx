import { useLoaderData } from "react-router";

const PostDetail = () => {
  const postDetail = useLoaderData();
  console.log(postDetail);
  return (
    <div className="border p-4 w-[350px] mt-20">
      <p className="text-2xl font-semibold text-error">{postDetail.id}</p>
      <p className="text-2xl font-semibold text-warning">{postDetail.title}</p>
      <p className="text-xl">{postDetail.body}</p>
    </div>
  );
};

export default PostDetail;
