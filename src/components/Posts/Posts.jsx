import { useLoaderData } from "react-router";
import Post from "../Post/Post";

const Posts = () => {
  const postsDetails = useLoaderData();
  //   console.log(postsDetails);
  return (
    <div className="grid grid-cols-2 gap-4 mt-20 w-8/12 mx-auto">
      {postsDetails.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
