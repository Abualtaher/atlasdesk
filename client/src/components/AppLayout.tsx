import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Bell, Menu } from "lucide-react";
import Sidebar from "./Sidebar";

type Notification = {
  id: number;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
};

function AppLayout() {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "New Message",
      message: "You have received a new message.",
      time: "2 hours ago",
      isRead: false,
    },
    {
      id: 2,
      title: "System Update",
      message: "A new system update is available.",
      time: "1 day ago",
      isRead: true,
    },
  ]);

  const unreadCount = notifications.filter(
    (notification) => !notification.isRead,
  ).length;

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  const markAsRead = (notificationId: number) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id !== notificationId) {
        return notification;
      }

      return {
        ...notification,
        isRead: true,
      };
    });

    setNotifications(updatedNotifications);
  };

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      isRead: true,
    }));

    setNotifications(updatedNotifications);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-950">
        <Sidebar isOpen={mobileMenuOpen} onClose={handleCloseMenu} />

        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/40 md:hidden"
            onClick={handleCloseMenu}
          />
        )}

        <main className="min-w-0 flex-1 p-4 md:p-8">
          {/* Top bar */}
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-lg bg-white p-2 text-gray-700 shadow-sm transition hover:bg-gray-50 md:hidden dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            {/* Notification bell and dropdown */}
            <div className="relative ml-auto">
              <button
                className="relative rounded-lg bg-white p-2 text-gray-700 shadow-sm transition hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                aria-label="Notifications"
                aria-expanded={notificationOpen}
                onClick={() => setNotificationOpen(!notificationOpen)}
              >
                {unreadCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-semibold text-white">
                    {unreadCount}
                  </span>
                )}

                <Bell size={22} />
              </button>

              {notificationOpen && (
                <div className="absolute right-0 top-12 z-50 w-80 max-w-[calc(100vw-2rem)] rounded-xl border border-gray-200 bg-white p-4 shadow-xl dark:border-gray-700 dark:bg-gray-800">
                  {/* Dropdown header */}
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Notifications
                    </h3>

                    {unreadCount > 0 ? (
                      <button
                        onClick={markAllAsRead}
                        className="shrink-0 text-xs font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Mark all as read
                      </button>
                    ) : (
                      <span className="shrink-0 text-xs text-gray-500 dark:text-gray-400">
                        All caught up
                      </span>
                    )}
                  </div>

                  {/* Notification list */}
                  {notifications.length === 0 ? (
                    <p className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
                      You're all caught up!
                    </p>
                  ) : (
                    <ul className="max-h-96 space-y-2 overflow-y-auto">
                      {notifications.map((notification) => (
                        <li key={notification.id}>
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className={`w-full rounded-lg p-3 text-left transition-colors ${
                              notification.isRead
                                ? "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                                : "bg-blue-50 hover:bg-blue-100 dark:bg-blue-950 dark:hover:bg-blue-900"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="font-semibold text-gray-900 dark:text-white">
                                {notification.title}
                              </h4>

                              {!notification.isRead && (
                                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                              )}
                            </div>

                            <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                              {notification.message}
                            </p>

                            <span className="mt-2 block text-xs text-gray-500 dark:text-gray-400">
                              {notification.time}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Current page */}
          <Outlet context={{ darkMode, setDarkMode }} />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
