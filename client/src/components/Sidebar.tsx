import { Link } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  MessageSquare,
  Ticket,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-8">AtlasDesk</h1>

      <nav className="space-y-2">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-800"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/customers"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800"
        >
          <Users size={20} />
          Customers
        </Link>

        <Link
          to="/conversations"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800"
        >
          <MessageSquare size={20} />
          Conversations
        </Link>

        <Link
          to="/tickets"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800"
        >
          <Ticket size={20} />
          Tickets
        </Link>
      </nav>

      <div className="mt-auto">
        <Link
          to="/settings"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800"
        >
          <Settings size={20} />
          Settings
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
