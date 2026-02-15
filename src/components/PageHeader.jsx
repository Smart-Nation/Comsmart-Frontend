import { useState } from "react";
import "./PageHeader.css";

function PageHeader({ title, icon = "📋", onSearch, onFilter }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch && onSearch(e.target.value);
  };

  return (
    <div className="page-header">
      <div className="page-header-top">
        <div className="page-header-title">
          <span className="page-header-icon">{icon}</span>
          <h1>{title}</h1>
        </div>
        <div className="page-header-actions">
          <button
            className="header-btn"
            title="Rechercher"
            onClick={() => setShowSearch(!showSearch)}
          >
            🔍
          </button>
          <button className="header-btn" title="Filtrer" onClick={onFilter}>
            ⚙️
          </button>
          <button className="header-btn" title="Menu">
            ⋮
          </button>
        </div>
      </div>

      {showSearch && (
        <div className="page-header-search">
          <input
            type="text"
            placeholder="Chercher..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
            autoFocus
          />
        </div>
      )}
    </div>
  );
}

export default PageHeader;
