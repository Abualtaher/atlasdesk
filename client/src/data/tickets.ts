export type Ticket = {
  id: number;
  title: string;
  customer: string;
  status: string;
  priority: string;
  createdAt: string;
};

export const tickets: Ticket[] = [
  {
    id: 1,
    title: "Help needed to fix payment.",
    customer: "Anna Svensson",
    status: "Open",
    priority: "Medium",
    createdAt: "Monday 21:09",
  },
  {
    id: 2,
    title: "Help needed to get refunded.",
    customer: "John Smith",
    status: "In Progress",
    priority: "High",
    createdAt: "Friday 15:30",
  },
  {
    id: 3,
    title: "Help needed.",
    customer: "Maria Andersson",
    status: "Closed",
    priority: "Low",
    createdAt: "Friday 12:30",
  },
];
