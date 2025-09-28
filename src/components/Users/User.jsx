import { useLoaderData } from "react-router";

const User = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2 className="text-secondary">This is users page</h2>
    </div>
  );
};

export default User;
