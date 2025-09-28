import { use } from "react";

const User2 = ({ userPromise }) => {
  const userData = use(userPromise);
  // console.log("user 2 suspense", userData);
  return (
    <div>
      <h2>User 2</h2>
    </div>
  );
};

export default User2;
