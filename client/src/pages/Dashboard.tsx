import { Ticket, Clock, Users } from "lucide-react";
import StatCard from "../components/StatCard";
import ConversationList from "../components/ConversationList";
import { tickets } from "../data/tickets";
import { customers } from "../data/customers";

function Dashboard() {
  const totalTickets = tickets.length;
  const totalCustomers = customers.length;

  const numberOfActiveCustomers = customers.filter(
    (customer) => customer.status === "Active",
  ).length;

  const numberOfOpenTickets = tickets.filter(
    (ticket) => ticket.status === "Open",
  ).length;

  const numberOfClosedTickets = tickets.filter(
    (ticket) => ticket.status === "Closed",
  ).length;

  const numberOfInProgressTickets = tickets.filter(
    (ticket) => ticket.status === "In Progress",
  ).length;

  return (
    <div className="min-w-0">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Dashboard
        </h1>

        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Here's what's happening with your customers today.
        </p>
      </div>

      {/* Statistics */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          title="Total Tickets"
          value={totalTickets}
          icon={<Ticket size={20} />}
        />

        <StatCard
          title="Open Tickets"
          value={numberOfOpenTickets}
          icon={<Ticket size={20} />}
        />

        <StatCard
          title="In Progress"
          value={numberOfInProgressTickets}
          icon={<Clock size={20} />}
        />

        <StatCard
          title="Closed Tickets"
          value={numberOfClosedTickets}
          icon={<Ticket size={20} />}
        />

        <StatCard
          title="Total Customers"
          value={totalCustomers}
          icon={<Users size={20} />}
        />

        <StatCard
          title="Active Customers"
          value={numberOfActiveCustomers}
          icon={<Users size={20} />}
        />
      </div>

      {/* Recent Conversations */}
      <div className="mt-6 sm:mt-8">
        <ConversationList />
      </div>
    </div>
  );
}

export default Dashboard;
