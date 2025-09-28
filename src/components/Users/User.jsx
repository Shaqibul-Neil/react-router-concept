import { Suspense, useState } from "react";
import { Link, useLoaderData } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";

const userPromise = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  return res.json();
};

const User = () => {
  const [showInfo, setShowInfo] = useState(false);
  const users = useLoaderData();
  const fetchPromise = userPromise();
  // console.log(users);
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
            <button
              className="btn btn-secondary"
              onClick={() => setShowInfo(!showInfo)}
            >
              {showInfo ? "Hide" : "Show"} info
            </button>
            {showInfo && (
              <Suspense fallback={<span>Loading....</span>}>
                <UserDetails2 fetchPromise={fetchPromise} />
              </Suspense>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
