import { Link, NavLink, useNavigation } from "react-router";

const Header = () => {
  const pending = useNavigation();

  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold">This is Header</h3>
      <nav className="flex gap-2 font-medium text-primary">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/users2">Users 2</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        {/* <Link to="/">Home</Link>
        <Link to="/mobiles">Mobiles</Link>
        <Link to="/laptops">Laptops</Link> */}
        {/* <a href="/">Home</a>
        <a href="/mobiles">Mobiles</a>
        <a href="/laptops">Laptops</a> */}
      </nav>
      {pending.state === "loading" && <span>⌛ Page is Loading.....</span>}
    </div>
  );
};

export default Header;
