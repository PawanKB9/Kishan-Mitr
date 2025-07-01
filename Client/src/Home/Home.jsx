import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLazyGetCurrentUserQuery } from '../RTK Query/UserApi';
import { useSelector } from 'react-redux';
import { selectGetCurUserResult } from '../RTK Query/Selectors';

const Home = () => {
  const currUserData = useSelector((state) => selectGetCurUserResult(state)?.data );
  const [getCurUser , {data}] = useLazyGetCurrentUserQuery();
  useEffect(() =>{
    if( !userData){
       getCurUser(); 
    } 
  }, [] ); 
  const userData = currUserData || data;

  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();
  const handleAddCrop = () => {
    // This could open a modal or navigate to a crop form page
    alert('Add Crop clicked!');
  };

  return (
    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-12 py-8 md:mt-12 bg-gray-50 flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-green-700">
        Welcome to Smart Farmer Assistant
      </h1>

      <button
        onClick={()=>navigate('/addcrop')}
        className="mb-4 w-[50%] max-w-[400px] sm:text-lg sm:font-bold  py-2 text-white font-semibold bg-green-500 rounded-lg hover:bg-green-700 transition"
      >
        Add Crop
      </button>

      {todos.length === 0 ? (
        <>
        <div className="max-w-4xl my-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md">
          <p className="font-semibold text-center text-lg sm:text-xl mb-2">Note : </p>
          <p className="">
            The suggestions shown here are AI-generated and may not be fully accurate. Always consult local agricultural experts for critical decisions.
          </p>
        </div>

        <div className='flex flex-col md:flex-row md:gap-6 max-w-4xl'>
          <div className="max-w-3xl flex-1 my-6  bg-green-100 border-l-4 border-green-500 text-green-800 p-4 rounded-md">
            <p className="font-semibold text-lg text-center sm:text-xl mb-2">On Adding Crops</p>
            <p className="">
              Add Your crop details to get latest suggetions , what to do like - when You have to add fertiliser , irrigation , suppliments like ( Zinc , Sulphur ) , all other details that are helpful for Farmers. Inorder to get high yield You can fllow the conditions.
            </p>
          </div>

          <div className="max-w-4xl my-6 flex-1 bg-green-100 border-l-4 border-green-500 text-green-800 p-4 rounded-md">
            <p className="font-semibold text-lg sm:text-xl mb-2 text-center">What You have to do ?</p>
            <p className="">
              Click on <span className='bg-green-300 font-serif p-1 rounded px-2 text-gray-950'> Add Crop </span> button and fill these details:
            </p>
            <p>
              1. Crop Name <br /> 2. Date of Seeding <br /> 3. Area of Field  <br /> 4. Optionally You Can Provide Soil Condition (This Input is not mendetory You Can Skip it)
            </p>
          </div>
        </div>

        <div className="max-w-4xl my-6 bg-green-50 border-l-4 border-green-500 p-6 rounded-lg shadow-sm">
          <h2 className="text-green-800 text-xl font-semibold mb-3">🌿 Help Us Grow</h2>
          
          <p className="text-green-700 mb-4">
            Support us and many farmers with your accurate suggestions for a better tomorrow. Your Suggetions will improve to get accurate results
          </p>
          
          <button onClick={()=>navigate('/feedback')}
            className="text-lg w-full bg-green-500 border border-green-600 text-white font-semibold py-2 px-4 rounded-md transition-colors hover:bg-green-600" >
            ✍️ Give Feedback
          </button>
        </div>        

        </>
      ) : (
        // Your accordion or list of todos goes here
        <p className="text-gray-600">You have {todos.length} crops added.</p>
      )}
    </div>
  );
};

export default Home;
