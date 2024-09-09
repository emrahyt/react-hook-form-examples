import { Link, Outlet } from "react-router-dom";
import "./layout.styles.css";

const Layout = () => (
  <div>
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Anasayfa
      </Link>
    </nav>
    <Outlet />
  </div>
);

export default Layout;
