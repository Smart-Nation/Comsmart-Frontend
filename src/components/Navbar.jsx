import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button className="navbar-burger" onClick={toggleMenu}>
        <span className="burger-icon">☰</span>
      </button>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="navbar-overlay" onClick={closeMenu}></div>
      )}

      {/* Sidebar */}
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <div className="navbar-header">
          <button className="navbar-close" onClick={closeMenu}>
            ✕
          </button>
        </div>

        {/* User Profile Section */}
        <div className="navbar-profile">
          <div className="profile-avatar">
            {user?.avatar ? (
              <img src={user.avatar} alt={user.name} />
            ) : (
              <div className="profile-avatar-placeholder">
                {user?.name?.charAt(0).toUpperCase() || "F"}
              </div>
            )}
          </div>
          <div className="profile-info">
            <h3 className="profile-name">{user?.name || "Fatou"}</h3>
            <p className="profile-role">{user?.role || "Développeuse"}</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <NavLink
            to="/events"
            end
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            <span className="nav-icon">📅</span>
            <span className="nav-label">Événements</span>
          </NavLink>

          <NavLink
            to="/announcements"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            <span className="nav-icon">📢</span>
            <span className="nav-label">Annonces</span>
          </NavLink>

          <NavLink
            to="/resources"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            <span className="nav-icon">📚</span>
            <span className="nav-label">Ressources</span>
          </NavLink>
        </div>

        {/* Auth Section */}
        <div className="navbar-footer">
          {!user ? (
            <>
              <NavLink
                to="/login"
                className="nav-link-btn login"
                onClick={closeMenu}
              >
                Se connecter
              </NavLink>
              <NavLink
                to="/register"
                className="nav-link-btn register"
                onClick={closeMenu}
              >
                S'inscrire
              </NavLink>
            </>
          ) : (
            <button className="nav-link-btn logout" onClick={() => { logout(); closeMenu(); }}>
              Se déconnecter
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
