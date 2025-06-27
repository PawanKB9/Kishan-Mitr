import React, { useState } from 'react';

const VideoFeedbackForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    issueType: '',
    contentQuality: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Video Feedback:', form);
    if (onSubmit) onSubmit(form);
    alert('Thanks for your feedback!');
    setForm({ issueType: '', contentQuality: '', comment: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow space-y-10"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-green-700 text-center">
        🎥 Video Feedback
      </h2>

      {/* Select dropdown */}
      <div>
        <label className="block mb-2 sm:font-semibold sm:text-lg font-medium text-gray-700">
          Select the issue (if any)
        </label>
        <select
          name="issueType"
          value={form.issueType}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
        >
          <option className='bg-green-100  rounded-md' value="">-- Choose an option --</option>
          <option className='bg-green-200  rounded-md' value="not-related">Not related to farming</option>
          <option className='bg-green-100  rounded-md' value="misleading">Misleading Content</option>
          <option className='bg-green-200  rounded-md' value="inappropriate">Inappropriate Content</option>
          <option className='bg-green-100  rounded-md' value="sexual">Sexual Content</option>
          <option className='bg-green-200  rounded-md' value="none">No Issue</option>
        </select>
      </div>

      {/* Content quality */}
      <div>
        <label className="block sm:font-semibold sm:text-lg mb-2 font-medium text-gray-700">
          How would you rate this content?
        </label>
        <div className="flex gap-4">
          {['good', 'bad'].map((val) => (
            <label key={val} className="flex items-center gap-2">
              <input
                type="radio"
                name="contentQuality"
                value={val}
                checked={form.contentQuality === val}
                onChange={handleChange}
              />
              {val === 'good' ? 'Good' : 'Bad'}
            </label>
          ))}
        </div>
      </div>

      {/* Optional comment */}
      <div>
        <label className="block mb-1 sm:font-semibold sm:text-lg font-medium text-gray-700">Additional Comments (optional)</label>
        <textarea
          name="comment"
          value={form.comment}
          onChange={handleChange}
          rows={4}
          placeholder="Write any details..."
          className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full my-6 sm:text-xl sm:font-bold text-lg font-semibold bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default VideoFeedbackForm;
