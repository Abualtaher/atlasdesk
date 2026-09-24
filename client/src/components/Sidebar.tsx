import { Link } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  MessageSquare,
  Ticket,
  Settings,
} from "lucide-react";
import { X } from "lucide-react";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-slate-900 p-4 text-white transition-transform duration-300 md:static md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">AtlasDesk</h1>

        <button
          onClick={onClose}
          className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white md:hidden"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="space-y-2">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-800"
          onClick={onClose}
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/customers"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800"
          onClick={onClose}
        >
          <Users size={20} />
          Customers
        </Link>

        <Link
          to="/conversations"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800"
          onClick={onClose}
        >
          <MessageSquare size={20} />
          Conversations
        </Link>

        <Link
          to="/tickets"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800"
          onClick={onClose}
        >
          <Ticket size={20} />
          Tickets
        </Link>
      </nav>

      <div className="mt-auto">
        <Link
          to="/settings"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800"
          onClick={onClose}
        >
          <Settings size={20} />
          Settings
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
