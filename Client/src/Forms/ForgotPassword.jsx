import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'; 
// import { toast } from 'react-hot-toast';
// import {  useForgotPasswordMutation } from '../../RTKQuery/AppApi.jsx';


const ForgotPasswordForm = () => {

  const [errors, setErrors] = useState({});
  const [showNewPassword ,setShowNewPassword] = useState(false);
  

  const [phone , setPhone] = useState('');
  const [newPassword , setPassword] = useState('')
  const navigate = useNavigate(); 
  const strength = getPasswordStrength(newPassword);
  const validate = () => {
   const newErrors = {};
   if (!phone) newErrors.phone = 'Phone is required';
   if (!newPassword) newErrors.newPassword = 'New password is required';
   return newErrors;
 };

  // const [forgotPassword] = useForgotPasswordMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if(!phone || !newPassword){
      setErrors(validationErrors);
      return;
    }
    // try {
      // await forgotPassword({ phone, newPassword }).unwrap();
      // toast.success('Password Reset Sucessfully!')
      // navigate('/'); 
    // } catch (err) {
      // console.log(err); 
    // }
  }

  return (
    <div className="flex justify-center min-h-screen pt-24 pb-42 bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Reset Password</h2>

        {/* Phone */}
        <div className="mb-6">
          <label className="block text-left text-gray-700 mb-1">Phone*</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* New Password */}
        <div className="mb-6 relative">
          <label className="block text-left text-gray-700 mb-1">New Password*</label>
          <input
            type={showNewPassword ? 'text' : 'password'}
            name="newPassword"
            onChange={(e) => {setPassword(e.target.value)}} value={newPassword}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-3 top-[38px] text-gray-600 hover:text-blue-600"
          >
            {showNewPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>

          {/* Password Strength */}
          <div className="mb-4">
            {newPassword && (
              <p className={`text-sm font-medium ${strength.color}`}>
                Strength: {strength.label}
              </p>
            )}
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
            )}
          </div>

        </div>

        <button
          type="submit"
          className="w-full text-xl font-bold bg-blue-600 text-white py-2 my-6 rounded hover:bg-blue-700 transition"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

const getPasswordStrength = (password) => {
  if (password.length < 6) return { label: 'Too short', color: 'text-red-500' };
  if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/))
    return { label: 'Strong', color: 'text-green-600' };
  if (password.match(/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/))
    return { label: 'Moderate', color: 'text-yellow-600' };
  return { label: 'Weak', color: 'text-red-500' };
};

export default ForgotPasswordForm;
