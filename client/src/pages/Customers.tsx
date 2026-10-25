import { Link } from "react-router-dom";
import { useState } from "react";
import { customers } from "../data/customers";

const StatusClass = (status: string) => {
  return status === "Active"
    ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
    : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300";
};

function Customers() {
  const [search, setSearch] = useState("");

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-w-0">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Customers
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Manage your customers.
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search customers..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="mt-6 w-full max-w-md rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-blue-900"
      />

      {/* Mobile cards */}
      <div className="mt-6 space-y-3 md:hidden">
        {filteredCustomers.map((customer) => (
          <Link
            key={customer.id}
            to={`/customers/${customer.id}`}
            className="block rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-750"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="break-words font-semibold text-gray-900 dark:text-white">
                  {customer.name}
                </p>

                <p className="mt-1 break-words text-sm text-gray-500 dark:text-gray-400">
                  {customer.email}
                </p>
              </div>

              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${StatusClass(
                  customer.status,
                )}`}
              >
                {customer.status}
              </span>
            </div>

            <div className="mt-4 border-t border-gray-100 pt-3 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
              Tickets:{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                {customer.tickets}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop table */}
      <div className="mt-6 hidden overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 md:block">
        <table className="w-full min-w-[700px] text-left">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="p-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                Customer
              </th>

              <th className="p-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                Email
              </th>

              <th className="p-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                Status
              </th>

              <th className="p-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                Tickets
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="border-t border-gray-100 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50"
              >
                <td className="p-4">
                  <Link
                    to={`/customers/${customer.id}`}
                    className="font-medium text-gray-900 hover:underline dark:text-white"
                  >
                    {customer.name}
                  </Link>
                </td>

                <td className="p-4 text-gray-600 dark:text-gray-300">
                  {customer.email}
                </td>

                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${StatusClass(
                      customer.status,
                    )}`}
                  >
                    {customer.status}
                  </span>
                </td>

                <td className="p-4 text-gray-600 dark:text-gray-300">
                  {customer.tickets}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty state */}
      {filteredCustomers.length === 0 && (
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
          <p className="font-medium text-gray-900 dark:text-white">
            No customers found
          </p>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Try changing your search.
          </p>
        </div>
      )}
    </div>
  );
}

export default Customers;
