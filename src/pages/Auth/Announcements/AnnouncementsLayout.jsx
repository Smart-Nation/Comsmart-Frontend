import { Outlet } from "react-router-dom";
import { AnnouncementProvider } from "../../../context/AnnouncementContext";

function AnnouncementsLayout() {
  return (
    <AnnouncementProvider>
      <div className="announcements-container">
        <Outlet />
      </div>
    </AnnouncementProvider>
  );
}

export default AnnouncementsLayout;
