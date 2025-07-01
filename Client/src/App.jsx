import { useEffect , useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import UserForm from './Forms/SignUp'
import ChangePasswordForm from './Forms/ChangePassword'
import LoginForm from './Forms/LogIn'
import ForgotPasswordForm from './Forms/ForgotPassword'
import SearchAddress from './Forms/Address'
import TodoAccordion from './Home/DisplayTodo'
import Home from './Home/Home'
import CropForm from './Forms/CropDetail'
import UserProfilePage from './User/YouPage'
import LikesPage from './User/LikePage'
import DislikedVideosPage from './User/DislikePage'
import DownloadsPage from './User/Downloads'
import UserFeedbackForm from './User/UserFeedback'
import VideoFeedbackForm from './User/VideoFeed'
import BottomNavBar from './Navigation/BottomNav.jsx'
import AllRoute from './Navigation/Routes.jsx'
import { UserProvider } from './Context/UserContext'
import UpdateContact from './Forms/UpdateContact'
import UpdateDetails from './Forms/UpdateUser'
import { Toaster, toast } from 'react-hot-toast';


// toast.success('Profile updated!')
// toast.error('Something went wrong!')
// toast.promise(apiCall(), {
//   loading: 'Saving...',
//   success: 'Saved successfully!',
//   error: 'Save failed!',
// });


function App() {
  const [count, setCount] = useState(0)
  const [hi ,onVerify] = useState();

  return (
    <>
    <UserProvider>
      <Toaster position="top-center" revverseOrder={false} />
      {/* <UpdateDetails/> */}
    <AllRoute/>
    {/* <UserProfilePage/> */}
    {/* <VideoFeedbackForm/> */}
    {/* <BottomNavBar/> */}
    {/* <DownloadsPage/> */}
    {/* <TodoAccordion /> */}
    {/* <DislikedVideosPage/> */}
    {/* <UserForm/> */}
    {/* <ChangePasswordForm/> */}
    {/* <LoginForm/> */}
    {/* <ForgotPasswordForm/> */}
  
    {/* <div className="neon-red rounded-lg p-6 mt-10 text-3xl bg-red-500 border border-red-300 text-white/80 font-bold">
      Kishan Mitr
    </div> */}
    </UserProvider>
    </>

  )
}

export default App;


// function App() {
//   const [msg, setMsg] = useState('');
//   const [response, setResponse] = useState('');

//   const Handle = async () => {
//     try {
//       const res = await fetch('http://localhost:5000/test', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: msg }),
//       });
//       const data = await res.json();
//       setResponse(data.message);
//     } catch (error) {
//       setResponse('Error connecting to server');
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter Your message"
//         className="p-2 rounded-2xl w-full text-lg"
//         value={msg}
//         onChange={(e) => setMsg(e.target.value)}
//       />
//       <button
//         className="p-2 w-[50vw] text-lg font-bold bg-amber-500 text-white"
//         onClick={Handle}
//       >
//         send message
//       </button>
//       {response && <div className="mt-4">{response}</div>}
//     </div>
//   );
// }


// export default App

// import React, { useEffect, useState } from 'react';

// const PlaceDetailsViewer = () => {
//   const accessToken = 'ee287c1a53dc92e27751abf2375968ef'; // Replace with your valid MapmyIndia access token
//   const [eloc, setEloc] = useState('');
//   const [sdkReady, setSdkReady] = useState(false);

//   useEffect(() => {
//     let interval;
//     const scriptId = 'mappls-getpin-sdk';

//     if (!window?.Mappls?.getPinDetails) {
//       if (!document.getElementById(scriptId)) {
//         const script = document.createElement('script');
//         script.src = `https://apis.mappls.com/advancedmaps/api/${accessToken}/map_sdk_plugins?v=3.0&libraries=getPinDetails`;
//         script.id = scriptId;
//         script.async = true;
//         document.body.appendChild(script);
//       }
//       interval = setInterval(() => {
//         if (window?.Mappls?.getPinDetails) {
//           clearInterval(interval);
//           setSdkReady(true);
//           console.log('✅ Mappls getPinDetails SDK loaded');
//         }
//       }, 300);
//     } else {
//       setSdkReady(true);
//     }

//     return () => {
//       if (interval) clearInterval(interval);
//     };
//   }, []); // Empty array since accessToken is a constant in this scope

//   const handleGetDetails = () => {
//     const pin = eloc.trim();
//     if (!pin) return alert('Please enter a valid eLoc.');
//     if (!sdkReady || !window?.Mappls?.getPinDetails) {
//       return alert('SDK not ready yet.');
//     }

//     window.Mappls.getPinDetails(
//       {
//         pin,
//         markerPopup: true,
//         infoDiv: true,
//         divId: 'place-info',
//       },
//       (pinObj) => {
//         console.log('📍 Details:', pinObj);
//         // Optionally customize popup or div
//         // pinObj.setPopup({ content: "<h1>Hello Mappls</h1>" });
//       }
//     );
//   };

//   return (
//     <div className="w-full max-w-xl mx-auto p-4">
//       <h2 className="text-xl font-bold mb-4">🔍 Place Details Viewer (MapmyIndia eLoc)</h2>

//       <input
//         type="text"
//         placeholder="Enter eLoc (e.g., MMI000)"
//         value={eloc}
//         onChange={(e) => setEloc(e.target.value)}
//         className="border border-gray-400 rounded p-2 w-full mb-3"
//       />

//       <button
//         onClick={handleGetDetails}
//         className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
//         disabled={!sdkReady}
//       >
//         {sdkReady ? 'Get Place Details' : 'Loading SDK...'}
//       </button>

//       <div id="place-info" className="border mt-5 p-4 bg-white rounded shadow min-h-[200px]">
//         {/* SDK will render place details here */}
//       </div>
//     </div>
//   );
// };

// export default PlaceDetailsViewer;



// import React, { useEffect, useRef, useState } from 'react';

// const MapWithPlaceDetails = () => {
//   const accessToken = 'ee287c1a53dc92e27751abf2375968ef'; // 🔁 Replace with your valid Mappls access token
//   const mapRef = useRef(null);
//   const mapInstance = useRef(null);
//   const [sdkReady, setSdkReady] = useState(false);
//   const [eloc, setEloc] = useState('');

//   useEffect(() => {
//     const loadSDKs = () => {
//       const scriptId1 = 'map-sdk';
//       const scriptId2 = 'map-plugin';

//       if (!document.getElementById(scriptId1)) {
//         const script1 = document.createElement('script');
//         script1.src = `https://apis.mappls.com/advancedmaps/api/${accessToken}/map_sdk?layer=vector&v=3.0&callback=initMap`;
//         script1.id = scriptId1;
//         script1.async = true;
//         document.body.appendChild(script1);
//       }

//       if (!document.getElementById(scriptId2)) {
//         const script2 = document.createElement('script');
//         script2.src = `https://apis.mappls.com/advancedmaps/api/${accessToken}/map_sdk_plugins?v=3.0`;
//         script2.id = scriptId2;
//         script2.async = true;
//         document.body.appendChild(script2);
//       }

//       window.initMap = () => {
//         mapInstance.current = new window.mappls.Map(mapRef.current, {
//           center: [28.61, 77.23],
//           zoom: 5,
//         });

//         mapInstance.current.addListener('load', () => {
//           console.log('🗺️ Map loaded');
//           setSdkReady(true);
//         });
//       };
//     };

//     loadSDKs();
//   }, []);

//   const handleGetDetails = () => {
//     if (!sdkReady || !window.mappls?.getPinDetails) {
//       alert('Map SDK not ready yet!');
//       return;
//     }

//     const pin = eloc.trim();
//     if (!pin) {
//       alert('Please enter a valid eLoc');
//       return;
//     }

//     window.mappls.getPinDetails(
//       {
//         map: mapInstance.current,
//         pin,
//         infoDiv: false,
//       },
//       (res) => {
//         console.log('📍 Place Details Response:', res);
//         if (res?.fitbounds) {
//           res.fitbounds({ maxZoom: 16 });
//         }
//       }
//     );
//   };

//   return (
//     <div className="w-full h-screen">
//       <div className="p-4 bg-white shadow-md z-10 relative">
//         <h2 className="text-xl font-semibold mb-2">🔍 Search Place by eLoc</h2>
//         <input
//           type="text"
//           placeholder="Enter eLoc (e.g., SSBSAT)"
//           value={eloc}
//           onChange={(e) => setEloc(e.target.value)}
//           className="border border-gray-400 rounded p-2 w-64 mr-2"
//         />
//         <button
//           onClick={handleGetDetails}
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//           disabled={!sdkReady}
//         >
//           Get Details
//         </button>
//       </div>

//       <div
//         ref={mapRef}
//         id="map"
//         className="w-full h-full"
//         style={{ height: 'calc(100vh - 100px)', marginTop: '10px' }}
//       />
//     </div>
//   );
// };

// export default MapWithPlaceDetails;

// import React, { useEffect, useRef, useState } from 'react';

// const MapWithInfoDiv = () => {
//   const accessToken = 'ee287c1a53dc92e27751abf2375968ef'; // Replace with your valid Mappls token
//   const mapRef = useRef(null);
//   const mapInstance = useRef(null);
//   const [eloc, setEloc] = useState('');
//   const [sdkReady, setSdkReady] = useState(false);

//   useEffect(() => {
//     const loadMapSDKs = () => {
//       const scriptId1 = 'mappls-map-sdk';
//       const scriptId2 = 'mappls-plugin-sdk';

//       if (!document.getElementById(scriptId1)) {
//         const mapScript = document.createElement('script');
//         mapScript.src = `https://apis.mappls.com/advancedmaps/api/${accessToken}/map_sdk?layer=vector&v=3.0&callback=initMap`;
//         mapScript.id = scriptId1;
//         mapScript.async = true;
//         document.body.appendChild(mapScript);
//       }

//       if (!document.getElementById(scriptId2)) {
//         const pluginScript = document.createElement('script');
//         pluginScript.src = `https://apis.mappls.com/advancedmaps/api/${accessToken}/map_sdk_plugins?v=3.0`;
//         pluginScript.id = scriptId2;
//         pluginScript.async = true;
//         document.body.appendChild(pluginScript);
//       }

//       window.initMap = () => {
//         mapInstance.current = new window.mappls.Map(mapRef.current, {
//           center: [28.09, 78.3],
//           zoom: 5,
//         });

//         mapInstance.current.addListener('load', () => {
//           console.log('✅ Map initialized');
//           setSdkReady(true);
//         });
//       };
//     };

//     loadMapSDKs();
//   }, []);

//   const handleGetPlaceInfo = () => {
//     if (!sdkReady || !window.mappls?.getPinDetails) {
//       alert('SDK is not ready yet!');
//       return;
//     }

//     const pin = eloc.trim();
//     if (!pin) return alert('Enter a valid eLoc');

//     const placeObj = window.mappls.getPinDetails(
//       {
//         map: mapInstance.current,
//         pin,
//         infoDiv: true,
//       },
//       (data) => {
//         console.log('📍 Full place details:', data);

//         // ✅ Extracting lat/lng from marker object
//         const marker = data?.marker;

//         // Option 1: Direct method (recommended, if supported)
//         const latLng = marker?.getPosition?.();
//         if (latLng) {
//           console.log('✅ Latitude:', latLng.lat);
//           console.log('✅ Longitude:', latLng.lng);
//         }

//         // Option 2: Deep access fallback (for some SDK versions)
//         else if (marker?.obj?._lngLat) {
//           console.log('✅ Latitude:', marker?.obj?._lngLat.lat);
//           console.log('✅ Longitude:', marker?.obj?._lngLat.lng);
//         }

//         // Fit the map bounds if applicable
//         if (data?.fitbounds) {
//           data.fitbounds({ maxZoom: 16 });
//         }
//       }
//     );

//     // Optional: store placeObj to call .remove() or .setPopup() later
//   };

//   return (
//     <div className="w-full h-screen">
//       <div className="absolute z-10 p-4 bg-white shadow-md m-4 rounded-md">
//         <h2 className="text-xl font-semibold mb-2">📍 Place Details with InfoDiv</h2>
//         <input
//           type="text"
//           placeholder="Enter eLoc (e.g., SSBSAT)"
//           value={eloc}
//           onChange={(e) => setEloc(e.target.value)}
//           className="border border-gray-300 p-2 rounded w-64 mr-2"
//         />
//         <button
//           onClick={handleGetPlaceInfo}
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//           disabled={!sdkReady}
//         >
//           {sdkReady ? 'Get Details' : 'Loading SDK...'}
//         </button>
//       </div>

//       <div
//         ref={mapRef}
//         id="map"
//         className="w-full h-full"
//         style={{ height: '100vh' }}
//       />
//     </div>
//   );
// };

// export default MapWithInfoDiv;


// import React, { useState } from 'react';

// const ReverseGeocodeExample = () => {
//   const accessToken = "ee287c1a53dc92e27751abf2375968ef";
//   const [coords, setCoords] = useState({ lat: 28.631453, lng: 77.227226 });
//   const [address, setAddress] = useState(null);

//   const fetchAddress = () => {
//     const { lat, lng } = coords;
//     const url = `https://apis.mapmyindia.com/advancedmaps/v1/${accessToken}/rev_geocode?lat=${lat}&lng=${lng}`;

//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         if (data.results && data.results.length > 0) {
//           setAddress(data.results[0].formatted_address || JSON.stringify(data.results[0]));
//         } else {
//           setAddress('No address found');
//         }
//         console.log('📍 Full response:', data);
//       })
//       .catch(err => {
//         console.error('❌ Reverse geocode error:', err);
//         setAddress('Error occurred');
//       });
//   };

//   return (
//     <div>
//       <h2>Reverse Geocode</h2>
//       <p>
//         Coordinates: {coords.lat}, {coords.lng}
//       </p>
//       <button onClick={fetchAddress}>Get Address</button>
//       {address && <p><strong>Address:</strong> {address}</p>}
//     </div>
//   );
// };

// export default ReverseGeocodeExample;

// import React, { useEffect, useRef, useState } from 'react';

// const HiddenMapElocToLatLng = () => {
//   const accessToken = 'ee287c1a53dc92e27751abf2375968ef'; // Replace with your Mappls token
//   const mapRef = useRef(null);
//   const mapInstance = useRef(null);
//   const [eloc, setEloc] = useState('');
//   const [sdkReady, setSdkReady] = useState(false);

//   useEffect(() => {
//     const scriptId1 = 'mappls-map-sdk';
//     const scriptId2 = 'mappls-plugin-sdk';

//     if (!document.getElementById(scriptId1)) {
//       const mapScript = document.createElement('script');
//       mapScript.src = `https://apis.mappls.com/advancedmaps/api/${accessToken}/map_sdk?layer=vector&v=3.0&callback=initMap`;
//       mapScript.id = scriptId1;
//       mapScript.async = true;
//       document.body.appendChild(mapScript);
//     }

//     if (!document.getElementById(scriptId2)) {
//       const pluginScript = document.createElement('script');
//       pluginScript.src = `https://apis.mappls.com/advancedmaps/api/${accessToken}/map_sdk_plugins?v=3.0&libraries=getPinDetails`;
//       pluginScript.id = scriptId2;
//       pluginScript.async = true;
//       document.body.appendChild(pluginScript);
//     }

//     window.initMap = () => {
//       mapInstance.current = new window.mappls.Map(mapRef.current, {
//         center: [28.61, 77.23],
//         zoom: 5,
//       });

//       mapInstance.current.addListener('load', () => {
//         console.log('✅ Hidden map loaded');
//         setSdkReady(true);
//       });
//     };
//   }, []);

//   const handleGetLatLng = () => {
//     const pin = eloc.trim();
//     if (!pin) return alert('Please enter a valid eLoc');
//     if (!sdkReady || !window.mappls?.getPinDetails) return alert('SDK is not ready');

//     const obj = window.mappls.getPinDetails(
//       {
//         map: mapInstance.current,
//         pin,
//       },
//       (data) => {
//         console.log('📍 Full Place Details:', data);
//         const marker = data?.marker;

//         // Safely extract lat/lng
//         if (marker?.obj?._lngLat) {
//           console.log('✅ Latitude:', marker.obj._lngLat.lat);
//           console.log('✅ Longitude:', marker.obj._lngLat.lng);
//         } else {
//           console.warn('❌ Could not extract lat/lng');
//         }
//       }
//     );
//   };


//   return (
//     <div className="p-4 max-w-xl mx-auto">
//       <h2 className="text-xl font-bold mb-4">📍 Get Coordinates from eLoc</h2>
//       <input
//         type="text"
//         placeholder="Enter eLoc (e.g., 3F45CB)"
//         value={eloc}
//         onChange={(e) => setEloc(e.target.value)}
//         className="border border-gray-400 rounded p-2 w-full mb-3"
//       />
//       <button
//         onClick={handleGetLatLng}
//         className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
//         disabled={!sdkReady}
//       >
//         {sdkReady ? 'Get Lat/Lng' : 'Loading SDK...'}
//       </button>

//       {/* Hidden Map Element */}
//       <div
//         ref={mapRef}
//         id="hidden-map"
//         style={{
//           width: '0px',
//           height: '0px',
//           visibility: 'hidden',
//           position: 'absolute',
//         }}
//       />
//     </div>
//   );
// };

// export default HiddenMapElocToLatLng;


// import React, { useState } from 'react';




// import React, { useEffect, useState } from 'react';
// import ReactCodeInput from 'react-code-input';








