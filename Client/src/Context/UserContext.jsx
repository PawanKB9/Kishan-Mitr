// import React from "react";
// import { createContext , useContext , useState } from "react";

// export const UserContext = createContext({
    
// }) 

// export const UserProvider = ({ children }) => {
//     const [address ,setAddress] = useState({});
//     const [location ,setLocation] = useState({})

//     return (
//         <UserContext.Provider value={{ address, setAddress ,location ,setLocation }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export default function useUser() {
//     return useContext(UserContext)
// }

// userContext.js
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [location, setLocation] = useState(null);

  return (
    <UserContext.Provider value={{ location, setLocation }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
