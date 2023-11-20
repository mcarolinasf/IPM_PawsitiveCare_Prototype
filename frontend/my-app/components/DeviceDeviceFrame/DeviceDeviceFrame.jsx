/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DeviceDeviceFrame = ({ component, className }) => {
  return (
    <div className={`device-device-frame ${component} ${className}`}>
      {component === "status-bar" && (
        <>
          <div className="time">9:30</div>
          <div className="right-icons">
            <div className="overlap">
              <div className="div">
                <div className="overlap-group">
                  <img className="div" alt="Path" src="/img/path-1.svg" />
                </div>
                <div className="div">
                  <img className="path" alt="Path" src="/img/path-5.svg" />
                </div>
              </div>
              <img className="signal" alt="Signal" src="/img/signal-1.png" />
            </div>
            <img className="battery" alt="Battery" src="/img/battery-1.svg" />
          </div>
        </>
      )}

      {component === "navigation" && <div className="home" />}
    </div>
  );
};

DeviceDeviceFrame.propTypes = {
  component: PropTypes.oneOf(["navigation", "status-bar"]),
};
