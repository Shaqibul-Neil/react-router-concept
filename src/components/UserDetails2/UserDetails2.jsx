import { use } from "react";

const UserDetails2 = ({ fetchPromise }) => {
  const userInfo = use(fetchPromise);
  console.log(userInfo);
  return (
    <div>
      {userInfo.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default UserDetails2;
