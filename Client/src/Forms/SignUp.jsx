import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'; // Heroicons
import SearchAddress from './Address';
import '../../src/App.css'

//  const HandleSignup = async (e) => {
//     e.preventDefault();
//     if (!name || !phone || !password || !address) {
//       alert("Fill all the required fields");
//       return;
//     }

//     try {
//       await signUp({ name, phone, password, address }).unwrap();
//       setName('');
//       setNickName('');
//       setPassword('');
//       setPhone('');
//       setAddress(''); // or setAddress({}) based on actual data type

//       console.log(signupData);
//       navigate("/complete-profile");
//     } catch (err) {
//       console.log(err);
//     }
//   };

const SignUp = () => {

  const [name ,setName] = useState('hjfks');
  const [password ,setPassword] = useState('jkdc');
  const [phone ,setPhone] = useState('fgvfgv');
  const [description ,setDescription] = useState("Hi there! I'm using D2DL");

  const [errors, setErrors] = useState({});
  const [showPassword ,setShowPassword] = useState(false)

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!password) newErrors.password = 'Password is required';
    if (!phone) newErrors.phone = 'Phone is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (!name || !password || !phone) {
      setErrors(validationErrors);
      return;
    }

    // Handle submit logic here
  };

  return (
    <div className="flex justify-center py-16 min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-left text-gray-700 mb-1">Name*</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) =>setName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Password */}
        <div className="mb-4  relative">
          <label className="block text-left text-gray-700 mb-1">Password*</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[38px] text-gray-600 hover:text-blue-500"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-left text-gray-700 mb-1">Phone*</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) =>setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-left text-gray-700 mb-1">Address*</label>
          <SearchAddress/>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-xl font-bold bg-blue-600 border  text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>

        {/* Login Link */}
        <div className="mt-6 text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 text-lg font-bold hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

