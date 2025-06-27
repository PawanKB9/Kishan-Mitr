import React, { useEffect, useRef } from 'react';

const SearchAddress = () => {
  const searchInputRef = useRef(null);

  useEffect(() => {
    // Load Mappls Plugin Script
    const scriptPlugin = document.createElement('script');
    scriptPlugin.src = `https://apis.mappls.com/advancedmaps/api/ee287c1a53dc92e27751abf2375968ef/map_sdk_plugins?v=3.0`;
    scriptPlugin.async = true;
    document.body.appendChild(scriptPlugin);

    scriptPlugin.onload = () => {
      const optionalConfig = {
        region: 'IND',
        height: 300,
      };

      new window.mappls.search(searchInputRef.current, optionalConfig, callback);

      function callback(data) {
        alert('Search Result: ' + JSON.stringify(data, null, 2));
        // console.log('Search Result:', data);
      }
    };

    return () => {
      // Cleanup the script element on unmount
      document.body.removeChild(scriptPlugin);
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        id="auto"
        ref={searchInputRef}
        className="search-outer mb-4 form-control as-input w-full p-3 border border-gray-300 rounded-[10px]"
        placeholder="Enter Your Address"
        required
        spellCheck="false"
      />
    </div>
  );
};

export default SearchAddress;