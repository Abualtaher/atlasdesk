import { useState } from "react";

function Settings() {
  const [userName, setUserName] = useState("Alex Johnson");
  const [email, setEmail] = useState("alex@atlasdesk.com");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Settings
        </h1>

        <p className="mt-2 text-gray-600">Manage your AtlasDesk settings.</p>
      </div>

      <div className="space-y-6">
        {/* Profile */}
        <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-gray-900">Profile</h2>

            <p className="mt-1 text-sm text-gray-500">
              Update your personal information.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Name
              </label>

              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>
        </section>

        {/* Preferences */}
        <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-gray-900">Preferences</h2>

            <p className="mt-1 text-sm text-gray-500">
              Control notifications and appearance.
            </p>
          </div>

          <div className="space-y-4">
            {/* Email notifications */}
            <label className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
              <div className="min-w-0 pr-4">
                <p className="font-medium text-gray-900">Email notifications</p>

                <p className="mt-1 text-sm text-gray-500">
                  Receive updates about activity in AtlasDesk.
                </p>
              </div>

              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
                className="h-5 w-5 shrink-0 rounded border-gray-300"
              />
            </label>

            {/* Dark mode */}
            <label className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
              <div className="min-w-0 pr-4">
                <p className="font-medium text-gray-900">Dark mode</p>

                <p className="mt-1 text-sm text-gray-500">
                  Use a darker interface theme.
                </p>
              </div>

              <input
                type="checkbox"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                className="h-5 w-5 shrink-0 rounded border-gray-300"
              />
            </label>
          </div>
        </section>

        {/* Save */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {saved && (
              <p className="text-sm font-medium text-green-700">
                Settings saved
              </p>
            )}
          </div>

          <button
            onClick={handleSave}
            className="w-full rounded-lg bg-gray-900 px-5 py-3 font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 sm:w-auto"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
