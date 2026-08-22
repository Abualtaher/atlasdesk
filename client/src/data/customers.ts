export type Customer = {
  id: number;
  name: string;
  email: string;
  status: string;
  tickets: number;
};

export const customers: Customer[] = [
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
