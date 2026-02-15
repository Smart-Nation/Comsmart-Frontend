import { useParams, useNavigate } from "react-router-dom";
import { useAnnouncements } from "../../../context/AnnouncementContext";
import "./Announcements.css";

function AnnouncementDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { announcements } = useAnnouncements();

  const announcement = announcements.find(
    (announcement) => announcement.id === Number(id)
  );

  if (!announcement) return <p style={{ padding: "24px", textAlign: "center" }}>Annonce introuvable</p>;

  return (
    <div className="announcement-details-page" style={{ background: "#f5f6fa", minHeight: "100vh", padding: "24px" }}>
      <button
        onClick={() => navigate("/announcements")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "24px",
          marginBottom: "16px"
        }}
      >
        ← Retour
      </button>
      <div className="announcement-details-card" style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 8px 20px rgba(0,0,0,0.08)", maxWidth: 500, margin: "0 auto", padding: "24px" }}>
        {announcement.image && (
          <img
            src={announcement.image}
            alt={announcement.title}
            style={{ width: "100%", borderRadius: "14px", marginBottom: "18px", objectFit: "cover", height: "200px" }}
          />
        )}
        <div style={{ display: "inline-block", background: "#ede9fe", color: "#7c3aed", fontSize: "12px", fontWeight: 600, padding: "4px 10px", borderRadius: "6px", marginBottom: "12px" }}>
          {announcement.category}
        </div>
        <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px", color: "#2d2346" }}>
          {announcement.title}
        </h2>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px", paddingBottom: "16px", borderBottom: "1px solid #e5e7eb" }}>
          <img
            src={announcement.avatar}
            alt={announcement.author}
            style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}
          />
          <div>
            <div style={{ fontWeight: 600, color: "#2d2346" }}>{announcement.author}</div>
            <div style={{ fontSize: "12px", color: "#999" }}>{announcement.date}</div>
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6" }}>
            {announcement.content}
          </p>
        </div>
        <div style={{ marginBottom: "20px", padding: "16px", background: "#f9fafb", borderRadius: "12px", borderLeft: "4px solid #7c3aed" }}>
          <div style={{ fontWeight: 600, color: "#2d2346", marginBottom: "8px" }}>📌 Note importante</div>
          <p style={{ color: "#666", fontSize: "14px", margin: 0 }}>
            Cette annonce a été publiée pour informer les membres de la communauté. N'hésite pas à contacter l'auteur pour plus de détails.
          </p>
        </div>
        <button
          onClick={() => navigate("/announcements")}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "12px",
            background: "linear-gradient(90deg, #7b2ff7, #9c4dff)",
            color: "#fff",
            border: "none",
            fontWeight: 600,
            fontSize: "16px",
            cursor: "pointer",
            transition: "opacity 0.2s"
          }}
          onMouseOver={(e) => e.target.style.opacity = "0.9"}
          onMouseOut={(e) => e.target.style.opacity = "1"}
        >
          Retour aux annonces
        </button>
      </div>
    </div>
  );
}

export default AnnouncementDetails;
