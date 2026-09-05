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
      return "bg-red-100 text-red-700";
    }

    if (priority === "Medium") {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-gray-100 text-gray-700";
  };

  const statusClass = (status: string) => {
    if (status === "Open") {
      return "bg-green-100 text-green-700";
    }

    if (status === "Closed") {
      return "bg-gray-100 text-gray-700";
    }

    return "bg-blue-100 text-blue-700";
  };

  const handleReset = () => {
    setSearch("");
    setTicketStatus("All");
    setTicketPriority("All");
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tickets</h1>

        <p className="mt-2 text-gray-600">
          Manage and filter customer support tickets.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-end">
        <div className="flex-1">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Search
          </label>

          <input
            type="text"
            placeholder="Search by title or customer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Status
          </label>

          <select
            value={ticketStatus}
            onChange={(e) => setTicketStatus(e.target.value)}
            className="min-w-40 rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-blue-500"
          >
            <option value="All">All statuses</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Priority
          </label>

          <select
            value={ticketPriority}
            onChange={(e) => setTicketPriority(e.target.value)}
            className="min-w-40 rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-blue-500"
          >
            <option value="All">All priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <button
          onClick={handleReset}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-50"
        >
          Reset
        </button>
      </div>

      {filteredTickets.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center">
          <p className="font-medium text-gray-700">No tickets found</p>

          <p className="mt-1 text-sm text-gray-500">
            Try changing your search or filters.
          </p>
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200 bg-white">
          <table className="w-full text-left">
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
                <tr
                  key={ticket.id}
                  className="border-t border-gray-200 transition hover:bg-gray-50"
                >
                  <td className="px-4 py-4 font-medium text-gray-900">
                    {ticket.title}
                  </td>

                  <td className="px-4 py-4 text-gray-700">{ticket.customer}</td>

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
        </div>
      )}
    </div>
  );
}

export default Tickets;
