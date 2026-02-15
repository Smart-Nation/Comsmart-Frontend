import { createContext, useContext, useState } from "react";
import announcementsData from "../data/announcementsData";

const AnnouncementContext = createContext();

export const AnnouncementProvider = ({ children }) => {
  const [announcements] = useState(announcementsData);

  return (
    <AnnouncementContext.Provider value={{ announcements }}>
      {children}
    </AnnouncementContext.Provider>
  );
};

export const useAnnouncements = () => {
  return useContext(AnnouncementContext);
};
