import { useLoaderData } from "react-router";

const UserDetails = () => {
  const userDetail = useLoaderData();
  // console.log(userDetail);
  return (
    <div className="mt-5 border p-4">
      <h2>Name: {userDetail.name}</h2>
      <h2>Company: {userDetail.company.name}</h2>
      <h2>Street: {userDetail.address.street}</h2>
      <h2>City: {userDetail.address.city}</h2>
    </div>
  );
};

export default UserDetails;
