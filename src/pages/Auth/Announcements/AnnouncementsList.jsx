import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAnnouncements } from "../../../context/AnnouncementContext";
import PageHeader from "../../../components/PageHeader";
import FilterModal from "../../../components/FilterModal";
import "./Announcements.css";

function AnnouncementsList() {
  const navigate = useNavigate();
  const { announcements } = useAnnouncements();
  const [filteredAnnouncements, setFilteredAnnouncements] = useState(announcements);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleSearch = (searchTerm) => {
    const filtered = announcements.filter((announcement) =>
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAnnouncements(filtered);
  };

  const handleFilterApply = (filters) => {
    let result = announcements;

    if (filters.category) {
      result = result.filter((announcement) => announcement.category === filters.category);
    }

    if (filters.date) {
      // Filter by month (Fév, Jan, etc.)
      result = result.filter((announcement) => announcement.date.includes(filters.date));
    }

    setFilteredAnnouncements(result);
  };

  const announcementFilters = [
    {
      key: "category",
      label: "📂 Catégorie",
      options: [
        { label: "Annonce", value: "Annonce" },
        { label: "Mise à jour", value: "Mise à jour" },
        { label: "Recrutement", value: "Recrutement" }
      ]
    },
    {
      key: "date",
      label: "📅 Mois",
      options: [
        { label: "Janvier", value: "Jan" },
        { label: "Février", value: "Fév" },
        { label: "Mars", value: "Mar" }
      ]
    }
  ];

  return (
    <div className="announcements-page-wrapper">
      <FilterModal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        filters={announcementFilters}
        onApply={handleFilterApply}
        title="Filtrer les annonces"
      />
      <div className="announcements-page">
        <PageHeader
          title="Annonces"
          icon="📢"
          onSearch={handleSearch}
          onFilter={() => setShowFilterModal(true)}
        />
        <div className="announcements-list">
          {filteredAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className="announcement-card"
              onClick={() => navigate(`/announcements/${announcement.id}`)}
              style={{ cursor: "pointer" }}
            >
              {announcement.image && (
                <img src={announcement.image} alt={announcement.title} className="announcement-image" />
              )}
              <div className="announcement-content">
                <div className="announcement-category">{announcement.category}</div>
                <h3 className="announcement-title">{announcement.title}</h3>
                <p className="announcement-text">{announcement.content}</p>
                <div className="announcement-footer">
                  <div className="announcement-meta">
                    <img src={announcement.avatar} alt={announcement.author} className="announcement-avatar" />
                    <div>
                      <div className="announcement-author">{announcement.author}</div>
                      <div className="announcement-date">{announcement.date}</div>
                    </div>
                  </div>
                  <div className="announcement-read-more">Lire plus →</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnnouncementsList;
