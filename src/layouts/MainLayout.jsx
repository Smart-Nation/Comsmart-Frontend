import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
