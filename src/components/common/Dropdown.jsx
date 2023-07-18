import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="dropdown-container">
      <Link to="/profile">Profile</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/account">Account</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default Dropdown;
