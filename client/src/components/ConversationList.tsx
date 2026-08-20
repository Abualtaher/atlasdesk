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
];

function ConversationList() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Recent Conversations
        </h2>
      </div>

      <div>
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className="flex items-center justify-between border-b border-gray-100 p-6 last:border-b-0"
          >
            <div>
              <p className="font-medium text-gray-900">
                {conversation.customer}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {conversation.message}
              </p>
            </div>

            <span className="text-sm text-gray-400">{conversation.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConversationList;
