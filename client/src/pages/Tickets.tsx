import { tickets } from "../data/tickets";

function Tickets() {
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
      <div>
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
            {tickets.map((ticket) => (
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

                <td className="px-4 py-4 text-gray-500">{ticket.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tickets;
