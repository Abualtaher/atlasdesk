import { tickets } from "../data/tickets";

function Tickets() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Tickets</h1>
      <p className="mt-2 text-gray-600">Manage customer support tickets.</p>
      {tickets.map((ticket) => (
        <div key={ticket.id}>
          <p>{ticket.customer}</p>
          <p>{ticket.status}</p>
          <p>{ticket.priority}</p>
          <p>{ticket.createdAt}</p>
        </div>
      ))}
    </div>
  );
}

export default Tickets;
