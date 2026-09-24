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
  isRead: boolean;
};

const conversations: Conversation[] = [
  {
    id: 1,
    customer: "Anna Svensson",
    subject: "Payment problem",
    lastMessage: "I have a problem with my payment.",
    time: "2 min ago",
    isRead: true,
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
    isRead: false,
    messages: [
      {
        id: 3,
        sender: "customer",
        text: "Hi, I need help with my refund i did not get it yet.",
      },
    ],
  },
];

function Conversations() {
  const [selectedConversationId, setSelectedConversationId] = useState(1);

  const [newMessage, setNewMessage] = useState("");
  const [conversationList, setConversationList] = useState(conversations);

  const selectedConversation = conversationList.find(
    (conversation) => conversation.id === selectedConversationId,
  );

  const markAsRead = (conversationId: number) => {
    const updatConversations = conversationList.map((conversation) => {
      if (conversation.id !== conversationId) {
        return conversation;
      }
      return {
        ...conversation,
        isRead: true,
      };
    });
    setConversationList(updatConversations);
  };

  const handleSend = () => {
    if (!newMessage.trim()) {
      return;
    }
    const messageToSend = {
      id: Date.now(),
      sender: "agent",
      text: newMessage,
    };

    const updatedConversations = conversationList.map((conversation) => {
      if (conversation.id !== selectedConversationId) {
        return conversation;
      }

      return {
        ...conversation,
        messages: [...conversation.messages, messageToSend],
        lastMessage: newMessage,
      };
    });
    setConversationList(updatedConversations);
    setNewMessage("");
  };
  return (
    <div>
      <h1 className="text-2xl font-bold sm:text-3xl">Conversations</h1>
      <p className="mt-2 text-gray-600">Manage customer conversations.</p>

      <div className="mt-6 flex w-full flex-col gap-4 lg:flex-row">
        <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white lg:w-80">
          {conversationList.map((conversation) => (
            <div
              className={`cursor-pointer border-b border-gray-100 p-4 last:border-b-0 ${
                selectedConversationId === conversation.id
                  ? "bg-gray-100"
                  : "bg-white"
              }`}
              key={conversation.id}
              onClick={() => {
                setSelectedConversationId(conversation.id);
                markAsRead(conversation.id);
              }}
            >
              {!conversation.isRead && (
                <span className="mb-2 inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                  Unread
                </span>
              )}

              <p className="font-medium text-gray-900">
                {conversation.customer}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-700">
                {conversation.subject}
              </p>
              <p className="mt-1 truncate text-sm text-gray-500">
                {conversation.lastMessage}
              </p>
              <p className="mt-2 text-xs text-gray-400">{conversation.time}</p>
            </div>
          ))}
        </div>

        <div className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white p-4 sm:p-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {selectedConversation?.customer}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {selectedConversation?.subject}
          </p>

          <div className="mt-6 flex w-full flex-col gap-3">
            {selectedConversation?.messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[85%] rounded-lg p-3 sm:max-w-md ${
                  message.sender === "agent"
                    ? "self-end bg-blue-600 text-white"
                    : "self-start bg-gray-200 text-gray-900"
                }`}
              >
                <p className="text-xs font-medium opacity-70">
                  {message.sender}
                </p>
                <p className="mt-1 break-words">{message.text}</p>
              </div>
            ))}

            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                className="min-w-0 flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSend();
                  }
                }}
                placeholder="Type a message..."
              />

              <button
                className="rounded-lg bg-gray-900 px-5 py-3 font-medium text-white transition hover:bg-gray-800"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversations;
