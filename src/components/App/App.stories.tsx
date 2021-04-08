import { Meta, Story } from "@storybook/react";
import React from "react";

import { App, AppProps } from "./App";

export default {
  title: "Pages/App",
  component: App,
  argTypes: {}
} as Meta;

const Template: Story<AppProps> = (props) => <App {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Boilerplate"
};
