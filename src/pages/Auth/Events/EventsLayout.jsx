import { Outlet } from "react-router-dom";
import { EventProvider } from "../../../context/EventContext";

function EventsLayout() {
  return (
    <EventProvider>
      <div className="events-container">
        <Outlet />
      </div>
    </EventProvider>
  );
}

export default EventsLayout;
