import React, { useEffect, useRef, useState } from 'react';
import { Camera, Heart, ThumbsDown, Settings, Download, Video, VideoOff, HelpCircle, MessageCircle,} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectGetCurUserResult } from '../RTK Query/Selectors';
import { useLazyGetCurrentUserQuery } from '../RTK Query/UserApi';

const UserProfilePage = () => {
  // const [user, setUser] = useState({
  //   username: 'Pawan Kumar Bind',
  //   profileImg: 'https://via.placeholder.com/150',
  //   hasChannel: true,
  // });
  const currUserData = useSelector((state) => selectGetCurUserResult(state)?.data );
  const [getCurUser , {data}] = useLazyGetCurrentUserQuery();
  useEffect(() =>{
    if( !userData){
       getCurUser(); 
    } 
  }, [] ); 
  const userData = currUserData || data;
console.log(userData);
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser((prev) => ({
        ...prev,
        profileImg: imageUrl,
      }));
    }
  };

  return (
    <div className="max-w-4xl lg:mt-14 md:mt-12 mx-auto px-1 sm:px-4 md:px-8 py-6">
      {/* Profile Header */}
      <div className="flex items-center gap-[10%] ml-2 sm:ml-8 mb-6">
        <div className="relative">
          <img
            src={ userData?.profilePic ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(userData?.name || 'User')}&background=0D8ABC&color=fff&bold=true`
              }
            alt="Profile"
            className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full object-cover border-2"
          />
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <button
            onClick={() => inputRef.current.click()}
            className="absolute bottom-1 right-1 bg-green-600 p-1.5 rounded-full text-white hover:bg-green-700 shadow-md"
          >
            <Camera size={18} />
          </button>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">{userData?.name}</h1>
          <p className="text-sm text-gray-500">{userData?.phone}</p>
        </div>
      </div>

      {/* Main Actions */}
      <div className="bg-white shadow rounded-lg divide-y divide-gray-200 overflow-hidden">
        <ActionRow icon={<Heart className="text-red-500" />} label="likes" />
        <ActionRow icon={<ThumbsDown className="text-blue-500" />} label="dislikes" />
        {userData?.hasChannel ? (
          <ActionRow icon={<Video className="text-green-600" />} label="My_Channel" />
        ) : (
          <ActionRow icon={<VideoOff className="text-gray-400" />} label="Create_Channel" />
        )}
        <ActionRow icon={<Settings className="text-gray-700" />} label="setting" />
        <ActionRow icon={<Download className="text-green-700" />} label="downloads" />
        <ActionRow icon={<HelpCircle className="text-yellow-600" />} label="Help_Center" />
        <ActionRow icon={<MessageCircle className="text-indigo-600" />} label="feedback" />
      </div>
    </div>
  );
};

// Reusable Action Row Component
const ActionRow = ({ icon, label }) => {
  const navigate = useNavigate();
  return (
    <button
      className="w-full flex items-center justify-between px-4 py-6 sm:py-5.5 lg:py-5 hover:bg-gray-50 transition text-left"
      onClick={() => navigate(`/${label}`)}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-gray-800 font-medium">{label}</span>
      </div>
      <span className="text-sm text-gray-400">{'>'}</span>
    </button>
  );
};

export default UserProfilePage;
