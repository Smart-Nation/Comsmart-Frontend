import { createContext, useContext, useState } from "react";
import eventsData from "../data/eventsData";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(eventsData);

  const registerToEvent = (eventId) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) => {
        if (
          event.id === eventId &&
          event.remainingPlaces > 0 &&
          !event.isRegistered
        ) {
          return {
            ...event,
            remainingPlaces: event.remainingPlaces - 1,
            isRegistered: true,
          };
        }
        return event;
      })
    );
  };

  return (
    <EventContext.Provider value={{ events, registerToEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => {
  return useContext(EventContext);
};
