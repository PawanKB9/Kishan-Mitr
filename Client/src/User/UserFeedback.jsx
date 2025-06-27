import React, { useState } from 'react';
import { Star } from 'lucide-react';

const UserFeedbackForm = () => {
  const [form, setForm] = useState({
    usefulness: '',
    accuracy: '',
    feedback: '',
    rating: 0,
  });
  const [hoveredStar, setHoveredStar] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (index) => {
    setForm(prev => ({ ...prev, rating: index + 1 }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted feedback:', form);
    alert('Thanks for your feedback!');
    setForm({
      usefulness: '',
      accuracy: '',
      feedback: '',
      rating: 0,
    });
    setHoveredStar(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mt-8 md:mt-16 mx-auto bg-white p-6 sm:p-8 rounded-lg shadow space-y-6"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-green-700 text-center">
        🙋 Feedback on AI Suggestions
      </h2>

      {/* Usefulness */}
      <div>
        <label className="block mb-2 sm:font-semibold sm:text-lg font-medium text-gray-700">
          Were the suggestions helpful?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="usefulness"
              value="helpful"
              checked={form.usefulness === 'helpful'}
              onChange={handleChange}
            />
            Helpful
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="usefulness"
              value="useless"
              checked={form.usefulness === 'useless'}
              onChange={handleChange}
            />
            Useless
          </label>
        </div>
      </div>

      {/* Accuracy */}
      <div>
        <label className="block mb-2 sm:font-semibold sm:text-lg font-medium text-gray-700">
          Were the AI-generated suggestions accurate?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="accuracy"
              value="accurate"
              checked={form.accuracy === 'accurate'}
              onChange={handleChange}
            />
            Accurate
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="accuracy"
              value="inaccurate"
              checked={form.accuracy === 'inaccurate'}
              onChange={handleChange}
            />
            Inaccurate
          </label>
        </div>
      </div>

      {/* Optional Text Feedback */}
      <div>
        <label className="block mb-1 sm:font-semibold sm:text-lg font-medium text-gray-700">Other Feedback ( Optional* )</label>
        <textarea
          name="feedback"
          value={form.feedback}
          onChange={handleChange}
          rows={4}
          placeholder="Write your thoughts here..."
          className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Star Rating */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">Overall Rating</label>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={28}
              onMouseEnter={() => setHoveredStar(i)}
              onMouseLeave={() => setHoveredStar(null)}
              onClick={() => handleRatingClick(i)}
              className={`cursor-pointer ${
                (hoveredStar !== null ? i <= hoveredStar : i < form.rating)
                  ? 'fill-yellow-400 stroke-yellow-400'
                  : 'stroke-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full my-6 text-lg font-semibold sm:text-xl sm:font-bold bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default UserFeedbackForm;
