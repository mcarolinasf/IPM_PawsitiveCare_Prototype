import React from "react";
import styled from "styled-components";
import { DeviceDeviceFrame } from "./DeviceDeviceFrame";
import { DeviceDeviceFrameWrapper } from "./DeviceDeviceFrameWrapper";
import { Group } from "./Group";
import { Overlap } from "./Overlap";
import { OverlapGroup } from "./OverlapGroup";
import { OverlapWrapper } from "./OverlapWrapper";
import { ProfilePicture } from "./ProfilePicture";
import { TodoS } from "./TodoS";

const StyledCalendarSwipe = styled.div`
  background-color: #e3e3e3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  .div-3 {
    background-color: #e3e3e3;
    height: 892px;
    overflow: hidden;
    position: relative;
    width: 412px;
  }

  .back {
    height: 41px;
    left: 22px;
    position: absolute;
    top: 56px;
    width: 46px;
  }

  .profile-picture-instance {
    background-image: url(./profile-picture.png);
    background-position: 50% 50%;
    background-size: cover;
    height: 40px;
    left: 352px;
    position: absolute;
    top: 57px;
    width: 40px;
  }

  .device-device-frame-components {
    background-color: #ffffff;
    left: 0;
    position: fixed;
    top: 864px;
  }
`;

export const CalendarSwipe = () => {
  return (
    <StyledCalendarSwipe>
      <div className="div-3">
        <img className="back" alt="Back" src="back.png" />
        <ProfilePicture className="profile-picture-instance" />
        <Overlap />
        <Group />
        <OverlapGroup />
        <OverlapWrapper />
        <TodoS />
        <DeviceDeviceFrame className="device-device-frame-components" component="navigation" />
        <DeviceDeviceFrameWrapper />
      </div>
    </StyledCalendarSwipe>
  );
};