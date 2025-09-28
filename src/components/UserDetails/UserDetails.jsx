import { useParams } from "react-router";

const UserDetails = () => {
  const userDetail = useParams();
  console.log(userDetail);
  return (
    <div>
      <h2>User Details Here</h2>
    </div>
  );
};

export default UserDetails;
