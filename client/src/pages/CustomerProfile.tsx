import { useParams } from "react-router-dom";
import { customers } from "../data/customers";

function CustomerProfile() {
  const { id } = useParams();

  const customer = customers.find((customer) => customer.id === Number(id));

  if (!customer) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Customer not found
        </h1>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          The customer you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="min-w-0">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
        Customer Profile
      </h1>

      {/* Customer information */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <div>
          <h2 className="break-words text-xl font-semibold text-gray-900 dark:text-white">
            {customer.name}
          </h2>

          <p className="mt-1 break-words text-gray-500 dark:text-gray-400">
            {customer.email}
          </p>
        </div>

        {/* Customer details */}
        <div className="mt-6 grid grid-cols-1 gap-6 border-t border-gray-100 pt-6 dark:border-gray-700 sm:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>

            <span
              className={`mt-2 inline-block rounded-full px-3 py-1 text-sm font-medium ${
                customer.status === "Active"
                  ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                  : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300"
              }`}
            >
              {customer.status}
            </span>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Tickets</p>

            <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
              {customer.tickets}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;
