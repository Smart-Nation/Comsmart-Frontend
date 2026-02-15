import { Link } from "react-router-dom";
import "./EventCard.css";

function EventCard({ event, variant = "featured" }) {
  const isFull = event.remainingPlaces === 0;
  // Dummy avatars for demo (replace with real data)
  const avatars = event.avatars || [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/women/3.jpg"
  ];
  const avatarCount = event.participantCount || 12;

  // 🔹 VERSION COMPACT (liste "À venir")
  if (variant === "compact") {
    return (
      <Link to={`/events/${event.id}`} className="event-card compact">
        <div className="compact-content">
          <div>
            <h3 className="event-title">{event.title}</h3>

            <p className="event-date">
              📅 {event.date}, {event.time}
            </p>

            <p className="event-location">
              📍 {event.location}
            </p>
          </div>

          <div className="arrow">›</div>
        </div>
      </Link>
    );
  }

  // 🔹 VERSION FEATURED (événement majeur)
  return (
    <div className="event-card featured">
      <img
        src={event.image}
        alt={event.title}
        className="event-image"
      />
      <div className="event-content">
        <div className="event-major-label">Événement Majeur</div>
        <h3 className="event-title">{event.title}</h3>
        <div className="event-info">
          <div className="event-info-item">
            <span className="event-icon">📅</span>
            <span>{event.date}, {event.time}</span>
          </div>
          <div className="event-info-item">
            <span className="event-icon">📍</span>
            <span>{event.location}</span>
          </div>
        </div>
        <div className="event-avatars">
          {avatars.map((url, idx) => (
            <img key={idx} src={url} alt="avatar" className="event-avatar" />
          ))}
          <span className="event-avatar-count">+{avatarCount}</span>
        </div>
        <div className="event-participants">
          Fatou et {avatarCount} autres
        </div>
        {isFull ? (
          <button className="event-btn disabled" disabled>
            Complet
          </button>
        ) : (
          <Link to={`/events/${event.id}`}>
            <button className="event-btn">
              Je participe <span className="event-arrow">→</span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default EventCard;
