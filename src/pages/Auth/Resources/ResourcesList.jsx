import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResources } from "../../../context/ResourceContext";
import PageHeader from "../../../components/PageHeader";
import FilterModal from "../../../components/FilterModal";
import "./Resources.css";

function ResourcesList() {
  const navigate = useNavigate();
  const { resources } = useResources();
  const [filteredResources, setFilteredResources] = useState(resources);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleSearch = (searchTerm) => {
    const filtered = resources.filter((resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResources(filtered);
  };

  const handleFilterApply = (filters) => {
    let result = resources;

    if (filters.category) {
      result = result.filter((resource) => resource.category === filters.category);
    }

    if (filters.popularity) {
      if (filters.popularity === "popular") {
        result = result.filter((resource) => resource.downloads > 200);
      } else if (filters.popularity === "trending") {
        result = result.filter((resource) => resource.downloads > 100 && resource.downloads <= 200);
      }
    }

    setFilteredResources(result);
  };

  const resourceFilters = [
    {
      key: "category",
      label: "📚 Catégorie",
      options: [
        { label: "Tutoriel", value: "Tutoriel" },
        { label: "Guide", value: "Guide" },
        { label: "Template", value: "Template" }
      ]
    },
    {
      key: "popularity",
      label: "🔥 Popularité",
      options: [
        { label: "Très populaire (200+ téléchargements)", value: "popular" },
        { label: "Populaire (100-200 téléchargements)", value: "trending" }
      ]
    }
  ];

  return (
    <div className="resources-page-wrapper">
      <FilterModal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        filters={resourceFilters}
        onApply={handleFilterApply}
        title="Filtrer les ressources"
      />
      <div className="resources-page">
        <PageHeader
          title="Ressources"
          icon="📚"
          onSearch={handleSearch}
          onFilter={() => setShowFilterModal(true)}
        />
        <div className="resources-list">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="resource-card"
              onClick={() => navigate(`/resources/${resource.id}`)}
              style={{ cursor: "pointer" }}
            >
              {resource.image && (
                <img src={resource.image} alt={resource.title} className="resource-image" />
              )}
              <div className="resource-content">
                <div className="resource-category">{resource.category}</div>
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                <div className="resource-footer">
                  <div className="resource-downloads">📥 {resource.downloads}</div>
                  <div className="resource-view-details">Voir détails →</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResourcesList;
