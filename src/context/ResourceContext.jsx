import { createContext, useContext, useState } from "react";
import resourcesData from "../data/resourcesData";

const ResourceContext = createContext();

export const ResourceProvider = ({ children }) => {
  const [resources] = useState(resourcesData);

  return (
    <ResourceContext.Provider value={{ resources }}>
      {children}
    </ResourceContext.Provider>
  );
};

export const useResources = () => {
  return useContext(ResourceContext);
};
