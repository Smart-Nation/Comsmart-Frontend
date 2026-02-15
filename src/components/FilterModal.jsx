import { useState } from "react";
import "./FilterModal.css";

function FilterModal({ isOpen, onClose, filters, onApply, title = "Filtres" }) {
  const [activeFilters, setActiveFilters] = useState({});

  const handleFilterChange = (filterKey, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterKey]: prev[filterKey] === value ? null : value
    }));
  };

  const handleApply = () => {
    onApply(activeFilters);
    onClose();
  };

  const handleReset = () => {
    setActiveFilters({});
    onApply({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="filter-modal-overlay" onClick={onClose}>
      <div className="filter-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="filter-modal-header">
          <h3>{title}</h3>
          <button className="filter-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="filter-modal-body">
          {filters.map((filter) => (
            <div key={filter.key} className="filter-group">
              <label className="filter-group-title">{filter.label}</label>
              <div className="filter-options">
                {filter.options.map((option) => (
                  <label key={option.value} className="filter-option">
                    <input
                      type="checkbox"
                      checked={activeFilters[filter.key] === option.value}
                      onChange={() =>
                        handleFilterChange(filter.key, option.value)
                      }
                      className="filter-checkbox"
                    />
                    <span className="filter-option-label">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="filter-modal-footer">
          <button className="filter-reset-btn" onClick={handleReset}>
            Réinitialiser
          </button>
          <button className="filter-apply-btn" onClick={handleApply}>
            Appliquer
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
