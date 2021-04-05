import React from "react";
import { Story, Meta } from "@storybook/react";

import { App } from "./App";

export default {
  title: "Pages/App",
  component: App,
  argTypes: {}
} as Meta;

const Template: Story = () => <App />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "App"
};
