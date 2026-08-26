import { useState } from "react";

type Conversation = {
  id: number;
  customer: string;
  subject: string;
  lastMessage: string;
  time: string;
};

const conversations: Conversation[] = [
  {
    id: 1,
    customer: "Anna Svensson",
    subject: "Payment problem",
    lastMessage: "I have a problem with my payment.",
    time: "2 min ago",
  },
  {
    id: 2,
    customer: "John Smith",
    subject: "Refund request",
    lastMessage: "Can you help me wiht refund?",
    time: "15 min ago",
  },
];

function Conversations() {
  const [selectedConversationId, setSelectedConversationId] = useState(1);
  const selectedConversation = conversations.find(
    (conversation) => conversation.id === selectedConversationId,
  );
  return (
    <div>
      <h1 className="text-3xl font-bold">Conversations</h1>
      <p className="mt-2 text-gray-600">Manage customer conversations.</p>

      <div className="flex">
        <div>
          {conversations.map((conversation) => (
            <div
              className={`p-4 cursor-pointer ${selectedConversationId === conversation.id ? "bg-gray-100" : "bg-white"}`}
              key={conversation.id}
              onClick={() => setSelectedConversationId(conversation.id)}
            >
              <p> {conversation.customer}</p>
              <p>{conversation.subject}</p>
              <p>{conversation.lastMessage}</p>

              <p>{conversation.time}</p>
            </div>
          ))}
        </div>
        <div>
          <p>{selectedConversation?.customer}</p>
        </div>
      </div>
    </div>
  );
}

export default Conversations;
