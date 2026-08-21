import { useState } from "react";
type Customer = {
  id: number;
  name: string;
  email: string;
  status: string;
  tickets: number;
};

const customers: Customer[] = [
  {
    id: 1,
    name: "Anna Svensson",
    email: "anna@example.com",
    status: "Active",
    tickets: 3,
  },
  {
    id: 2,
    name: "John Smith",
    email: "john@example.com",
    status: "Active",
    tickets: 1,
  },
  {
    id: 3,
    name: "Maria Andersson",
    email: "maria@example.com",
    status: "Inactive",
    tickets: 5,
  },
];

const StatusClass = (status: string) => {
  return status === "Active"
    ? "text-green-500  bg-green-100"
    : "text-red-500  bg-red-100  ";
};

function Customers() {
  const [search, setSearch] = useState("");

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Customers</h1>

      <p className="mt-2 text-gray-600">Manage your customers.</p>

      <input
        type="text"
        placeholder="Search customers..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="mt-6 w-full max-w-md rounded-lg border border-gray-300 bg-white px-4 py-2"
      />
      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
        <table className=" w-full text-left">
          <thead>
            <tr>
              <th className="p-4 text-sm text-gray-500">Customer</th>
              <th className="p-4 text-sm text-gray-500">Email</th>
              <th className="p-4 text-sm text-gray-500">Status</th>
              <th className="p-4 text-sm text-gray-500">Tickets</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id} className="border-t border-gray-100">
                <td className="p-4">{customer.name}</td>
                <td className="p-4">{customer.email}</td>
                <td>
                  <span
                    className={`rounded-full px-3 py-1 text-sm   ${StatusClass(customer.status)} `}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="p-4">{customer.tickets}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;
