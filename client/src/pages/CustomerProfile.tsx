import { useParams } from "react-router-dom";
import { customers } from "../data/customers";

function CustomerProfile() {
  const { id } = useParams();

  const customer = customers.find((customer) => customer.id === Number(id));

  if (!customer) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h1 className="text-xl font-semibold text-gray-900">
          Customer not found
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          The customer you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Customer Profile
      </h1>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 sm:p-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {customer.name}
          </h2>

          <p className="mt-1 break-words text-gray-500">{customer.email}</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 border-t border-gray-100 pt-6 sm:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">Status</p>

            <span
              className={`mt-2 inline-block rounded-full px-3 py-1 text-sm font-medium ${
                customer.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {customer.status}
            </span>
          </div>

          <div>
            <p className="text-sm text-gray-500">Tickets</p>

            <p className="mt-2 text-lg font-semibold text-gray-900">
              {customer.tickets}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;
