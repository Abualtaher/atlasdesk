import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
