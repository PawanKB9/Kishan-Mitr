import React, { useState } from 'react';
import DislikedVideoCard from './DislikeCard';

const dummyDislikedVideos = [
  {
    id: 'a1',
    title: 'Why Traditional Farming May Be Failing',
    channelName: 'OldSchool Farmer',
    thumbnail: 'https://source.unsplash.com/400x225/?farming,dry',
    duration: '09:10',
  },
  {
    id: 'a2',
    title: 'Worst Fertilizer Mistakes Farmers Make',
    channelName: 'AgriFails',
    thumbnail: 'https://source.unsplash.com/400x225/?failed,crops',
    duration: '06:55',
  },
  {
    id: 'a3',
    title: 'Unrealistic Crop Yield Myths Debunked',
    channelName: 'Farm Truth',
    thumbnail: 'https://source.unsplash.com/400x225/?myth,harvest',
    duration: '11:05',
  },
];

const DislikedVideosPage = () => {
  const [videos, setVideos] = useState(dummyDislikedVideos);

  const handleDelete = (id) => {
    const confirm = window.confirm('Remove this video from your dislikes?');
    if (confirm) {
      setVideos((prev) => prev.filter((video) => video.id !== id));
    }
  };

  return (
    <div className="max-w-6xl md:mt-16 mx-auto px-1 sm:px-4 md:px-10 py-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">👎 Disliked Videos</h2>

      {videos.length === 0 ? (
        <p className="text-gray-500 text-center">No disliked videos yet.</p>
      ) : (
        <div className="space-y-4">
          {videos.map((video) => (
            <DislikedVideoCard key={video.id} video={video} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DislikedVideosPage;
