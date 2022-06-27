import React from "react";
import Home from "./Home";
import OurTeam from "./OurTeam";
import RequestKernel from "./RequestKernel";
import SupportedDevices from "./SupportedDevices/SupportedDevices";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const Body = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ourteam" element={<OurTeam />} />
          <Route exact path="/requestkernel" element={<RequestKernel />} />
          <Route
            exact
            path="/supporteddevices"
            element={<SupportedDevices />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default Body;
