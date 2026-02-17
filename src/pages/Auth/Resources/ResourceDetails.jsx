import { useParams, useNavigate } from "react-router-dom";
import { useResources } from "../../../context/ResourceContext";
import "./Resources.css";

function ResourceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { resources } = useResources();

  const resource = resources.find((resource) => resource.id === Number(id));

  if (!resource)
    return (
      <p style={{ padding: "24px", textAlign: "center" }}>
        Ressource introuvable
      </p>
    );

  return (
    <div
      className="resource-details-page"
      style={{ background: "#f5f6fa", minHeight: "100vh", padding: "24px" }}
    >
      <button
        onClick={() => navigate("/resources")}
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
      <div
        className="resource-details-card"
        style={{
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          maxWidth: 500,
          margin: "0 auto",
          padding: "24px"
        }}
      >
        {resource.image && (
          <img
            src={resource.image}
            alt={resource.title}
            style={{
              width: "100%",
              borderRadius: "14px",
              marginBottom: "18px",
              objectFit: "cover",
              height: "200px"
            }}
          />
        )}
        <div
          style={{
            display: "inline-block",
            background: "#fef0e8",
            color: "#ff8c42",
            fontSize: "12px",
            fontWeight: 600,
            padding: "4px 10px",
            borderRadius: "6px",
            marginBottom: "12px"
          }}
        >
          {resource.category}
        </div>
        <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px", color: "#2d2346" }}>
          {resource.title}
        </h2>
        <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6", marginBottom: "20px" }}>
          {resource.description}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
            background: "#f9fafb",
            borderRadius: "12px",
            marginBottom: "20px"
          }}
        >
          <div>
            <div style={{ fontSize: "12px", color: "#999" }}>Téléchargements</div>
            <div style={{ fontSize: "20px", fontWeight: 700, color: "#2d2346" }}>
              {resource.downloads}
            </div>
          </div>
          <div
            style={{
              fontSize: "32px",
              opacity: 0.5
            }}
          >
            📥
          </div>
        </div>

        <div
          style={{
            marginBottom: "20px",
            padding: "16px",
            background: "#f0f4ff",
            borderRadius: "12px",
            borderLeft: "4px solid #7c3aed"
          }}
        >
          <div style={{ fontWeight: 600, color: "#2d2346", marginBottom: "8px" }}>
            📚 Type de ressource
          </div>
          <p style={{ color: "#666", fontSize: "14px", margin: 0 }}>
            {resource.category === "Tutoriel"
              ? "Un guide complet pour apprendre de nouvelles compétences"
              : resource.category === "Guide"
              ? "Des bonnes pratiques et recommandations essentielles"
              : "Un template prêt à l'emploi pour démarrer rapidement"}
          </p>
        </div>

        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            width: "100%",
            padding: "12px",
            borderRadius: "12px",
            background: "linear-gradient(90deg, #7b2ff7, #9c4dff)",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "16px",
            textAlign: "center",
            transition: "opacity 0.2s",
            marginBottom: "12px",
            boxSizing: "border-box"
          }}
          onMouseOver={(e) => (e.target.style.opacity = "0.9")}
          onMouseOut={(e) => (e.target.style.opacity = "1")}
        >
          Accéder à la ressource →
        </a>

        <button
          onClick={() => navigate("/resources")}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "12px",
            background: "#f3f4f6",
            color: "#2d2346",
            border: "1px solid #e5e7eb",
            fontWeight: 600,
            fontSize: "16px",
            cursor: "pointer",
            transition: "background 0.2s"
          }}
          onMouseOver={(e) => (e.target.style.background = "#e5e7eb")}
          onMouseOut={(e) => (e.target.style.background = "#f3f4f6")}
        >
          Retour aux ressources
        </button>
      </div>
    </div>
  );
}

export default ResourceDetails;
