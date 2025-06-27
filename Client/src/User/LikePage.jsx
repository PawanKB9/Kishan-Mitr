import React, { useState } from 'react';
import LikedVideoCard from './LikeCard';

const dummyLikedVideos = [
  {
    id: '1',
    title: 'How AI is Transforming Agriculture',
    channelName: 'AgroTech Today',
    thumbnail: 'https://source.unsplash.com/400x225/?farm,technology',
    duration: '12:34',
  },
  {
    id: '2',
    title: 'Smart Irrigation Techniques Explained',
    channelName: 'GreenGrow Media',
    thumbnail: 'https://source.unsplash.com/400x225/?irrigation',
    duration: '08:22',
  },
  {
    id: '3',
    title: 'Organic vs Chemical Fertilizer Comparison',
    channelName: 'Farming Academy',
    thumbnail: 'https://source.unsplash.com/400x225/?fertilizer,organic',
    duration: '14:45',
  },
];

const LikedVideosPage = () => {
  const [videos, setVideos] = useState(dummyLikedVideos);

  const handleDelete = (id) => {
    const confirm = window.confirm('Remove this video from your likes?');
    if (confirm) {
      setVideos(prev => prev.filter(video => video.id !== id));
    }
  };

  return (
    <div className="max-w-6xl md:mt-16 mx-auto px-1 sm:px-4 md:px-10 py-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">❤️ Liked Videos</h2>

      {videos.length === 0 ? (
        <p className="text-gray-500 text-center">No liked videos yet.</p>
      ) : (
        <div className="space-y-4">
          {videos.map(video => (
            <LikedVideoCard key={video.id} video={video} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedVideosPage;
