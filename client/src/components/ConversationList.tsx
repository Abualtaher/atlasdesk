type Conversation = {
  id: number;
  customer: string;
  message: string;
  time: string;
  status: string;
  tickets: number;
};

const conversations: Conversation[] = [
  {
    id: 1,
    customer: "Anna Svensson",
    message: "I have a problem with my payment.",
    time: "2 min ago",
    status: "Active",
    tickets: 3,
  },
  {
    id: 2,
    customer: "John Smith",
    message: "Can you help me with my refund?",
    time: "15 min ago",
    status: "Active",
    tickets: 1,
  },
  {
    id: 3,
    customer: "Maria Andersson",
    message: "I can't log into my account.",
    time: "32 min ago",
    status: "Inactive",
    tickets: 5,
  },
  {
    id: 4,
    customer: "David Johnson",
    message: "I need assistance with my order.",
    time: "1 hour ago",
    status: "Active",
    tickets: 2,
  },
  {
    id: 5,
    customer: "Emma Johansson",
    message: "My account has been locked.",
    time: "2 hours ago",
    status: "Inactive",
    tickets: 4,
  },
];

function ConversationList() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-800">
      <div className="border-b border-gray-200 p-4 dark:border-gray-700 sm:p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Conversations
        </h2>
      </div>

      <div>
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className="flex flex-col gap-3 border-b border-gray-100 p-4 transition-colors last:border-b-0 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50 sm:flex-row sm:items-center sm:justify-between sm:p-6"
          >
            <div className="min-w-0">
              <p className="font-medium text-gray-900 dark:text-white">
                {conversation.customer}
              </p>

              <p className="mt-1 break-words text-sm text-gray-500 dark:text-gray-400">
                {conversation.message}
              </p>
            </div>

            <span className="shrink-0 text-sm text-gray-400 dark:text-gray-500">
              {conversation.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConversationList;
