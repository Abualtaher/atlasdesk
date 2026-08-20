import { Ticket, Clock, Users, MessageSquare } from "lucide-react";
import StatCard from "../components/StatCard";
import ConversationList from "../components/ConversationList";

function Dashboard() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

        <p className="mt-1 text-gray-600">
          Here's what's happening with your customers today.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Open Tickets" value="24" icon={<Ticket size={20} />} />
        <StatCard
          title="Pending Tickets"
          value="12"
          icon={<Clock size={20} />}
        />
        <StatCard title="Customers" value="1,248" icon={<Users size={20} />} />
        <StatCard
          title="Conversations"
          value="86"
          icon={<MessageSquare size={20} />}
        />
        <div className="mt-8">
          <ConversationList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
