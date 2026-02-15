import { useParams, useNavigate } from "react-router-dom";
import { useEvents } from "../../../context/EventContext";
import "./Events.css";

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, registerToEvent } = useEvents();

  const event = events.find((event) => event.id === Number(id));
  if (!event) return <p>Événement introuvable</p>;

  // Dummy organiser (à remplacer par vrai data)
  const organiser = event.organiser || {
    name: "Amadou Diallo",
    role: "Lead Developer",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg"
  };

  return (
    <div className="event-details-page" style={{ background: '#f5f6fa', minHeight: '100vh', padding: '24px' }}>
      <div className="event-details-card" style={{ background: '#fff', borderRadius: '20px', boxShadow: '0 8px 20px rgba(0,0,0,0.08)', maxWidth: 420, margin: '0 auto', padding: '24px' }}>
        <img src={event.image} alt={event.title} style={{ width: '100%', borderRadius: '14px', marginBottom: '18px', objectFit: 'cover', height: '200px' }} />
        <h2 className="event-title" style={{ fontSize: '22px', fontWeight: 700, marginBottom: '12px', color: '#2d2346' }}>{event.title}</h2>
        <div className="event-info" style={{ display: 'flex', gap: '24px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <div className="event-info-item"><span className="event-icon">📅</span> {event.date} • {event.time}</div>
          <div className="event-info-item"><span className="event-icon">📍</span> {event.location}</div>
        </div>
        <div className="event-info-item" style={{ marginBottom: '12px' }}>
          <span className="event-icon">👥</span> {event.remainingPlaces}/{event.totalPlaces} places
        </div>
        <div style={{ marginBottom: '18px' }}>
          <div style={{ fontWeight: 600, color: '#2d2346', marginBottom: '6px' }}>Description</div>
          <div style={{ color: '#7a6f9b', fontSize: '15px' }}>{event.description}</div>
        </div>
        <div style={{ marginBottom: '18px' }}>
          <div style={{ fontWeight: 600, color: '#2d2346', marginBottom: '6px' }}>Organisateur</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={organiser.avatar} alt={organiser.name} style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #fff', boxShadow: '0 2px 6px rgba(80,80,120,0.08)' }} />
            <div>
              <div style={{ fontWeight: 600, color: '#2d2346' }}>{organiser.name}</div>
              <div style={{ color: '#7a6f9b', fontSize: '14px' }}>{organiser.role}</div>
            </div>
          </div>
        </div>
        <button
          className="event-btn"
          style={{ width: '100%', fontSize: '16px', fontWeight: 600, padding: '12px', borderRadius: '12px', marginTop: '8px' }}
          disabled={event.remainingPlaces === 0 || event.isRegistered}
          onClick={() => {
            registerToEvent(event.id);
            navigate("/events");
          }}
        >
          {event.remainingPlaces === 0
            ? "Complet"
            : event.isRegistered
            ? "Déjà inscrit"
            : "S'inscrire à l'événement"}
        </button>
      </div>
    </div>
  );
}

export default EventDetails;
