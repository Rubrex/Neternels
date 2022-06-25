import React from "react";
import Home from "./Home";
import OurTeam from "./OurTeam";
import RequestKernel from "./RequestKernel";
import SupportedDevices from "./SupportedDevices/SupportedDevices";
import { Routes, Route } from "react-router-dom";
const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/requestkernel" element={<RequestKernel />} />
        <Route path="/supporteddevices" element={<SupportedDevices />} />
      </Routes>
    </div>
  );
};

export default Body;
