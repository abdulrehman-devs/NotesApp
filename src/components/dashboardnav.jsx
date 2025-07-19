import { Link } from "react-router-dom";
import "./dashboardnav.css";

export default function DashboardNavbar({ link, page }) {
  function handleSignout() {
    localStorage.removeItem("token");
    window.location.href = "/"; // <- Redirect user
  }

  return (
    <nav className="dn">
      <div className="heading">
        <h1>My Notes</h1>
      </div>
      <div className="buttons">
        <Link to={link} className="signout">
          {page}
        </Link>
        <button className="signout" onClick={handleSignout}>
          Sign Out
        </button>
      </div>
    </nav>
  );
}
