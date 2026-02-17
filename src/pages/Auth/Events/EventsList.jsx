import { useState } from "react";
import { useEvents } from "../../../context/EventContext";
import EventCard from "./EventCard";
import FeaturedEventCard from "../../../components/FeaturedEventCard";
import FilterModal from "../../../components/FilterModal";
import "./Events.css";

function EventsList() {
  const { events } = useEvents();
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleSearch = (searchTerm) => {
    const filtered = events.filter((event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const handleFilterApply = (filters) => {
    let result = events;

    if (filters.location) {
      result = result.filter((event) => event.location === filters.location);
    }

    if (filters.availability) {
      if (filters.availability === "available") {
        result = result.filter((event) => event.remainingPlaces > 0);
      } else if (filters.availability === "full") {
        result = result.filter((event) => event.remainingPlaces === 0);
      }
    }

    if (filters.date) {
      // Simple date filter by month
      result = result.filter((event) =>
        event.date.includes(filters.date)
      );
    }

    setFilteredEvents(result);
  };

  const eventFilters = [
    {
      key: "location",
      label: "📍 Lieu",
      options: [
        { label: "Digital Center", value: "Digital Center" },
        { label: "Oscar Space", value: "Oscar Space" },
        { label: "Tous les lieux", value: "all" }
      ]
    },
    {
      key: "availability",
      label: "👥 Disponibilité",
      options: [
        { label: "Places disponibles", value: "available" },
        { label: "Complet", value: "full" }
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
    <div className="events-page-wrapper">
      <FilterModal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        filters={eventFilters}
        onApply={handleFilterApply}
        title="Filtrer les événements"
      />
      <div className="events-page">
        <div className="featured-section-title">Événement Majeur</div>
        <div className="featured-wrapper">
          {filteredEvents.slice(0, 1).map((event) => (
            <FeaturedEventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="upcoming-header">
          <h3 className="section-subtitle">À venir</h3>
          <button className="see-all-btn">Tout voir</button>
        </div>
        <div className="upcoming-list">
          {filteredEvents.slice(1).map((event) => (
            <EventCard key={event.id} event={event} variant="compact" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventsList;
