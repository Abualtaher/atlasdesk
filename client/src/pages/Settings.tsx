import { useState } from "react";
import { useOutletContext } from "react-router-dom";

type OutletContext = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

function Settings() {
  const { darkMode, setDarkMode } = useOutletContext<OutletContext>();

  const [userName, setUserName] = useState("Alex Johnson");
  const [email, setEmail] = useState("alex@atlasdesk.com");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
  };

  return (
    <div className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Settings
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Manage your AtlasDesk settings.
        </p>
      </div>

      <div className="space-y-6">
        {/* Profile */}
        <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Profile
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Update your personal information.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="userName"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>

              <input
                id="userName"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:ring-blue-900"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:ring-blue-900"
              />
            </div>
          </div>
        </section>

        {/* Preferences */}
        <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Preferences
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Control notifications and appearance.
            </p>
          </div>

          <div className="space-y-4">
            {/* Email notifications */}
            <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-gray-200 p-4 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50">
              <div className="min-w-0">
                <p className="font-medium text-gray-900 dark:text-white">
                  Email notifications
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Receive updates about activity in AtlasDesk.
                </p>
              </div>

              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
                className="h-5 w-5 shrink-0 cursor-pointer rounded border-gray-300 accent-blue-600"
              />
            </label>

            {/* Dark mode */}
            <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-gray-200 p-4 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50">
              <div className="min-w-0">
                <p className="font-medium text-gray-900 dark:text-white">
                  Dark mode
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Use a darker interface theme.
                </p>
              </div>

              <input
                type="checkbox"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                className="h-5 w-5 shrink-0 cursor-pointer rounded border-gray-300 accent-blue-600"
              />
            </label>
          </div>
        </section>

        {/* Save */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {saved && (
              <p className="text-sm font-medium text-green-700 dark:text-green-400">
                Settings saved successfully.
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleSave}
            className="w-full rounded-lg bg-gray-900 px-5 py-3 font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-offset-gray-950 sm:w-auto"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
