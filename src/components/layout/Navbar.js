import { Link, Route } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-list--item">
                    <Link to="/app/cd" className="navbar-list--link">Company Details</Link>
                </li>
                <li className="navbar-list--item">
                    <Link to="/app/bm" className="navbar-list--link">Board Members</Link>
                </li>
                <li className="navbar-list--item">
                    <Link to="/app/fd" className="navbar-list--link">Financial Data</Link>
                </li>
                <li className="navbar-list--item">
                    <Link to="/app/sc" className="navbar-list--link">Share of Companies</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;