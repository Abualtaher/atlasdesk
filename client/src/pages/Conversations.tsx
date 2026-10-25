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
    const updatedConversations = conversationList.map((conversation) => {
      if (conversation.id !== conversationId) {
        return conversation;
      }

      return {
        ...conversation,
        isRead: true,
      };
    });

    setConversationList(updatedConversations);
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
    <div className="min-w-0">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Conversations
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Manage customer conversations.
        </p>
      </div>

      {/* Conversation layout */}
      <div className="mt-6 flex w-full flex-col gap-4 lg:flex-row">
        {/* Conversation list */}
        <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:w-80 lg:shrink-0">
          {conversationList.map((conversation) => (
            <div
              key={conversation.id}
              className={`cursor-pointer border-b border-gray-100 p-4 transition-colors last:border-b-0 dark:border-gray-700 ${
                selectedConversationId === conversation.id
                  ? "bg-blue-50 dark:bg-gray-700"
                  : "bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50"
              }`}
              onClick={() => {
                setSelectedConversationId(conversation.id);
                markAsRead(conversation.id);
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="min-w-0 break-words font-medium text-gray-900 dark:text-white">
                  {conversation.customer}
                </p>

                {!conversation.isRead && (
                  <span className="shrink-0 rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                    Unread
                  </span>
                )}
              </div>

              <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                {conversation.subject}
              </p>

              <p className="mt-1 truncate text-sm text-gray-500 dark:text-gray-400">
                {conversation.lastMessage}
              </p>

              <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                {conversation.time}
              </p>
            </div>
          ))}
        </div>

        {/* Chat panel */}
        <div className="flex min-h-[400px] min-w-0 flex-1 flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <div className="border-b border-gray-100 pb-4 dark:border-gray-700">
            <h2 className="break-words text-xl font-semibold text-gray-900 dark:text-white">
              {selectedConversation?.customer}
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {selectedConversation?.subject}
            </p>
          </div>

          {/* Messages */}
          <div className="flex flex-1 flex-col gap-3 py-6">
            {selectedConversation?.messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[85%] rounded-xl p-3 sm:max-w-md ${
                  message.sender === "agent"
                    ? "self-end bg-blue-600 text-white"
                    : "self-start bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100"
                }`}
              >
                <p className="text-xs font-medium capitalize opacity-70">
                  {message.sender}
                </p>

                <p className="mt-1 break-words">{message.text}</p>
              </div>
            ))}
          </div>

          {/* Message input */}
          <div className="flex flex-col gap-3 border-t border-gray-100 pt-4 dark:border-gray-700 sm:flex-row">
            <input
              className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-blue-900"
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
              className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversations;
