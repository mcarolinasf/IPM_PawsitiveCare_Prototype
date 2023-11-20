import { DeviceDeviceFrame } from ".";

export default {
  title: "Components/DeviceDeviceFrame",
  component: DeviceDeviceFrame,
  argTypes: {
    component: {
      options: ["navigation", "status-bar"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    component: "navigation",
    className: {},
  },
};
