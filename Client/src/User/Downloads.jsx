import React, { useState } from 'react';
import DownloadedVideoCard from './DownloadCard';

const dummyDownloads = [
  {
    id: 'd1',
    title: 'Offline Crop Monitoring Tutorial',
    channelName: 'Smart Farm Academy',
    thumbnail: 'https://source.unsplash.com/400x225/?offline,farm',
    duration: '10:00',
  },
  {
    id: 'd2',
    title: 'Downloadable Guide to Organic Farming',
    channelName: 'Green Roots',
    thumbnail: 'https://source.unsplash.com/400x225/?guide,farming',
    duration: '07:30',
  },
  {
    id: 'd3',
    title: 'Offline Tips for Pesticide Management',
    channelName: 'AgriHelp',
    thumbnail: 'https://source.unsplash.com/400x225/?pesticide',
    duration: '09:40',
  },
];

const DownloadsPage = () => {
  const [videos, setVideos] = useState(dummyDownloads);

  const handleDelete = (id) => {
    const confirm = window.confirm('Remove this video from your downloads?');
    if (confirm) {
      setVideos((prev) => prev.filter((video) => video.id !== id));
    }
  };

  return (
    <div className="max-w-6xl md:mt-16 mx-auto px-1 sm:px-4 md:px-10 py-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">⬇️ Downloaded Videos</h2>

      {videos.length === 0 ? (
        <p className="text-gray-500 text-center">No downloaded videos available.</p>
      ) : (
        <div className="space-y-4">
          {videos.map((video) => (
            <DownloadedVideoCard key={video.id} video={video} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DownloadsPage;
