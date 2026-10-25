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
      return "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300";
    }

    if (priority === "Medium") {
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300";
    }

    return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
  };

  const statusClass = (status: string) => {
    if (status === "Open") {
      return "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300";
    }

    if (status === "Closed") {
      return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
    }

    return "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300";
  };

  const handleReset = () => {
    setSearch("");
    setTicketStatus("All");
    setTicketPriority("All");
  };

  return (
    <div className="min-w-0">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Tickets
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Manage and filter customer support tickets.
        </p>
      </div>

      {/* Search and filters */}
      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end">
        <div className="min-w-0 flex-1">
          <label
            htmlFor="ticketSearch"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Search
          </label>

          <input
            id="ticketSearch"
            type="text"
            placeholder="Search by title or customer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-blue-900"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:gap-3">
          <div>
            <label
              htmlFor="ticketStatus"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Status
            </label>

            <select
              id="ticketStatus"
              value={ticketStatus}
              onChange={(e) => setTicketStatus(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:min-w-40"
            >
              <option value="All">All statuses</option>
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="ticketPriority"
              className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Priority
            </label>

            <select
              id="ticketPriority"
              value={ticketPriority}
              onChange={(e) => setTicketPriority(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:min-w-40"
            >
              <option value="All">All priorities</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          Reset filters
        </button>
      </div>

      {/* Empty state */}
      {filteredTickets.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center dark:border-gray-700 dark:bg-gray-800">
          <p className="font-medium text-gray-700 dark:text-gray-200">
            No tickets found
          </p>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Try changing your search or filters.
          </p>
        </div>
      ) : (
        /* Tickets table */
        <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <table className="w-full min-w-[700px] text-left">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Title
                </th>

                <th className="px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Customer
                </th>

                <th className="px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Status
                </th>

                <th className="px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Priority
                </th>

                <th className="px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Created
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredTickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="border-t border-gray-100 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50"
                >
                  <td className="px-4 py-4 font-medium text-gray-900 dark:text-white">
                    {ticket.title}
                  </td>

                  <td className="px-4 py-4 text-gray-700 dark:text-gray-300">
                    {ticket.customer}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${statusClass(
                        ticket.status,
                      )}`}
                    >
                      {ticket.status}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${priorityClass(
                        ticket.priority,
                      )}`}
                    >
                      {ticket.priority}
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 text-gray-500 dark:text-gray-400">
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
