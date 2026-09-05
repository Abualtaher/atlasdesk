import { useState } from "react";
import { tickets } from "../data/tickets";

function Tickets() {
  const [ticketStatus, setTicketStatus] = useState("All");
  const [ticketPriority, setTicketPriority] = useState("All");
  const [search, setSearch] = useState("");

  const filteredTickets = tickets.filter((ticket) => {
    const priorityMatch =
      ticketPriority === "All" || ticket.priority === ticketPriority;
    const statusMatches =
      ticketStatus === "All" || ticket.status === ticketStatus;
    const titleMatches = ticket.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const customerMatches = ticket.customer
      .toLowerCase()
      .includes(search.toLowerCase());

    const searchMatches = titleMatches || customerMatches;

    return priorityMatch && statusMatches && searchMatches;
  });

  const priorityClass = (priority: string) => {
    if (priority === "High") {
      return "bg-red-200";
    }
    if (priority === "Medium") {
      return "bg-yellow-300";
    }
    return "bg-gray-200";
  };

  const statusClass = (status: string) => {
    if (status === "Open") {
      return "bg-green-200";
    }
    if (status === "Closed") {
      return "bg-gray-300";
    }
    return "bg-blue-200";
  };
  return (
    <div>
      <h1 className="text-3xl font-bold">Tickets</h1>
      <p className="mt-2 text-gray-600">Manage customer support tickets.</p>
      <select
        value={ticketStatus}
        onChange={(e) => setTicketStatus(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Open">Open</option>
        <option value="Closed">Closed</option>
        <option value="In Progress">In Progress</option>
      </select>
      <select
        value={ticketPriority}
        onChange={(e) => setTicketPriority(e.target.value)}
      >
        <option value="All">All</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <div>
        <input
          type="text"
          placeholder="Search tickets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-6 w-full max-w-md rounded-lg border border-gray-300 bg-white px-4 py-2"
        />
      </div>

      <div>
        {filteredTickets.length === 0 ? (
          <p>No tickets found....</p>
        ) : (
          <table className="mt-6 w-full overflow-hidden rounded-xl border border-gray-200 bg-white text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                  Title
                </th>

                <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                  Customer
                </th>

                <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                  Status
                </th>

                <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                  Priority
                </th>

                <th className="px-4 py-3 text-sm font-semibold text-gray-700">
                  Created
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredTickets.map((ticket) => (
                <tr key={ticket.id} className="border-t border-gray-200">
                  <td className="px-4 py-4 font-medium">{ticket.title}</td>

                  <td className="px-4 py-4">{ticket.customer}</td>

                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${statusClass(
                        ticket.status,
                      )}`}
                    >
                      {ticket.status}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${priorityClass(
                        ticket.priority,
                      )}`}
                    >
                      {ticket.priority}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-gray-500">
                    {ticket.createdAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Tickets;
