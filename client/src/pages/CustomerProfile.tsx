import { useParams } from "react-router-dom";
import { customers } from "../data/customers";
function CustomerProfile() {
  const { id } = useParams();
  const customer = customers.find((customer) => customer.id === Number(id));
  if (!customer) {
    return (
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
        <h1>Customer not found</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Customer Profile</h1>
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-gray-800">{customer.name}</h2>
        <p className="mt-2 text-gray-600"> {customer.email}</p>
        <div className="mt-6 flex gap-12">
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p className="mt-1 font-medium">{customer.status}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Tickets</p>
            <p className="mt-1 font-medium">{customer.tickets}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomerProfile;
