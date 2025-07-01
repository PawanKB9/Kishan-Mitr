import React, { useState } from 'react';

const CropForm = () => {

  const [cropName ,setCropName] = useState('');
  const [seedingDate ,setSeedingDate] = useState('');
  // const [soilCondition ,setSoilCondition] = useState('');
  const [area ,setArea] = useState('');
  const [soilCondition ,setSoilCondition] = useState('');
  const [formData, setFormData] = useState({
    cropName: '',
    seedingDate: '',
    area: '',
    soilCondition: '',
    unit: 'Acres/Hectares',
  });
//  1 Bissa ≈ 125 m²
//  1 Bigha  ≈ 2,500 m²


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto md:mt-16 bg-white p-6 rounded-lg shadow-md space-y-6"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-green-700 text-center">
        🌾 Crop Details
      </h2>

      {/* Crop Name */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Crop Name</label>
        <input type="text" name="cropName" value={cropName} onChange={handleChange}
          placeholder="Enter crop name"
          className="w-full sm:text-lg p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          required />
      </div>

      {/* Date of Seeding */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Date of Seeding</label>
        <input type="date" name="seedingDate" value={seedingDate}
          onChange={handleChange} required
          className="w-full sm:text-lg p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
      </div>

      {/* Area with Unit Select */}
      <div className="relative">
        <label className="block mb-1 font-medium text-gray-700">
          Area of Field
        </label>
        <input type="text" name="area" value={area} onChange={handleChange}
          placeholder="Enter area" required
          className="w-full sm:text-lg p-2 pr-32 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
       
        <select name="unit" value={unit}  onChange={handleChange}
          className="absolute right-0 sm:text-base  bg-white text-sm border border-gray-300 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-green-400" >
          <option value="Bissa">Bissa</option>
          <option value="Bigha">Bigha</option>
          <option value="Meter Sq">Meter Sq</option>
          <option value="Acres/Hectares">Acres/Hectares</option>
        </select>
      </div>

      {/* Optional Soil Condition */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Soil Condition <span className="text-sm text-gray-500">(optional)</span>
        </label>
        <textarea name="soilCondition" value={soilCondition} onChange={handleChange} rows={3}
          placeholder="Describe soil condition, e.g. sandy with good drainage, slightly acidic"
          className="w-full sm:text-lg p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-400" />
      </div>

      {/* Submit Button */}
      <button type="submit"
        className="w-full text-lg sm:font-bold bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition-colors" >
        Submit Details
      </button>
    </form>
  );
};

export default CropForm;
