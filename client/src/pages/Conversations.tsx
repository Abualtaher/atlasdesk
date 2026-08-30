import { useState } from "react";

type Message = {
  id: number;
  sender: string;
  text: string;
};

type Conversation = {
  id: number;
  customer: string;
  subject: string;
  lastMessage: string;
  time: string;
  messages: Message[];
};

const conversations: Conversation[] = [
  {
    id: 1,
    customer: "Anna Svensson",
    subject: "Payment problem",
    lastMessage: "I have a problem with my payment.",
    time: "2 min ago",
    messages: [
      {
        id: 1,
        sender: "customer",
        text: "Hi, I have a problem wiht my payment.",
      },
      {
        id: 2,
        sender: "agent",
        text: "Hi Anna, I can hellp you with that.",
      },
    ],
  },
  {
    id: 2,
    customer: "John Smith",
    subject: "Refund request",
    lastMessage: "Can you help me wiht refund?",
    time: "15 min ago",
    messages: [],
  },
];

function Conversations() {
  const [selectedConversationId, setSelectedConversationId] = useState(1);

  const [newMessage, setNewMessage] = useState("");

  const selectedConversation = conversations.find(
    (conversation) => conversation.id === selectedConversationId,
  );
  return (
    <div>
      <h1 className="text-3xl font-bold">Conversations</h1>
      <p className="mt-2 text-gray-600">Manage customer conversations.</p>

      <div className="flex w-full">
        <div className="w-80">
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
        <div className="w-[600px] border border-gray-300 p-6">
          <h2 className="text-xl font-semibold">
            {selectedConversation?.customer}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            {selectedConversation?.subject}
          </p>

          <div className="mt-6 flex w-full flex-col gap-3">
            {selectedConversation?.messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-md rounded-lg  p-3 ${
                  message.sender === "agent"
                    ? "self-end bg-blue-600"
                    : "self-start bg-gray-300 "
                }`}
              >
                <p>{message.sender}</p>
                <p>{message.text}</p>
              </div>
            ))}
            <div className="flex gap-3">
              <input
                className="flex-1 border border-gray-300"
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <button className="border border-gray-300">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversations;
