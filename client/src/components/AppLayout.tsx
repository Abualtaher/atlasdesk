import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={mobileMenuOpen} onClose={handleCloseMenu} />

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={handleCloseMenu}
        />
      )}

      <main className="min-w-0 flex-1 p-4 md:p-8">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="mb-4 rounded-lg bg-white p-2 text-gray-700 shadow-sm md:hidden"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
