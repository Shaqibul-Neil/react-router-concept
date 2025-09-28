import { Link, useLoaderData } from "react-router";

const User = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2 className="text-secondary">This is users page</h2>
      <div className="grid grid-cols-2">
        {users.map((user) => (
          <div key={user.id} className="border p-4">
            <h2>User Id: {user.id}</h2>
            <h3>Name: {user.name}</h3>
            <h3>Email: {user.email}</h3>
            <Link to={`/users/${user.id}`} className="text-primary">
              Show Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
