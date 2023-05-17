import React from "react";


import {InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
        <InfinitySpin 
        width='200'
        color="#4fa94d"
        timeout ="1000"
    
        
        />
    </div>
  );
};

export default Loader;
