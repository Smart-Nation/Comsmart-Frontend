import { Outlet } from "react-router-dom";
import { ResourceProvider } from "../../../context/ResourceContext";

function ResourcesLayout() {
  return (
    <ResourceProvider>
      <div className="resources-container">
        <Outlet />
      </div>
    </ResourceProvider>
  );
}

export default ResourcesLayout;
