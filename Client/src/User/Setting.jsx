import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('hi');

  const handleThemeToggle = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    // Apply theme logic here if needed
  };

  const handleLogoutToggle = () => {
    setLogout(prev => !prev);
    if (!logout) {
      // logout logic if needed
    }
  };

  return (
    <div className="max-w-3xl sm:mt-16 mx-auto p-4 sm:p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">⚙️ Settings</h2>

      <div className="space-y-8 text-lg bg-white p-4 sm:p-6 shadow-md rounded-md">
        {/* Toggle Logout */}
        <div className="flex items-center text-lg p-2 justify-between">
          <span className="font-medium text-gray-700">Logout</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={logout}
              onChange={handleLogoutToggle}
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 peer-focus:ring-green-500 peer-checked:bg-green-500 transition-all relative">
              <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform peer-checked:translate-x-5"></div>
            </div>
          </label>
        </div>

        {/* Change Language */}
        <div className="flex flex-col text-lg p-2 sm:flex-row sm:items-center sm:justify-between gap-2">
          <label htmlFor="language" className="font-medium text-gray-700">Change Language</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border border-gray-300 rounded-md px-10 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
            <option value="gu">Gujarati</option>
            <option value="mr">Marathi</option>
            <option value="ta">Tamil</option>
            <option value="te">Telugu</option>
            <option value="kn">Kannada</option>
            <option value="ml">Malayalam</option>
            <option value="pa">Punjabi</option>
            <option value="ur">Urdu</option>
          </select>
        </div>

        {/* Change Password */}
        <div className="flex justify-between p-2 text-lg items-center">
          <span className="font-medium text-gray-700">Change Password</span>
          <button
            onClick={() => navigate('/change_password')}
            className="text-green-600 font-medium hover:underline"
          >
            Edit
          </button>
        </div>

        {/* Toggle Theme */}
        <div className="flex items-center text-lg p-2 my-10 justify-between">
          <span className="font-medium text-gray-700">Change Theme</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={theme === 'dark'}
              onChange={handleThemeToggle}
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 peer-focus:ring-green-500 peer-checked:bg-green-500 transition-all relative">
              <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform peer-checked:translate-x-5"></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
