import { useState } from "react";

const customers = [
  { id: 1, name: "Anna Svensson", email: "anna@example.com" },
  { id: 2, name: "John Smith", email: "john@example.com" },
  { id: 3, name: "Maria Andersson", email: "maria@example.com" },
];

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

      <p className="mt-4 text-gray-600">You searched for: {search}</p>

      <div className="mt-6 space-y-3">
        {filteredCustomers.map((customer) => (
          <div
            key={customer.id}
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            <p className="font-medium text-gray-900">{customer.name}</p>

            <p className="text-sm text-gray-500">{customer.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customers;
