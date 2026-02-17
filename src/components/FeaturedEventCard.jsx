import { useNavigate } from "react-router-dom";
import "./FeaturedEventCard.css";

function FeaturedEventCard({ event }) {
  const navigate = useNavigate();

  if (!event) return null;

  const avatars = event.avatars || [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/women/3.jpg"
  ];

  const participantCount = event.participantCount || 12;

  return (
    <div className="featured-event-card">
      {/* Image Section */}
      <div className="featured-image-wrapper">
        <img
          src={event.image}
          alt={event.title}
          className="featured-image"
        />
      </div>

      {/* Content Section */}
      <div className="featured-content">
        {/* Title */}
        <h2 className="featured-title">{event.title}</h2>

        {/* Info Section */}
        <div className="featured-info">
          <div className="featured-info-item">
            <span className="featured-icon">📅</span>
            <div>
              <div className="featured-label">Date</div>
              <div className="featured-value">{event.date}, {event.time}</div>
            </div>
          </div>

          <div className="featured-info-item">
            <span className="featured-icon">📍</span>
            <div>
              <div className="featured-label">Lieu</div>
              <div className="featured-value">{event.location}</div>
            </div>
          </div>
        </div>

        {/* Places Section */}
        <div className="featured-places">
          <div className="featured-places-item">
            <span className="featured-places-icon">👥</span>
            <div>
              <div className="featured-places-label">{event.remainingPlaces} places restantes</div>
              <div className="featured-places-total">sur {event.totalPlaces} places</div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Participants + Main Button */}
        <div className="featured-bottom-row">
          <div className="featured-participants-compact">
            <div className="featured-avatars">
              {avatars.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt="participant"
                  className="featured-avatar"
                />
              ))}
              <span className="featured-avatar-count">+{participantCount}</span>
            </div>
            <div className="featured-participant-text">
              Fatou et {participantCount} autres
            </div>
          </div>

          <button
            className={`featured-btn primary ${event.remainingPlaces === 0 ? "disabled" : ""}`}
            disabled={event.remainingPlaces === 0}
            onClick={() => navigate(`/events/${event.id}`)}
          >
            {event.remainingPlaces === 0 ? "Complet" : "Je participe →"}
          </button>
        </div>

        {/* Secondary Button */}
        <button
          className="featured-btn secondary full-width"
          onClick={() => navigate(`/events/${event.id}`)}
        >
          Voir détails
        </button>
      </div>
    </div>
  );
}

export default FeaturedEventCard;
