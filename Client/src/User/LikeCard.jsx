import React from 'react';
import { Trash2 } from 'lucide-react';

const LikedVideoCard = ({ video, onDelete }) => {
  return (
    <div className="flex gap-4 w-full max-w-4xl bg-white shadow-sm border rounded-lg overflow-hidden hover:shadow-md transition">
      {/* Thumbnail */}
      <div className="relative w-[160px] sm:w-[200px] lg:w-[240px] aspect-video bg-gray-200 flex-shrink-0">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <span className="absolute bottom-1 right-1 text-xs px-1.5 py-0.5 bg-black bg-opacity-70 text-white rounded">
          {video.duration}
        </span>
      </div>

      {/* Info Section */}
      <div className="flex flex-col justify-between flex-1 py-2 pr-3">
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2">
            {video.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">{video.channelName}</p>
        </div>

        {/* Delete Button */}
        <button
          onClick={() => onDelete(video.id)}
          className="mt-2 ml-auto text-red-500 hover:text-red-700 transition"
          title="Remove from Likes"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default LikedVideoCard;
