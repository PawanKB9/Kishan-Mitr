// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useLogOutMutation } from '../RTK Query/UserApi';
// import { toast } from 'react-hot-toast';

// const SettingsPage = () => {
//   const navigate = useNavigate();
//   const [logout, setLogout] = useState(false);
//   const [theme, setTheme] = useState('light');
//   const [language, setLanguage] = useState('hi');

//   const [triggerLogout] = useLogOutMutation();

//   const handleThemeToggle = () => {
//     setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
//     // Apply theme logic here if needed
//   };

//   const handleLogoutToggle = async () => {
//     setLogout(true);
//     try {
//       if (!logout) {
//       await triggerLogout().unwrap();
//       toast.success('LogOut successfully!');
//       navigate('/login');
//     }
//     } catch (err) {
//       setLogout(false);
//       console.error('logout error:' , err);
//     }
//   };

//   return (
//     <div className="max-w-3xl sm:mt-16 mx-auto p-4 sm:p-6">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">⚙️ Settings</h2>

//       <div className="space-y-8 text-lg bg-white p-4 sm:p-6 shadow-md rounded-md">
//         {/* Toggle Logout */}
//         <div className="flex items-center text-lg p-2 justify-between">
//           <span className="font-medium text-gray-700">Logout</span>
//           <label className="inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="sr-only"
//               checked={logout}
//               onChange={handleLogoutToggle}
//             />
//             <div className="w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 peer-focus:ring-green-500 peer-checked:bg-green-500 transition-all relative">
//               <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform peer-checked:translate-x-5"></div>
//             </div>
//           </label>
//         </div>

//         {/* Change Language */}
//         <div className="flex flex-col text-lg p-2 sm:flex-row sm:items-center sm:justify-between gap-2">
//           <label htmlFor="language" className="font-medium text-gray-700">Change Language</label>
//           <select
//             id="language"
//             value={language}
//             onChange={(e) => setLanguage(e.target.value)}
//             className="border border-gray-300 rounded-md px-10 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
//           >
//             <option value="hi">Hindi</option>
//             <option value="bn">Bengali</option>
//             <option value="gu">Gujarati</option>
//             <option value="mr">Marathi</option>
//             <option value="ta">Tamil</option>
//             <option value="te">Telugu</option>
//             <option value="kn">Kannada</option>
//             <option value="ml">Malayalam</option>
//             <option value="pa">Punjabi</option>
//             <option value="ur">Urdu</option>
//           </select>
//         </div>

//         {/* Change Password */}
//         <div className="flex justify-between p-2 text-lg items-center">
//           <span className="font-medium text-gray-700">Change Password</span>
//           <button
//             onClick={() => navigate('/change_password')}
//             className="text-green-600 font-medium hover:underline"
//           >
//             Edit
//           </button>
//         </div>

//         {/* Toggle Theme */}
//         <div className="flex items-center text-lg p-2 my-10 justify-between">
//           <span className="font-medium text-gray-700">Change Theme</span>
//           <label className="inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="sr-only"
//               checked={theme === 'dark'}
//               onChange={handleThemeToggle}
//             />
//             <div className="w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 peer-focus:ring-green-500 peer-checked:bg-green-500 transition-all relative">
//               <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform peer-checked:translate-x-5"></div>
//             </div>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingsPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogOutMutation } from '../RTK Query/UserApi';
import { toast } from 'react-hot-toast';
import { LogOut, UserCog, Phone } from 'lucide-react';

const SettingsPage = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('en');

  const [triggerLogout] = useLogOutMutation();

  const handleLogout = async () => {
    try {
      await triggerLogout().unwrap();
      toast.success('Logged out successfully!');
      navigate('/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <div className="max-w-3xl sm:mt-16 mx-auto p-4 sm:p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">⚙️ Settings</h2>

      <div className="space-y-8 text-lg bg-white p-4 sm:p-6 shadow-md rounded-md">
        {/* Logout Button */}
        <div className="flex justify-between p-2 text-lg items-center">
          <span className="font-medium text-gray-700">Logout</span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 font-medium hover:underline"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>

        {/* Change Language */}
        <div className="flex  text-lg p-2 m:items-center justify-between gap-2">
          <label htmlFor="language" className="font-medium text-gray-700">Language</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border border-gray-300 rounded-md px-2 sm:px-10 py-1.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="hi">Hindi</option>
            <option value="en">English</option>
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
            className="text-green-500 font-medium hover:underline"
          >
            Edit
          </button>
        </div>

        {/* Update User */}
        <div className="flex justify-between p-2 text-lg items-center">
          <span className="font-medium text-gray-700">Update Profile</span>
          <button
            onClick={() => navigate('/update-profile')}
            className="flex items-center gap-2 text-green-500 font-medium hover:underline"
          >
            <UserCog size={18} /> Update
          </button>
        </div>

        {/* Change Contact */}
        <div className="flex justify-between p-2 text-lg items-center">
          <span className="font-medium text-gray-700">Change Contact</span>
          <button
            onClick={() => navigate('/change_contact')}
            className="flex items-center gap-2 text-green-500 font-medium hover:underline"
          >
            <Phone size={18} /> Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

